import styled from 'styled-components';
import SearchInput from './SearchInput';

const SearchBar = () => {
  return (
    <Layout>
      <Wrapper>
        <SearchInput />
        <SearchButton />
      </Wrapper>
    </Layout>
  );
};

export default SearchBar;

const Layout = styled.div`
  display: flex;
  max-width: 490px;
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  border-radius: 42px;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: flex;
  width: 100%;
  position: relative;
  padding-right: 8px;
`;

const SearchButton = styled.div`
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  display: flex;
  font-weight: 500;
  display: inline-flex;
  border: 0;
  cursor: pointer;
  background-color: #007be9;
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
`;
