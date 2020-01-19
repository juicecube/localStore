# @mlz/Store

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/17eb7a7e502d440ea5adce4a23aab165)](https://app.codacy.com/gh/juicecube/localStore?utm_source=github.com&utm_medium=referral&utm_content=juicecube/localStore&utm_campaign=Badge_Grade_Dashboard)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/17eb7a7e502d440ea5adce4a23aab165)](https://app.codacy.com/gh/juicecube/localStore?utm_source=github.com&utm_medium=referral&utm_content=juicecube/localStore&utm_campaign=Badge_Grade_Dashboard)

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