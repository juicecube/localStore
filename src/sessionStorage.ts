import { merge } from 'lodash-es';

import { strToObj, valToStr } from './util';

export class SessionStorage {
  public set(key:string, value:string|{[key:string]:any}) {
    sessionStorage.setItem(key, valToStr(value));
  }

  public get<T>(key:string):T {
    return strToObj(sessionStorage.getItem(key));
  }

  public update<T>(key:string, value:Partial<T>) {
    if (typeof value === 'object') {
      value = merge({}, this.get(key), value);
    }
    this.set(key, value);
  }

  public delete(key:string) {
    sessionStorage.removeItem(key);
  }
}
