import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

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
      <h1>{
        users.map((items) => (
          <table>
            <tr>
              <td>{items.id}</td>
              <td>{items.username}</td>
            </tr>
          </table>
        ))
        }</h1>
    </div>
  );
}

export default App;
