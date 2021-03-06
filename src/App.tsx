import React from 'react';
import { render } from 'react-dom';

import Routes from './routes';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => <Routes />;

render(<App />, mainElement);
