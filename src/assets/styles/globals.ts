import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --white: #fff;
  
  --purple-100: #22223b;
  --purple-80: #4a4e69;
  --purple-50: #9a8c98;
  --purple-30: #c9ada7;
  --purple-10: #f2e9e4;

  --purple-50-transparent: #9a8c9844;

  --gray-800: #222;
  --red-50: #B22222;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  
  font: 500 1rem 'PT Sans', sans-serif;
  color: var(--purple-100);
}

body{
  background-color: #ffffff;
  background-image:  linear-gradient(#f2e8e9 1px, transparent 1px), linear-gradient(to right, #f2e8e9 1px, #ffffff 1px);
  background-size: 20px 20px;
}


@media (max-width: 1500px) {
  html {
      font-size: 80%;
  }
}

@media (max-width: 1080px) {
  html {
      font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
      font-size: 87.5%;
  }
}

input,
textarea,
button {
  font: 500 1rem 'PT Sans', sans-serif;
  color: var(--purple-100);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  color: var(--gray-800);
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

button {
  cursor: pointer;
}

`