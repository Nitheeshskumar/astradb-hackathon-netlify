

import React from 'react'
import {Modal } from 'react-bootstrap'
import { toaster } from '../../Components/Toast'
import { listUsers } from '../../Services/AdminServices'
import ItemRow from '../Dashboard/ItemRow'

const Admin=()=>{
const [users,setUsers]=React.useState([])
const [todos,setTodos]=React.useState([])
const [show, setShow] = React.useState(false);
const ref=React.useRef('')

const getData=()=>{
console.log(ref.current.value)
    toaster.promise(listUsers(ref.current.value), {
        pending: 'Getting ..',
        success: 'Loaded',

        error: {render({data}){return data.response.data + '🤯'}}
      })
      .then(res=>{console.log(res);
       setUsers(res)
      })
}
const handleClose=()=>{
    setShow(false)
    setTodos([])
}
const handleOpen=(data)=>{
    setShow(true)
    setTodos(data)
}
return   <div className="table-container ht400 tableFixHead">
    <ModalDialog setShow={setShow} show={show} todos={todos} handleClose={handleClose}/>
    <input ref={ref}></input><button type="button" onClick={getData}>Go</button>
<table className="table is-hoverable " style={{whiteSpace:'nowrap',overflow:'auto'}}>
    <thead>
        <tr className="has-background-link">
            <th className="has-text-light has-background-link">Count</th>
            <th className="has-text-light has-background-link" data-sort-by="date" >Name</th>
            <th className="has-text-light has-background-link" data-sort-by="name" >Email</th>
            <th className="has-text-light has-background-link" data-sort-by="status" >Password</th>
            <th className="has-text-light has-background-link"> ID</th>
        </tr>
    </thead>
    <tbody>
      {users.map((el,i)=>{
          return <tr key={el.id}>
              <td> {i+1} </td>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.password}</td>
              <td onClick={()=>handleOpen(el.todos)}>{el.id}</td>
          </tr>
      })}
    </tbody>
</table></div>

}

const ModalDialog =({todos,show,handleClose})=> {



    return (
      <>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <div className="table-container ht400 tableFixHead">
<table className="table is-hoverable " style={{whiteSpace:'nowrap',overflow:'auto'}}>
    <thead>
        <tr className="has-background-link">
            <th className="has-text-light has-background-link">Count</th>
            <th className="has-text-light has-background-link" data-sort-by="date" >Task</th>
            <th className="has-text-light has-background-link" data-sort-by="name" >Date</th>
            <th className="has-text-light has-background-link" data-sort-by="status" >Status</th>
            <th className="has-text-light has-background-link"> Is Del</th>
        </tr>
    </thead>
    <tbody>
      {todos.map((el,i)=>{
          return <ItemRow
          key={el.id}
          item={el}
          count={i+1}
      />
      })}
    </tbody>
</table></div>

          </Modal.Body>

        </Modal>
      </>
    );
  }


export default Admin