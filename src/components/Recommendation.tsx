import styled from 'styled-components';
import ListItem from './ListItem';

const Recommendation = () => {
  return (
    <Layout>
      <Wrapper>
        <ListItem />
        <IconWrapper>추천 검색어</IconWrapper>
        <ListItem />
      </Wrapper>
    </Layout>
  );
};

export default Recommendation;

const Layout = styled.div`
  z-index: 1;
`;

const Wrapper = styled.div`
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  flex-direction: column;
  display: flex;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0px;
  margin-top: 8px;
  padding-top: 24px;
  padding-bottom: 16px;
  box-shadow: rgba(30, 32, 37, 0.1) 0px 2px 10px;
`;

const IconWrapper = styled.div`
  color: rgb(106, 115, 123);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  padding-left: 24px;
  padding-right: 24px;
  font-family: inherit;
`;
