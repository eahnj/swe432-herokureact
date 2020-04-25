import React, { Component } from "react";
import { Paper, Button } from '@material-ui/core';

const publicURL = 'https://swe432-servlet.herokuapp.com';
var bestPizza = null;
var serviceSpeedManhattan = null;
var serviceSpeedBlaze = null;
var bestLocation = null;

export const getLocationUrlData = () => {
  return {
      url:
          process.env.NODE_ENV === 'production'?
          publicURL
          :`${window.location.origin}`,
      hash: `${window.location.hash}`
  };
};
export const servicePath ='/echo';

const url = `${getLocationUrlData().url}${servicePath}`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {response: null};
  }

  handleOptionChange = changeEvent => {
    if(changeEvent.target.name === "bestPizza") {
      bestPizza = changeEvent.target.value;
    }
    if(changeEvent.target.name === "serviceSpeedManhattan") {
      serviceSpeedManhattan = changeEvent.target.value;
    }
    if(changeEvent.target.name === "serviceSpeedBlaze") {
      serviceSpeedBlaze = changeEvent.target.value;
    }
    if(changeEvent.target.name === "bestLocation") {
      bestLocation = changeEvent.target.value;
      var otherText = document.getElementById('otherText');
      if(changeEvent.target.value === "otherLocation") {
        otherText.style.display='block'
      } else {
        otherText.style.display='none'
      }
    }
  };

  fetchData = async()=>{
        if(bestLocation === "otherLocation") {
          bestLocation = document.getElementById('otherText').value;
        }
        const body = `bestPizza=${bestPizza}&serviceSpeedManhattan=${serviceSpeedManhattan}&serviceSpeedBlaze=${serviceSpeedBlaze}&bestLocation=${bestLocation}`;

        console.log("Before fetch");
        const res = await fetch(url,
          {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              // 'Content-Type': 'application/json'
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            //redirect: 'follow', // manual, *follow, error
            //referrerPolicy: 'no-referrer', // no-referrer, *client
            body  // body data type must match "Content-Type" header
          }
        );
        const json = await res.json();
        console.log(json)
        this.setState({response: json});
  }

  render() {
    return (
      <div id = "container">
        <div>
          <h1>Abhilaash Velamati and Edwin Ahn</h1>
          <h2> Assignment 7 </h2>
        </div>
        <div>
    			<p>
          Assignment 7 Collaboration Summary: Abhilaash worked on the React JS front end and Edwin worked on the tomcat backend.
    			</p>
    			<p>
          <br/>
    			Please fill out the following survey to the best of your ability and answer all of the questions.
    			<br/>
    			</p>
        </div>

    			<div id = "formQuestions">
            Best pizza on campus
            <br/>

    	      <input type="radio" onChange={this.handleOptionChange} id="manhattan" name="bestPizza" value="manhattan" />
    	      <label htmlFor="manhattan">Manhattan Pizza</label><br/>
    	      <input type="radio"  onChange={this.handleOptionChange} id="blaze" name="bestPizza" value="blaze" />
    	      <label htmlFor="blaze">Blaze Pizza</label><br/>
    	      <br/>

    	      Service Speed at Manhattan
    	      <br/>

    	      <input type="radio" onChange={this.handleOptionChange} id="fiveMinutesManhattan" name="serviceSpeedManhattan" value="fiveMinutesManhattan"/>
    	      <label htmlFor="fiveMinutesManhattan">05 minutes or less</label><br/>
    	      <input type="radio" onChange={this.handleOptionChange} id="tenMinutesManhattan" name="serviceSpeedManhattan" value="tenMinutesManhattan"/>
    	      <label htmlFor="tenMinutesManhattan">10 minutes</label><br/>
    	      <input type="radio" onChange={this.handleOptionChange} id="fifteenMinutesManhattan" name="serviceSpeedManhattan" value="fifteenMinutesManhattan"/>
    	      <label htmlFor="fifteenMinutesManhattan">15 minutes</label><br/>
    	      <input type="radio" onChange={this.handleOptionChange} id="thirtyMinutesManhattan" name="serviceSpeedManhattan" value="thirtyMinutesManhattan"/>
    	      <label htmlFor="thirtyMinutesManhattan">30 minutes or more</label><br/>
    	      <br/>

    	      Service Speed at Blaze
    	      <br/>

    	      <input type="radio" onChange={this.handleOptionChange} id="fiveMinutesBlaze" name="serviceSpeedBlaze" value="fiveMinutesBlaze"/>
    	      <label htmlFor="fiveMinutesBlaze">05 minutes or less</label><br/>
    	      <input type="radio" onChange={this.handleOptionChange} id="tenMinutesBlaze" name="serviceSpeedBlaze" value="tenMinutesBlaze"/>
    	      <label htmlFor="tenMinutesBlaze">10 minutes</label><br/>
    	      <input type="radio" onChange={this.handleOptionChange} id="fifteenMinutesBlaze" name="serviceSpeedBlaze" value="fifteenMinutesBlaze"/>
    	      <label htmlFor="fifteenMinutesBlaze">15 minutes</label><br/>
    	      <input type="radio" onChange={this.handleOptionChange} id="thirtyMinutesBlaze" name="serviceSpeedBlaze" value="thirtyMinutesBlaze"/>
    	      <label htmlFor="thirtyMinutesBlaze">30 minutes or more</label><br/>
    	      <br/>

    	      Best location on campus for food
    	      <br/>

    	      <input type="radio"  onChange={this.handleOptionChange} id="jc" name="bestLocation" value="jc" />
    	      <label htmlFor="jc">Johnson Center</label><br/>
    	      <input type="radio"  onChange={this.handleOptionChange} id="mertenHall" name="bestLocation" value="mertenHall" />
    	      <label htmlFor="mertenHall">Merten Hall</label><br/>
    	      <input type="radio"  onChange={this.handleOptionChange} id="otherLocation" name="bestLocation" value="otherLocation" />
    	      <label htmlFor="otherLocation">Other</label>
            <input type="text" id="otherText" name="bestLocation" style={{display:'none'}} placeholder="Favorite food location" />
    	      <br/>

            <Button onClick={this.fetchData} variant="contained" color="primary" data-something="submit">
                 submit</Button>

    			</div>
          <div>
            <Paper elevation={1} style={
                {height:100, width:500, wordBreak: "break-all", padding:4}
            } >
              {this.state.response?JSON.stringify(this.state.response, null, 1):
                (<p>

                </p>)}
            </Paper>
          </div>
      </div>
    );
  }
}

export default App;
