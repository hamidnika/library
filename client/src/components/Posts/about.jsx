import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import './Posts.css';

export default class About extends Component {
  render() {
    return (
      <div>
      {/*   <Image src="assets/dog-people.jpg" className="header-image" /> */}
        <div>
          <Col xs={12} sm={8} smOffset={2}>
          <img src={require('./lib.jpg')} class="img-fluid responsive" alt="asso"/>
            <h3>About Persian Associations in Germany</h3>
            <p className="text-justify font-italic">
            In this website, we try to make network via chat application and also sharing latest news and developments of Persian community in Germany. In addition, Having access to search and save books via Googlebooks is another feature of this website. The massive flight of Persians to Germany considerably changed the structure of the Persian colony as regards age, sex and profession. Four dacades ago, men formed the large majority of the Persians living in Germany, but this ratio had changed significantly in the 1990s. For instance, the ratio of 4.33 men to every woman in 1961 had dropped to 1.56 men to a woman in 1995 (Statistische Bundesmat, pp. 23 ff.; Schröder, Schukar, and Adineh, p. 21). Before the revolution, Persians within the age group of 1 to 15 years made an insignificant percentage of their community as a whole, but in 1995 their proportion rose to 19.3 percent with 20,600 individuals. In the same year, the group aged between 30 to 45 years, with 43,800 individuals, formed the largest part (40.9 percent) of the Persian population in Germany; it was followed by the age group between 15 and 30 years, which amounted to 20.4 percent of the total number. Physicians formed the most important group of Persians with compulsory social security in the year 1975, but their proportion together with pharmacists only amounted to 4.1 percent in the year 1992. The number of students in 1975 amounted to about 3,457 or about 18 percent of total number of Persians, but this proportion decreased to only 11 percent in the year 1991. In the same year, the largest proportion of working Persians subscribing to social security consisted of merchants, who made up 8.9 percent of the community, followed by professional engaged in health services with 7.2 percent, excluding doctors and pharmacists. Engineers, office workers, and assistants formed the next major professional group with 6.4 and 6.1 percent. Twenty-two percent of the employees were women. In 1995, most Persians lived in Hamburg, Berlin, Frankfurt, Cologne, Munich, Hanover, Dortmund, Düsseldorf, Aachen, and Essen, dispersed among several districts.   
            </p>
          </Col>
        </div>
      </div>
    )
  }
}