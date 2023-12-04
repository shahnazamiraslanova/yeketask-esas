import styled from "styled-component";

export const Navbar = styled.nav`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;

  display: flex;
  justify-content: space-between;
  padding: 20px 50px;

  ul {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      text-decoration: none;
      color: blue;
    }
  }
`;