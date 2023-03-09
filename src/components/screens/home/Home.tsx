import React from 'react';
import styled from 'styled-components';

const Home: React.FC = () => {
  return (
    <Wrapper className='home'>
      <Title>Welcome to Northwind Traders</Title>
      <Title2>Running on Cloudflare&apos;s D1</Title2>
      <Img src='https://imagedelivery.net/4wj01aQOZZ0hemsvbxWAvA/763bcbcd-da6d-46ec-f5e1-70c1c1a33d00/public' />
      <Paragraph>
        This is a demo of the Northwind dataset, running on
        <Link href='https://workers.cloudflare.com/' target='_new'>
          &nbsp;Cloudflare Workers
        </Link>
        , and D1 - Cloudflare&apos;s newest SQL database, running on SQLite.
      </Paragraph>
      <Paragraph>
        Read our
        <Link href='https://blog.cloudflare.com/introducing-d1' target='_new'>
          &nbsp;D1 announcement
        </Link>
        &nbsp;to learn more about D1.
      </Paragraph>
      <Paragraph>
        This dataset was sourced from
        <Link href='https://github.com/jpwhite3/northwind-SQLite3' target='_new'>
          &nbsp;northwind-SQLite3
        </Link>
        .
      </Paragraph>
      <Paragraph>
        You can use the UI to explore Supplies, Orders, Customers, Employees and Products,
        or you can use search if you know what you&apos;re looking for.
      </Paragraph>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 48px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 400;
`;

const Title2 = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: rgb(156 163 175);
  padding: 8px 0 0;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 16px 0 0;
`;

const Link = styled.a`
  color: rgb(37 99 235);
`;

const Img = styled.img`
  object-fit: scale-down;
  width: 24rem;
  float: right;
`;

export default Home;
