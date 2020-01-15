import { sayHi } from '../src/index';

it('return same value', () => {
  expect(sayHi('hello')).toBe('hello');
});
