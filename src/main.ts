import { createApp } from "vue";
import App from "./App.vue";
import VueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'
//import 'cesium/Build/Cesium/Widgets/widgets.css'

// import "~/styles/element/index.scss";

import ElementPlus from "element-plus";

// import all element css, uncommented next line
import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";

// If you want to use ElMessage, import it.
// import "element-plus/theme-chalk/src/message.scss"

const app = createApp(App);
app.use(ElementPlus);
app.use(VueCesium, {
    // cesiumPath 是指引用的Cesium.js路径，如
    //cesiumPath: './Cesium/Cesium.js',
    //cesiumPath: 'https://www.supermapol.com/earth/Build/Cesium/Cesium.js',
    cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
    // 使用Cesium ion的数据源需要到https://cesium.com/ion/申请一个账户，获取Access Token。不指定的话可能导致 CesiumIon 的在线影像、地形加载失败
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMDhkYTczYS1iMjhiLTQ1YjQtYWI4ZS1lZjFkMzRmNzU5YzQiLCJpZCI6NDQ0MDMsImlhdCI6MTYxNzk2MDA5N30.H55MYwd31wjvNKmYZmNdk2VtPRy9hujwrnnxgVXmPow',
})
app.mount("#app");
