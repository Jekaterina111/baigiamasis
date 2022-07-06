import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card/Card.styles';

const Home = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/product`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const resData = await res.json();

    setData(resData);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data){
    return <div>Loading...</div>;
  }

  if (data) {
  return <Card>{data}</Card>;
  }
};

export default Home;