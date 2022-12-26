import { createGlobalStyle } from 'styled-components';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Todos />
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
  }
`;
