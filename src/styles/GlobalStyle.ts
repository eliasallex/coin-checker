import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&family=Inter:wght@100;200;300;400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #121212;
    --secondary: #1B1F23;
    --tertiary: #191622;
    --link: #6E86D6;
  }

  @media (min-width: 1080px) {
    html {
      font-size: 93.75%; // 15px
    }
  }
  @media (min-width: 720px) {
    html {
      font-size: 87.5%; // 14px
    }
  }

  body {
    font-family: "Ibm plex sans", Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;

    /* transform: scale(0.9); */
    border-radius: 20px;
  }

  ul li {
    list-style: none;
  }

  /* Track */
  ::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey; */
    /* border-radius: 1rem; */
  }
  &::-webkit-scrollbar-thumb {
    background: var(--secondary);
    /* border-radius: 1rem; */
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--tertiary);
  }
`;
