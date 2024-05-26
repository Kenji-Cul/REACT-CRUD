import { useState, useReducer, useMemo, useCallback, useEffect, useRef } from "react";
import NameList from "./components/NameList";
import UserForm from "./components/UserForm";
import NameList2 from "./components/NameList2";
import SortedList from "./components/SortedList";
import Stopwatch from "./components/Stopwatch";


// function Counter() {

//   let [count, setCount] = useState(10);

//   function addOne() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//      <button
//      onClick={addOne}
//      >Count = {count}</button>
//     </>
//   )
// }

// interface Pokemon {
//   id: number;
//   name: string;
//   type: string[];
//   hp: number;
//   attack: number;
//   defense: number;
//   special_attack: number;
//   special_defense: number;
//   speed: number;
// }


// function usePokemon(): {
   
//     pokemon: Pokemon[]; } {

//     const [ pokemon, setPokemon ] = useState<Pokemon[]>([]);

//     useEffect(() => {
//        fetch("/pokemon.json")
//        .then((response) => response.json())
//        .then((data) => setPokemon(data));
//     }, []);

//     return { pokemon };
// }


function App() {
  // const [numbers] = useState([10, 20, 30]);

  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);

  // const countTotal = count1 + count2;

  // const total = useMemo(
  //   () => numbers.reduce((acc, number) => acc + number, 0),
  //   [numbers]
  // );

  // const [names] = useState(["John", "Paul", "George", "Ringo"]);

  // const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);

  // const [names, setNames] = useState([]);

  // useEffect(() => {
  //     fetch("names.json")
  //     .then((response) => response.json())
  //     .then((data) => setNames(data));
  // }, []);

  // const [selectedNameDetails, setSelectedNameDetails] = useState(null);

//   const [selectedName, setSelectedName] = useState(null);

//   useEffect(() => {
//      if(selectedName) {
//     fetch(`/${selectedName}.json`)
//     .then((response) => response.json())
//     .then((data) => setSelectedNameDetails(data));
//      }
// }, [selectedName]);


  // const onSelectedNameChange = (name) => {
  //   fetch(`/${name}.json`)
  //   .then((response) => response.json())
  //   .then((data) => setSelectedNameDetails(data));
  // };


  // const inputRef = useRef(null);

  // useEffect(() => {
  //    inputRef.current.focus();
  // }, []);

  // const idRef = useRef(1);

  // const [names, setNames] = useState([
  //   {id: idRef.current++, name: "John"},
  //   {id: idRef.current++, name: "Jane"},
  // ]);

  // const onAddName = () => {
  //    setNames([...names, {
  //     id: idRef.current++,
  //     name: inputRef.current.value,
  //   }]);
  //    inputRef.current.value = "";
  // };

  // const { pokemon } = usePokemon();

  return (
    <>
    {/* <div>
      {names.map((name) => (
        <div key={name.name}>{name.id} - {name.name}</div>
      ))}
    </div>
    <input type="text" ref={inputRef}/>
    <button
    onClick={onAddName}
    >Add Name</button> */}
    {/* <div>Names: {names.join(", ")}</div>; */}
    {/* <div>
      <div>
        {names.map((name,index) => 
         
       (
        <button 
        key={index}
        onClick={() => onSelectedNameChange(name)}
        >{name}</button> )
      )}
      </div>
      <div>{JSON.stringify(selectedNameDetails)}</div>
    </div>; */}
      {/* <div>
        Total: {total}
      </div>

      <div>
        Names: {names.join(", ")}
      </div>

      <SortedList list={names} sortFunc={sortFunc}/>
      <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
      <div>Total: {countTotal}</div> */}
     
     {/* {JSON.stringify(pokemon)} */}
    </>
  )
}

export default App; 
