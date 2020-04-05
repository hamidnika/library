import React, { Component } from "react";
import { Row, /* Container */ } from "../components/Grid";
import Button from "../components/Button";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";
import im from "../img/persians.jpg"
import { FaSearch } from 'react-icons/fa';

class Search extends Component {

  state = {
    books: [],
    bookSearch: "",
    savedBooks: [],
    screenWidth: window.innerWidth,
    searched: ""
  };

  componentDidMount() {
    this.loadSavedBooks();
    window.addEventListener('resize', this.updateDimensions);
  }

  checkIfSaved = googleId => {
    // Cannot use a forEach here because a return statement won't break the loop
    for (let i in this.state.savedBooks) {
      if (this.state.savedBooks[i].googleId === googleId) return true;
    }
    return false;
  }

  checkSavedDate = googleId => {
    for (let i in this.state.savedBooks) {
      if (this.state.savedBooks[i].googleId === googleId) return API.getDate(this.state.savedBooks[i]._id);
    }
    return null;
  }

  updateDimensions = () => {
    this.setState({screenWidth: window.innerWidth});
  }

  loadSavedBooks = () => {
    API.getSavedBooks()
      .then(res => {
        this.setState({ savedBooks: res.data });
      })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      searched: this.state.bookSearch,
      bookSearch: ""
    });
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({ books: res.data }, () => console.log(res.data)))
      .catch(err => console.log(err));
  };

  deleteSavedBook = (event, googleId) => {
    event.preventDefault();
    API.deleteSavedBook(googleId)
      .then(res => this.loadSavedBooks())
      .catch(err => console.log(err));
  };

  handleSave = (event, googleId, title, authors, description, href, thumbnail) => {
    event.preventDefault();
    API.saveBook({ googleId, title, authors, description, href, thumbnail })
      .then(res => this.loadSavedBooks());
  };

  render() {
    return (
      <div>
        <Row>
          <div className="col-md-3 rounded bg-dark pt-4">
            <h5>Search and save books from google!</h5>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="bookSearch"
                  name="bookSearch"
                  value={this.state.bookSearch}
                  onChange={this.handleInputChange} />
              </div>
              <Button onClick={this.handleFormSubmit}><h6>Search <FaSearch /></h6></Button>
              <img src={im} alt="logo" style={{height: this.state.books.length*5}} onChange={this.handleInputChange} />
            </form>
          </div>
          <div className="col-md-9 border rounded purplle pt-4 ">
            {this.state.searched === "" ? (
            <h5  className="text-white">Results</h5>
            
            ) : (
              <h5 className="bg-dark text-warning">Results for {this.state.searched}</h5>
            )}
            {!this.state.books.length ? (
              <h6 className="text-center text-white">No books to display currently</h6>
            ) : (
                <BookList>
                  {this.state.books.map(book => {
                    return (
                      <BookListItem
                        key={book.volumeInfo.infoLink}
                        googleId={book.id}
                        title={book.volumeInfo.title || "Title Unavailable"}
                        authors={book.volumeInfo.authors || ["Unknown Author"]}
                        description={book.volumeInfo.description || "No description available"}
                        thumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "img/placeholder.png"}
                        href={book.volumeInfo.infoLink}
                        saved={this.checkIfSaved(book.id)}
                        clickEvent={this.checkIfSaved(book.id)
                          ? this.deleteSavedBook
                          : this.handleSave}
                        date={this.checkSavedDate(book.id)}
                        screenWidth={this.state.screenWidth}
                      />
                    );
                  })}
                </BookList>
              )}
          </div>
        </Row>
        <Row>
          <div className="pt-3 text-justify font-italic">
            <p>Google Books (previously known as Google Book Search and Google Print and by its codename Project Ocean) is a service from Google Inc. that searches the full text of books and magazines that Google has scanned, converted to text using optical character recognition (OCR), and stored in its digital database.Books are provided either by publishers and authors through the Google Books Partner Program, or by Google's library partners through the Library Project.Additionally, Google has partnered with a number of magazine publishers to digitize their archives.The Publisher Program was first known as Google Print when it was introduced at the Frankfurt Book Fair in October 2004. The Google Books Library Project, which scans works in the collections of library partners and adds them to the digital inventory, was announced in December 2004.
The Google Books initiative has been hailed for its potential to offer unprecedented access to what may become the largest online body of human knowledge and promoting the democratization of knowledge. However, it has also been criticized for potential copyright violations,and lack of editing to correct the many errors introduced into the scanned texts by the OCR process.As of October 2015, the number of scanned book titles was over 25 million, but the scanning process has slowed down in American academic libraries.Google estimated in 2010 that there were about 130 million distinct titles in the world,and stated that it intended to scan all of them.As of October 2019, Google celebrated 15 years of Google Books and provided the number of scanned books as more than 40 million titles.
            </p>
          </div>
        </Row>
      </div>
    )
  }
}

export default Search;