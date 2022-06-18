import styles from './web-helpers.module.css';

/* eslint-disable-next-line */
export interface WebHelpersProps {}

export function WebHelpers(props: WebHelpersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebHelpers!</h1>
    </div>
  );
}

export default WebHelpers;
