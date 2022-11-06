import {useNavigate} from 'react-router-dom'
import {Button,Card,Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSVReader } from 'react-papaparse'

// !!!! https://plotly.com/javascript/time-series/

// import Plotly from "plotly.js"
import React from 'react';
import Plot from 'react-plotly.js';
import * as d3 from "d3"

// d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows) => {console.log}

// function unpack(rows, key) {
//   return rows.map(function(row) { return row[key]; });
// }

// var trace1 = {
//   type: "scatter",
//   mode: "lines",
//   name: 'AAPL High',
//   x: unpack(rows, 'Date'),
//   y: unpack(rows, 'AAPL.High'),
//   line: {color: '#17BECF'}
// }

// var trace2 = {
//   type: "scatter",
//   mode: "lines",
//   name: 'AAPL Low',
//   x: unpack(rows, 'Date'),
//   y: unpack(rows, 'AAPL.Low'),
//   line: {color: '#7F7F7F'}
// }

// var data = [trace1,trace2];

// var layout = {
//   title: 'Time Series with Rangeslider',
//   xaxis: {
//     autorange: true,
//     range: ['2015-02-17', '2017-02-16'],
//     rangeselector: {buttons: [
//         {
//           count: 1,
//           label: '1m',
//           step: 'month',
//           stepmode: 'backward'
//         },
//         {
//           count: 6,
//           label: '6m',
//           step: 'month',
//           stepmode: 'backward'
//         },
//         {step: 'all'}
//       ]},
//     rangeslider: {range: ['2015-02-17', '2017-02-16']},
//     type: 'date'
//   },
//   yaxis: {
//     autorange: true,
//     range: [86.8700008333, 138.870004167],
//     type: 'linear'
//   }
// };


      // Plotly.newPlot('myDiv', data, layout);

function StatCard () {
  return (
    // <div>tets</div>
    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        {/* <Plot data = {data} layout = {layout}/> */}
          <Plot
            data={[
              {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
              },
              {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
            ]}
            layout={ {width: 600, height: 300, title: 'A Fancy Plot'} }
          />
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

function CamerasCard () {
  return (
    // <div>tets</div>
    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        contenus
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

function Dashboard() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/GreenHouseMap')}> back </button>
      <Container>
        <Row>
          <Col> <StatCard/> </Col>
        </Row>
        <Row>
          <Col> <CamerasCard/> </Col>
          <Col> <CamerasCard/> </Col>
          <Col> <CamerasCard/> </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;