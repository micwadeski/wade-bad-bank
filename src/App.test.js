import React from 'react';
import { fireEvent, render} from '@testing-library/react';
import App from './App';

test('Checking for text (Create Account) in navbar', () => {
  const {getByText,getByLabelText} = render(<App/>);
  
  fireEvent.click(getByText('Create Account'));
});