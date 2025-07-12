import React from 'react'

const Error = ({info, retry}) => {
  return (
    <div>
        <div className='bg-red-100 mt-32 p-10 rounded-md text-lg text-center'>
            <p>Üzgünüz bir sorun oluştu</p>
            <p> {info} </p>
        </div>
        {retry && (
            <div className='flex justify-center my-10'>
                <button onClick={retry} className='border py-2 px-4 rounded-md hover:bg-zinc-100 transition'>Tekrar Dene</button>
            </div>
        )}
    </div>
  )
}

export default Error