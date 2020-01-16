import { createStore, CookieStorage } from '../src/index';

['localStorage', 'sessionStorage'].forEach((item:any) => {
  describe(item, () => {
    const localStore = createStore(item);
    it('string', () => {
      localStore.set('strTest', 'set string');
      expect(localStore.get('strTest')).toEqual('set string');
      localStore.update('strTest', 'update string');
      expect(localStore.get('strTest')).toEqual('update string');
      localStore.delete('strTest');
      expect(localStore.get('strTest')).toEqual('');
    });

    it('object', () => {
      const testData = { a: { b: 2, c: 3 } };
      localStore.set('objTest', testData);
      expect(localStore.get('objTest')).toStrictEqual({ a: { b: 2, c: 3 } });
      localStore.update('objTest', { a: { c: 4 } });
      expect(localStore.get('objTest')).toStrictEqual({ a: { b: 2, c: 4 } });
      expect(testData).toStrictEqual({ a: { b: 2, c: 3 } });
    });
  });
});

describe('cookieStorage', () => {
  const localStore = new CookieStorage();
  it('string', () => {
    localStore.set({ key: 'strTest', value: 'set string', domain: 'localhost', maxAge: '1000' });
    expect(localStore.get('strTest')).toEqual('set string');
    localStore.update({ key: 'strTest', value: 'update string', domain: 'localhost', maxAge: '1000' });
    expect(localStore.get('strTest')).toEqual('update string');
    localStore.delete('strTest');
    expect(localStore.get('strTest')).toEqual('');
  });

  // it('object', () => {
  //   const testData = { a: { b: 2, c: 3 } };
  //   localStore.set('objTest', testData);
  //   expect(localStore.get('objTest')).toStrictEqual({ a: { b: 2, c: 3 } });
  //   localStore.update('objTest', { a: { c: 4 } });
  //   expect(localStore.get('objTest')).toStrictEqual({ a: { b: 2, c: 4 } });
  //   expect(testData).toStrictEqual({ a: { b: 2, c: 3 } });
  // });
});
