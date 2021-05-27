import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';

function CheckoutProduct({ id, title, price, rating, description, category, hasPrime, image }) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      hasPrime,
      image
    }

    dispatch(addToBasket(product));
  }

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }))
  }

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        height={200}
        width={200}
      />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div>
          {Array(rating).fill().map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">
          {description}
        </p>

        <Currency quantity={price} />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              src="https:/links.papareact.com/fdw" alt="Prime"
              className="w-12"
              loading="lazy"
            />
            <p className="text-xs text-gray-500">
              FREE Next-day delivery
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 justify-self-end">
        <button className="button" onClick={addItemToBasket}>Add to Basket</button>
        <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
