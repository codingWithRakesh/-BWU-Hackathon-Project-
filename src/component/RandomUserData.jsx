import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTopLoader } from '../contexts/topLoaderContext';
import loader from '../assets/loader/loader.gif'

const RandomUserData = () => {
  const [[progress, setProgress]] = useTopLoader()

  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 10)
  }, [setProgress])
  const [userCount, setUserCount] = useState('');
  const [loading, setLoading] = useState(false); 

 
  const fetchAndDownloadCSV = async (e) => {
    e.preventDefault();

   
    if (!userCount || isNaN(userCount) || userCount <= 0) {
      alert('Please enter a valid number');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(`https://randomuser.me/api/?results=${userCount}&format=csv`, {
        responseType: 'blob', 
      });

      
      const blob = new Blob([response.data], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `random-users-${userCount}.csv`); 
      link.click(); 
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className='hero webScreenshot'>
      <div className="webScreenshotBox">
        <p>
        Enter how many random user data you need
        </p>
        <input value={userCount} placeholder='Enter number of users' onChange={(e) => setUserCount(e.target.value)} type="text" />
        <button className="button-6" role="button" onClick={fetchAndDownloadCSV}>{loading ? <img src={loader}/> : "Generate & Download CSV"}</button>
      </div>
    </div>
  );
}

export default RandomUserData;