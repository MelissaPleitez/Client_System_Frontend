import {userStore} from "../stores/UserStore";
import {observer} from "mobx-react";
import { Navigate } from "react-router-dom";
import {ProtectedProps} from '../interfaces/LoginPageProps'

export const ProtectedRoute: React.FC<ProtectedProps> = observer(({children})=>{
        if(!userStore.isAuthenticated){
            return <Navigate to="/" />;
        }

        return children;
});
