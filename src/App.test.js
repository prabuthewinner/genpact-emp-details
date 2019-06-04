import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App Component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App />);
  
    expect(component).toMatchSnapshot();
  });
});
