import React from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteItem, updateItem } from '../../redux/actions/basketAction';

const Card = ({product} ) => {

  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(updateItem(product.id, product.amount + 1))
  };

  const handleDelete = () => {
    product.amount > 1 ? dispatch(updateItem(product.id, product.amount - 1))
    : dispatch(deleteItem(product.id));
  }

  return (
    <div className='mb-10 p-4 shadow-xl rounded flex gap-4'>
        <img src={product.photo} className='size-[100px] rounded-lg ' />
        <div className='w-full flex justify-between flex-col'>
            <h3 className='text-xl font-semibold text-red-500'>{product.title} </h3>
            <div className='flex justify-between items-center'>
                <p className='text-lg font-semibold'>{product.price} $ </p>

                <div className='border flex text-xl items-center rounded-lg'>
                    <button onClick={handleDelete} className='basket-btn'> {product.amount > 1 ? <FaMinus /> : <FaTrash /> } </button>
                    <p className='w-[30px] text-center'>{product.amount} </p>
                    <button onClick={handleAdd} className='basket-btn'> <FaPlus /> </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card;