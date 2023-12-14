import React, {useEffect, useState} from 'react';
import TrainTable from "./component/train/TrainTable";
import RenderOnAuthenticated from "./component/render/RenderOnAuthenticated";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Auth from "./component/auth/Auth";
import AppNavbar from "./component/nav/AppNavbar";
import KeycloakService from "./service/KeycloakService";
import {Container} from "react-bootstrap";
import About from "./component/about/About";
import TrainItem from "./component/train/TrainItem";
import TrainInfo from "./component/train/TrainInfo";
import TrainService from "./service/TrainService";
import TrainForm from "./component/train/TrainForm";
import AppliedTrainTable from "./component/train/AppliedTrainTable";
import Profile from "./component/profile/Profile";
import UserTable from "./component/admin-console/UserTable";
import RenderOnRole from "./component/render/RenderOnRole";
import {Roles} from "./service/Roles";
import UserForm from "./component/admin-console/UserForm";

const App = () => {

    const [flag, setFlag] = useState(null)

    useEffect(() => {

    }, [flag]);



    return (
        <BrowserRouter>
            <AppNavbar/>
            <br/>
            <br/>
            <Container>
                <Routes>
                    <Route exact path="/" element={
                        <RenderOnAuthenticated
                            children={<TrainTable/>}
                            alt={<Auth/>}
                        />
                    }/>
                    <Route path="/applied" element={
                        <RenderOnAuthenticated
                            children={<AppliedTrainTable/>}
                            alt={<Auth/>}
                        />
                    }/>
                    <Route path='profile' element={
                        <RenderOnAuthenticated
                            children={<Profile/>}
                            alt={<Auth/>}
                        />
                    }/>
                    <Route path="/auth" element={<Auth/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/train/:id' element={
                        <RenderOnAuthenticated
                            children={<TrainInfo/>}
                            alt={<Auth/>}
                        />
                    }/>
                    <Route path='/form' element={<TrainForm update={setFlag}/>}/>
                    <Route path='/user-form' element={<UserForm update={setFlag}/>}/>
                    <Route path='/users' element={
                        <RenderOnRole
                            role={Roles.ADMIN}
                            children={<UserTable/>}
                            alt={<Auth/>}
                        />
                    }/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;