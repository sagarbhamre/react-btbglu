import React, { useState } from 'react';
import './style.css';

/* https://www.coinbase.com/api/v2/assets/search?base=INR&country=IN */

export default function App() {
  var [appState, setAppstate] = useState(null);

  const fetchResult = () => {
    fetch(
      'https://www.coinbase.com/api/v2/assets/search?base=INR&country=IN'
    ).then((item) => {
      console.log(item);
      const retrievedJson = item.json();
      console.log('retrievedJson::', retrievedJson);
      retrievedJson.then((items) => {
        console.log(items);
        setAppstate = (items) => {
          appState = items;
        };
        console.log(appState);
      });
    });
  };

  return (
    <div>
      <button onClick={fetchResult}>Get Table</button>
      <table>
        <body>
          <tr>
            <td>Name</td>
            <td>symbol</td>
            <td>price</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </body>
      </table>
    </div>
  );
}
