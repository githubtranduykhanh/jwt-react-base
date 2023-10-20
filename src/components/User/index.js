import { Container,Button } from 'react-bootstrap';
import TableUser from './TableUser';
import './User.scss'
import ModalUser from './ModalUser';
import { useState,useEffect } from 'react';
const User = () => {
    const [showModal,setShowModal] = useState(false)
    
    return ( 
        <div className='user-container'>
            <Container>
                <div className='flex-space-between'>
                    <h1>User Table</h1>
                    <Button variant="primary" onClick={()=>setShowModal(true)}>Add</Button>
                </div>
                <TableUser/>
            </Container>  
            <ModalUser show={showModal} handleClose={setShowModal}/>        
        </div>   
    );
}

export default User;