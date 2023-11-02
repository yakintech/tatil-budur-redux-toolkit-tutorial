import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewUser } from '../store/reducers/userReducer';
import UserList from './UserList';

function AddUser() {
  
    const [name, setname] = useState("")
    const [surname, setsurname] = useState("")

    let dispatch = useDispatch();

    const add = () => {

        let newUser = {
            id: Math.floor(Math.random() * 999999),
            name:name,
            surname:surname
        }
         dispatch(addNewUser(newUser))
        //dispatch({type:'user/add', payload: newUser})


    }

  return (<>
        <div>
            <label htmlFor="">Name</label>
            <input type="text" name="" id="" onChange={(e) => setname(e.target.value)} />
        </div>

        <div>
            <label htmlFor="">Surname</label>
            <input type="text" name="" id="" onChange={(e) => setsurname(e.target.value)} />
        </div>

        <div>
            <button onClick={add}>Add</button>
        </div>

        <hr></hr>

        <UserList/>
  </>
  )
}

export default AddUser