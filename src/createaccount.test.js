import React from 'react';
import { fireEvent, render} from '@testing-library/react';
import CreateAccount from './createaccount'
import {UserContext} from './context'

test('missing name field',() => {
    const {getByText,getByPlaceholderText,getByRole} = render(<CreateAccount/>);
  
    const name = getByPlaceholderText('Enter name');
    //const email = getByPlaceholderText('Enter email');
    //const password = getByPlaceholderText('Enter password');
    fireEvent.change(name, {target:{value: ''}});
    //fireEvent.change(email, {target:{value: ''}});
    //fireEvent.change(password, {target:{value: ''}});

    fireEvent.click(getByRole('button'));

    getByText('Error: name');
});

test('add account', () => {

    const {getByText,getByPlaceholderText,getByRole} = render(
    <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <CreateAccount />
    </UserContext.Provider>
    )

    const name = getByPlaceholderText('Enter name');
    const email = getByPlaceholderText('Enter email');
    const password = getByPlaceholderText('Enter password');
    fireEvent.change(name, {target:{value: 'José'}});
    fireEvent.change(email, {target:{value: 'jctorrest@yahoo.com'}});
    fireEvent.change(password, {target:{value: 'secretword'}});

    fireEvent.click(getByRole('button'));

    getByText('Add another account');
  
});