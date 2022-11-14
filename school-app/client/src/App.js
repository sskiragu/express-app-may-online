import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const  getAllUSers = async () => {
      const response = await axios.get('http://localhost:5000/api/users')
      setUsers(response.data)
    }
    getAllUSers()
  }, [users])

  return (
    <div className="App">
      <h1>School Application</h1>
      <div className='table-responsive'>
      <table className='table table-bordered table-info table-striped table-hover'>
          <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th colSpan='2'>Action</th>
              </tr>
            </thead>
        {
        users.map((items) => (
            <tbody className='table-group-divider'>
                <tr>
                <td>{items.id}</td>
                <td>{items.username}</td>
                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square text-success" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg></td>
                <td><i className="bi bi-trash3-fill text-danger"></i></td>
              </tr>
            </tbody>
        ))
        }
        </table>
        </div>
    </div>
  );
}

export default App;
