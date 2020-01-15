type StoreType = 'localStorage'|'sessionStorage'|'cookieStorage'|'indexDB';

export class Store {
  private store:any;
  constructor(spec:{type:StoreType}) {
    this.store = '';
  }

  public set() {

  }
}
