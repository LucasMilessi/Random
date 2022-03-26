import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandom } from '../actions';

const From = (props) => {// component stateless
  const [state, setState] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(fetchRandom(state));
  };
  return (
    <>
      <div>
        <h1>Palabras aleatorias</h1>
        <form onSubmit={onSubmit} className='formFrom-container'>
          <label htmlFor="list">Ingresa palabras separada por comas:</label>
          <br />
          <textarea id="list" style={{ width: "300px", height: "120px" }} 
            onChange={(e) => setState(e.target.value)}
          ></textarea>
          <button className="btn btn-warning m-2" type="submit" disabled={props.loading}>Random Palabras</button>
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


export default connect(stateMapToPros)(From)
