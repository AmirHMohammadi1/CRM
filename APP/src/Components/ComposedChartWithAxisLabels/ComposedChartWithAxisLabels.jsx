
import React from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// داده‌ها همانند بالا...

const ComposedChartWithAxisLabels = () => {
    const data = [
        {
            name: 'Page A',
            uv: 590,
            pv: 800,
            amt: 1400,
        },
        {
            name: 'Page B',
            uv: 868,
            pv: 967,
            amt: 1506,
        },
        {
            name: 'Page C',
            uv: 1397,
            pv: 1098,
            amt: 989,
        },
        {
            name: 'Page D',
            uv: 1480,
            pv: 1200,
            amt: 1228,
        },
        {
            name: 'Page E',
            uv: 1520,
            pv: 1108,
            amt: 1100,
        },
        {
            name: 'Page F',
            uv: 1400,
            pv: 680,
            amt: 1700,
        },
    ];
    return (
        <div style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%'
            }}>
                <ComposedChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 10,
                        right: 10,
                        bottom: 10,
                        left: 10,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis
                        dataKey="name"
                        scale="band"
                        fontSize={12}

                    />
                    <YAxis
                        fontSize={12}
                    />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="pv" barSize={15} fill="#413ea0" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>

            </div>
        </div>
    );
};

export default ComposedChartWithAxisLabels;