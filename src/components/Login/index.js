import { useEffect, useState } from 'react';
import './Login.scss'
import { Button,Container,Row,Col,Form } from 'react-bootstrap';
import axios from 'axios';
const Login = () => {
    const [emailPhoneLogin, setEmailPhoneLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")
    const [emailRegister, setEmailRegister] = useState("")
    const [phoneRegister, setPhoneRegister] = useState("")
    const [userNameRegister, setUserNameRegister] = useState("")
    const [passwordRegister, setpasswordRegister] = useState("")
    const [comfirmRegister, setcomfirmRegister] = useState("")
    const [changeFromLogin, setChangeFromLogin] = useState(true)
    const [changeFromRegister, setChangeFromRegister] = useState(false)
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
    const hanldLogin = () =>{
        const data = {
            emailPhoneLogin,
            password:passwordLogin
        }
        console.log(">>>> check data login:",data);
    }
    const hanldRegister = () =>{
        const data = {
            username:userNameRegister,
            email:emailRegister,
            phone:phoneRegister,
            password:passwordRegister
        }
        console.log(">>>> check data register:",data);
    }

    //const getDataAxios = async () =>{
        //const api = await axios.get('http://localhost:8080/api/v1');
        //console.log(">>>>> check api:",api);
        //const req = await api.data;
       // console.log(">>>>> check data:",req);
    //}    
   // useEffect( () => {
       // getDataAxios();
   // },[])

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
                                <Form.Control type="email" placeholder="Your email" value={emailPhoneLogin} onChange={(event) => setEmailPhoneLogin(event.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-5">
                                <Form.Control type="password" placeholder="Your Password" value={passwordLogin} onChange={(event) => setPasswordLogin(event.target.value)} />
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
                                <Form.Control type="text" placeholder="Your name" value={userNameRegister} onChange={(event) => setUserNameRegister(event.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Your email" value={emailRegister} onChange={(event) => setEmailRegister(event.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Your phone" value={phoneRegister} onChange={(event) => setPhoneRegister(event.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                <Form.Control type="password" placeholder="Your Password" value={passwordRegister} onChange={(event) => setpasswordRegister(event.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-5">
                                <Form.Control type="password" placeholder="Re-enter Password" value={comfirmRegister} onChange={(event) => setcomfirmRegister(event.target.value)} />
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