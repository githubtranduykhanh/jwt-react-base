import { useEffect, useState } from 'react';
import './TableUser.scss'
import {Table,Button} from 'react-bootstrap';
import { listTableUserPageLimit } from '../../../services/userService';
const TableUser = ({page,limit,totaPages,showDelete,itemDelete}) => {
    const [users,setUser] = useState([])
    const getListUser = async () => {
        const res = await listTableUserPageLimit(page,limit)
        if(res && res.DT && res.DT.users && res.DT.users.length > 0){
            setUser(res.DT.users)
            totaPages(res.DT.totalPages)
        }
        console.log('>>>check TableUser:',res)
    }

    useEffect(()=>{
        getListUser()
    },[page,limit])

    const handlDelete = (user) =>{
        console.log('>>>>check user detete',user)
        showDelete(true)
        itemDelete(user)
    }

    return ( 
        <div className='table-user-container'>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {users && users.length > 0 && users.map((item,index)=>{
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td className='flex-space-around'>
                                    <Button variant="danger" onClick={()=>handlDelete(item)}>Delete</Button>
                                    <Button variant="warning">Update</Button>
                                </td>
                            </tr>
                        )
                    })}
            </tbody>
            </Table>
        </div>
       
    );
}

export default TableUser;