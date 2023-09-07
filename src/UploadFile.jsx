  import React, { useState } from 'react'
  import { useNavigate } from 'react-router-dom'
  import axiosInstance from './helpers/axiosInstance'

  const UploadFile = () => {
      let navigate=useNavigate()
      let [file, setFile]=useState(null)
      let handleSubmit=async(e)=>{
        try {
          e.preventDefault();
          if (!file) {
            alert('Please select a file to upload.');
            return;
          }
    
          const formData = new FormData();
          formData.append('file', file);
    
          await axiosInstance.post('/uploadfile', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
    
          alert('Successfully Uploaded');
          navigate('/');
    
        } catch (error) {
          
        }

      }
      const handleData = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
      }
    return (
      <div id='upload-page'>
          <form action=""method='post' id='upload-form'  encType="multipart/form-data">
      <fieldset>
          <legend>Upload File</legend><br /><br />
          <div><label htmlFor="file">File :- </label>
          <input type="file" name="file" id="file" onChange={handleData}/><br /><br /></div>
          <div><button type="submit" onClick={handleSubmit}>Upload</button></div>
      </fieldset>
  </form></div>
    )
  }

  export default UploadFile