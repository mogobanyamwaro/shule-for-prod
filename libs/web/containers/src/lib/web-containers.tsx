import styles from './web-containers.module.css';

/* eslint-disable-next-line */
export interface WebContainersProps {}

export function WebContainers(props: WebContainersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebContainers!</h1>
    </div>
  );
}

export default WebContainers;
