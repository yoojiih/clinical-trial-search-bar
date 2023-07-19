import { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchInput from './SearchInput';
import Recommendation from './Recommendation';
import { RecommendAPI } from '../apis/recommendation';
import { loadRecommendation } from '../store/recommendation';
import styled from 'styled-components';

const Search = () => {
  const [inputText, setInputText] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();

  const getTodos = (dispatch) => {
    RecommendAPI.getIssueList(inputText).then((recommendation) =>
      dispatch(loadRecommendation(recommendation)),
    );
  };

  const saveInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getTodos);
    setInputText(e.target.value);
  };

  const clearInputText = () => {
    setInputText('');
  };

  const inverseFocus = () => {
    setIsFocus(!isFocus);
  };

  return (
    <Layout>
      <SearchWrapper>
        <h2>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </h2>
        <SearchBarWrapper>
          <SearchBarSection>
            <SearchInput
              inputText={inputText}
              isFocus={isFocus}
              saveInputText={saveInputText}
              clearInputText={clearInputText}
              inverseFocus={inverseFocus}
            />
            <SearchButton />
            {isFocus && inputText.length > 1 && (
              <Recommendation inputText={inputText} />
            )}
          </SearchBarSection>
        </SearchBarWrapper>
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

// SearchBar
const SearchBarWrapper = styled.div`
  display: flex;
  max-width: 490px;
  width: 100%;
  margin: 0 auto;
`;

const SearchBarSection = styled.div`
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
