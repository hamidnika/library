import React, { Component } from 'react'
export default class Homepart extends Component {
    render() {
        return (
            <div>
                 <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body bg-secondary text-white">
              <h5 className="card-title text-warning bg-dark p-2 text-center">Our Mission for Booklook Network</h5>
              <div> <p className="card-text">In 2002, Hamid Nikou pursued the profession of translator after graduation and focused on the field of specialized literature in political science and the press. The result of these years was the translation of many articles and books in the field of political science and international relations. Strengthening capabilities in the field of translation and editing of texts gradually led to specialized compilation in the field of regional studies. This experience led him to continue his studies in European studies. I’m an Iranian political researcher / analyst and translator, pursuing PhD in political science, with focus on assessment of identity, culture and minorities in Middle East and Europe. I hold Master degree in Regional studies European studies</p></div> 
              <a href="http://hamid88.herokuapp.com/about.html" className="btn btn-primary buttnhome1">Hamid Nikou's Biography</a>
            </div>
          </div>
        </div>
      
        <div className="col-md-8">
          <div className="card aboutasso">
            <div className="card-body">
              <h4 className="card-title assotilte p-2 text-center">About our Associations</h4>
              <p className="card-text">As a non-profit, non-political, educational entity we are dedicated to the language, culture, history, literature, music, and art of Iran.I also worked as a researcher, translater and manager Assistant on Iran's strategic relations with Middle easterncountries, United States and European countries. At the same time, i worked as political analyst for newspapers and news agencies. I would like to challenge myself working in international environment and I believe that my experimental background and motivation would help me to have a valuable contribution. I have lots of experience in visiting and interview with European officials in Tehran and therefore i am familiar with real enviornment of international politics. I am motivated and also a teamcapable person. My strengths are communication and presentation skills. I am used to working under pressure and producing results to tight deadlines.</p>
              <img src={require('./associations.jpg')} class="img-fluid responsive" alt="asso"/>
              <a href="http://hamid88.herokuapp.com/about.html" className="btn btn-primary"> Go to association's pages</a>
            </div>
          </div>
          </div>
        
      </div>
      </div>
        )
    }
}
