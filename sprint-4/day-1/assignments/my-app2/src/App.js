
import './App.css';

import {useReducer} from "react"

const actions = { credit : "CREDIT", debit : "DEBIT", inpt1 : "INPUT_1" , inpt2 : "Input_2" }


const reducer = (state,action) => {

     switch (action.type) {

        case actions.inpt1 : {

              return {...state,credit : action.payload }

        }

        case actions.inpt2 : {

          return {...state,debit : action.payload }

        }

        case actions.credit : {

           return {...state, current : state.current + Number(state.credit)}

        }

        case actions.debit : {

          if ( state.current - state.debit <= 0 ) {

            return {...state, current : 0};   

          }

          return {...state, current : state.current - Number(state.debit) }


       }

       default : return state



     }



}



function App() {

  const [state,dispatch] = useReducer(reducer,{current : 0, credit : "", debit : ""});




  return (
    <div className="App">
      
          <input type = "number" value = {state.credit} onChange = {(e) =>  dispatch({ type : actions.inpt1 , payload : e.target.value })} ></input>
    
          <button onClick = { () => dispatch({type : actions.credit})}>Credit</button> <br></br>

          <input type = "text" value = {state.debit}  onChange = {(e) =>  dispatch({  type : actions.inpt2, payload : e.target.value })}></input>
    
          <button onClick = { () => dispatch({type : actions.debit})}>Debit</button>
          
          <h1>AMOUNT : {state.current}</h1>

    </div>
  );
}

export default App;
