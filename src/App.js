import React from 'react';
import './App.css';
import { logicalExpression, tsImportEqualsDeclaration } from '@babel/types';
import ProptimusOmega from './proptimusOmega.js'
import ProptimusBeta from './proptimusBeta.js'
import ProptimusPrime from './proptimusPrime.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      callForHelp: "https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png",
      proptimusPhotos: {
        "Proptimus Prime": "http://pngimg.com/uploads/transformers/transformers_PNG3.png",
        "Proptimus Beta": "https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png",
        "Proptimus Omega": "https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726",
      },
      activeProp: "",
      catchPhrase1:"I am the first drilled prop - Proptiumus Omega...",
      catchPhrase2:"I am the middle drilled prop - Proptimus Beta...",
      catchPhrase3: "I am the last drilled prop = Proptimus Prime!!!"
    }
  }


  callForBadHelp = (event) => {
    this.setState({activeProp:"Proptimus Omega"})
    console.log("Bad Help Has Arrived")
  }

  callForBetterHelp = (event) => {
    this.setState({activeProp:"Proptimus Beta"})
    console.log("Better Help Has Arrived")
  }

  gimmeAllYouGot = (event) => {
    this.setState({activeProp:"Proptimus Prime"})
    console.log("It's time to kick brass!")
  }

  sendThemHome = (event) => {
    this.setState({activeProp: ""})
    console.log("I'm Proptimus Prime, and I send this message to any surviving Proptobots taking refuge among the state: We are here. We are waiting.")
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={this.state.callForHelp}
            className="App-logo"
            alt="logo"
            onClick={this.callForBadHelp}
          />

          {this.state && this.state.activeProp === "Proptimus Omega" /*Which Proptobot should be checked for?*/ &&
          <>
            <p className="catchPhrase">Will this do, human?</p>
            <ProptimusOmega
            proptimusPhotos={this.state.proptimusPhotos}
            callForBetterHelp = {this.callForBetterHelp}
            catchPhrase = {this.state.catchPhrase1}
              /*Specify your Proptobot here.*/
              /*You need to pass all of your props to this component here.*/
            />
          </>
          }

          {this.state && this.state.activeProp === "Proptimus Beta" /*Which Proptobot should be checked for?*/ &&
          <>
            <p className="catchPhrase">Are you sure this situation warrents this?</p>
            <ProptimusBeta
            proptimusPhotos={this.state.proptimusPhotos}
            gimmeAllYouGot = {this.gimmeAllYouGot}
            catchPhrase = {this.state.catchPhrase2}
              /*Specify your Proptobot here.*/
              /*You need to pass all of your props to this component here.*/
            />
          </>
          }

          {this.state && this.state.activeProp === "Proptimus Prime" /*Which Proptobot should be checked for?*/ &&
          <>
            <p className="catchPhrase">There are no bigger guns!</p>
            <ProptimusPrime
            proptimusPhotos={this.state.proptimusPhotos}
            sendThemHome = {this.sendThemHome}
            catchPhrase = {this.state.catchPhrase3}
              /*Specify your Proptobot here.*/
              /*You need to pass all of your props to this component here.*/
            />
          </>
          }

        </header>
      </div>
    );
  }
}
