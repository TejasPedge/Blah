import logo from './logo.svg';
import './App.css';

import {useReducer} from "react";


const actions = {
  
  increment : "INCREMENT_AMOUNT",

  decrement : "DECREMENT_AMOUNT"
 
}

const reducer = (state,action) => {
  
    switch (action.type) {


           case actions.increment : {

               return {...state, amount : action.payload + state.amount }

           }

           case actions.decrement : {

              return {...state, amount :  state.amount - action.payload  }

           }


    }

  }




function App() {

const initialState = {amount : 0};

const [state,dispatch] = useReducer(reducer,initialState);


  return (
    <div className="App">

          <h1>{state.amount}</h1>
   
          <button onClick={() => dispatch({type : actions.increment, payload : 1000 }) }>Increase</button>

          <button onClick={ () => dispatch({type : actions.decrement, payload : 500}) }>Decrease</button>

    </div>
  );
}

export default App;
