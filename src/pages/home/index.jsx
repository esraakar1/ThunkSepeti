import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import { getRestaurants } from '../../redux/actions/restActions'
import Card from './Card'

const Home = () => {
 const {isLoading, error, restaurants} = useSelector((store) => store.restaurantReducer);

 const dispatch = useDispatch()
 const retry = () => dispatch(getRestaurants())

  return (
    <div className='container'>
      <h1 className='font-semibold text-xl md:text-2xl mb-5 '>
        Yakınınızdaki Restaurantlar
      </h1>

      {isLoading ? (<Loader />) : error ? ( <Error retry={retry} info={error} /> ) : ( 
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {restaurants.map((item) => (
            <div key={item.id}> <Card key={item.id} restaurant={item} />
             </div>
          ))}
          </div>
      ) }

    </div>
  )
}

export default Home