import React from 'react'
import { useSelector } from 'react-redux'

function UserList() {
    
   var userState =  useSelector(state => state.userState)

  
  return (<>
    <ul>
        {
            userState.users.map((item,key) => {
                return <li key={item.id}>{item.id} {item.name} {item.surname}</li>
            })
        }
    </ul>
  </>
  )
}

export default UserList