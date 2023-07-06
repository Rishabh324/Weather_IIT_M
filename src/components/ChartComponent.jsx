import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const ChartComponent = () => {
    const data = [
        {
            name: "0%",
            uv: 28,
            amt: 2400
        },
        {
            name: "10%",
            uv: 25,
            amt: 2210
        },
        {
            name: "20%",
            uv: 29,
            amt: 2290
        },
        {
            name: "30%",
            uv: 26,
            amt: 2000
        },
        {
            name: "40%",
            uv: 27,
            amt: 2181
        },
        {
            name: "50%",
            uv: 28,
            amt: 2500
        },
        {
            name: "60%",
            uv: 24,
            amt: 2100
        },
        {
            name: "70%",
            uv: 30,
            amt: 2100
        },
        {
            name: "80%",
            uv: 27,
            amt: 2100
        },
        {
            name: "90%",
            uv: 32,
            amt: 2100
        },
        {
            name: "100%",
            uv: 26,
            amt: 2100
        }
    ];

    return (
        <div className='chart-div' style={{ height: '150px' }}>
            <AreaChart
                width={870}
                height={150}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="110 1" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#5C9CE5" fill="#5C9CE5" />
            </AreaChart>
        </div>
    );
}

export default ChartComponent;