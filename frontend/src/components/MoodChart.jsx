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

	
	return (
    <div className="containerStyle">
		<XYPlot width={500} height={300} margin={{ bottom: 100 }}
			xType="time"
			yDomain={[0, 10]}
			xDomain={[firstDayOfMonth, lastDayOfMonth]}
			dontCheckIfEmpty
		>
			<HorizontalGridLines className="gridline" />
			<VerticalGridLines className="gridline" />
			<XAxis title="Date" className="axis" tickLabelAngle={-90}/>
			<YAxis title="Mood" className="axis" />
			<LineSeries
				className="month-mood-chart"
				data={moodData}
			/>
		</XYPlot>
    </div>
	);
}

export default MoodChart;
