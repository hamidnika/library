import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
/* import FileUpload from './FileUpload'; */

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
      .get('https://mernudem.herokuapp.com/api/bookss')
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
            <div className="col-md-1 col-sm-1">
            <Link to="/archive" className="btn text-white purpllle p-1">Archive of News</Link>
            </div>
            <div className="col-md-9 col-sm-9">
              <p className="text-center mt-2 pt-2 font-weight-bold">News of Persian Communities in Germany</p>
            </div>

            <div className="col-md-2 col-sm-2">
            <div className="p-1"><a href="https://hamidnika.github.io/coronaintera/" className="btn text-warning purpllle p-1">Latest News of Corona</a></div>
            <Link to="/create-book" className="btn text-white purpllle p-0"><p className="purpllle rounded m-0 p-1">Just members can upload News
              + Add News
            </p></Link>
            </div>

          </div>

          <div className="row">
          <div className="list">
                {bookList.reverse()}
          </div>
          </div>    
      </div>
    );
  }
}

export default ShowBookList;
