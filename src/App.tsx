import React from 'react';
import styled from 'styled-components';
import Search from './components/Search';

function App() {
  return (
    <Layout>
      <Search />
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  background-color: #cae9ff;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  width: 100%;
  min-height: calc(100vh - 120px);
`;
