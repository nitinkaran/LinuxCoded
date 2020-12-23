import React from 'react';

/**
 * React.createContext() comes with Provider and a Consumer which can be used within 
 * the component
 */

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserConsumer, UserProvider };