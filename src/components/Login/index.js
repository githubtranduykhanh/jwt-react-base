import { useState } from 'react';
import './Login.scss'
import { Button,Container,Row,Col,Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

import { registerNewUser,loginUser } from '../../services/userService';



const Login = () => {
    const history = useHistory();
    let defaultInputRegister = {
        isUserName:true,
        isEmail:true,
        isPhone:true,
        isPassword:true,
        isComfirm:true
    }
    let defaultInputLogin = {
        isEmailPhone:true, 
        isPassword:true,
    }
    const [emailPhoneLogin, setEmailPhoneLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")
    const [emailRegister, setEmailRegister] = useState("")
    const [phoneRegister, setPhoneRegister] = useState("")
    const [userNameRegister, setUserNameRegister] = useState("")
    const [passwordRegister, setpasswordRegister] = useState("")
    const [comfirmRegister, setcomfirmRegister] = useState("")
    const [changeFromLogin, setChangeFromLogin] = useState(true)
    const [changeFromRegister, setChangeFromRegister] = useState(false)
    const [objectCheckInputRegister, setObjectCheckInputRegister] = useState(defaultInputRegister)
    const [objectCheckInputLogin, setObjectCheckInputLogin] = useState(defaultInputLogin)
    const clearInputLogin = () => {
        setEmailPhoneLogin("")
        setPasswordLogin("")
    }
    const clearInputRegister = () => {
        setEmailRegister("")
        setPhoneRegister("")
        setUserNameRegister("")
        setpasswordRegister("")
        setcomfirmRegister("")
    }
    const handlChangeFrom = () => {
        if(changeFromLogin){
            setChangeFromLogin(false)
            setChangeFromRegister(true)
            clearInputLogin()
        }else{
            setChangeFromRegister(false)
            setChangeFromLogin(true)    
            clearInputRegister() 
        }
    }
    const isValidInputRegister = () => {
        setObjectCheckInputRegister(defaultInputRegister)
        const regx = /\S+@\S+\.\S+/;

        if(!userNameRegister){
            toast.error("User name is required")
            setObjectCheckInputRegister({...defaultInputRegister,isUserName:false})
            return false
        }

        if(!emailRegister){
            toast.error("Email is required")
            setObjectCheckInputRegister({...defaultInputRegister,isEmail:false})
            return false
        }

        if (!regx.test(emailRegister)){
            toast.error("Please enter a valid email address")
            setObjectCheckInputRegister({...defaultInputRegister,isEmail:false})
            return false
        }

        if(!phoneRegister){
            toast.error("Phone is required")
            setObjectCheckInputRegister({...defaultInputRegister,isPhone:false})
            return false
        }

        if(!passwordRegister){
            toast.error("Password is required")
            setObjectCheckInputRegister({...defaultInputRegister,isPassword:false})
            return false
        }  

        if(passwordRegister !== comfirmRegister){
            toast.error("Your password is not the same")
            setObjectCheckInputRegister({...defaultInputRegister,isComfirm:false})
            return false
        }  

        return true;   
    }
    const isValidInputLogin = () => {
        setObjectCheckInputLogin(defaultInputLogin)

        if(!emailPhoneLogin){
            toast.error("Email or Phone is required")
            setObjectCheckInputLogin({...defaultInputLogin,isEmailPhone:false})
            return false
        }


        if(!passwordLogin){
            toast.error("Password is required")
            setObjectCheckInputLogin({...defaultInputLogin,isPassword:false})
            return false
        }  

        return true
    }
    const hanldLogin = async () =>{
        const isCheckInputs = isValidInputLogin()
        if(isCheckInputs){
            const req = await loginUser(emailPhoneLogin,passwordLogin)
            if(req && +req.EC === 0){
                toast.success(req.EM)
                history.push('/')
            }else{
                toast.error(req.EM)
            }
            console.log(">>>> check data login:",isCheckInputs);
        }
    }


    const hanldRegister = async () =>{
        const checkInputs = isValidInputRegister()
        if(checkInputs){
            const req = await registerNewUser(userNameRegister,emailRegister,phoneRegister,passwordRegister);
            if(req && +req.EC === 0){
                toast.success(req.EM)
                handlChangeFrom();
            }else{
                toast.error(req.EM)
            }
            console.log(">>>> check data register:",req);
        } 
    }

     
   

    return (
        <div className='login-container'> 
            <Container>
                <Row>
                    <Col xs={7}>
                        <div className='content-left'>                 
                            <img className='img-logo' src='https://brademar.com/wp-content/uploads/2022/05/Facebook-Logo-PNG.png'/>
                            <Form.Label>Tran Duy Khanh</Form.Label>
                        </div>
                    </Col>
                    <Col>
                        <div className='content-right'>
                            <div className='from-content-login' style={{display: changeFromLogin? "": "none" }}>
                                <Form.Group className="mb-3">
                                <Form.Control className={objectCheckInputLogin.isEmailPhone ? "" : "is-invalid"} type="email" placeholder="Your email or phone" value={emailPhoneLogin} onChange={(event) => setEmailPhoneLogin(event.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-5">
                                <Form.Control className={objectCheckInputLogin.isPassword ? "" : "is-invalid"} type="password" placeholder="Your Password" value={passwordLogin} onChange={(event) => setPasswordLogin(event.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-2">
                                <Button variant="primary" className='btn-login' size='lg' onClick={hanldLogin}>Login</Button>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                <Button variant="secondary" onClick={handlChangeFrom} className='btn-login' size='lg'>Register</Button>
                                </Form.Group>     
                            </div>  
                            <div className='from-content-register' style={{display: changeFromRegister ? "": "none" }}>
                                <Form.Group className="mb-3">
                                <Form.Control className={objectCheckInputRegister.isUserName ? "" : "is-invalid"} type="text" placeholder="Your name" value={userNameRegister} onChange={(event) => setUserNameRegister(event.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                <Form.Control className={objectCheckInputRegister.isEmail ? "" : "is-invalid"} type="email" placeholder="Your email" value={emailRegister} onChange={(event) => setEmailRegister(event.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                <Form.Control className={objectCheckInputRegister.isPhone ? "" : "is-invalid"} type="text" placeholder="Your phone" value={phoneRegister} onChange={(event) => setPhoneRegister(event.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                <Form.Control className={objectCheckInputRegister.isPassword ? "" : "is-invalid"} type="password" placeholder="Your Password" value={passwordRegister} onChange={(event) => setpasswordRegister(event.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-5">
                                <Form.Control className={objectCheckInputRegister.isComfirm ? "" : "is-invalid"} type="password" placeholder="Re-enter Password" value={comfirmRegister} onChange={(event) => setcomfirmRegister(event.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-2">
                                <Button variant="primary" className='btn-login' size='lg' onClick={hanldRegister}>Register</Button>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                <Button variant="secondary" onClick={handlChangeFrom} className='btn-login' size='lg'>Login</Button>
                                </Form.Group>     
                            </div>      
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;