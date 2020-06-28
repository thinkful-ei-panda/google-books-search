import React from 'react'
import './App.css'
import Header from './Header'
import ResultList from './ResultsList'

class App extends React.Component {

  state = {
    booklist: [],
    searchFields: {
      text: {
        value:'',
        touched:false
      },
      printFilter: {
        value: '',
        touched: false
      },
      typeFilter: {
        value: '',
        touched: false
      }
    }
  }

  handleSearchSubmit = (e) => {
    e.preventDefault()
    let searchQuery = this.state.searchFields.text.value.replace(' ','+');
    if (searchQuery.length === 0) {
      this.setState({bookList: 'Please enter search criteria'})
    } else {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`,{method:'GET'})
      .then(res => res.ok ? res.json() : Promise.reject('Cannot fetch Books data'))
      .then(res => {
        this.setState({booklist: res.items})
      })
    }
  }

  handleFieldsUpdate = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    let newSearch = this.state.searchFields
    newSearch.text.value = e.target.value
    newSearch.text.touched = true
  }

  render () {
    return (
      <div className="App">
        <Header
          booklist = {this.state.booklist} 
          handleFieldsUpdate = {e => this.handleFieldsUpdate(e)}
          handleSearchSubmit = {e => this.handleSearchSubmit(e)}
        />
        <ResultList booklist={this.state.booklist} searchFields={this.state.searchFields}/>

      </div>
    );
  }
}

export default App;
