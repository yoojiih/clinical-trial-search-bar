import styled from 'styled-components';
import SearchBar from './SearchBar';
import People from '../images/people.svg';
const Search = () => {
  return (
    <Layout>
      {/* <People />     */}
      <h2>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </h2>
      <SearchBar />
    </Layout>
  );
};

export default Search;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 80px 0 160px 0;
  width: 100%;
  background: #cae9ff;

  h2 {
    margin: 0 0 40px 0;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    text-align: center;
  }

  .search-section {
    position: relative;
    width: 490px;
  }
`;
