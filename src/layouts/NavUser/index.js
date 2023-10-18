import Nav from "../../components/Navigation"

const NavUser = ({children}) => {
    return (
        <>
            <Nav/>
            {children}
        </>
    )
}

export default NavUser