# client

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Compile device component

```
npx vue-cli-service build --target lib --formats umd-min --no-clean --dest dist/devices/Light --name "Light.[chunkhash]" src/devices/Light.vue
```
