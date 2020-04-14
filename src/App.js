// import React from 'react';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
//
// import './App.css';
// import Fetcher from './components/Fetcher';
// import Hooks, {aFunc} from './components/Hooks';
// import ToggleButtons from './components/ToggleButtons';
//
// const publicURL = 'https://swe432tomcat.herokuapp.com';
// export const getLocationUrlData = () => {
//   return {
//       url:
//           process.env.NODE_ENV === 'production'?
//           publicURL
//           :`${window.location.origin}`,
//       hash: `${window.location.hash}`
//   };
// };
// export const servicePath ='/echo';
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


import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div id = "container">
        <head>
    			<title>Assignment 5</title>
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
          <input type="button" value="Back" onclick="goBack()"/>
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
    	      <form method="post">
    	      <input type="radio" id="manhattan" name="bestPizza" value="manhattan" />
    	      <label for="manhattan">Manhattan Pizza</label><br/>
    	      <input type="radio" id="blaze" name="bestPizza" value="blaze" />
    	      <label for="blaze">Blaze Pizza</label><br/>
    	      <input type="radio" id="other" name="bestPizza" value="other" />
    	      <label for="other">Other</label>
    	      <br/>
    	      <br/>

    	      Service Speed at Manhattan
    	      <br/>

    	      <input type="radio" id="fiveMinutesManhattan" name="serviceSpeedManhattan" value="fiveMinutesManhattan"/>
    	      <label for="fiveMinutesManhattan">05 minutes or less</label><br/>
    	      <input type="radio" id="tenMinutesManhattan" name="serviceSpeedManhattan" value="tenMinutesManhattan"/>
    	      <label for="tenMinutesManhattan">10 minutes</label><br/>
    	      <input type="radio" id="fifteenMinutesManhattan" name="serviceSpeedManhattan" value="fifteenMinutesManhattan"/>
    	      <label for="fifteenMinutesManhattan">15 minutes</label><br/>
    	      <input type="radio" id="thirtyMinutesManhattan" name="serviceSpeedManhattan" value="thirtyMinutesManhattan"/>
    	      <label for="thirtyMinutesManhattan">30 minutes or more</label><br/>
    	      <br/>
    	      <br/>

    	      Service Speed at Blaze
    	      <br/>

    	      <input type="radio" id="fiveMinutesBlaze" name="serviceSpeedBlaze" value="fiveMinutesBlaze"/>
    	      <label for="fiveMinutesBlaze">05 minutes or less</label><br/>
    	      <input type="radio" id="tenMinutesBlaze" name="serviceSpeedBlaze" value="tenMinutesBlaze"/>
    	      <label for="tenMinutesBlaze">10 minutes</label><br/>
    	      <input type="radio" id="fifteenMinutesBlaze" name="serviceSpeedBlaze" value="fifteenMinutesBlaze"/>
    	      <label for="fifteenMinutesBlaze">15 minutes</label><br/>
    	      <input type="radio" id="thirtyMinutesBlaze" name="serviceSpeedBlaze" value="thirtyMinutesBlaze"/>
    	      <label for="thirtyMinutesBlaze">30 minutes or more</label><br/>
    	      <br/>
    	      <br/>

    	      Best location on campus for food
    	      <br/>

    	      <input type="radio" id="jc" name="bestLocation" value="jc"/>
    	      <label for="jc">Johnson Center</label><br/>
    	      <input type="radio" id="mertenHall" name="bestLocation" value="mertenHall"/>
    	      <label for="mertenHall">Merten Hall</label><br/>
    	      <input type="radio" id="other" name="bestLocation" value="other"/>
    	      <label for="other">Other</label>
    	      <br/>

    	      <br/>
    	      <input type="submit" value="Submit" />

    	      </form>
    			</div>

          <script>
            document.getElementById("pageLocation").innerHTML =
              "Page location is " + window.location.href;

              function goBack() {
                window.history.back()
              }
          </script>
      </div>
    );
  }
}

export default App;
