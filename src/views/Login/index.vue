<template>
    <div>
        <!-- 顶部导航 -->
        <van-nav-bar :title="LoginStatus ? '登录' : '注册'" left-arrow @click-left="backPage">
            <template #right>
                <van-icon name="ellipsis" size="18" />
            </template>
        </van-nav-bar>
        <!-- logo -->
        <div class="logoimg">
            <img src="../../assets/logo.png" width="130" alt="">
        </div>
        <!-- 输入框 -->
        <div class="input">
            <van-form validate-trigger="onBlur">
                <van-cell-group inset>
                    <van-field v-model="username" name="手机号" label="手机号" placeholder="请输入手机号"
                        :rules="[{ required: true, message: '手机号请不要留空' }]" />
                    <van-field v-model="password" name="密码" label="密码" placeholder="请输入密码" type="password"
                        :rules="[{ required: true, message: '密码请不要留空' }]" />
                </van-cell-group>
            </van-form>
        </div>
        <!-- 图形验证码 -->
        <div class="verificationcode">
            <van-form validate-trigger="onBlur">
                <van-cell-group inset>
                    <van-field v-model="verificationcode" center clearable placeholder="请输入验证码，点击刷新验证码"
                        :rules="[{ required: true, message: '验证码请不要留空' }]">
                        <template #button>
                            <div @click="refreshCode">
                                <SIdentify :identifyCode="identifyCode" />
                            </div>
                        </template>
                    </van-field>
                </van-cell-group>
            </van-form>
        </div>
        <!-- 文字提示 -->
        <div class="tipsbox">
            <p @click="LoginStatus = !LoginStatus">{{ LoginStatus ? '立即注册' : '已有账号，立即登录' }}</p>
        </div>
        <!-- 提交按钮 -->
        <div class="subbtnbox">
            <van-button class="subbtn" type="primary" size="large" round color="#1baeae" @click="loginSubmit">{{
                    LoginStatus ? '登录' : '注册'
            }}</van-button>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { register, login } from '../../request/api'
import SIdentify from '../../components/SIdentify.vue';
import { showNotify } from 'vant';
let router = useRouter();
// 收集用户名密码
let username = ref('');
let password = ref('');
// 收集验证码
let verificationcode = ref('');
// 登录页状态，true为登录，false为注册
let LoginStatus = ref(true);

// 点击登录或者注册按钮
let loginSubmit = () => {
    if (LoginStatus.value) {
        console.log('登录了~');
    } else {
        register(username.value, password.value).then(res => {
            if (res.data.resultCode === 200) {
                console.log('注册成功！');
                showNotify({ type: 'success', message: '注册成功' });
            }
        })
    }
};

// 点击导航栏左侧按钮
let backPage = () => {
    router.back();
};

// 图形验证码
let identifyCodes = "1234567890";
let identifyCode = ref('3212');

const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
};

const makeCode = (o, l) => {
    for (let i = 0; i < l; i++) {
        identifyCode.value += o[
            randomNum(0, o.length)
        ];
    }
};

const refreshCode = () => {
    identifyCode.value = "";
    makeCode(identifyCodes, 4);
};

onMounted(() => {
    identifyCode.value = "";
    makeCode(identifyCodes, 4);
});
</script>

<style lang="less" scoped>
.logoimg {
    display: flex;
    justify-content: center;

    img {
        margin-top: 20px;
    }
}

.input {
    margin-top: 30px;
}

.subbtnbox {
    display: flex;
    justify-content: center;

    .subbtn {
        width: 80%;
    }
}

.tipsbox {
    margin: 0px 40px 20px 40px;

    p {
        font-size: 16px;
        color: #1989fa;
    }
}
</style>