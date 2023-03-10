import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

/*              <h1 v-if="graduated">{{ student }}</h1>
<h1 v-else>"They did not yet graduate"</h1>
<ul>
  <li v-for="animal in animals" :key="animal">{{ animal }}</li>
</ul>
<button @click="authState" v-if="loggedIn">Log Out</button>
<button @click="authState" v-else>Login</button>
<input type="text" placeholder="edit me" v-model="message">
<p>{{ message }}</p>
<input type="checkbox" id="jack" value="jack" v-model="checkedNames">
<label for="jack">jack</label>
<input type="checkbox" id="john" value="john" v-model="checkedNames">
<label for="john">john</label>
<input type="checkbox" id="mike" value="mike" v-model="checkedNames">
<label for="mike">mike</label>
<span>checkedNames: {{ checkedNames }}</span>
<select v-model="selected">
  <option>a</option>
  <option>b</option>
  <option>c</option>
</select>
<span>{{ selected }}</span>
<h2>{{ now }}</h2>  */