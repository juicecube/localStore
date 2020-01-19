# @mlz/Store
封装localStorage, sessionStorage, cookie, indexDB.

## 安装
``` js
npm i @mlz/store
```

## 使用
``` ts
import createStore from '@mlz/store';

const store = createStore({}); // 默认是localStorage, 通过type: 'sessionStorage'|'cookieStorage'|'indexDB'区分

store.set({a: 1});
store.update({a: 1});
store.delete('a');
store.get('a');
```