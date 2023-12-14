import React from 'react';
import KeycloakService from "../../service/KeycloakService";

const Auth = () => {
    return (
        <div>
            <p>This is token </p>
            {KeycloakService.getToken()}
        </div>
    );
};

export default Auth;