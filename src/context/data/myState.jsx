import React, {useEffect, useState} from 'react';
import MyContext from './myContext';
import { query } from 'firebase/database';
import { QuerySnapshot, collection, doc, onSnapshot, orderBy } from 'firebase/firestore';
import {db} from '../../Firebase/FirebaseConfig'
import toast from 'react-hot-toast';

function MyState(props){
const [mode, setMode] = useState('light')
const [searchKey, setSearchKey] = useState('')
const [loading, setLoading] = useState(false)
const [getAllBlog, setGetAllBlog] = useState([])

function getAllBlogs() {
    setLoading(true)
    try {
        const q = query(collection(db, "blogPost"), orderBy('time'));
        const data = onSnapshot(q, (QuerySnapshot) => {
            let blogArray = [];
           QuerySnapshot.forEach((doc) => {
            blogArray.push({...doc.data(), id: doc.id})
           }) 
           setGetAllBlog(blogArray)
           setLoading(false)
        })
        return () => data;
    } catch (error) {
        toast.error('Something went wrong')
        setLoading(false)
    }

}

useEffect(() =>{
    getAllBlogs()
}, [])

const toggleMode = () =>{
    if (mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'rgb(17, 24, 39)'
    } else {
        setMode('light')
        document.body.style.backgroundColor = 'white'
    }
}
return (
  <MyContext.Provider
    value={{
      mode,
      toggleMode,
      loading,
      getAllBlog,
      setLoading,
      setSearchKey,
      searchKey,
    }}
  >
    {props.children}
  </MyContext.Provider>
);
}
export default MyState