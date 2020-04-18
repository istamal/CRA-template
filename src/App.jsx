import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background-color: #1f0a2c;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  height: 80vh;
`;

const H1 = styled.h1`
  color: #1f0a2c;
  font-size: 55px;
  padding: 0 5px;
  font-weight: bold;
  display: inline-block;
  margin-top: 40vh;
  margin-bottom: 0;
  background-color: #f3643c;
`;

const Pstyle = styled.p`
  color: #f3643c;
  margin: 0;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: bold;
  line-height: 22px;
`;

const Span = styled.span`
  color: #f3643c;
`;

const Par = styled.p`
  margin-top: 25vh;
`;

function App() {
  return (
    <Wrapper>
      <H1>Hello, Istamal!</H1>
      <Pstyle>the cra template</Pstyle>
      <Par>
        The template includes
        {' '}
        <Span>Antd</Span>
        ,
        <Span>Prop-Types</Span>
        ,
        <Span>Styled-Components</Span>
        .
        <Span>Node-Sass</Span>
        {' '}
        and more.
      </Par>
    </Wrapper>
  );
}

export default App;
