import { StrictMode } from 'react';
import { render } from 'react-dom';
import Candidates from './Candidates.jsx';
import './style.css';

const App = () => {
  return (
    <StrictMode>
      <Candidates />
    </StrictMode>
  );
};
render(<App />, document.getElementById('root'));
