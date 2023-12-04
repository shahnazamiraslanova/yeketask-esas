import styled from "styled-components";

export const Navbar = styled.nav`
  background-color:blue;
  color:white;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  padding:20px 50px;
  & h1{
    text-align:center;
    & a{
      margin:5px 0;
      font-size:30px;
      color:white;
      text-decoration:none;
    }
    

  }
  & ul{
  justify-content:center;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
      & a{

        color:white;
        margin:5px 10px;
        text-decoration:none;
        font-size:20px;
      }
    

  }
`;