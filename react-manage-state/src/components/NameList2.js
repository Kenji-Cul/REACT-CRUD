import { useState, useReducer } from "react";

function NameList2() {
    const [ state, dispatch ] = useReducer((state, action) => {
         switch(action.type){
           case "SET_NAME":
             return { ...state, name: action.payload };
           case "ADD_NAME":
            return { 
              ...state, 
              names: [...state.names, state.name],
              name: "",
             };
         }
    }, {
      names: [],
      name: "",
    });
    return (
      <div className="App">
          {/* <Counter />
         <NameList /> */}
         <div>
          {state.names.map((name, index) => {
             return <div key={index}>{name}</div>
          })}
         </div>
            <input 
             type = "text"
             value={state.name}
             onChange={e => dispatch({ type: "SET_NAME", payload: e.target.value})}
  
             />
             {/* <div>Name = {state.name}</div> */}
             <button
              onClick={() => dispatch({type: "ADD_NAME"})}
             >Add Name</button>
      </div>
    );
  }

  
  export default NameList2;