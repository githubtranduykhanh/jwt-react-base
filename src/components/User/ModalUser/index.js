import { Modal,Button } from 'react-bootstrap';

const ModalUser = ({show,handleClose}) => {
    return ( 
        <>
            <Modal show={show} onHide={()=>handleClose(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>handleClose(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>handleClose(false)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUser;