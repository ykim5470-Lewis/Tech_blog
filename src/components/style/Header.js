import styled from "styled-components";
import NavBar from "./NavBar";

const Header = () => (
  <Header_component>
    <Header_wrapper>Lewis</Header_wrapper>
    <NavBar />
  </Header_component>
);

export default Header;

const Header_component = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1325px;
  padding-top: 60px;
  padding-left: 24px;
  padding-right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Header_wrapper = styled.div`
  font-size: 3.4rem;
`;
