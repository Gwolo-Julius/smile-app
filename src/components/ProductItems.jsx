import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopConext'
import { Link } from 'react-router-dom'

const ProductItems = ({id,name, price, image}) => {
  const {currency}=useContext(ShopContext)
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
    <div className='overflow-hidden'>
      <img className='transition ease-in-out hover:scale-110' src={image[0]} alt="" />
    </div>
    <p className='pt-3 pb-1 text-sm'>{name}</p>
    <p className='text-sm  font-bold'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItems
