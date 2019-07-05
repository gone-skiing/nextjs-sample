import React from 'react';
import User from '../../components/User';

const authIndexPage = () => {
    return (
        <div>
            <h1>Welcome to auth page!</h1>
            <User name="Bob" age={"84"}/>
        </div>
    );
}

export default authIndexPage;