import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Row, Col } from 'react-bootstrap';

import Message from '../../components/message/message.component';
import LoadingSpinner from '../../components/spinner/spinner.component';

import Product from '../../components/product/product.component';
import { listProducts } from '../../redux/products/product.actions';

const HomePage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} ex={3}>
                <Product {...product} />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default HomePage;
