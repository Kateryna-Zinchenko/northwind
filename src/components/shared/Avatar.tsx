import React from 'react';
import styled from 'styled-components';

interface Props {
  firstLetter: string;
  secondLetter: string;
  color?: string;
}

const Avatar: React.FC<Props> = ({ firstLetter, secondLetter, color }: Props) => {
  return (
    <Wrapper firstLetter={firstLetter} secondLetter={secondLetter} color={color}>
      <UserInfo>{firstLetter}</UserInfo>
      <UserInfo>{secondLetter}</UserInfo>
    </Wrapper>
  );
};

const UserInfo = styled.div`
  font-size: 12px;
`;

const Wrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  flex: none;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({color}) => color ? color :
          'radial-gradient(circle, rgba(14, 133, 159, 1) 0%, ' +
          'rgba(58, 154, 191, 0.6293110994397759) 100%)'};
  color: #fff;
  white-space: nowrap;
  -webkit-user-select: none;
  user-select: none;
  position: relative;
`;

export default Avatar;
