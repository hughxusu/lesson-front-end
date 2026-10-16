// import { createApp } from 'vue'
// import TDesign from 'tdesign-vue-next'
// // import App from './a-mitt.vue'
// // import App from './b-model-1.vue'
// // import App from './b-model-2.vue'
// // import App from './b-model-3.vue'
// // import App from './b-model-4.vue'
// // import App from './b-model-5.vue'
// // import App from './c-attrs.vue'
// // import App from './c-provide.vue'
// // import App from './d-slot-1.vue'
// // import App from './d-slot-2.vue'
// // import App from './d-slot-3.vue'
// import App from './e-td-1.vue'

// const app = createApp(App)
// app.use(TDesign)
// app.mount('#app')

import { createApp } from 'vue'
import { Button as TButton } from 'tdesign-vue-next'
import App from './e-td-2.vue'

const app = createApp(App)
app.use(TButton)
app.mount('#app')
