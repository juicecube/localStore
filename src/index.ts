import { LocalStorage } from './localStorage';
import { SessionStorage } from './sessionStorage';
import { CookieStorage } from './cookieStorage';
import { IndexDB } from './indexDB';

export { LocalStorage, SessionStorage, CookieStorage, IndexDB };

type StoresType = {
  'localStorage':LocalStorage;
  'sessionStorage':SessionStorage;
  'cookieStorage':CookieStorage;
  'indexDB':IndexDB;
};
type StoreKey = keyof StoresType;

type createType<T> = {type?:T; namespace?:string};

export default function createStore<T extends createType<StoreKey>>(spec?:T):T['type'] extends StoreKey ? StoresType[T['type']] : LocalStorage {
  const stores = {
    localStorage: LocalStorage,
    sessionStorage: SessionStorage,
    cookieStorage: CookieStorage,
    indexDB: IndexDB,
  };

  if (spec && spec.type && stores[spec.type]) {
    return new stores[spec.type]() as any;
  }
  return new LocalStorage() as any;
}
