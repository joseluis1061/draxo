import React from 'react';
import styled from '@emotion/styled';

const Container = styled.header`
  grid-area: Header;
  background-color: gray;
`

const Header = () => {
  return (
    <Container className='Header'>
      Header
    </Container>
  )
}

export default Header