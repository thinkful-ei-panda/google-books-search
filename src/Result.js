import React from 'react'
import './Result.css'

export default function Result(props) {
  
  /* const result = 
  (props.searchFields.text.touched === false &&
    props.searchFields.printFilter.touched === false &&
    props.searchFields.typeFilter.touched === false) 
    ? props.booklist : 
  'Loading' */
    
  
  /* if (props.searchFields.touched===false) {
    result = props.booklist
  } */
  let eBook;
  if(props.book.saleInfo.isEbook) {
  eBook = <span>eBook | Price: {props.book.saleInfo.listPrice.amount}{props.book.saleInfo.listPrice.currencyCode}</span>
  } else {eBook = 'Physical Book'}
  return (
    <li>
      <h2>Title: {props.book.volumeInfo.title}</h2>
      <div className='li'>
        <img className='thumbnail' src={props.book.volumeInfo.imageLinks.thumbnail} alt={props.book.searchInfo} />
        <div className='volumeInfo'>
          <p>{eBook}</p>
          <>{props.book.volumeInfo.authors.map((author,i) => <h3 key={i}>Author: {author}</h3>)}</>
        </div>
      </div>
    </li>
  )
}
