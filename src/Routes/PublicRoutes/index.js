

import { listPublicRoutes } from ".."
import {Route} from "react-router-dom";
import NavUser from "../../layouts/NavUser";
const PublicRoutes = () => {
    return (
        <>
           {listPublicRoutes && listPublicRoutes.map((item,index) => 
                item.layout === 'only'
                ?<Route key={index} path={item.path}><NavUser>{item.component}</NavUser></Route>   
                :null    
           )}
        </>
    )
}

export default PublicRoutes