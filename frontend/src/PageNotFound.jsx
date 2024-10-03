import React from 'react'
import {useNavigate} from 'react-router-dom'
function PageNotFound() {
    const navigation=useNavigate()
  return (
    <div>
    <h2>404 Page not found</h2>
    <button onClick={()=>navigation('/login')}> Login</button>
    </div>
  )
}

export default PageNotFound