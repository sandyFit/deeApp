import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import SignUp from './pages/signup/SignUp';


function App() {

  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/manage-books">
              <Route index element={<List />} />
              <Route path=":bookISBN" element={<Single />} />
              <Route
                path="new"
                element={<New />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New />}
              />
            </Route>
          </Route>
        </Routes>

      </Router>
      
    </div>
  )
}

export default App
