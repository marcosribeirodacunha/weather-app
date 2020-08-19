import React from 'react';

import { Container, Spinner } from './styles';

const Loader: React.FC = () => {
  return (
    <Container>
      <Spinner />
      <h1>Loading...</h1>
    </Container>
  );
};

export default Loader;
