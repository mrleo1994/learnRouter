import React, { useEffect, useState } from 'react'
import FooterHook from './FooterHook';

export default function UseEffect() {
    const [number, setNumber] = useState(100);
    const [share, setShare] = useState(1);

    useEffect(() => {
        console.log("useEffect like");
        let timer = 1000;
        let myCountDown = setInterval(() => {
            // console.log(timer--);
        }, 100);
        return () => {
            console.log("didmount");
            clearInterval(myCountDown);
        };
    }, []);
    useEffect(() => {
        console.log("useEffect share");
    }, [share]);
    // useEffect: nhận vào 2 params ~ didMount, updating, willUnmount
    // params 1: arrow function 
    // DependencyList : array [] ~ quyết định useEffect chạy 1 lần hay nhiều lần
    return (
        <div className='text-center pt-5'>
            <button onClick={() => {
                setNumber(number - 1)
            }} className="btn btn-danger">-</button>
            <strong>{number}</strong>
            <button onClick={() => {
                setNumber(number + 1)
            }} className="btn btn-success">+</button>
            <br />
            <button onClick={() => {
                setShare(share - 1)
            }} className="btn btn-danger">-</button>
            <strong>share:{share}</strong>
            <button onClick={() => {
                setShare(share + 1)
            }} className="btn btn-success">+</button>
            <FooterHook number={number} />
        </div>
    )
}
