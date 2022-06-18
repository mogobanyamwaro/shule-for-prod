// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { WebHelpers } from '@shule/web/helpers';

export function App() {
  return (
    <>
      <h1 className="text-primary">hello world</h1>
      <WebHelpers />
    </>
  );
}

export default App;
