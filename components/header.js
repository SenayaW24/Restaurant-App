import Link from 'next/link';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>FiveStarEat.com</Logo>
      <Nav>
        <Link href="/login" passHref>
          <NavLink>Login</NavLink>
        </Link>
        <Link href="/register" passHref>
          <NavLink>Register Today</NavLink>
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
