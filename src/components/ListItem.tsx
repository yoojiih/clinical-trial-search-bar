import styled from 'styled-components';

const ItemList = (props: any) => {
  return (
    <ItemWrapper isSelected={props.isSelected}>
      <Icon>{props.sickNm && 'Q'}</Icon>
      <Blank />
      <Text>{props.sickNm}</Text>
    </ItemWrapper>
  );
};

export default ItemList;

const ItemWrapper = styled.div<{ isSelected: boolean }>`
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: flex;
  padding: 8px 24px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? '#EEF7FF' : '#ffffff')};
`;

const Icon = styled.div`
  color: rgb(167, 175, 183);
  align-self: flex-start;
  min-width: 16px;
  height: 16px;
  margin-top: 3px;
`;

const Blank = styled.div`
  margin-right: 12px;
`;
const Text = styled.div`
  font-family: inherit;
  font-weight: 700;
`;
