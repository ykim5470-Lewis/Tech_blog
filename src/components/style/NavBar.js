import styled from "styled-components";

const NavBar = () => (
  <Nav_list>
    <Nav_wrap>
      <span>blog</span>
      <span>about</span>
      <span>work</span>
    </Nav_wrap>
  </Nav_list>
);

export default NavBar;

const Nav_list = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  max-width: 150px;
  width: 100%;
  margin-top: 31px;
  padding-right: 80px;
  font-weight: 200;
`;

const Nav_wrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  font-size: 20px;
`;
