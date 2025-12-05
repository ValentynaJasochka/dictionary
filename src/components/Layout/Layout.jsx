import { Container, Navigation } from "./Layout.styled";
import { Outlet } from "react-router"
// import {  Outlet } from 'react-router-dom';
export const Layout = ({children}) => {

  return (
    <Container>
      <header>
        <div>
          <Navigation>
            <li></li>
            <li></li>
            <li></li>
          </Navigation>
        </div>
      </header>
      <main>
        {children}
        <Outlet>
          
        </Outlet>
        </main>
    </Container>
  );
};
