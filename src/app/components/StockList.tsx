'use client';

import { useEffect } from 'react';
import axios from 'axios';

const StockList = () => {
  console.log('StockList');

  const getTest = () => {
    axios
      .get('/user')
      .then((res) => {
        const { data } = res;
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTest();
  }, []);

  return <div>StockList</div>;
};

export default StockList;
