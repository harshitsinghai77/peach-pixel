import React, { Component } from 'react';
import './style.css'
import Sidebar from '../sidebar/sidebar'
import image from '../login/image.jpg'

const axios = require("axios");

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
        results  : null    
    };
    
  }

  componentDidMount(){
    axios.get("http://localhost:5000/dashboard")
            .then((response) => {
                this.setState({results : response.data})
            }).catch((error) => {
                console.log(error)
    });
  }

  render() {

    const work = this.state.results ? this.state.results.map((item) => {
        return(
          <div onClick = {this.onClickHandler} className="grid-item"><div id="content" style={{backgroundImage:"url("+image+")", backgroundSize: "cover"}}></div></div>
        )
    })  : null

    return (
        <main>
            <div className="s-layout">
                <Sidebar />
            
                <main className="s-layout__content">
                    <div className="dash_contain">
                    <p>DASHBOARD</p>
                    <br /><br />
                        <h1>Design</h1>
                    <br /><br />
                                <div className="grid">
                                   {work}
                                </div>
                    </div>
                </main>
                </div>
		    </main>
    );
  }
}

export default Dashboard
