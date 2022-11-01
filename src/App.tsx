import styled, { createGlobalStyle } from 'styled-components';
import { MainLayout } from './pages/main-layout/component';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-size: 16px;
  background-color: white;
  min-width: 320px;
  @media (max-width: 1140px) {
    font-size: 12px;
  }
}
`;

const StyledApp = styled.div`
  width: 1140px;
  min-height: 100vh;
  margin 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 1140px) {
    width: auto;
  }
`;

function App() {

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <MainLayout />
      </StyledApp>
    </>
  );
}

export default App;
