import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';

const cards = [1, 2, 3, 4, 5, 6, 7, 8];
function ProductGrid() {
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={3}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductGrid;
