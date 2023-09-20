import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import 'modern-normalize';
import phonebook from '../image/phonebook.webp';

export const GlobalStyle = createGlobalStyle`  
body {  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  background-image: url(${phonebook});  
  background-position: 50% 50%;  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3, 
p {
  margin-top: 0px;
  margin-bottom: 0px;
}

ul {  
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px; 
}  
`;

export const Container = styled.div`
  max-width: 440px;
  min-height: 600px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  font-size: 18px;
  background-image: radial-gradient(
    circle at 50% -20.71%,
    #ffffff 0,
    #fffffa 16.67%,
    #fbf5e4 33.33%,
    #f2e6cd 50%,
    #ead7b6 66.67%,
    #e3c9a2 83.33%,
    #ddbb8f 100%
  );
  box-shadow: 5px 5px 5px 0px rgba(179, 179, 179, 1);
  background-color: #c9b6ac;
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 28px;
  text-align: center;  
`;
