import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RedoIcon from '@mui/icons-material/Redo';
import Avatar from '../../shared/Avatar';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, Path } from '../../../App';
import { getEmployees } from '../../../store/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmployees, selectState } from '../../../store/selectors/user';
import { RequestState } from '../../../store/reducers/common';
import { getRandomColor } from '../../../utils/deleteKeys';
import Pagination from '../../shared/Pagination';

const Employees = () => {
  const [colors, setColors] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const employees = useSelector(selectEmployees);
  const state = useSelector(selectState);

  useEffect(() => {
    const storedColors = localStorage.getItem('employees_colors');
    if (storedColors) {
      setColors(JSON.parse(storedColors));
    } else {
      if (employees != null) {
        const initialColors = Array.from({ length: employees.length }, () => getRandomColor());
        localStorage.setItem('employees_colors', JSON.stringify(initialColors));
        setColors(initialColors);
      }
    }
  }, [employees]);

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  const tableData = employees?.map((obj) => {
    return {
      full_name: obj.full_name,
      title: obj.title,
      city: obj.city,
      home_phone: obj.home_phone,
      country: obj.country,
    };
  });

  const postsPerPage = 20;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = tableData?.slice(firstPostIndex, lastPostIndex);

  const goTo = (id: string, index: number) => {
    if (index === 0) {
      nav(`${Path.Employees}/${id}`);
    }
  };

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  console.log(employees);
  return (
    <Wrapper className='suppliers'>
      {
        state === RequestState.LOADING ? <div>Loading...</div> :
          <Table>
            <Header>
              <Title>Employees</Title>
              <RedoIcon />
            </Header>
            <TableComponent>
              <THead>
                <TR>
                  <TH></TH>
                  <TH>Name</TH>
                  <TH>Title</TH>
                  <TH>City</TH>
                  <TH>Phone</TH>
                  <TH>Country</TH>
                  <TH></TH>
                </TR>
              </THead>
              <TBody>
                {currentPosts && currentPosts.map((obj, index: number) => {
                  const firstLetter = obj.full_name.split(' ')[0][0].toUpperCase() ;
                  const secondLetter = obj.full_name.split(' ')[1][0].toUpperCase() ;
                  return (
                    <TR key={index}>
                      <TDAvatar>
                        <Avatar color={colors[index]} firstLetter={firstLetter} secondLetter={secondLetter} />
                      </TDAvatar>
                      {Object.values(obj).map((value, valIndex) => (
                        <TD
                          key={valIndex}
                          isColored={valIndex === 0}
                          onClick={() => goTo(`${index + 1}`, valIndex)}>
                          {value}
                        </TD>
                      ))}
                    </TR>
                  );
                })}
              </TBody>
            </TableComponent>
            {
              tableData &&
              <Pagination
                totalPosts={tableData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            }
          </Table>
      }
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 24px;
`;

const Table = styled.div`
  border: 1px solid rgb(243 244 246);
  border-radius: 0.25rem;
`;

const Header = styled.div`
  padding: 12px 16px;
  background-color: #fff;
  border-bottom: 1px solid rgb(243 244 246);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

const TableComponent = styled.table`
  width: 100%;
  background-color: #fff;
  border-spacing: 0;
`;

const THead = styled.thead`
  & > tr:nth-child(odd) {
    background-color: #fff;
  }

  & > tr:nth-child(odd):hover {
    background-color: #fff;
  }
`;

const TR = styled.tr`
  &:hover {
    background-color: rgb(243 244 246);
  }

  &:nth-child(odd) {
    background-color: rgb(249 250 251)
  }

  &:nth-child(odd):hover {
    background-color: rgb(243 244 246);
  }
`;

const TH = styled.th`
  padding: 8px 12px;
  text-align: left;
  height: 40px;
  user-select: text;
`;

const TBody = styled.tbody``;

const TDAvatar = styled.td`
  width: 48px;
  text-align: center;
  padding: 8px 12px;
`;

const TD = styled.td<{ isColored: boolean }>`
  padding: 8px 12px;
  height: 40px;
  color: ${({ isColored }) => isColored && 'rgb(37 99 235)'};
  cursor: ${({ isColored }) => isColored && 'pointer'};
  user-select: text;
`;

export default Employees;
