
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import ListUsers from './components/ListUsers';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[list, setList] = useState(null);
  const [loading, setLoading] = useState(true)
   
    const fetchUsers=async()=>{
 try {
  const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
  setList(data)
  setLoading(false);

  }
   catch (error) {
  console.log(error)
  }
    } ;
    useEffect(() => {
   fetchUsers();
  
     }, [])
   
  

  return (
    <>
    <ListUsers list={list} loading={loading}/>
     
    </>
  )
}

export default App
