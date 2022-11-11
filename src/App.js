
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Pages/Shared/Navbar';
import Appoinment from "./Pages/Appoinment/Appoinment";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import RequireAuth from "./Pages/Shared/RequireAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppoinment from "./Pages/MyAppoinment/MyAppoinment";
import MyReviews from "./Pages/MyReviews/MyReviews";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/appoinment" element={
            <RequireAuth>
              <Appoinment></Appoinment>
            </RequireAuth>
        } />
        <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
        } >
           <Route index element={<MyAppoinment></MyAppoinment>} />
           <Route path="review" element={<MyReviews></MyReviews>} />
        </Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
