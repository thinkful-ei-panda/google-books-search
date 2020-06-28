import React from 'react'

export default function Filters(props) {
  console.log(props.booklist)
  return (
    <div className='formGroup'>
      <label htmlFor='bookPrint'>Print Type: </label>
      <select 
        name='bookPrint' 
        id='bookPrint'
        onChange={props.handleFieldsUpdate}
      >
        <option value='all'>All</option>
        <option value='fiction'>Fiction</option>
        <option value='non-fiction'>Non-Fiction</option>
      </select>
      <label htmlFor='bookType'>Book Type: </label>
      <select 
        name='bookType' 
        id='bookType'
        onChange={props.handleFieldsUpdate}
      >
        <option value='0'>No Filter</option>
        <option value='free'>Free</option>
        <option value='eBook'>$$$</option>
      </select>
    </div>
  )
}
