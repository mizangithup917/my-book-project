import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({singleBook}) => {
  // const data=use(bookPromise);

  // console.log(data)
 const {bookName,author, image,review,totalPages,rating,category,tags,publisher,yearOfPublishing } = singleBook;
 
  return (
      <div className="card bg-base-100 w-96 shadow-sm border p-8">
      <figure className='p-5 bg-gray-100 w-2/2 mx-auto'>
        <img className='h-[166px]'
          src={image}
          alt="Shoes" />
      </figure>
      
      <div className="card-body bg-amber-200">
        <div className='flex justify-between'>
          {
          tags.map(tag => <button >{tag}</button>)
          }
        </div>
       <div className='flex justify-between'>
          
          <div className="badge badge-secondary">{yearOfPublishing}</div>
       </div>
        <h2 className="card-title">
          {bookName}
        </h2>
        <h4 className="author">by: {author}  </h4>
        <p>{review}</p>
      
        <div className="card-actions justify-between">
          <div className="badge badge">{category}</div>
          <div className="badge badge">{rating}<FaStarHalfAlt /></div>
        </div>
      </div>
        </div>
  );
};

export default Book;