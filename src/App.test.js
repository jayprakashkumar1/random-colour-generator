import React from 'react';
import ReactDOM from 'react-dom';
import Random from './Random';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Random />, div);
  ReactDOM.unmountComponentAtNode(div);
});
