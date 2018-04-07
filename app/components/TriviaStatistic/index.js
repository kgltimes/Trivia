/**
*
* TriviaStatistic
*
*/
import React from 'react';
// import styled from 'styled-components';

class TriviaStatistic extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (<div className="header stats">
      <div className="menu correct"> &nbsp; </div>
      <div className="menu incorrect"> &nbsp; </div>
    </div>);
  }
}

TriviaStatistic.propTypes = {

};

export default TriviaStatistic;
