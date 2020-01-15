import React from 'react';
import ReactDOM from 'react-dom';
// test postinstall会先设置libraryname
import * as redux from '../dist/lib/';

redux.sayHi('hello');

const App = () => {
  return <div>app</div>;
};
ReactDOM.render(<App/>, document.getElementById('root'));