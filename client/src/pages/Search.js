import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import Button from "../components/Button";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";

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
      <Container>
        <Row>
          <div className="col-md-4 rounded bg-dark p-5">
            <h4>Search and save books from google!</h4>
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
              <Button onClick={this.handleFormSubmit}>Search</Button>

              <div className="ml-3 h" style={{height: this.state.books.length*112}} onChange={this.handleInputChange}></div>
            </form>
          </div>
          <div className="col-md-8 border border-rounded bg-secondary p-3 mb-4">
            {this.state.searched === "" ? (
            <h4  className="text-white">Results</h4>
            
            ) : (
              <h4 className="bg-dark text-warning">Results for {this.state.searched}</h4>
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
      </Container>
    )
  }
}

export default Search;