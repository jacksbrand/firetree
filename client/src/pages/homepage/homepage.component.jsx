import React, { useEffect, useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

import Product from '../../components/product/product.component';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);

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
