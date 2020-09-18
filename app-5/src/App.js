import React, {Component} from 'react';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://www.thebalanceeveryday.com/thmb/Vd8ii9Qoccbo60iZStrB4wemZp8=/3111x2333/smart/filters:no_upscale()/Random-Drawing-by-Materio-GettyImages-95442265-5b4ba4ff46e0fb00378f364a.jpg"} />
      </div>
    )
  }
}

export default App;
