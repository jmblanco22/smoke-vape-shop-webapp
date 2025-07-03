import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon

const HeaderContainer = styled.header`
  background-color: #0c0c0c;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;
  font-family: 'Courier New', Courier, monospace;
`;

const Logo = styled(Link)`
  font-size: 1.75rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #00ffff;
  font-size: 1.1rem;
  text-transform: uppercase;
  transition: text-shadow 0.3s ease;
  position: relative;

  &:hover {
    text-shadow: 0 0 8px #00ffff, 0 0 15px #00ffff;
  }
`;

const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -12px;
  background-color: #ff00ff;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.75rem;
  font-weight: bold;
  border: 1px solid #fff;
`;


const Header = ({ cartItemCount }) => {
  return (
    <HeaderContainer>
      <Logo to="/">Smoke & Vape</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">
          <CartIconContainer>
            <FaShoppingCart size={24} />
            {cartItemCount > 0 && <CartBadge>{cartItemCount}</CartBadge>}
          </CartIconContainer>
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;