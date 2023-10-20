import User from "../components/User"
import Login from "../components/Login"
import Home from "../components/Home"
import NavUser from "../layouts/NavUser"
export const listPrivateRoutes = [
    { path:'/user', component:User, layout:NavUser },
]

export const listPublicRoutes = [
    { path:'/', exact:true, component:Home, layout:NavUser },
    { path:'/login', component:Login, layout:null },
]


