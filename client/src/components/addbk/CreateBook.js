import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import FileUpload from './FileUpload';

class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      isbn:'',
      authors:'',
      description:'',
      published_date:'',
      publisher:''
    };
  }

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

    const options = {
      method: 'POST',
      headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Allow-Methods": "GET, POST" },
     data: data,
      url:'http://localhost:5000/api/bookss',
    };
    axios(options)
      .then(res => {
        this.setState({
          title: '',
          isbn:'',
          authors:'',
          description:'',
          published_date:'',
          publisher:''
        })
        this.props.history.push('/bk');
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      })
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/bk" className="btn btn-outline-warning float-left">
                  Show News List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h4 className="text-center">Add News</h4>
              <form noValidate onSubmit={this.onSubmit}>
              <FileUpload />
                <div className='form-group'>
                
                  <input
                    type='text'
                    placeholder='Title of the Book'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='ISBN'
                    name='isbn'
                    className='form-control'
                    value={this.state.isbn}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='Describe this book'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='published_date'
                    name='published_date'
                    className='form-control'
                    value={this.state.published_date}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Publisher of this Book'
                    name='publisher'
                    className='form-control'
                    value={this.state.publisher}
                    onChange={this.onChange}
                  />
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4">create News</button>
                   
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBook;
