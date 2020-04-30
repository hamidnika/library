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
       <Link to="/bk" className="btn btn-success text-white font-small font-weight-bold p-1">
              <h7>Back to Current News</h7>
              </Link>
          <div className="row">
              <h5 className="m-2 rounded text-white font-weight-bold">ARCHIVE of News-Persian Communities in Germany</h5>
             
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

export default Archive;
