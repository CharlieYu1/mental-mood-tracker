import "./styles/MoodPageChart.css";
import React from "react";
import {
	RadialChart
} from "react-vis";

function MoodCountChart() {
    const data = [
        { angle: 1, label: "10%", color: '#f5222d' },
        { angle: 2, label: "20%",  color: '#faad14' },
        { angle: 3, label: "30%",  color: '#52c41a' },
        { angle: 4, label: "40%",  color: '#1890ff' },
    ]


    return (
        <div style={{
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <RadialChart
                data={data}
                width={300}
                height={300}
                radius={150}
                innerRadius={90}
                showLabels={true}
                labelsRadiusMultiplier={0.9}
                colorType="literal"
            />
            <div style={{
                position: 'absolute',
                padding: '5px',
            }}>
                3.4
            </div>
        </div>
    );
}

export default MoodCountChart;