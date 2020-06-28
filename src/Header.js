import React from 'react'
import Form from './Form'

export default function Header(props) {
  return (
    <header>
      <h1>Google Book Search</h1>
      <Form
        booklist = {props.booklist}
        handleFieldsUpdate = {props.handleFieldsUpdate}
        handleSearchSubmit = {props.handleSearchSubmit}
      />
    </header>
  )
}
