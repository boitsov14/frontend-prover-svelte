import { mount } from 'svelte'
import App from './App.svelte'
import '@picocss/pico/css/pico.classless.min.css'
import './app.css'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
