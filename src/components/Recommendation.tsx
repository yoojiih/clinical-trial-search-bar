import styled from 'styled-components';
import ListItem from './ListItem';

const Recommendation = ({ inputText, recommendation, selectedIndex }) => {
  return (
    <Layout>
      <Wrapper>
        {inputText.length > 1 ? (
          <>
            <ListItem sickNm={inputText} />
            <IconWrapper>추천 검색어</IconWrapper>
            {recommendation &&
              recommendation?.map((issue: any, index: number) => (
                <div key={issue.sickCd + index}>
                  <li>
                    <ListItem
                      sickNm={issue.sickNm}
                      isSelected={index === selectedIndex}
                    />
                  </li>
                </div>
              ))}
          </>
        ) : (
          <IconWrapper>검색어 없음</IconWrapper>
        )}
      </Wrapper>
    </Layout>
  );
};

export default Recommendation;

const Layout = styled.div`
  z-index: 1;
`;

const Wrapper = styled.ul`
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  flex-direction: column;
  display: flex;
  position: absolute;
  top: 100%;
  left: 0px;
  margin: 8px 0 0 0;
  padding: 24px 0 16px 0;
  box-shadow: rgba(30, 32, 37, 0.1) 0px 2px 10px;
  width: 100%;
  list-style-type: none;
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
