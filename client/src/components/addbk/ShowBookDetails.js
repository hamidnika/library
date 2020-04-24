import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';

class showBookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('https://mernudem.herokuapp.com/api/bookss/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          book: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowBookDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('https://mernudem.herokuapp.com/api/bookss/'+id)
      .then(res => {
        this.props.history.push("/bk");
      })
      .catch(err => {
        console.log("Error form ShowBookDetails_deleteClick");
      })
  };


  render() {

    const book = this.state.book;
    let BookItem = <div>
      <table className="">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody >
          <tr className="border">
            <th scope="row"></th>
            <td className="p-2">Title</td>
            <td>{ book.title }</td>
          </tr>
          <tr className="border">
            <th scope="row"></th>
            <td className="p-2">Authors</td>
            <td>{ book.authors }</td>
          </tr>
          <tr className="border">
            <th scope="row"></th>
            <td className="p-2">Code Of News</td>
            <td>{ book.isbn }</td>
          </tr>
          <tr className="border">
            <th scope="row"></th>
            <td className="p-2">Publisher</td>
            <td>{ book.publisher }</td>
          </tr>
          <tr className="border">
            <th scope="row"></th>
            <td className="p-2">Date of News</td>
            <td>{ book.published_date }</td>
          </tr>
          <tr className="border">
            <th scope="row"></th>
            <td className="p-2">Text of News</td>
            <td>{ book.description }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowBookDetails">
      
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/bk" className="btn btn-outline-warning text-warning purplle float-left">
                  Show News List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h4 className="text-center text-warning">News Record: View Info</h4>
            
            </div>
          </div>
          <div>
            { BookItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger purplle text-warning btn-lg btn-block" onClick={this.onDeleteClick.bind(this,book._id)}>Delete News</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-book/${book._id}`} className="btn btn-outline-warning text-warning purplle btn-lg btn-block">
                    Edit News
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default showBookDetails;
