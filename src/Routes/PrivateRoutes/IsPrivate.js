import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import {Route} from "react-router-dom";
const IsPrivate = ({path,exact,Component,Layouts}) => {
    const history = useHistory();
    useEffect(()=>{
        const session = sessionStorage.getItem('account')
        if(!session){
            history.push('/login')
        }
    },[history])

    return (     
        <Route path={path} exact={exact} ><Layouts><Component/></Layouts></Route>
    );
}

export default IsPrivate;