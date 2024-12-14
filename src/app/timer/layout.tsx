import styles from "./layout.module.css";

type Props = {
  children: React.ReactNode;
  popup: React.ReactNode;
};

export default function TimerLayout({ children, popup }: Props) {
  return (
    <main className={styles.main}>
      {children}
      {popup}
    </main>
  );
}
