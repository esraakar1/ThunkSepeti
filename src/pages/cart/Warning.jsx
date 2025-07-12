import React from 'react'
import { Link } from 'react-router-dom'

const Warning = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
        sepette henüz herhangi bir ürün bulunmuyor
        <Link to="/" className="border p-2 rounded shadow hover:bg-gray-100" >
        restaurantlara gözat
        </Link>
    </div>
  )
}

export default Warning