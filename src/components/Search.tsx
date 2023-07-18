import styled from 'styled-components';
import SearchBar from './SearchBar';
const Search = () => {
  return (
    <Layout>
      <SearchWrapper>
        <h2>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </h2>
        <SearchBar />
      </SearchWrapper>
    </Layout>
  );
};

export default Search;

const Layout = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
`;
const SearchWrapper = styled.div`
  padding: 80px 0 160px;
  max-width: 1040px;
  flex-direction: column;
  display: flex;
  width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  h2 {
    padding-bottom: 40px;
    font-size: 2.125rem;
    font-weight: 700;
    letter-spacing: -0.018em;
    line-height: 1.6;
    margin: 0;
    font-family: inherit;
    text-align: center;
  }
`;
