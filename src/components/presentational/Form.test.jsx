import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Form from './Form';

describe('Form component', () => {
  afterEach(() => cleanup());
  it('renders Form', () => {
    const { asFragment } = render(<Form 
      url=""
      method=""
      json=""
      onSubmit={() => {}}
      onChange={jest.fn()} 
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
