// Not Found Page added for 404 errors or any unspecified routes
// This component will display a friendly message indicating that the page the user is looking for does not exist and perhaps provide links to navigate back to the valid pages

import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h2>404 - Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>Go back to <a href="/login">Login</a> or <a href="/create-account">Create Account</a></p>
        </div>
    );
};

export default NotFound; 