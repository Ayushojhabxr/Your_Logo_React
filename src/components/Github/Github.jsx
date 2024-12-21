import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Profile Name: {data.name}
    
    <img src={data.avatar_url} alt="Git picture" width={300}  className='mx-auto mt-4'/>
    <div className='text-center mt-4 bg-gray-600 text-white  text-3xl'>Github followers: {data.followers}
    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ayushojhabxr')
    return response.json()
}