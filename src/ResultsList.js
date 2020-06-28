import React from 'react'
import Result from './Result'

export default class ResultsList extends React.Component {
  


  render () {

    let books;
    if (typeof(this.props.booklist) === 'string') {
      books = <li><h2>{this.props.booklist}</h2></li>
    } else {
      books = this.props.booklist.map( (book, i) => {
      return (
        <Result key={i} book={book}/>
      )
      })
    }

    

    let validation
    if (this.props.searchFields.text.value.length > 0){
      return validation = books
    } else {
      validation = <li></li>
    } 

    return (
      <section>
        <ul>
          {validation}
        </ul>
      </section>
    )
  }
}
