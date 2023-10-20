"use client"

import React, { useState, useEffect } from 'react';
import { CounterProps } from '@/types';


const Counter = ({ number ,title}: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < number) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(timer);
      }
    }, 2);

    return () => clearInterval(timer);
  }, [count, number]);

  return (
    <div className='flex items-center justify-center flex-col text-white'>
      <p className='text-5xl clash-semibold'>{count}K+</p>
      <p>{title}</p>
    </div>
  );
};

export default Counter;
