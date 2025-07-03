import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const PageContainer = styled.div`
  background-color: #0c0c0c;
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Courier New', Courier, monospace;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductCard = styled.div`
  background-color: transparent;
  border: 2px solid #333;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: #ff00ff;
    box-shadow: 0 0 15px #ff00ff, inset 0 0 10px #ff00ff;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 224px;
  object-fit: cover;
  filter: grayscale(40%);
  transition: filter 0.3s ease;

  /* This is the change: The hover effect is now directly on the image */
  &:hover {
    filter: grayscale(0%);
  }
`;

const ProductInfo = styled.div`
  padding: 1rem;
  flex-grow: 1;
`;

const ProductName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
`;

const ProductPrice = styled.p`
  color: #00ffff;
  margin-top: 0.5rem;
  font-weight: bold;
`;

const Products = () => {
  return (
    <PageContainer>
      <PageTitle>Our Products</PageTitle>
      <ProductsGrid>
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ProductCard>
                <ProductImage src={product.image} alt={product.name}/>
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{product.price}</ProductPrice>
                </ProductInfo>
              </ProductCard>
            </Link>
          </motion.div>
        ))}
      </ProductsGrid>
    </PageContainer>
  );
};

export default Products;