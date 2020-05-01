import React, { Component } from "react";
import { Row } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";
import { FaRegSave } from 'react-icons/fa';

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
      <div>
        <Row>
          <div className="col-md-12 rounded savedcolor">
          <div className="p-2"><h6 className="col-md-12 rounded purpllle text-white p-2">Saved Books <FaRegSave /></h6></div>
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
        <Row>
          <div className="text-justify font-italic">
            <p>Here it is possible for users to see the books which were saved. In fact, "saved books" part is a good place for finding related books.Book Search deal would make it far easier to find and preview books that are either no longer printed or are simply difficult to track down.This would include foreign language books that might typically not be widely available for purchase. Through the service, you'd be able to read 20 percent of the text.Google has been scanning books at libraries around the world since 2004 to offer users the ability to search through those books for free. 
            Authors and publishers would receive payments when users read their books online. A Books Rights Registry created through the settlement would work to track down rights-holders and make sure they received their royalties.
           
            </p>
          </div>
        </Row>
        <div className="dashbo"></div>
      </div>
    )
  }
}

export default Saved;