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

function MoodChart() {
	return (
    <div className="containerStyle">
		<XYPlot width={500} height={300}>
			<HorizontalGridLines className="gridline" />
			<VerticalGridLines className="gridline" />
			<XAxis title="X Axis" className="axis" />
			<YAxis title="Y Axis" className="axis" />
			<LineSeries
				className="month-mood-chart"
				data={[
					{ x: 1, y: 3 },
					{ x: 2, y: 5 },
					{ x: 3, y: 15 },
					{ x: 4, y: 12 },
				]}
			/>
		</XYPlot>
    </div>
	);
}

export default MoodChart;
