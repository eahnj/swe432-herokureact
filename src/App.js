// import React from 'react';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
//
// import './App.css';
// import Fetcher from './components/Fetcher';
// import Hooks, {aFunc} from './components/Hooks';
// import ToggleButtons from './components/ToggleButtons';
//
import React, { useState, Component } from "react";
import Skeleton from '@material-ui/lab/Skeleton';
import { Paper, Button, Grid } from '@material-ui/core';

const publicURL = 'https://swe432-servlet.herokuapp.com';
// const [response, setResponse] = useState(null);
var response = null;
// var setResponse = null;
var bestPizza = null;
var serviceSpeedManhattan = null;
var serviceSpeedBlaze = null;
var bestLocation = null;
// var bestLocationInput = null;

const body = `bestPizza=${bestPizza}&serviceSpeedManhattan=${serviceSpeedManhattan}&serviceSpeedBlaze=${serviceSpeedBlaze}&bestLocation=${bestLocation}`;
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

const fetchData= async()=>{
      if(bestLocation === "otherText") {
        bestLocation = document.getElementById('otherText').value;
      }
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
      response = json;
    }
//
// function App(props) {
//   const [weekDay, setWeekDay] = React.useState("Monday");
//   return (
//     <div style={{flexGrow: 1}}>
//       <Grid
//       container
//       direction="column"
//       justify="center"
//       alignItems="stretch"
//       spacing={2}
//       >
//         <Grid item xs>
//           <Paper elevation={1}>
//             <Hooks name={aFunc().name}/>
//             </Paper>
//         </Grid>
//         <Grid item xs>
//           <Paper elevation={1}>
//             <Fetcher  value={weekDay} url={`${getLocationUrlData().url}${servicePath}`}/>
//             </Paper>
//           </Grid>
//         <Grid item xs>
//           <Paper elevation={1}>
//             <ToggleButtons value={weekDay} onChange ={setWeekDay}/>
//           </Paper>
//           </Grid>
//       </Grid>
//     </div>
//   );
// }
//
// export default App;



class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // var otherText = document.getElementById('otherText');
  // }

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


  render() {
    // const [bestPizza, serviceSpeedManhattan, serviceSpeedBlaze, bestLocation] = React.useState();

    return (
      <div id = "container">
        <head>
    			<title>Assignment 7</title>
    		</head>
        <div>
          <h1>Abhilaash Velamati and Edwin Ahn</h1>
          <h2> Assignment 7 </h2>
        </div>
        <div>
          <br/>
    			<p>
          Collaboration Summary: It has a few forms and two javascripts functions
          that access the BOM. Abhilaash worked on the BOM while Edwin worked on the forms.
    			</p>
          <br/>
          <input type="button" value="Back" onClick="goBack()"/>
          <p id="pageLocation"></p>
    			<p>
          <br/>
    			Please fill out the following survey to the best of your ability and answer all of the questions.
    			<br/>
    			</p>
        </div>

          Best pizza on campus
          <br/>
    			<div id = "formQuestions">
    	      <input type="radio" onChange={this.handleOptionChange} id="manhattan" name="bestPizza" value="manhattan" />
    	      <label for="manhattan">Manhattan Pizza</label><br/>
    	      <input type="radio"  onChange={this.handleOptionChange} id="blaze" name="bestPizza" value="blaze" />
    	      <label for="blaze">Blaze Pizza</label><br/>
    	      <br/>
    	      <br/>

    	      Service Speed at Manhattan
    	      <br/>

    	      <input type="radio" onChange={this.handleOptionChange} id="fiveMinutesManhattan" name="serviceSpeedManhattan" value="fiveMinutesManhattan"/>
    	      <label for="fiveMinutesManhattan">05 minutes or less</label><br/>
    	      <input type="radio" onChange={this.handleOptionChange} id="tenMinutesManhattan" name="serviceSpeedManhattan" value="tenMinutesManhattan"/>
    	      <label for="tenMinutesManhattan">10 minutes</label><br/>
    	      <input type="radio" onChange={this.handleOptionChange} id="fifteenMinutesManhattan" name="serviceSpeedManhattan" value="fifteenMinutesManhattan"/>
    	      <label for="fifteenMinutesManhattan">15 minutes</label><br/>
    	      <input type="radio" onChange={this.handleOptionChange} id="thirtyMinutesManhattan" name="serviceSpeedManhattan" value="thirtyMinutesManhattan"/>
    	      <label for="thirtyMinutesManhattan">30 minutes or more</label><br/>
    	      <br/>
    	      <br/>

    	      Service Speed at Blaze
    	      <br/>

    	      <input type="radio" onChange={this.handleOptionChange} id="fiveMinutesBlaze" name="serviceSpeedBlaze" value="fiveMinutesBlaze"/>
    	      <label for="fiveMinutesBlaze">05 minutes or less</label><br/>
    	      <input type="radio" onChange={this.handleOptionChange} id="tenMinutesBlaze" name="serviceSpeedBlaze" value="tenMinutesBlaze"/>
    	      <label for="tenMinutesBlaze">10 minutes</label><br/>
    	      <input type="radio" onChange={this.handleOptionChange} id="fifteenMinutesBlaze" name="serviceSpeedBlaze" value="fifteenMinutesBlaze"/>
    	      <label for="fifteenMinutesBlaze">15 minutes</label><br/>
    	      <input type="radio" onChange={this.handleOptionChange} id="thirtyMinutesBlaze" name="serviceSpeedBlaze" value="thirtyMinutesBlaze"/>
    	      <label for="thirtyMinutesBlaze">30 minutes or more</label><br/>
    	      <br/>
    	      <br/>

    	      Best location on campus for food
    	      <br/>

    	      <input type="radio"  onChange={this.handleOptionChange} id="jc" name="bestLocation" value="jc" />
    	      <label for="jc">Johnson Center</label><br/>
    	      <input type="radio"  onChange={this.handleOptionChange} id="mertenHall" name="bestLocation" value="mertenHall" />
    	      <label for="mertenHall">Merten Hall</label><br/>
    	      <input type="radio"  onChange={this.handleOptionChange} id="otherLocation" name="bestLocation" value="otherLocation" />
    	      <label for="otherLocation">Other</label>
            <input type="text" id="otherText" name="bestLocation" style={{display:'none'}} placeholder="Favorite food location" />
    	      <br/>

    	      <br/>
            <Button onClick={this.fetchData} variant="contained" color="primary" data-something="submit">
                 submit</Button>

    			</div>

          <script>
            document.getElementById("pageLocation").innerHTML =
              "Page location is " + window.location.href;

              function goBack() {
                window.history.back()
              }
          </script>
          {response?JSON.stringify(response):
                (<React.Fragment>
                <Skeleton variant="text" />
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="rect" width={200} height={118} />
                </React.Fragment>)}
      </div>
    );
  }
}

export default App;
