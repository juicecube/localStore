# @mlz/Store

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/afd6f660b7ef4242a11acc1a067fc0be)](https://www.codacy.com/gh/juicecube/localStore?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=juicecube/localStore&amp;utm_campaign=Badge_Grade)

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

## TODO
1. indexDB
2. remove lodash.merge(it takes 54kb)
