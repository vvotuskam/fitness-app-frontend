import KeycloakService from "../../service/KeycloakService";

const RenderOnRole = ({children, alt, role}) => {

    if (!KeycloakService.isLoggedIn()) return alt;
    for (const r of KeycloakService.getRoles())
        if (r.toUpperCase() === role.toUpperCase()) return children
    return alt
};

export default RenderOnRole;