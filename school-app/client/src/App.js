import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import EditComponent from './components/EditComponent'
import AddComponent from './components/AddComponent'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const  getAllUSers = async () => {
      const response = await axios.get('http://localhost:5000/api/users')
      setUsers(response.data)
    }
    getAllUSers()
  }, [users])

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    // getAllUSers();
}

  return (
    <BrowserRouter>
    <div className="container mt-5">
    <Link to='/' className='btn btn-success mx-3'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
      </svg>
    </Link>
      <Link to='add-user' className='btn btn-success'>Create New User</Link>
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
                <td><Link to={`/edit/${items.id}`} className='btn'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square text-success" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg></Link></td>
                <td><button onClick={() => deleteUser(items.id)} className='btn'><i className="bi bi-trash3-fill text-danger"></i></button></td>
              </tr>
            </tbody>
        ))
        }
        </table>
        </div>
    </div>
    <Routes>
      <Route path="/edit/:id" element={<EditComponent/>}/>
      <Route path="/add-user" element={<AddComponent/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
