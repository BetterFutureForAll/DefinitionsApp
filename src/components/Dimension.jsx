import React from 'react';
import PropTypes from 'prop-types';
import { groupBy, regEx } from '../hooks';
import Components from '../containers/ComponentBox';

const Dimension = ({ props }) => {

  let name = Object.keys(props)[0];
  let target = props[name];

  return (
    <div className={`dim-${props.index} ${name}`} id={regEx(name)} key={regEx(name)}>
      <h3 id={regEx(name)} className="dimension-title">{name}</h3>
      <Components props={target} key={props.index}></Components>
    </div>)


};

Dimension.propTypes = {

}

export default Dimension;