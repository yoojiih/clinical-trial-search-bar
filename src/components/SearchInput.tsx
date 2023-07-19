import styled from 'styled-components';

const SearchInput = ({
  inputText,
  isFocus,
  saveInputText,
  clearInputText,
  inverseFocus,
}) => {
  return (
    <Layout>
      <InputWrapper>
        {!isFocus && inputText.length < 1 && (
          <IconTextWrapper>
            <IconWrapper>Q</IconWrapper>
            질환명을 입력해 주세요.
          </IconTextWrapper>
        )}

        <Input
          type='search'
          spellCheck='false'
          value={inputText}
          onChange={saveInputText}
          autoComplete='off'
          onFocus={inverseFocus}
          onBlur={inverseFocus}
        />
        {isFocus && inputText.length > 1 && (
          <InputCancelButton onClick={clearInputText}>X</InputCancelButton>
        )}
      </InputWrapper>
    </Layout>
  );
};

export default SearchInput;

const Layout = styled.div`
  flex-direction: row;
  flex: 1;
  align-items: center;
  font-size: 1.125rem;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: flex;
  padding: 20px 10px 20px 24px;
  font-weight: 400;
  width: 100%;
`;

const InputWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
  position: relative;
  width: 100%;
`;
const IconTextWrapper = styled.div`
  color: #a7afb7;
  position: absolute;
  pointer-events: none;
  font-size: 1.125rem;
  letter-spacing: -0.018em;
  line-height: 1.6;
  font-weight: 400;
  flex-direction: row;
  display: flex;
`;

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 12px;
`;
const Input = styled.input`
  caret-color: rgb(25, 118, 210);
  padding-right: 25px;
  width: 100%;
  border: 0;
  background-color: transparent;
  min-width: 0;
  flex: 1;
  outline-offset: -2px;
  overflow: visible;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  outline: none;
`;

const InputCancelButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: rgb(255, 255, 255);
  background-color: rgb(167, 175, 183);
`;
