export class LocalStorage {
  public set(spec:{key:string; value:string}) {
    localStorage.setItem(spec.key, spec.value);
  }

  public get(key:string) {
    localStorage.getItem(key);
  }

  public update(spec:{key:string; value:string}) {
    const data = localStorage.getItem(spec.key);
  }

  public delete(key:string) {
    localStorage.removeItem(key);
  }
}
