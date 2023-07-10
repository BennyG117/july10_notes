import logo from "./logo.svg";
import "./App.css";
import "./lions.css";
import { styled } from "styled-components";
import Post from "./components/Post";
import axios from "axios";
import { useEffect } from "react";



//TODO: fetch returns a promise (then - resolves or catch - error)

// import home from './page/home';

function App() {

//TODO: using fetch below is an option when you're not using axios, but adxios streamlines it to make it faster
  //convert the following to json
  // const getQuote = () => {
  //   fetch("https://api.themotivate365.com/stoic-quote")
  //     .then((res) => res.json())
  //     //(above line & below line) data comes back in a raw format in json, then data turns it inot the joson we're looking for
  //     .then((data) => console.log(data))
  //     //   {console.log(res)})
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  //Faster solution to using fetch constantly use and import and npm start with axios (as seen below instead of const getQuote above) // no need for res.json like in regular fetch*
  
  const getQuoteAxios = () => {
    axios.get("https://api.themotivate365.com/stoic-quote")
    .then (res=> console.log(res))
    .catch(err=> console.log(err))
  }

  //TODO: Reminder to comment out default added react.strict inside (INDEX.JS) so it doesn't call the app twice when loading*
  useEffect(getQuoteAxios, [])
//   //checking console for log -- triggering everytime the app loads
//   console.log("hi!");
// }, [])




  return (
    <div className="App">
      {/* <Home/> */}
      <h1>Lion Motivation</h1>
      {/* switched below from getQuote to getQuoatAxios */}
      <button onClick={getQuoteAxios} className="bigButton">
        Fetch
      </button>

      <Post />
    </div>
  );
}

export default App;
