import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import { FaRegSave, FaSearch } from 'react-icons/fa';
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
            <div className="col-md-2 col-sm-2">
            <div className="p-1"><Link to="/archive" className="btn btn-success font-weight-bold font-small font-weight-bold p-1">Go to Archive of News<h6><FaRegSave /></h6></Link></div>
            <div className="p-1"><a href="https://hamidnika.github.io/coronaintera/" className="btn font-small font-weight-bold text-white purpllle p-1">Latest News of Corona</a></div>
            </div>
            <div className="col-md-8 col-sm-8 mt-2 pt-2">
              <h6 className="text-center font-weight-bold">News of Persian Communities in Germany</h6>
            </div>

            <div className="col-md-2 col-sm-2">
           
            <Link to="/create-book" className="btn text-white purpllle p-0"><p className="purpllle rounded font-small m-0 p-1 font-weight-bold">Just Members can Add 
<i class="fas fa-plus pl-1"> News </i>
            </p></Link>
            <div className="p-1"><a href="https://searchpart.herokuapp.com/" className="btn font-small font-weight-bold text-white purpllle p-1">Search Archive of Persian News<h6><FaSearch /></h6></a></div>
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
