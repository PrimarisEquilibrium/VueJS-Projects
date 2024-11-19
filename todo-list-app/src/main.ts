import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css' // Global styling

// Font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faXmarkCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons"

library.add(faXmarkCircle, faCheckCircle)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
