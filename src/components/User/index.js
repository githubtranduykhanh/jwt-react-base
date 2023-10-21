import { Container,Button } from 'react-bootstrap';
import TableUser from './TableUser';
import './User.scss'
import ModalUser from './ModalUser';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ModalDeleteUser from './ModalDeleteUser';
import {deteteUser} from '../../services/userService'
const User = () => {
    const [showModal,setShowModal] = useState(false)
    const [showModalDelete,setShowModalDelete] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [currentLimit, setCurrentLimit] = useState(3);
    const [totalPage, setTotalPage] = useState(0);

    const [userDelete, setUserDelete] = useState({});
    const handlePageClick = (event) => {
        setCurrentPage(+event.selected +1)
       console.log('handlePageClick',event.selected)
    };

    const handleComfin = async (id) =>{
        const res = await deteteUser(id)
        console.log('check id >>>',res)
    }
    return ( 
        <div className='user-container'>
            <Container>
                <div className='flex-space-between'>
                    <h1>User Table</h1>
                    <Button variant="primary" onClick={()=>setShowModal(true)}>Add</Button>
                </div>
                <TableUser page={currentPage} limit={currentLimit} totaPages={setTotalPage} showDelete={setShowModalDelete} itemDelete={setUserDelete}/>
               {totalPage && 
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={totalPage}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
               } 
            </Container>  
            <ModalUser show={showModal} handleClose={setShowModal}/> 
            <ModalDeleteUser show={showModalDelete} handleClose={setShowModalDelete} item={userDelete} handleComfin={handleComfin}/>       
        </div>   
    );
}

export default User;