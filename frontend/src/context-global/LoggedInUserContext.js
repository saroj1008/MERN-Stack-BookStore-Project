import React, { createContext } from 'react';

// Creating the context
//  createContext(default) creates a context instance,accepts one optional argument: the default value.
const LoggedInUserContext = createContext(null);

export default LoggedInUserContext;