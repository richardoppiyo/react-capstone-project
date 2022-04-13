/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Home from '../home';
import store from '../../app/store';

describe('Test the Countries list', () => {
  it('renders correctly', () => {
    const country = [
      {
        country: 'Albania',
        cases: 274236,
      },
    ];

    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const message = screen.getByText('Enter a valid country!');
    expect(message).toMatchSnapshot();
  });
});
