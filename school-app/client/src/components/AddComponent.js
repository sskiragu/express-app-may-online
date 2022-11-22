import axios from 'axios'
import React, { useState } from 'react'

function AddComponent() {
  const [username, setUsername]= useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')

  const saveUser = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:5000/api/users',{
      username: username,
      email: email,
      password: password
    })
    setUsername('')
    setEmail('')
    setPassword('')
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'> </div>
        <div className='col'>
          <h1>Signup</h1>
        </div>
        <div className='col'> </div>
      </div>
        <div className='row'>
            <div className='col'></div>
            <div className='col'>
              <form onSubmit={saveUser}>

                <div className='mb-3'>
                  <input name='username' value={username} onChange={(e) => setUsername(e.target.value)} type='text' className='form-control' placeholder='Enter username'/>
                </div>

                <div className='mb-3'>
                  <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' className='form-control' placeholder='Enter Email'/>
                </div>

                <div className='mb-3'>
                  <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type='password' className='form-control' placeholder='Enter Password'/>
                </div>

                <div className='mb-3'>
                  <button type='submit' className='btn btn-outline-success'>Signup</button>
                </div>
              </form>
            </div>
            <div className='col'></div>
        </div>
    </div>
  )
}

export default AddComponent