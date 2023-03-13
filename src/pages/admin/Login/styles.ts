import styled, { keyframes } from 'styled-components';

interface InputProps {
  margin?: boolean;
  error: boolean;
}

export const Container = styled.main`
  position: relative;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url('https://pixabay.com/get/g66b7c70eef75e54a84df8a1b2786fce1d0e598bd62b3f3735396e3d6cbfa67c5d5fe9a00841de1b6d65512a4a15c96cf1edce9f4f17ee82129d35808c66ed408f86bcb22046c8cd043b69efbd1ffd59d_1920.jpg');
  background-size: cover;
  background-position: center;
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

export const Box = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  background-color: #e9f0f2;
  padding: 50px;
  -webkit-box-shadow: 0px 0px 29px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 29px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 29px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  h1 {
    font-weight: 600;
    margin-bottom: 15px;
    font-size: 1.8rem;
    color: #111;
  }

  input: focus-visible {
    box-shadow: none !important;
    outline: 0;
    color: #111;
  }

  button,
  a {
    border: 0;
    border-radius: 0;
    padding: 10px 20px;
    color: #fff;
    font-weight: 900;
    background-color: #6092a6;
    text-decoration: none;
    font-size: 0.8rem;
    margin-right: 8px;
    cursor: pointer;
  }

  a {
    background-color: #fff;
    color: #111;
  }

  a:hover,
  button:hover {
    opacity: 0.4;
  }
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  border: ${({ error }) => (error ? '1px solid #ff0000' : 'none')};
  height: 45px !important;
  margin-bottom: ${({ margin }) => (margin ? '15px' : '')};
  padding: 0px 15px;
  font-size: 0.9rem;
  color: #595959;
`;

const rotateAnimation = keyframes`
0% {
  transform: rotate(0);
}
100% {
  transform: rotate(360deg);
}`;

export const Loading = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  background-color: #fff;
  width: 100%;
  height: 100%;

  svg {
    animation: ${rotateAnimation} 2s infinite linear;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 0.7rem;
  padding: 8px 0;
  background: rgba(0, 0, 0, 0.5);
`;
