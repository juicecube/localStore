import * as merge from 'lodash.merge';

import { strToObj, valToStr } from './util';

export class LocalStorage {
  public set(key:string, value:string|object) {
    localStorage.setItem(key, valToStr(value));
  }

  public get<T>(key:string):T {
    return strToObj(localStorage.getItem(key));
  }

  public update<T>(key:string, value:Partial<T>) {
    if (typeof value === 'object') {
      value = merge({}, this.get(key), value);
    }
    this.set(key, value);
  }

  public delete(key:string) {
    localStorage.removeItem(key);
  }
}
