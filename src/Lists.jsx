import React, { useEffect, useState } from 'react'
import axiosInstance from './helpers/axiosInstance'
import { useNavigate } from 'react-router-dom'

const Lists = () => {
    let navigate=useNavigate()
    let [photo,setPhoto]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let {data}=await axiosInstance.get("/lists")
            console.log(data.data);
            setPhoto(data.data.lists)
        }
        fetchData()
    },[])
    let handleDelete=async(x)=>{
        try {
            console.log(x);
            let res=await axiosInstance.delete(`/delete/${x}`)
        alert("file deleted")
        window.location.assign('/');
            } catch (error) {
            console.log('unable to delete');
        }
    }
    
  return (
    <div>
        {photo.map((x)=>{
            return(
                <>
                <div className='lists-page'>
                    <h3>{x.originalname}</h3>
                    <button onClick={(e)=>{
                        handleDelete(x._id)}}>Delete</button>
                    
                </div><br /></>

            )
        })}
    </div>
  )
}

export default Lists