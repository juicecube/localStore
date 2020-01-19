import { merge } from 'lodash-es';

import { strToObj, valToStr } from './util';

type CookieSetParam<T = undefined> = {
  key:string;
  value:T extends undefined ? string|object : Partial<T>;
  domain:string;
  maxAge:string;
}
type Cookies = {
  [key:string]:string | undefined;
};

export class CookieStorage {
  public set(spec:CookieSetParam) {
    const { key, value, domain, maxAge } = spec;
    document.cookie = `${ key }=${ valToStr(value) }; domain=${ domain }; max-age=${ maxAge }; path=/`;
  }

  public get<T>(key:string):T {
    const reg = new RegExp(`(?:(?:^|.*;\\s*)${key}\\s*\\=\\s*([^;]*).*$)|^.*$`);
    const cookies = document.cookie.replace(reg, '$1');
    return strToObj(cookies[key]);
  }

  public update<T>(spec:CookieSetParam<T>) {
    let { value } = spec;
    if (typeof spec.value === 'object') {
      value = merge({}, this.get(spec.key), value);
    }
    this.set({ ...spec, ...{ value } });
  }

  public delete(key:string) {
    console.log(key);
  }
}
