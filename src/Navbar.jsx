import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    let navigate=useNavigate()
  return (
    <nav className='navbar'>
        <div>Logo</div>
        <div className='menu'>
            <div onClick={(e)=>{e.preventDefault()
            navigate("/")}}>Lists</div>
            <div onClick={(e)=>{e.preventDefault()
            navigate("/uploadfile")}}>Upload File</div>
        </div>
    </nav>
  )
}

export default Navbar