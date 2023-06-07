# Web (Authentication frontend and APIs) : VUEJS

## Customize configuration

If you want to change api url you can change in /src/store/index.js
```javascript
import { createStore } from 'vuex'
// import 'dotenv/config';
// Create a new store instance.
export default createStore({
  state : { 
    apiUrl:"http://localhost:8000/api"
  },
  mutations: {

  },
  actions:{
    
  }
})
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
