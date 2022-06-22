import styles from './web-redux.module.css';

/* eslint-disable-next-line */
export interface WebReduxProps {}

export function WebRedux(props: WebReduxProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebRedux!</h1>
    </div>
  );
}

export default WebRedux;
