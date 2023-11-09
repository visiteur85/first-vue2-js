import { createApp } from 'vue'
import components from '@/components/UI';
import App from "./App";
import router from "@/router/router";
import VIntresection from "@/directives/VIntresection";
import VFocus from "@/directives/VFocus";

const app = createApp(App)

components.forEach(component=>{app.component(component.name, component)})
app.directive('intersection', VIntresection)
app.directive('focus', VFocus)

app.use(router).mount('#app')
