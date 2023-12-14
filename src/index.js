import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import KeycloakService from "./service/KeycloakService";

const RootComponent = () => {
    const [keycloakInitialized, setKeycloakInitialized] = useState(false);

    useEffect(() => {
        KeycloakService.initKeycloak(() => {
            setKeycloakInitialized(true);
        });
    }, []);

    return (
        <React.StrictMode>
             <App />
        </React.StrictMode>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);