import React from 'react'
import { useState } from 'react';
import './App.css'
import User from './components/user';

// function App() {

//   return (
//     <div className="App">
//       gugkhi
//       <h1> ABOBA  </h1>
//       <h2> boba</h2>
//       <p>
//         <input type="radio" name="browser" value="ie" placeholder='Internet Explorer' /> <br />
//         <input type="radio" name="browser" value="opera" placeholder='Opera' /> <br />
//         <input type="radio" name="browser" value="firefox" placeholder='Firefox'/> <br />
       
//       </p>
//       <ul>
//         <li>1</li>
//         <li>1</li>
//         <li>1</li>
//         <li>1</li>
//         <li>1</li>
//         <li>1</li>
//         <li>1</li>
//         <li>1</li>
//         <li>1</li>
//         <li>1</li> 
//       </ul>
//       <table border="2px">
//         <tbody>
//         <tr>
//           <td>awd</td>
//           <td>wad</td>
//           <td>d</td>
//         </tr>
//         <tr>
//           <td>awd</td>
//           <td>wad</td>
//           <td>d</td>
//         </tr>
//         <tr>
//           <td>awd</td>
//           <td>wad</td>
//           <td>d</td>
//         </tr>
//         </tbody>
//       </table>
//       <p className='h2'>s</p>
//       <p className='h3'>f</p>
//       <p className='h4'>g</p>
//     </div>
//   );
// }
// function App() {
//   let text;
  
//   const isAdult = true;
  
//   if (isAdult) {
  
//   text = <p>text1</p>;
//   } else {
  
//   text = <p>text2</p>;
//   }
  
//   return text;
// }
// export default App;





// function App() {

  



//   let text;
  
//   const isAdmin = true;
  
//   if (isAdmin) {
  
//   text = <div>
//     <p>haccked</p>
//     <p>hello admin</p>
//   </div>;
//   } else {
  
//   text = <p>false</p>;
//   }
  
//   return text;
// }
// export default App;

// function App() {
//   return (
//     <div>
//           Текст
//     </div>
//   )
// }
// export default App;


// function App() {
//   let text = "Текст"
//   return (
//     <div>
//           {text}
//     </div>
//   )
// }
// export default App;

// function App() {
//   let text = "<p>text</p> "
//   return (
//     <div>
//           {text}
//     </div>
//   )
// }
// export default App;

// function App() {
//   let text1 = <p>text1</p>
//   let text2 = <p>text2</p> 
//   return (
//     <div>
//           {text1}
//           <p>!!!</p>
//           {text2}
//     </div>
//   )
// }
// export default App;

// function App() {
//   let atr = 'block' 
//   return (
//     <div id={atr}>
//           text  
//     </div>
//   )
// }
// export default App;


// function App() {
//   let str = 'block' 
//   return (
//     <div className={str}>
//           text  
//     </div>
//   )
// }
// export default App;

// function App() {
//   return (
//     <div className='h7'>
//       <p> flfsdfsf </p>
//     </div>
//   );
// }
// export default App

// function App() {
//   let text;
  
//   const show = true;
  
//   if (show) {
  
//   text = <div>
//     text 1
//   </div>;
//   } else {
  
//   text = <div>
//     text 2
//   </div>;;
//   }
  
//   return text;
// }
// export default App; 

// function App() {
//   const arr = [1,2,3,4,5];
  
//   const res = arr.map(function(item, index) {
//   return <li key={index}>{item}</li>;
//   });
//   return <ul>
//   {res}
//   </ul>;
// }
// export default App;
                                                        //next lesson
// function App(){
//     return(
//         <User />
//     )
// }
// export default App;



// function App(){
//     let [banned, setBanned] = useState(true);
//     return <div>
//         <span>{banned ? 'yep' : 'not yet'}</span>
//         <button onClick={() => setBanned(!banned)}>btn</button>
//     </div>;
// }
// export default App;

// function App() {
//     let [count, setCount] = useState(0);
    
//     function clickHandlerpluse() {
//     setCount(count + 1);
//     }

//     function clickHandler() {
//     setCount(count - 1);
//     }
    
//     return <div>
    
//     <span> {count} </span>
    
//     <button onClick={clickHandler }>-</button>
//     <button onClick={clickHandlerpluse }>+</button>
//     </div>;
// }
// export default App





// function App() {
//     const [value, setValue] = useState('text');
    

//         function handleChange(event) {
//             setValue(event.target.value);
//         }

//     return <p>
//     <input value={value} onChange={handleChange} />
//     <br />
//     <input value={value} onChange={handleChange} />
//     <User />
//     </p>;
    
//     }
// export default App


// function App() {
//     const [banned, setBanned] = useState(false);
//     const [value, setValue] = useState(0);

