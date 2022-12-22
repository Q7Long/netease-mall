import { createApp } from 'vue'
// 取消默认样式
// import './style.css'
import App from './App.vue'
import router from './router'

// iconfont图标库
import './assets/fonts/iconfont.css'
// flexible移动端自适应
import './assets/flexible'
// 样式重置
import './assets/reset.css'

let app = createApp(App)

import vant from 'vant'
import 'vant/lib/index.css'

app.use(router)

app.use(vant)

app.mount('#app')