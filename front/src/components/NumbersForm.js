import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandomNumber } from '../actions';
import '../index.css'

const NumbersForm = (props) => {// component stateless
  const [state, setState] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(fetchRandomNumber(state));
  };

  return(
    <> 
      <div>
        <h1>Números Random</h1>
        <form className="formNumber" onSubmit={onSubmit}>
        <label >Ingrese número mínimo: </label>

        <input id="number1" className='formNumber-input' type="number" min="0" max="100"
        onChange={(e) => setState({...state,number1: e.target.value})}>
        </input>
        <br/>
        <label htmlFor="number2">Ingrese número máximo: </label>

        <input className='formNumber-input' id="number2" type="number" min="0" max="100"
        onChange={(e) => setState({...state,number2: e.target.value})}>
        </input>

        <button className="btn btn-warning m-2" type="submit" disabled={props.loading}>Random Números</button>
        </form>
      </div> 
    </>
  )
}

const stateMapToPros = state => {
  return {
    loading: state.view.loading
  }
}

export default connect(stateMapToPros)(NumbersForm) 