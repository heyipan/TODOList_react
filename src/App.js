import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer/rootReducer'
import './App.css';
import Todos from "./todos/todos";
import Filter from "./filter/filter";

const store = createStore(reducer);


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
              <Todos/>
              <Filter/>
          </div>
        </Provider>
    );
  }
}

export default App;
