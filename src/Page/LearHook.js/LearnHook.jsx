import React, { useState } from 'react'
import Footer from './Footer';

export default function LearnHook() {
let [soLuong, setSoLuong]=useState(100);
// let [like,setLike]=useState(1)
// useState ~ state ~ trả về 2 giá trị: state và setState
let handleGiam=() => { 
  setSoLuong(soLuong-1);
 }
 let handleTang=() => { 
  setSoLuong(soLuong+1);
 }
let handleReset=() => { setSoLuong(100) }
  return (
    <div>
      <button onClick={handleGiam} className='btn btn-danger'>-</button>
      <strong>{soLuong}</strong>
      <button onClick={handleTang} className='btn btn-success'>+</button>
      <Footer handleClick={handleReset} number={soLuong}/>
      </div>
  )
}
// rfc ~ function component

// các kiến thức trong class component đều có bên function ~ state, props, redux,...

// function: ko dùng this, mọi thứ phải khai báo bằng let hoặc const
