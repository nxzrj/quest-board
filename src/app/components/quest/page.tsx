import type { Quest } from "@/model/quest";
import styles from "./page.module.css";
import { useState } from "react";

export default function Quest({ questInfo }: { questInfo: Quest }) {
  const [isQuestDetailOpen, setIsQuestDetailOpen] = useState(false);

  const showQuestDetailModal = () => setIsQuestDetailOpen(true);
  const closeQuestDetailModal = () => setIsQuestDetailOpen(false);

  return (
    <>
      <div className={styles.paper} onClick={() => showQuestDetailModal()}>
        <div>
          <h2>{questInfo.title}</h2>
        </div>
        <div>{questInfo.description}</div>
      </div>
      {isQuestDetailOpen && (
        <div className={styles.modalOverlay} onClick={closeQuestDetailModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{questInfo.title}</h2>
            <p>{questInfo.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
