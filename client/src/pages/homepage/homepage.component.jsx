import React from 'react';

import { Row, Col } from 'react-bootstrap';

import products from '../../products';

import Product from '../../components/product/product.component';

const HomePage = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} ex={3}>
              <Product {...product} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default HomePage;
