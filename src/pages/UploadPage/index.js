import React from 'react';

import { Container, Content, Logo } from './styles';
import Upload from '../../components/Upload';

function UploadPage() {
  return (
    <Container>
      <Content >
        <Logo src='/logogrande.png' alt="logo" />
        <Upload />
      </Content>
    </Container>
  );
}

export default UploadPage;
