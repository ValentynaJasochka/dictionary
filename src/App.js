import { Layout } from "./components/Layout";
import {Dictionary} from './components/Dictionary'
import { GlobalStyle } from "./GlobalStyle";


function App() {
  return (
    <>  
      <Layout>  
        <Dictionary/>
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default App;
