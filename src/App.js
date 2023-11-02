import React, { useEffect } from 'react'
import Counter from './pages/Counter'
import { Link, Route, Routes } from 'react-router-dom'
import AddUser from './pages/AddUser'
import UserList from './pages/UserList'
import { useDispatch } from 'react-redux'
import { fetchAllSuppliers } from './store/slices/supplierSlice'
import SuppliersPage from './pages/SuppliersPage'

function App() {

  let dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchAllSuppliers())
  
   
  }, [])
  


  return (<>

    <ul>
      <li><Link to='/adduser'>AddUser</Link></li>
      <li><Link to='/userlist'>User List</Link></li>
      <li><Link to='/suppliers'>Supplier List</Link></li>

    </ul>

    <Routes>
      <Route path='/adduser' element={<AddUser />} />
      <Route path='/userlist' element={<UserList />} />
      <Route path='/suppliers' element={<SuppliersPage />} />

    </Routes>
  </>
  )
}

export default App