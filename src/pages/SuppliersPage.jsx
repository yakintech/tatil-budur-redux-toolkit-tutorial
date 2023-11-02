import React from 'react'
import { useSelector } from 'react-redux'

function SuppliersPage() {

  const { suppliersState } = useSelector(state => state);
  
  return (<>
    {
      suppliersState.loading == true ? <h1>loading...</h1> : <>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Company Name</th>
              <th>Contact Name</th>
            </tr>
          </thead>
          <tbody>
            {
              suppliersState.suppliers.map((item, key) => {
                return <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.companyName}</td>
                  <td>{item.contactName}</td>

                </tr>
              })
            }
          </tbody>
        </table>
      </>
    }
  </>
  )
}

export default SuppliersPage