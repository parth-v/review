import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  border-radius: 0.5rem;
  max-width: 410px;
  border: 1px solid blue;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: blue;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const Button = styled.button`
  background: linear-gradient(to bottom, #6371c7, #5563c1);
  border-color: #3f4eae;
  border-radius: 3px;
  padding: 1rem;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 50%;
  margin-bottom: 1rem;
  border: solid 0.2rem blue;
  border-radius: 0.5rem;
`;

const Error = styled.div`
  margin: 1rem;
  color: red;
`;

export { Form, Input, Title, Button, Logo, Card, Error };