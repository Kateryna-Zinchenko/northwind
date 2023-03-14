import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <Wrapper>
      <img src='https://imagedelivery.net/4wj01aQOZZ0hemsvbxWAvA/763bcbcd-da6d-46ec-f5e1-70c1c1a33d00/public' alt='#' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Logo;
