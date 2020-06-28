import React from 'react'
import './Form.css'
import Filters from './Filters'

export default function Form(props) {
  return (
    <form onSubmit={props.handleSearchSubmit}>
      <fieldset>
        <div className='formGroup'>
          <label htmlFor='searchText'>Search: </label>
          <input 
            name='searchText' 
            id='searchText'
            onChange={props.handleFieldsUpdate}
          ></input>
          <button type='submit'>Search</button>
        </div>
        <Filters 
          booklist={props.booklist}
          handleFieldsUpdate={props.handleFieldsUpdate}
        />
      </fieldset>
    </form>
  )
}
