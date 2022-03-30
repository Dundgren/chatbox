import { createApp } from "vue";
import { store } from "./store/ChatStore.js";
import App from "./App.vue";


const app = createApp(App);

app.use(store);
app.mount("#app");
