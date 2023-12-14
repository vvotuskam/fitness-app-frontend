import KeycloakService from "../../service/KeycloakService";
import {useNavigate} from "react-router-dom";

const RenderOnAuthenticated = ({children, alt}) => {

    // const navigate = useNavigate()

    if (KeycloakService.isLoggedIn()) return children
    return alt
};

export default RenderOnAuthenticated;