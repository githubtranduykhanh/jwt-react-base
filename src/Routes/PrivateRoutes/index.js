import { listPrivateRoutes } from ".."
import {Route} from "react-router-dom";
import { Fragment } from "react";
import IsPrivate from "./IsPrivate";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
const PrivateRoutes = () => {

    return (
        <Switch>
           {listPrivateRoutes.map((route,index) => {
                const Component = route.component;
                let Layouts = Fragment;
                if(route.layout){
                    Layouts = route.layout
                }else if(route.layout === null){
                    Layouts = Fragment
                }              
                return (<IsPrivate key={index} exact={route.exact} path={route.path} Component={Component} Layouts={Layouts}/>)
            })}
           
        </Switch>
    )
}

export default PrivateRoutes