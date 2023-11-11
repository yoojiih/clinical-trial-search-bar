import styled from 'styled-components';

const SearchInput = ({
  inputText,
  isFocus,
  saveInputText,
  clearInputText,
  inverseFocus,
  setSelectedIndex,
  maxIndex,
}: any) => {
  const getUpIndex = (prevIndex: number) => {
    if (prevIndex <= 0) return maxIndex;
    return prevIndex - 1;
  };

  const getDownIndex = (prevIndex: number) => {
    if (prevIndex >= maxIndex) return 0;
    return prevIndex + 1;
  };

  const onKeyDownItem = (key: string) => {
    if (key === 'ArrowUp')
      setSelectedIndex((prevIndex: any) => getUpIndex(prevIndex));
    if (key === 'ArrowDown')
      setSelectedIndex((prevIndex: any) => getDownIndex(prevIndex));
  };

  const onKeyDownInputText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
      e.preventDefault();
      if (e.nativeEvent.isComposing === false) {
        onKeyDownItem(e.key);
      }
    }
  };

  return (
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
        onKeyDown={onKeyDownInputText}
      />
      {isFocus && inputText.length > 1 && (
        <InputCancelButton onClick={clearInputText}>X</InputCancelButton>
      )}
    </InputWrapper>
  );
};

export default SearchInput;

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
