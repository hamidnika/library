import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";

class Saved extends Component {

  state = {
    savedBooks: [],
    screenWidth: window.innerWidth
  }

  componentDidMount() {
    this.loadSavedBooks();
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({screenWidth: window.innerWidth}, () => console.log(this.state.screenWidth))
  }

  loadSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({ savedBooks: res.data }))
  }

  deleteSavedBook = (event, googleId) => {
    event.preventDefault();
    API.deleteSavedBook(googleId)
      .then(res => this.loadSavedBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <div className="col-md-12 border border-rounded p-3 mb-2 bg-secondary">
          <h3 className="col-md-12 rounded bg-dark text-warning p-2">Saved Books</h3>
            {!this.state.savedBooks.length ? (
              <h6 className="text-center text-white">No books to display currently</h6>
            ) : (
                <BookList>
                  {this.state.savedBooks.map(book => {
                    return (
                      <BookListItem
                        key={book.googleId}
                        googleId={book.googleId}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        thumbnail={book.thumbnail}
                        href={book.href}
                        date={API.getDate(book._id)}
                        saved={true}
                        clickEvent={this.deleteSavedBook}
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

export default Saved;