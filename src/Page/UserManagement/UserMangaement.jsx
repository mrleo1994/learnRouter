import React, { useEffect, useState } from 'react'
import Form from './Form'
import List from './List'
import axios from 'axios';
import { message } from 'antd';

export default function UserManagement() {
    const [useArr, setUseArr] = useState([]);
    // userArr chua ds ng dung
    // goi api lay ds ng dung tu server khi user load trang
    let fetchUserList = () => {
        // goi ds ng dung moi nhat tu server
        axios
            .get("https://65118c99829fa0248e4052b6.mockapi.io/project")
            .then((result) => {
                setUseArr(result.data);
            })
            .catch((err) => { });
    }
    useEffect(() => {
        fetchUserList();
    }, []);
    let handleDelete = (id) => {
        let url = `https://65118c99829fa0248e4052b6.mockapi.io/project/${id}`;
        axios
            .delete(url)
            .then((res) => {
                message.success("xoa thanh cong");
            })
            .catch((err) => {
                message.error("ERROR")
            })
    }

    return (
        <div className='container'>
            <Form />
            <List handleDelete={handleDelete} useArr={useArr} />
        </div>
    )
}
