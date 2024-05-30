import "./styles/MoodPageChart.css";
import React from "react";
import {
	XYPlot,
	XAxis,
	YAxis,
	HorizontalGridLines,
	VerticalGridLines,
	LineSeries,
} from "react-vis";


function MoodChart({ firstDayOfMonth, lastDayOfMonth, moodData }) {
	console.log(firstDayOfMonth)
	console.log(lastDayOfMonth)

	return (
    <div className="containerStyle">
		<XYPlot width={500} height={300} margin={{ bottom: 100 }}
			xType="time"
			yDomain={[0, 10]}
			xDomain={[firstDayOfMonth, lastDayOfMonth]}
		>
			<HorizontalGridLines className="gridline" />
			<VerticalGridLines className="gridline" />
			<XAxis title="Date" className="axis" tickLabelAngle={-90}/>
			<YAxis title="Mood" className="axis" />
			<LineSeries
				className="month-mood-chart"
				data={moodData}
				// data={[
				// 	{ x: new Date('01/01/2024'), y: 10 },
				// 	{ x: new Date('01/06/2024'), y: 5 },
				// 	{ x: new Date('01/07/2024'), y: 1 },
				// 	{ x: new Date('01/31/2024'), y: 4 },
				// ]}
			/>
		</XYPlot>
    </div>
	);
}

export default MoodChart;
