// import "./styles/MoodPageChart.css";
import React from "react";
import {
	XYPlot,
	XAxis,
	YAxis,
	HorizontalGridLines,
	VerticalGridLines,
	LineSeries,
} from "react-vis";


function SleepChart({ firstDayOfMonth, lastDayOfMonth, sleepHours }) {

	
	return (
    <div className="containerStyle">
		<XYPlot width={500} height={300} margin={{ bottom: 100 }}
			xType="time"
			yDomain={[0, 12]}
			xDomain={[firstDayOfMonth, lastDayOfMonth]}
			dontCheckIfEmpty
		>
			<HorizontalGridLines className="gridline" />
			<VerticalGridLines className="gridline" />
			<XAxis title="Date" className="axis" tickLabelAngle={-90}/>
			<YAxis title="Hours" className="axis" />
			<LineSeries
				className="month-mood-chart"
				data={sleepHours}
			/>
		</XYPlot>
    </div>
	);
}

export default SleepChart;
