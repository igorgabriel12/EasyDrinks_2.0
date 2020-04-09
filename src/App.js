import React from 'react';

import {Root} from 'native-base';
import Routes from './Routes';

export default (props) => {
  // console.disableYellowBox = true;
  return (
    <Root>
      <Routes teste={'teste'} />
    </Root>
  );
};
