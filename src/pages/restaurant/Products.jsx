import React, { useEffect, useState } from 'react'
import api from '../../api'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import { FaFire } from 'react-icons/fa6'
import Card from './Card'

const Products = () => {

    const { id } = useParams()

    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        api.get(`/products?restaurantId=${id}`)
        .then((res) => setProducts(res.data))
        .catch((err) => setError(err.message))
    },[]);

    if(error) return <Error info={error} />;
    if(!products) return <Loader />;
    if(products.length === 0) return <p>Restaurant Servis Saatleri Dışındadır.</p>;

  return (
    <div >
       <h2 className='text-2xl font-bold flex items-center gap-2 '>
        <FaFire className='text-red-500' />
        Popüler
       </h2>
       <p className='text-gray-600'>Restaurantın en çok tercih edilen Ürünleri</p>
       <div className='grid lh:grid-cols-2 gap-5 mt-4'>{products.map((item) => (
        <Card key={item.id} product={item} />
       ))} </div>
    </div>
  )
}

export default Products