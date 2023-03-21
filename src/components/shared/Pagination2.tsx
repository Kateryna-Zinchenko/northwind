import React from 'react';
import styled from 'styled-components';
import { usePagination, DOTS } from './usePagination';

const Pagination = (props: any) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (typeof paginationRange !== 'undefined')
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <Wrapper>
      <div>
        {
          paginationRange?.map(pageNumber => {
            if (pageNumber === DOTS) {
              return <span key={pageNumber}>&#8230;</span>;
            }
            return (
              <Button
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </Button>
            );
          })}
      </div>
      {
        typeof paginationRange !== 'undefined' &&
        <Div>Page {currentPage} of {paginationRange[paginationRange.length - 1]}</Div>
      }
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
  border: ${({ active }) => active ? '1px solid rgb(209 213 219)' : '1px solid rgb(249 250 251)'};
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
