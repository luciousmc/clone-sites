import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import { useState } from 'react'; 

const MIN_RATING = 1;
const MAX_RATING = 5;

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  
  return (
    <div>
      <p>{category}</p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4>{title}</h4>

      <div className="flex">
        {
          Array(rating).fill()
            .map((_, i) => {
              return <StarIcon className="h-5" />
            })
        }
      </div>


      
    </div>
  )
}

export default Product