//     function length(event) {
//         setValue(event.target.value.length)
//     } 
//     return <div>
//     <span>{banned ? 'yep' : 'not yet'}</span>
//     <button onClick={() => setBanned(!banned)}>btn</button>
//     <input onChange={length} />
//     <br />  
//     <p>{value}</p>
//     </div>;
//     }
// export default App






// function App() {
//     const [value, setValue] = useState('0');

//         function handleChange(event) {
//             setValue(event.target.value);
//         }

//     return <div>
//     <input value={value} onChange={handleChange} />
//     {/* <p>{2023 - value}</p> */}
//     <p>{(value-32)*5/9}</p>
//     </div>;
    
//     }
// export default App


// function App(){
//     const [value, setValue] = useState(0);
//     const [value1, setValue1] = useState(0);
//     const [value2, setValue2] = useState(0);
//     const [value3, setValue3] = useState(0);
//     const [value4, setValue4] = useState(0);

    
   
//    return <div>
        
//         <input value={value} onChange={(event) => setValue(event.target.value)} />
//         <input value={value1} onChange={(event) => setValue1(event.target.value)} />
//         <input value={value2} onChange={(event) => setValue2(event.target.value)} />
//         <input value={value3} onChange={(event) => setValue3(event.target.value)} />
//         <input value={value4} onChange={(event) => setValue4(event.target.value)} />
//         <p>{(+value + +value1 + +value2 + +value3 + +value4)/5}</p>
//         </div>
// }
// export default App








// function App() {

//     const [value1, setValue1] = useState("0000-00-00");
//     const [value2, setValue2] = useState("0000-00-00");
//     const [result, setResult] = useState(0);
    
//     function handleChange1(event) {
//     setValue1(event.target.value);
    
//     }
    
//     function handleChange2(event) {
//     setValue2(event.target.value);
    
//     }
    
//     function handleClick() {
//     setResult(Number(value1) - Number(value2) );
//     }
    
    
//     return <div>
    
//     <input type={'date'} value={value1} onChange={handleChange1} />
//     <input type={'date'} value={value2} onChange={handleChange2} />
    
//     <button onClick={handleClick}>btn</button>
//     <p>result: {result}</p>
//     </div>;
// }

// export default App                           ????







// function App() {
//     const [checked, setChecked] = useState(false);
//     const [checked1, setChecked1] = useState(false);
//     const [checked2, setChecked2] = useState(false);

//     let message;
//     if (checked) {
    
//     message = <p>html</p>;
//     } 
//     if (checked1){
//     message = <p>css</p>;
//     }

//     if (checked2){
//     message = <p>js</p>;
//     }

//     return <div>
//     <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
//     <input type="checkbox" checked={checked1} onChange={() => setChecked1(!checked1)} />
//     <input type="checkbox" checked={checked2} onChange={() => setChecked2(!checked2)} />
//     <div> {message} </div>
    
//     </div>;
// }
// export default App


// function App() {
//     const [checked, setChecked] = useState(false);

//     let message;
//     if (checked) {
    
//     message = <p>абоба</p>;
//     } 

//     return <div>
    
//     <p>18?</p>
//     <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
//     <div> {message} </div>
    
//     </div>;
// }
// export default App

// function App() {
//     const texts = ['city1', 'city2', 'city3', 'city4'];
//     const [value, setValue] = useState('');
    
//     const options = texts.map((text, index) => {
//     return <option key={index}>{text}</option>;
//     })
    
//     return <div>
//     <select value={value} onChange={(event) => setValue(event.target.value) }>
//     {options}
//     </select>
//     <p>
//     your choose: {value}
//     </p>
//     <p>full array: {texts}</p>
//     </div>;
// }
// export default App



// function App() {
//     const texts = ['from 0 to 12', 'from 13 to 17', 'from 18 to 25', 'older then 25'];
//     const [value, setValue] = useState('');
    
//     const options = texts.map((text, index) => {
//     return <option key={index}>{text}</option>;
//     })
    
//     return <div>
//     <select value={value} onChange={(event) => setValue(event.target.value) }>
//     {options}
//     </select>
//     <p>
//     your choose: {value} </p>
//     </div>;
// }
// export default App


// function App() {
//     const [value, setValue] = useState(1);
    
//     function changeHandler(event) {
//     setValue(event.target.value);
//     }
//     return <div>
// <p>choose your favorite language of coding: c++, css, js</p>
// <input
//     type="radio"
//     name='radio'
//     value="c++"
//     checked={value === 'c++' ? true : false}
//     onChange={changeHandler}
//     />
// <input
//     type="radio"
//     name='radio'
//     value="css"
//     checked={value === 'css' ? true : false}
//     onChange={changeHandler}
//     />
// <input
//     type="radio"
//     name='radio'
//     value="js"
//     checked={value === 'js' ? true : false}
//     onChange={changeHandler}
//     />
// <p>
// your choose: {value} 
// </p>
// </div>
// }
// export default App









































