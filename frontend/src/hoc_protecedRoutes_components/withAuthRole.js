// Import React and useContext hook from React
import React, { useContext } from 'react'
import LoggedInUserContext from '../context-global/LoggedInUserContext';
import ErrorPage from '../components/pages/Common/ErrorPage';


// Define withAuthRole higher order function with ProtectedComponent and role as parameters
const withAuthRole = (ProtectedComponent, role = 'user') => {
    return function (props) {
        const {loggedInUser} = useContext(LoggedInUserContext);
        if (loggedInUser === null || typeof loggedInUser !== 'object' || loggedInUser.role !== role) {
            return <ErrorPage/>;
        }
        return <ProtectedComponent {...props} />;
    }
}

export default withAuthRole;


// This higher-order component (HOC) is designed to wrap other components, specifically the 'adminDashboard' and 'userDashboard' components, providing them with authentication and role-based access control.

//   The 'withAuthRole' HOC takes two parameters:
//   1. ProtectedComponent: The component that needs to be protected with authentication and role-based access control. In this case, it can be either the 'adminDashboard' or the 'userDashboard' component.
//   2. role: The role required to access the protected component. It defaults to 'user', meaning that if no specific role is provided, the component will be accessible to users with the 'user' role.

//   How it works:
//   - When a component is wrapped with 'withAuthRole', it will have access to the 'loggedInUser' object from the 'LoggedInUserContext' using the 'useContext' hook.
//   - If the 'loggedInUser' is null, not an object, or does not have the required role, the HOC will render a "Page not found" message, indicating that the user doesn't have the necessary permissions to access the component.
//   - If the 'loggedInUser' has the correct role, the HOC will render the original 'ProtectedComponent' along with any additional props passed down.

//   Usage Example:
//   Import the 'withAuthRole' HOC in your file where you define the 'adminDashboard' and 'userDashboard' components, then wrap those components with 'withAuthRole' like this:
// Assuming you have 'adminDashboard' and 'userDashboard' components defined

// const ProtectedAdminDashboard = withAuthRole(adminDashboard, 'admin');
// const ProtectedUserDashboard = withAuthRole(userDashboard, 'user');