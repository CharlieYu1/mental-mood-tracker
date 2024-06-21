import "./styles/MoodPageChart.css";
import React from "react";
import {
	RadialChart
} from "react-vis";

function MoodCountChart({ moodData }) {
    // console.log(moodData)

    if (moodData.length === 0) {
        return <p>Create mood logs to see the monthly mood counts</p>
    }

    const totalMoodCounts = moodData.length
    // console.log(totalMoodCounts)
    
    const groupedCounts = Array.from(Array(5).keys()).map(i => 
        moodData.filter(m => ((m.y >= 2 * i + 1) && (m.y <= 2 * i + 2))).length
    )

    const groupedLabels = groupedCounts.map(c => c === 0 ? "" : `${Math.round(c/totalMoodCounts*100)}%`
    )

    const data = [
        { angle: groupedCounts[0], label: groupedLabels[0], color: '#264653' },
        { angle: groupedCounts[1], label: groupedLabels[1], color: '#2a9d8f' },
        { angle: groupedCounts[2], label: groupedLabels[2], color: '#e9c46a' },
        { angle: groupedCounts[3], label: groupedLabels[3], color: '#f4a261' },
        { angle: groupedCounts[4], label: groupedLabels[4], color: '#e76f51' },
    ]

    const averageMood = moodData.reduce((val, m) => m.y + val, 0) / totalMoodCounts
    
    // console.log(averageMood)

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
                {averageMood.toFixed(1)}
            </div>
        </div>
    );
}

export default MoodCountChart;