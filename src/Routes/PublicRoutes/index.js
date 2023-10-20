
import { Fragment } from "react";
import { listPublicRoutes } from ".."
import { listPrivateRoutes } from "..";
import {Route} from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
const PublicRoutes = () => {
    return (
        <Switch>
           {listPublicRoutes.map((route,index) => {
                const Component = route.component;
                let Layouts = Fragment;
                if(route.layout){
                    Layouts = route.layout
                }else if(route.layout === null){
                    Layouts = Fragment
                }              
                return (<Route key={index} exact={route.exact} path={route.path} children={<Layouts><Component/></Layouts>}/>)
            })}
        </Switch>
    )
}

export default PublicRoutes