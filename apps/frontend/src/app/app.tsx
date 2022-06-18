// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

import {
  Button,
  Footer,
  Input,
  Media,
  Select,
  WebComponents,
} from '@shule/web/components';
export function App() {
  return (
    <div className="  font-glory">
      <Select name="sell" options={['selling', 'buying']} />
    </div>
  );
}

export default App;
