import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

const Wrapper2 = styled.div`
  font-size: 50px;
  color: red;
`;

const Index: NextPage = (): JSX.Element => {
  return <Wrapper2>OK</Wrapper2>;
};
export default Index;
