import React, { Component } from 'react';

import { Container, Content, Logo, ResultMessage, Button } from './styles';

export default class UploadPage extends Component {
  state = {
    done: undefined
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({done: true});
    }, 6000);
  }

  render() {
    return (
      <Container>
        {!this.state.done ? 
          (
            <Content >
              <Logo src='/giflogo.gif' alt="logo" />
              <ResultMessage>
                Processando Informações...
              </ResultMessage>
            </Content>
          ) : (
            <Content>
              <Logo src='/logogrande.png' alt="logo" />
              <ResultMessage>
                Processamento terminado, clique no botão abaixo para realizar o download do laudo.
              </ResultMessage>
              <Button> Download </Button>
            </Content>
          )}
      </Container>
    );
  }
}


