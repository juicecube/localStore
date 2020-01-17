declare type CookieSetParam<T = undefined> = {
  key:string;
  value:T extends undefined ? string | object : Partial<T>;
  domain:string;
  maxAge:string;
};
export declare class CookieStorage {
  set(spec:CookieSetParam):void;
  get<T>(key:string):T;
  update<T>(spec:CookieSetParam<T>):void;
  delete(key:string):void;
}
export declare class LocalStorage {
  set(key:string, value:string | object):void;
  get<T>(key:string):T;
  update<T>(key:string, value:Partial<T>):void;
  delete(key:string):void;
}
export declare class SessionStorage {
  set(key:string, value:string | {
      [key:string]:any;
  }):void;
  get<T>(key:string):T;
  update<T>(key:string, value:Partial<T>):void;
  delete(key:string):void;
}
export declare class IndexDB {
  set(key:string, value:string):void;
  get(key:string):string;
  delete(key:string):void;
}

declare type StoresType = {
  'localStorage':LocalStorage;
  'sessionStorage':SessionStorage;
  'cookieStorage':CookieStorage;
  'indexDB':IndexDB;
};
declare type StoreKey = keyof StoresType;
declare type createType<T> = {
  type?:T;
  namespace?:string;
};
export default function createStore<T extends createType<StoreKey>>(spec:T):T['type'] extends StoreKey ? StoresType[T['type']] : LocalStorage;


