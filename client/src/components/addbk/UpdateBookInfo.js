import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';

class UpdateBookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      isbn: '',
      authors: '',
      description: '',
      published_date: '',
      publisher: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('https://mernudem.herokuapp.com/api/bookss/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          title: res.data.title,
          isbn: res.data.isbn,
          authors: res.data.authors,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher
        })
      })
      .catch(err => {
        console.log("Error from UpdateBookInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      isbn: this.state.isbn,
      authors: this.state.authors,
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher
    };

    axios
      .put('https://mernudem.herokuapp.com/api/bookss/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-book/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateBookInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateBookInfo rounded p-2">
          <div className="row p-4">
            <div className="col-md-8 m-auto pl-2">
              <Link to="/bk" className="btn btn-outline-warning text-white purplle font-small">
                  Show News List
              </Link>
            </div>
            <div className="col-md-4 m-auto p-1">
              <p className="display-6 text-center text-warning">Edit and Update News</p>
            </div>
          </div>
<div className="row p-4">
          <div className="col-md-12 m-auto p-2">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of News'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="isbn">Code of News</label>
              <input
                type='text'
                placeholder='Code of News'
                name='isbn'
                className='form-control'
                value={this.state.isbn}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="authors">Authors</label>
              <input
                type='text'
                placeholder='Authors'
                name='authors'
                className='form-control'
                value={this.state.authors}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Text of News</label>
              <input
                type='text'
                placeholder='Text of News'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="published_date">Date of News</label>
              <input
                type='date'
                placeholder='Date of News'
                name='published_date'
                className='form-control'
                value={this.state.published_date}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="publisher">Publisher</label>
              <input
                type='text'
                placeholder='Publisher of News'
                name='publisher'
                className='form-control'
                value={this.state.publisher}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-warning btn-block text-warning purplle">Update News</button>
            </form>
          </div>
          </div>
      </div>
    );
  }
}

export default UpdateBookInfo;
