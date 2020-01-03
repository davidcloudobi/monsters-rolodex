// import React, {useState} from 'react';
// import './App.css';

// // ####################################################################################
// function Todo({ index, todo}) {
//   return (
//   <div className="todo">
// {todo.text} 
//   </div>
//   )

// }

// // #####################################################################################

// // #####################################################################################3


// function TodoForm({addTodo}) {
//   const [value, setValue] = useState('');

//   const handleSumbit = e => { 
//     e.preventDefault();
//     if(!value) return;
//     addTodo(value);
//     setValue("");


//   }

//   return(
//     <form onSubmit={handleSumbit}>
//       <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)}></input>
//     </form>
//   )

// }

// // ################################################################################################################

// function App() {

//   const [todos, setTodos] = useState([
//     {
//       text: 'Learn about React',
//       isCompleted: false
//   },
//     {
//       text: 'Study react Hooks',
//       isCompleted: false
//     },
//     {
//       text: 'Download Udemy courses',
//       isCompleted: false
//     }
// ]);


// const addTodo = text => {
//   const newTodo = [...todos, { text }];
//   setTodos(newTodo)
// }

// return (
// // ############ APP TEMPLATE ############

//   <div className="app">
//     <div className="todo-list">
//  {todos.map((todo, index)=>(
// <Todo key={index}  index={index} todo = {todo} />
//  ))}

//  <TodoForm addTodo={addTodo}  />
//     </div>
//   </div>
// )

// }

// export default App;



// ######################################################################


//  import React, {useState} from 'react';
//  import './App.css';

// const App = () => {
// const [state, setState] = useState("")

//   const update = (e) => {

//     const newTodo = [state, e.target.value];
//     setState(newTodo)
//    console.log(state)
//   }



//   const [main, setMain] = useState([])

  
// const submit = (e)=>{
// e.preventDefault();

//   setMain(state)
 
//   setState("")

// }

//  // console.log(main)
 
//   let array = [...state]







//  // console.log(state)

//   return (
//    <div>
//   <form >
//         <input type="text" onChange={update} />
//       <button onClick = {submit}>Submit</button>
// <div>{array.map((val,index) => 
//   (<li key={index}> {val}</li>
//       ))}</div>

//       </form>
//       {/* <li>{array}</li> */}
//    </div>
//   )

// }


//export default App;


// import React, { useState, useEffect } from 'react'


// //const divStyle = {

// //}

// export default function App() {

// const [todo, setTodo] = useState(null)
// const [search, setSearch] = useState('')

// useEffect(()=>{
//   if (search.length > 0)
// console.log("hello")
//   const list = async ()=>{
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${search}`)
//     const resJson = await response.json()
// setTodo(resJson[0])
 
//   }

//   // const list = () => {
//   //   fetch(`https://jsonplaceholder.typicode.com/users?id=${search}`)
//   //     .then(res => res.json())
//   //     .then(resJson => setTodo(resJson[0]))

//   // }

//   list();

// },[search])



//  // console.log(todo)
//   return (
//     <div className="container">
// <input type="search"
// onChange = {e =>{ setSearch(e.target.value)} }
// />

// {todo ? (
  
//   <div>
//           <h5> {todo.id}</h5>
//         <h5> {todo.name} </h5>
//           <h5> {todo.email}</h5>
//           <h5> {todo.address.street}</h5>
//           <h5> {todo.address.city}</h5>
        
//           </div>
// ): null} 

//     </div>
//   )
// }



import React, {useState, useEffect} from 'react'
import {Cardlist} from './components/card-list/card-list.component'
import {Searchbox} from './components/search-box/search-box.component'
import './App.css';

export default function App() {

const[state, setState]= useState([])
const[search, setSearch]= useState("")

useEffect(()=>{
  const list = ()=>{ fetch(`https://jsonplaceholder.typicode.com/users`)
  .then(res => res.json())
  .then(users => setState(users))
  }
  list()
},[])

  const searchMoster = (e) => setSearch(e.target.value)

const newState = [...state]


const filtered = newState.filter(val => val.name.toLowerCase().includes(search))


  return (
    <div>
      <h1>Monster Rolodex</h1>
      <Searchbox search = {searchMoster} ></Searchbox>
      <Cardlist monster={filtered}>

      </Cardlist>
     
      
    </div>
  )
}








