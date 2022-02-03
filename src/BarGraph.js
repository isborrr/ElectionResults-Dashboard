import React from 'react';
import { letterFrequency } from '@visx/mock-data';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';


// We'll use some mock data from `@visx/mock-data` for this.
const data = letterFrequency;

// Define the graph dimensions and margins
const width = 500;
const height = 500;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };

// Then we'll create some bounds
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// We'll make some helpers to get at the data we want
const x = d => d.letter;
const y = d => +d.frequency * 100;

// And then scale the graph by our data
const xScale = scaleBand({
  range: [0, xMax],
  round: true,
  domain: data.map(x),
  padding: 0.4,
});
const yScale = scaleLinear({
  range: [yMax, 0],
  round: true,
  domain: [0, Math.max(...data.map(y))],
});

// Compose together the scale and accessor functions to get point functions
const compose = (scale, accessor) => data => scale(accessor(data));
const xPoint = compose(xScale, x);
const yPoint = compose(yScale, y);

// Finally we'll embed it all in an SVG
function BarGraph(props) {
  return (
      <>
      <div className='Requirement' > Challenge 2: To see how a particular candidate perform</div>
    <svg width={width} height={height}>
      {data.map((d, i) => {
        const barHeight = yMax - yPoint(d);
        return (
          <Group key={`bar-${i}`}>
            <Bar
              x={xPoint(d)}
              y={yMax - barHeight}
              height={barHeight}
              width={xScale.bandwidth()}
              fill="#fc2e1c"
            />
          </Group>
        );
      })}
    </svg>
    </>
  );
}

export default BarGraph;
// ... somewhere else, render it ...
// <BarGraph />

// import React, { Component } from 'react';
// import { Element } from 'react-faux-dom';
// import * as d3 from 'd3';
// import './App.css';
// import data from './compareResults';

// class BarGraph extends Component {

//     plot(chart, width, height) {
//         // create scales!
//         const xScale = d3.scaleBand()
//             .domain(data.map(d => d.country))
//             .range([0, width]);
//         const yScale = d3.scaleLinear()
//             .domain([0, d3.max(data, d => d.value)])
//             .range([height, 0]);
//         const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

//         chart.selectAll('.bar')
//             .data(data)
//             .enter()
//             .append('rect')
//             .classed('bar', true)
//             .attr('x', d => xScale(d.country))
//             .attr('y', d => yScale(d.value))
//             .attr('height', d => (height - yScale(d.value)))
//             .attr('width', d => xScale.bandwidth())
//             .style('fill', (d, i) => colorScale(i));

//         chart.selectAll('.bar-label')
//             .data(data)
//             .enter()
//             .append('text')
//             .classed('bar-label', true)
//             .attr('x', d => xScale(d.country) + xScale.bandwidth()/2)
//             .attr('dx', 0)
//             .attr('y', d => yScale(d.value))
//             .attr('dy', -6)
//             .text(d => d.value);

//         const xAxis = d3.axisBottom()
//             .scale(xScale);

//         chart.append('g')
//             .classed('x axis', true)
//             .attr('transform', `translate(0,${height})`)
//             .call(xAxis);

//         const yAxis = d3.axisLeft()
//             .ticks(5)
//             .scale(yScale);

//         chart.append('g')
//             .classed('y axis', true)
//             .attr('transform', 'translate(0,0)')
//             .call(yAxis);

//         chart.select('.x.axis')
//             .append('text')
//             .attr('x',  width/2)
//             .attr('y', 60)
//             .attr('fill', '#000')
//             .style('font-size', '20px')
//             .style('text-anchor', 'middle')
//             .text('Country');

//         chart.select('.y.axis')
//             .append('text')
//             .attr('x', 0)
//             .attr('y', 0)
//             .attr('transform', `translate(-50, ${height/2}) rotate(-90)`)
//             .attr('fill', '#000')
//             .style('font-size', '20px')
//             .style('text-anchor', 'middle')
//             .text('Government Expenditure in Billion Dollars');

//         const yGridlines = d3.axisLeft()
//             .scale(yScale)
//             .ticks(5)
//             .tickSize(-width,0,0)
//             .tickFormat('')

//         chart.append('g')
//             .call(yGridlines)
//             .classed('gridline', true);
//     }

//     drawChart() {
//         const width = 800;
//         const height = 450;

//         const el = new Element('div');
//         const svg = d3.select(el)
//             .append('svg')
//             .attr('id', 'chart')
//             .attr('width', width)
//             .attr('height', height);

//         const margin = {
//             top: 60,
//             bottom: 100,
//             left: 80,
//             right: 40
//         };

//         const chart = svg.append('g')
//             .classed('display', true)
//             .attr('transform', `translate(${margin.left},${margin.top})`);

//         const chartWidth = width - margin.left - margin.right;
//         const chartHeight = height - margin.top - margin.bottom
//         this.plot(chart, chartWidth, chartHeight);

//         return el.toReact();
//     }

//     render() {
//         return this.drawChart();
//     }
// }

// export default BarGraph;