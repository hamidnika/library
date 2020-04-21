import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/bookss')
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };

 
  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    if(!books) {
      bookList = "there is no book recored!";
    } else {
      bookList = books.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }
   
    return (
      <div className="ShowBookList contain rounded">
        
          <div className="row">
            <div className="col-md-10">
            <a href="https://hamidnika.github.io/coronaintera/" className="btn btn-dark text-warning elem">Latest News of Corona in the world</a>
              <h3 className="text-center mt-2 pt-2">News of Persian Communities in Germany</h3>
            </div>

            <div className="col-md-2 mt-2">
            <p className="purplle">Just members can upload News</p>
              <Link to="/create-book" className="btn purpllle text-white float-right">
              
                + Add News
              </Link>
             
            </div>

          </div>

          <div className="row">
          <div className="list">
                {bookList}
          </div>
          </div>    
      </div>
    );
  }
}

export default ShowBookList;
