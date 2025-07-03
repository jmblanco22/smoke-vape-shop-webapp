import React from 'react';
import styled from '@emotion/styled';
import { FaTrash } from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 2rem;
  background-color: #0c0c0c;
  min-height: 100vh;
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  text-transform: uppercase;
  text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff;
`;

const CartContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #333;
  padding: 1rem;
  margin-bottom: 1rem;
  
  &:hover {
    border-color: #00ffff;
  }
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 1rem;
`;

const ItemInfo = styled.div`
  flex-grow: 1;
`;

const ItemName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const ItemPrice = styled.p`
  margin: 0.5rem 0;
  color: #00ffff;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  background: #222;
  border: 1px solid #00ffff;
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
  margin: 0 0.5rem;
  -moz-appearance: textfield; /* Firefox */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff00ff;
  cursor: pointer;
  font-size: 1.2rem;
  margin-left: 1rem;
  &:hover {
    color: #fff;
  }
`;

const CartSummary = styled.div`
  margin-top: 2rem;
  text-align: right;
  border-top: 2px solid #00ffff;
  padding-top: 1rem;
`;

const TotalPrice = styled.h3`
  font-size: 1.8rem;
  text-shadow: 0 0 5px #00ffff;
`;

const EmptyCartMessage = styled.div`
    text-align: center;
    font-size: 1.5rem;
    color: #888;
`;

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')) * item.quantity, 0).toFixed(2);
  };

  return (
    <PageContainer>
      <PageTitle>Your Cart</PageTitle>
      <CartContainer>
        {cartItems.length === 0 ? (
          <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
        ) : (
          <>
            {cartItems.map(item => (
              <CartItem key={item.id}>
                <ItemImage src={item.image} alt={item.name} />
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>{item.price}</ItemPrice>
                </ItemInfo>
                <QuantityControl>
                  <QuantityInput
                    type="number"
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                  />
                </QuantityControl>
                <RemoveButton onClick={() => onRemoveItem(item.id)}>
                  <FaTrash />
                </RemoveButton>
              </CartItem>
            ))}
            <CartSummary>
              <TotalPrice>Total: ${calculateTotal()}</TotalPrice>
            </CartSummary>
          </>
        )}
      </CartContainer>
    </PageContainer>
  );
};

export default Cart;