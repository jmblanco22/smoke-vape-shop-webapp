import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { getProductById } from '../data/products';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  padding: 2rem;
  background-color: #0c0c0c;
  min-height: 100vh;
  font-family: 'Courier New', Courier, monospace;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 2rem auto;
  border: 2px solid #00ffff;
  box-shadow: 0 0 20px #00ffff;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const InfoContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
`;

const ProductName = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
  text-shadow: 0 0 5px #ff00ff;
`;

const ProductPrice = styled.p`
  font-size: 1.875rem;
  color: #00ffff;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const ProductDescription = styled.p`
  color: #ccc;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const AddToCartButton = styled(motion.button)`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  text-decoration: none;
  color: #00ffff;
  border: 2px solid #00ffff;
  text-transform: uppercase;
  background: transparent;
  cursor: pointer;
  box-shadow: inset 0 0 10px #00ffff, 0 0 10px #00ffff;
  transition: color 0.3s, text-shadow 0.3s, box-shadow 0.3s;

  &:hover {
    color: #0c0c0c;
    background: #00ffff;
    box-shadow: 0 0 40px #00ffff;
    text-shadow: 0 0 5px #0c0c0c;
  }
`;
const CloseButton = styled(Link)`
  align-self: flex-end;
  margin-bottom: 1rem;
  margin-right: -1rem;
  font-size: 2rem;
  color: #ff00ff;
  background: none;
  border: none;
  z-index: 10;
  text-decoration: none;
  &:hover {
    color: #fff;
    text-shadow: 0 0 10px #ff00ff;
  }
`;

const QuantityInput = styled.input`
  width: 60px;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  padding: 0.3rem;
  border: 1px solid #00ffff;
  background: #222;
  color: #fff;
  text-align: center;
`;

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <PageContainer>
      <DetailContainer>
        <ImageContainer>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </ImageContainer>
        <InfoContainer>
          <CloseButton to="/products" aria-label="Back to products">&times;</CloseButton>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
          <QuantityInput
            type="number"
            min="1"
            value={quantity}
            onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          />
          <AddToCartButton onClick={() => onAddToCart({ ...product, quantity })}>
            Add to Cart
          </AddToCartButton>
        </InfoContainer>
      </DetailContainer>
    </PageContainer>
  );
};

export default ProductDetail;