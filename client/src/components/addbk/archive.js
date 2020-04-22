import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
/* import FileUpload from './FileUpload'; */

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  //https://mernudem.herokuapp.com/api/bookss
  componentDidMount() {
    axios
      .get('https://mernudem.herokuapp.com/api/bookss/archive')
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
       {/*   <FileUpload /> */}
          <div className="row">
            <div className="col-md-10 col-sm-10">
            <a href="https://hamidnika.github.io/coronaintera/" className="btn btn-dark text-warning">Latest News of Corona in the world</a>
              <h4 className="text-center mt-2 pt-2">News of Persian Communities in Germany</h4>
            </div>

            <div className="col-md-2 col-sm-2 mt-2">
            <p className="purpllle rounded m-0">Just members can upload News<Link to="/create-book" className="btn">
              + Add News
            </Link></p>
              
             
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

export default Archive;
