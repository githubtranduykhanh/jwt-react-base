import { Modal,Button } from 'react-bootstrap';

const ModalDeleteUser = ({show,handleClose,handleComfin,item}) => {
    return ( 
        <>
            <Modal show={show} onHide={()=>handleClose(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Delete User {item.username}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>handleClose(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>handleComfin(item.id)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;