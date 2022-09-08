import React, { useEffect, useState } from "react";
import { Table, Input, Button } from 'antd';
import axios from "axios";

import './App.css';

const App = () => {
    const [bankData, setBankData] = useState([]);
    useEffect(() => {
        axios.get('https://api.sampleapis.com/fakebank/accounts').then((res) => {
            setBankData(res.data)
        })
    }, []);

    const columns = [
        {
            title: 'Transaction Date',
            dataIndex: 'transactionDate',
            key: 'transactionDate',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Debit',
            dataIndex: 'debit',
            key: 'debit',
            render: (item) => item != null ? item : '-'
        },
        {
            title: 'Credit',
            dataIndex: 'credit',
            key: 'credit',
            render: (item) => item != null ? item : '-'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
    ];

    return (
        <div className="app-page">
            <h2>Bank Account</h2>

            <div className="box-search-filter">
                <Input placeholder="Search" className="input-custom" />
                <Button type="primary">Filter</Button>
            </div>

            <Table columns={columns} dataSource={bankData}></Table>
        </div>
    );
};

export default App;
