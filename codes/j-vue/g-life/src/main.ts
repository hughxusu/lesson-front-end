// import { createApp } from 'vue'
// // import App from './a-life.vue'
// // import App from './b-axios.vue'
// // import App from './c-nextTick-1.vue'
// // import App from './c-nextTick-2.vue'
// // import App from './d-hook.vue'
// // import App from './e-component-1.vue'
// // import App from './e-component-2.vue'
// import App from './f-directives-1.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import highlight from './directives/highlight'
import App from './f-directives-2.vue'

const app = createApp(App)
app.directive('highlight', highlight)
app.mount('#app')
