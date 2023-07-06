import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ChartComponent = () => {
    const options = {
        // title: {
        //     text: "Basic Column Chart in React"
        // },
        height: 150,
        width: 810,
        axisY: {
            interval: 0,
            title: 'Degree'
        },
        data: [{
            type: "area",
            dataPoints: [
                { label: "20%", y: 28 },
                { label: "40%", y: 30 },
                { label: "60%", y: 29 },
                { label: "80%", y: 29 },
                { label: "100%", y: 27 }
            ]
        }]
    }

    return (
        <div className='chart-div' style={{ height: '150px' }}>
            <CanvasJSChart options={options} />
        </div>
    );
}

export default ChartComponent;