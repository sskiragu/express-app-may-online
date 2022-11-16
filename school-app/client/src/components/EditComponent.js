import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function EditComponent() {

    const [ username, setUsername] = useState('')
    const { id } = useParams()

    useEffect( () => {
        getProductById();
    })

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/api/users/${id}`)
        setUsername(response.data.username)
    }

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>

                </div>

                <div className='col-6'>
                    <h1>Edit Details</h1>
                    <h1>{username}</h1>
                    <form>
                        <div className='mb-2'>
                         <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter new username'/>
                        </div>
                        <div>
                            <button className='btn btn-primary'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditComponent