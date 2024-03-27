import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import "primeflex/primeflex.css";
import router from "./router";

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import FloatLabel from "primevue/floatlabel";
import InputIcon from "primevue/inputicon";
import IconField from "primevue/iconfield";
import Message from "primevue/message";
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';




createApp(App).use(PrimeVue)
    .use(ToastService)
    .use(router)
    .component('InputText', InputText)
    .component('Button', Button)
    .component('FloatLabel', FloatLabel)
    .component('InputIcon', InputIcon)
    .component('IconField', IconField)
    .component('Message', Message)
    .component('Toast', Toast)
    .mount('#app')



