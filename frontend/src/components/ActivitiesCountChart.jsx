import "./styles/MoodPageChart.css";
import React from "react";
import {
	XYPlot,
	XAxis,
	YAxis,
	HorizontalGridLines,
	VerticalGridLines,
	HorizontalBarSeries,
} from "react-vis";


function ActivitiesCountChart({ activitiesCount }) {
    console.log(activitiesCount)
    if (Object.keys(activitiesCount).length === 0) {
        return <p>Log activities to see the monthly activity counts</p>
    }

    const chartData = [
        {"y": 'Social', "x": activitiesCount["social"]},
        {"y": 'Hobbies', "x": activitiesCount["hobbies"]},
        {"y": 'Exercise', "x": activitiesCount["exercises"]},
        {"y": 'Good meal', "x": activitiesCount["meal"]}
    ]

	return (
    <div className="containerStyle">
        <XYPlot
        width={500}
        height={300}
        yType="ordinal"
        margin={{ left: 100 }}
        >
        <HorizontalBarSeries data={chartData} />

        <YAxis />
        </XYPlot>
    </div>
	);
}

export default ActivitiesCountChart;
