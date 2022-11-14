import React from 'react'

function EditComponent() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>

                </div>

                <div className='col-6'>
                    <h1>Edit Details</h1>
                    <form>
                        <div className='mb-2'>
                         <input type='text' placeholder='Enter new username'/>
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