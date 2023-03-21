import React from "react";
import styled from "styled-components";

interface Props {
  totalPosts: number,
  postsPerPage: number,
  setCurrentPage: (value: number) => void,
  currentPage: number,
}

const Pagination = ({
                      totalPosts,
                      postsPerPage,
                      setCurrentPage,
                      currentPage,
                    }: Props) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const onButtonClick = (page: any) => {
    setCurrentPage(page);
  }

  console.log(pages);

  return (
    <Wrapper className='pagination'>
      <div>
      {pages.map((page, index) => {
        return (
          <Button
            key={index}
            onClick={() => onButtonClick(page)}
            active={page === currentPage}
          >
            {page}
          </Button>
        );
      })}
      </div>
      <Div>Page {currentPage} of {pages[pages.length - 1]}</Div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fff;
  padding: 12px 24px;
  border-top: 1px solid rgb(243 244 246);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button<{ active: boolean }>`
  border: ${({active}) => active ? '1px solid rgb(209 213 219)' : '1px solid rgb(249 250 251)'};
  background: #fff;
  border-radius: 0.25rem;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  text-align: center;
  white-space: nowrap;
  margin: 0 4px;
  height: 42px;
  
  &:hover {
    border-color: rgb(107 114 128);
  }
`;

const Div = styled.div`
  font-size: 80%;
  line-height: 1.5rem;
`;

export default Pagination;
