import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import MyState from "./context/data/myState";
import { Toaster } from "react-hot-toast";
import Home from "../src/pages/Home"; 
import Blog from "../src/pages/Blog";
import AllBlog from "../src/pages/AllBlog";
import Nopage from "../src/pages/Nopage";
import BlogInfo from "../src/pages/BlogInfo";
import Login from "../src/pages/Admin/Login";
import Dashboard from "../src/pages/Admin/Dashboard";
import CreateBlog from "./pages/Admin/CreateBlogs";


export default function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlog />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/createblog"
            element={
              <PrivateRoute>
                <CreateBlog />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
}

export const  PrivateRoute = ({children}) =>{
const admin = JSON.parse(localStorage.getItem('admin'));
if (admin?.user?.email === 'testuser@gmail.com'){
  return children
} else {
  return <Navigate to={'/adminlogin'} />
}
}
