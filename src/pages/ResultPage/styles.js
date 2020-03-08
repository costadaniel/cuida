import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  align-items: center;
  justify-content:center;
  width: 100%;
  max-width: 400px;
  margin: 30px;
  background: #F6F6F6;
  border-radius: 5px;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 300px;
  margin: 30px;
`;

export const ResultMessage = styled.p`
  display: flex;
  color: #0f4c81;
  justify-content: center;
  align-items:center;
  text-align:center;
  padding: 15px;
`;

export const Button = styled.div`
  display:flex;
  padding: 15px;
  margin: 20px;
  color: #FFF;
  justify-content: center;
  background: #0f4c81;
  border-radius: 5px;
  cursor: pointer;
`;