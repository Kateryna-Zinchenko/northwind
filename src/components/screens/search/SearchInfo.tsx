import React from 'react';
import styled from 'styled-components';

const SearchInfo = () => {
  return (
    <Wrapper>
      <Results>No results</Results>
    </Wrapper>
  );
};

const Wrapper = styled.div`
`;

const Results = styled.div`
  margin: 24px 0 0;
  line-height: 1.5rem;
`;

export default SearchInfo;
