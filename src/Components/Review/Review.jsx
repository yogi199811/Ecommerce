import React from 'react'
import { useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const Review = () => {
    const params = useParams()
  return (
    <>

    <div className=' w-full h-96 flex justify-center items-center bg-red-500'>

        <h1>{params.reviweid}</h1>
    </div>

        

        </>
  )
}

export default Review