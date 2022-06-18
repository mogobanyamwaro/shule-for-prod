// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { WebHelpers } from '@shule/web/helpers';
import { Button, WebComponents } from '@shule/web/components';
export function App() {
  return (
    <>
      <h1 className="text-main text-6xl">hello world</h1>

      <WebComponents />
      <Button />
    </>
  );
}

export default App;
