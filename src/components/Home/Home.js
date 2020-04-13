import React, { Component, Fragment } from 'react';
import { Badge } from 'reactstrap';
import  './Home.css';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:""
    }
  };

  componentDidMount() {
    let i =0;

    const typing = setInterval(() =>{
      const typed = this.state.text;
      const finalText= "Web Developer";

      if(i<finalText.length) { 
        this.setState ({
          text: typed + finalText[i]
        });
        i++

      } else {
        clearInterval(typing);
      }
    },178);
  }

  render() {
    return (
      <div className="typer" id="h">
       <h1 className="typer-text">{this.state.text}</h1>
      </div>
    //   <Fragment>
    //     <div className="position-relative">
        
    //       <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
    //         Test 1
    //         <Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" style={{ fontSize: '0.75rem' }}>New</Badge>
    //       </span>
          
    //       <span className="d-block pb-4 h2 text-dark border-bottom border-gray">React Project</span>
          
    //       <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
    //         Test 1
    //         <h1 className="typer-text">{this.state.text}</h1>
    //       </article>
          
    //     </div>
    //   </Fragment>
    );
  }
  
}

export default Home;