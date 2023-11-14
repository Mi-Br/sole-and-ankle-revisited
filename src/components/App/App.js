import React from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';
import { BREAKPOINTS } from '../../constants';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (

        <ThemeProvider theme={theme}>
          <Header />
        <Main>
          <ShoeIndex sortId={sortId} setSortId={setSortId} />
         </Main>
         </ThemeProvider>
  );
};

const theme = {
  'mobileAndSmaller': `(max-width: ${BREAKPOINTS.S}rem)`,
  'tabletAndSmaller': `(max-width: ${BREAKPOINTS.M}rem)`,
  'dektopAndSmaller': `(max-width: ${BREAKPOINTS.L}rem)`,
}


const Main = styled.main`
  padding: 64px 32px;
  @media ${props => props.theme.dektopAndSmaller} {

  }
  @media ${props => props.theme.tabletAndSmaller} {

  }

  @media ${props => props.theme.mobileAndSmaller} {

  }
`

export default App;


/*
 @media (max-width: ${props.theme.queries.tabletAndUp}) {
  background-color: red;
 }
  @media (max-width: ${props.theme.queries.desktopAndUp}) {
  background-color: pink
 } */
