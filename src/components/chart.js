import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function calculateAverageTemp(data) {
  return _.round(_.sum(data)/data.length);   
}

export default (props, ...rest) => {
  console.log(props);
  return (
    <div class="chart-container">
      <Sparklines svgHeight={200} svgWidth={200} data={props.data}>
        <SparklinesLine color={props.style.stroke} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{calculateAverageTemp(props.data)} {props.units}</div>
    </div>
  );
}

