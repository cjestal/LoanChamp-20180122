# loanchamp

> backend

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For more information see the [docs for vueify](https://github.com/vuejs/vueify).


使用Vue.js框架所編寫,伺服器需使用反向代理,代理真實API地址.
若有更動伺服器位置請修改 src/services/constantService.js 參數為 hostName

反向代理請依照伺服器位置
反向代理 /v1 與 /api 這兩個路徑.