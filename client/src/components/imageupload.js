import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


/* import FileUpload from './FileUpload'; */

class Imageupload extends Component {
 
   state = {
      images: []
    };
 

  componentDidMount() {
    axios
      .get('http://localhost:5000/apimages/user-profile')
      .then(res => {
          console.log(res.data.user)
        this.setState({
          images: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };

 
  render() {
    
    const image = this.state.images;
    console.log("PrintBook: " + image);
   

   
   
    return (
      
      <div className="ShowBookList contain rounded">
    
        

          <div className="row">
          <div className="list">
        
          <img src={this.state.images} alt='image of house' />
          </div>
          </div>    
      </div>
    );
  }
}

export default Imageupload;
