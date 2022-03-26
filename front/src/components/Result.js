import React from 'react'
import { connect } from 'react-redux';
const Result = (props) => {
  
  return <div className='formNumber-container'>
     {props.result && 'Resultado Lista: '+ props.result} 
  </div>
}


const stateMapToPros = state => {
  return {
    result: state.random.result?.randomList
  }
}


export default connect(stateMapToPros)(Result)
