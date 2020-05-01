import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';


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

    axios
      .post('https://mernudem.herokuapp.com/api/bookss', data)
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
      <div className="CreateBook rounded p-2">
          <div className="row">
            <div className="col-md-2 m-auto">
              <Link to="/bk" className="btn btn-outline-warning font-small text-white purplle">
                  Show News List
              </Link>
            </div>
            <div className="col-md-10 m-auto">
              <p className="text-center text-warning">Add your Own News</p>
              </div>
              </div>

              <div className="row p-4">
              <div className="col-md-12 m-auto">
              <form noValidate onSubmit={this.onSubmit}>
              
                <div className='form-group'>
                
                  <input
                    type='text'
                    placeholder='Title of the News'
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
                    placeholder='Code of News'
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
                    placeholder='Text of News'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='Publisher of News'
                    name='publisher'
                    className='form-control'
                    value={this.state.publisher}
                    onChange={this.onChange}
                  />
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-warning purplle text-warning btn-block mt-4">Create News</button>
                   
              </form>
          </div>
          </div>
        </div>
    );
  }
}

export default CreateBook;
