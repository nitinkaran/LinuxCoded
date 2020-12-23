import React from 'react';
import ComponentA from './ComponentA'
import { UserProvider } from './useContext'

function Tutorial38() {

    return (
        <div>
            <UserProvider value="THIs is in the context"  >
                <ComponentA />
            </UserProvider>
        </div>
    );
}

export default Tutorial38;