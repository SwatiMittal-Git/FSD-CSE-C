// //function will be written in this file 
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.css';
// // import img from './assets/cartoon.jpg';
// function App() {

//   return (
//     <div>
//       <h1>hi student</h1>
//       {/* this is navbar code start */}
//       <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="javascript:void(0)">Logo</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="mynavbar">
//       <ul class="navbar-nav me-auto">
//         <li class="nav-item">
//           <a class="nav-link" href="javascript:void(0)">Link</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="javascript:void(0)">Link</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="javascript:void(0)">Link</a>
//         </li>
//       </ul>
//       <form class="d-flex">
//         <input class="form-control me-2" type="text" placeholder="Search"/>
//         <button class="btn btn-primary" type="button">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

// <div class="container-fluid mt-3">
//   <h3>Navbar Forms</h3>
//   <p>You can also include forms inside the navigation bar.</p>
// </div>
  
//       {/* this is navbar code end  */}

//       {/* this is button start  */}
//       <div class="container mt-3">
//   <h2>Button Styles</h2>
//   <button type="button" class="btn">Basic</button>
//   <button type="button" class="btn btn-primary">Primary</button>
//   <button type="button" class="btn btn-secondary">Secondary</button>
//   <button type="button" class="btn btn-success">Success</button>
//   <button type="button" class="btn btn-info">Info</button>
//   <button type="button" class="btn btn-warning">Warning</button>
//   <button type="button" class="btn btn-danger">Danger</button>
//   <button type="button" class="btn btn-dark">Dark</button>
//   <button type="button" class="btn btn-light">Light</button>
//   <button type="button" class="btn btn-link">Link</button>      
// </div>

//       {/* this is button end */}

//       {/* this is card start */}
//       <div class="container mt-3">
//   <h2>Card Header and Footer</h2>
//   <div class="card">
//     <div class="card-header">Header</div>
//     <div class="card-body">Content</div> 
//     <div class="card-footer">Footer</div>
//   </div>
// </div>

//       {/* this is card end */}

// {/* 
//       this is image start
//       <img src={img} height={400} width={300} alt="cartoon/"/> */}
//       {/* this is image end */}
//     </div>
//   )
// }

// export default App

import React, {useState,useEffect} from 'react';
import Fashion from "./Components/Fashion";
import "bootstrap/dist/css/bootstrap.css";

function App(){

  const [books,setBooks] = useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>{
      setBooks(data);
    })
  },[]);

  return (
    <div className="container mt-4">

 <h1
        className="text-center mb-5"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "600",
          color: "#343a40",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Fashion App
      </h1>

      {/* {
books.map((b,i)=>(
  <Fashion key={i} props={b}/>
))
      }
       */}
        <div className="row justify-content-center">
        {books.map((b, i) => (
          <div className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center" >
            <Fashion key={i} props={b} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;