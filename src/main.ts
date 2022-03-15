import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/base.css";
import axios from "axios";

const app = createApp(App);
app.config.globalProperties.$http = axios;
app.mount("#app");
