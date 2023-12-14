import KeycloakService from "../../service/KeycloakService";

const RenderOnAnonymous = ({children}) => {
    if (!KeycloakService.isLoggedIn()) return children
    return null
};

export default RenderOnAnonymous;