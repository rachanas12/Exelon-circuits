import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './Navbar'
import Lists from './Lists'
import UploadFile from './UploadFile'
import "./global.css"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/uploadfile" element={<UploadFile/>} />
      <Route path="/" element={<Lists/>} />
      
      </Routes>
    </Router>
  )
}

export default App