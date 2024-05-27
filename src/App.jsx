import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy } from "react"
import MyState from "./context/data/myState";
import { Toaster } from "react-hot-toast";
const Home = lazy (() => import("../src/pages/Home")); 
const Blog = lazy (() => import("../src/pages/Blog"));
const AllBlog = lazy(() => import("../src/pages/AllBlog"));
const Nopage = lazy(() => import("../src/pages/Nopage"));
const BlogInfo = lazy(() => import("../src/pages/BlogInfo"));
const Login = lazy(() => import("../src/pages/Admin/Login"));
const Dashboard = lazy(() => import("../src/pages/Admin/Dashboard"));

export default function App() {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
          <Route path="/allblogs" element={<AllBlog/>}/>
          <Route path="/bloginfo/:id" element={<BlogInfo/>}/>
        <Route path="/adminlogin" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<Nopage/>}/>
      </Routes>
      <Toaster/>
    </Router>
    </MyState>
  )
}
