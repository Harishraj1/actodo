
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import { useState } from "react";


function App() {
  const [users, setusers] = useState([
    {
      username: "harish",
      password: "123"
    }
  ])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
          <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
