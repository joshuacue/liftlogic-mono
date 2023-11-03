import styles from './ui-kit-standard.module.css';

/* eslint-disable-next-line */
export interface UiKitStandardProps {}

export function UiKitStandard(props: UiKitStandardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiKitStandard!</h1>
    </div>
  );
}

export default UiKitStandard;
