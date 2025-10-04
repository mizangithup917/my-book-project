import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
  // const [allBooks,setAllBooks]=useState([]);
  
  //     useEffect(() => {
  //       fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json")
  //       .then(res =>res.json())
  //       .then(data => {
  //         setAllBooks(data)
  //       })
  //     },[])

      const bookPromise=fetch('./https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json').then(res=>res.json())

  return (
    <div>
        <h1 className='text-3xl text-center p-6'>This is Books</h1>
        <Suspense fallback={<span>loadin....</span>}>
            {
              data.map((singlBook)=><Book></Book>)
            }
        </Suspense>
    </div>
  );
};

export default Books;