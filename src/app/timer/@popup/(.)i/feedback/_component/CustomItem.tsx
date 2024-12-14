import FalseIcon from "@/app/icons/feedback/status-false.svg";
import TrueIcon from "@/app/icons/feedback/status-true.svg";
import * as styles from "./customItem.css";

type Props = {
  type: "g" | "m" | "b";
  isSelect?: boolean;

  onClick?: () => void;
};

export default function CustomItem({ type, isSelect, onClick }: Props) {
  const icon = type === "g" ? "😋" : type === "m" ? "🤔" : "🤢";

  const text =
    type === "g" ? "오, 아주 이븐해요" : type === "m" ? '음, "보류"하겠습니다' : "으윽, 이건 좀 아냐";

  return (
    <div role="button" tabIndex={0} className={styles.layer()} onClick={onClick}>
      <div className={styles.group()}>
        <p className={styles.icon()}>{icon}</p>
        <p className={styles.text()}>{text}</p>
      </div>
      {isSelect ? <TrueIcon /> : <FalseIcon />}
    </div>
  );
}
