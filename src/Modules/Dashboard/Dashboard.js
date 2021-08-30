import ListContainer from "./ListContainer"
import TaskForm from "./TaskForm"
import React from 'react'
import moment from 'moment'
import uuid from "node-uuid";
import { GlobalContext, GlobalDispatchContext } from "../../ContextStore/ContextAPI";
import { toaster } from "../../Components/Toast";
import { createTodos } from "../../Services/UserServices";


const DashBoard=()=>{

    const [todos,setTodos]= React.useState([{id:'sdf',status:'3',date:Date.now()-500,name:'bath'},{id:'sdsf',status:'2',date:1630258941926,name:'wash'}])
    const [mode,setMode]=React.useState('')
    const [data,setData]=React.useState({name:'',date:moment(),status:'1'})
    const {loginState}= React.useContext(GlobalContext)
    const dispatch= React.useContext(GlobalDispatchContext)
    const handleSubmit=body=>{
        let payload={
            ...body,
            id:body.id||uuid.v1(),
            date:moment(body.date).valueOf()
        }
        let temp=[...todos]

        if(body.id){
            const index= temp.findIndex(el=>el.id===body.id)
            temp[index]=payload
        }else{
            temp.push(payload)
        }
        toaster.promise(createTodos({id: loginState.userDetails.id  ,todos:temp}), {
            pending: `${body.id?'Updating':'Adding'} Task...`,
            success: `Task ${body.id?'Updated':'Added'} 👌`,
            error: {render({data}){
          return data + '🤯'}}
          }).then(res=>{console.log(res);
            dispatch({type:'updateTodo',payload:res})
            // setTodos(res)
          })

    }
    const handleEdit=(body)=>{
        console.log(body)
        setMode('edit')
        setData({...body})
    }
const handleRemove=e=>{
const temp=[...todos]
temp.find(el=>el.id===e.target.dataset.id).isDeleted=true
toaster.promise(createTodos({id: loginState.userDetails.id  ,todos:temp}), {
    pending: `Deleting Task...`,
    success: `Task Deleted 👌`,
    error: {render({data}){
  return data + '🤯'}}
  }).then(res=>{console.log(res);
    dispatch({type:'updateTodo',payload:res})
    // setTodos(res)
  })
}
const handleComplete=e=>{
    const temp=[...todos]
    temp.find(el=>el.id===e.target.dataset.id).status='3'
    // setTodos(temp)
    toaster.promise(createTodos({id: loginState.userDetails.id  ,todos:temp}), {
        pending: `Updating Task...`,
        success: `Task Updated 👌`,
        error: {render({data}){
      return data + '🤯'}}
      }).then(res=>{console.log(res);
        dispatch({type:'updateTodo',payload:res})
        // setTodos(res)
      })
}
React.useEffect(()=>{
    setTodos(loginState.userDetails.todos)
},[loginState.userDetails.todos])
    return <div>
      {mode? <TaskForm todo={data} setMode={setMode} handleSubmit={handleSubmit}/>:<button className='button mt-3' onClick={()=>{setMode('create');setData({name:'',date:moment(),status:'1'}) }}>Create Task</button>}

    <ListContainer todos={todos} handleEdit={handleEdit} handleRemove={handleRemove} handleComplete={handleComplete}/>
    </div>
}

export default DashBoard