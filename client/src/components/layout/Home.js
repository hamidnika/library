import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
              <div class="col">
                1 of 3
              </div>
              <div class="col-6">
                2 of 3 (wider)
              </div>
              <div class="col">
                3 of 3
              </div>
            </div>
            <div class="row">
              <div class="col">
                1 of 3
              </div>
              <div class="col-5">
                2 of 3 (wider)
              </div>
              <div class="col">
                3 of 3
              </div>
            </div>
          </div>    
        )
    }
}
