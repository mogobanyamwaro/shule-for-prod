import styles from './web-middlewares.module.css';

/* eslint-disable-next-line */
export interface WebMiddlewaresProps {}

export function WebMiddlewares(props: WebMiddlewaresProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebMiddlewares!</h1>
    </div>
  );
}

export default WebMiddlewares;
