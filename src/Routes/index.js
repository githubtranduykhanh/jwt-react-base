import User from "../components/User"
import Login from "../components/Login"
import Home from "../components/Home"
export const listPrivateRoutes = [
    { path:'/user', component:User, layout:'only' }
]

export const listPublicRoutes = [
    { path:'/login', component:Login, layout:null },
    { path:'/', component:Home, layout:'only' }
]


