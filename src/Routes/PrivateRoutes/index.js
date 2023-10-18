import { listPrivateRoutes } from ".."
import {Route} from "react-router-dom";
import NavUser from "../../layouts/NavUser";
const PrivateRoutes = () => {
    return (
        <>
           {listPrivateRoutes && listPrivateRoutes.map((item,index) => 
                !item.layout
                ?<Route key={index} path={item.path} component={item.component}></Route>
                :<Route key={index} path={item.path}><NavUser>{item.component}</NavUser></Route>         
           )}
        </>
    )
}

export default PrivateRoutes