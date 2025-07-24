import React, {useState, useEffect} from "react";
import Options from "./Options";
import './dashboard_module.css';

export default function Dashboard() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState (false);
  const [data, setData] = useState (null);

  const  questions= [
    'character',
    'movie',
    'book'
  ] ;

  const apiUrl= 'https://the-one-api.dev/v2';
  const apiToken= process.env.REACT_APP_API_KEY;

  useEffect(() => {
    async function fetchData() {
      const url= apiUrl + '/' + 'book';
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        console.log('DATA:' , jsonData);
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally{
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return(
    <div className= "dashboard">
      <Options />
    </div>
  );
}