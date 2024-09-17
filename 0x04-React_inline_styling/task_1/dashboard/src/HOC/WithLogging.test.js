import React from 'react';
import { shallow, unmount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

jest.spyOn(console, 'log').mockImplementation(() => {});

describe('WithLogging HOC', () => {
  afterEach(() => {
    console.log.mockRestore();
  });

  it('logs mount and unmount with Component when wrapped element is pure HTML', () => {
    const WrappedComponent = () => <p />;
    const LoggedComponent = WithLogging(WrappedComponent);
    const wrapper = shallow(<LoggedComponent />);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('logs mount and unmount with Login component when wrapped element is Login', () => {
    const LoggedComponent = WithLogging(Login);
    const wrapper = shallow(<LoggedComponent />);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
