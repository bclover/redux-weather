import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function calculateAverageTemp(data) {
  return _.round(_.sum(data)/data.length);   
}

export default (props, ...rest) => {
  return (
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{calculateAverageTemp(props.data)} {props.units}</div>
    </div>
  );
}

