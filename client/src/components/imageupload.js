import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


/* import FileUpload from './FileUpload'; */

class Imageupload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImg: ''
    };
  };
  
  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};

  componentDidMount() {
    axios
      .get('http://localhost:5000/apimages/user-profile')
      .then(res => res.json())
      .then((data) => {
       
          var base64Flag = 'data:image/jpeg;base64,';
          var imageStr =
              this.arrayBufferToBase64(data.image.data.data);

        this.setState({
          profileImg: base64Flag + imageStr
        })
      })
      .catch(err =>{
        console.log('Error from ShowimageList');
      })
  };

 
  render() {
    
    const profileImg = this.state;
    console.log("PrintBook: " + profileImg);
 
    return (
      
      <div>
    
    <img src={profileImg} style={{height:'auto', width:245 }} className="img-responsive" alt='Helpfultext'/> 
      </div>
    );
  }
}

export default Imageupload;
