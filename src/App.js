import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { ageUp, ageDown } from './store/actions';
function App(props) {
  const history = props.history.map(h => <li>{h}</li>)
  return (
    <div className="App">
      <div>Age:<span> {props.person.age}</span></div>
      <div>
        <button
          type="button"
          onClick={props.handleUp}>Age up</button>
        <button
          type="button"
          onClick={props.handleDown}>Age Down</button>
      </div>
      <ul>
        {history}
      </ul>
    </div>
  );
}

const state = (state) => {
   return state;
}
const dispatch = (dispatch) => {
  return {
    handleUp: () => dispatch(ageUp(10)),
    handleDown: () => dispatch(ageDown(10))
  }


}
export default connect(state, dispatch)(App);
