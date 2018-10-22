import React from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const PageButton = styled.button`
  background: red;
  font-size: ${props => props.huge};
  color: ${props => props.blanco ? 'white' : 'black'};
`;

class Page extends React.Component {
  render() {
    return (
      <>
        <Meta />
        <Header />
        <p>Page Component</p>
        <PageButton huge="8px" >Click me</PageButton>
        <PageButton blanco >Click me</PageButton>
        {this.props.children}
      </>
    );
  }
}

export default Page;