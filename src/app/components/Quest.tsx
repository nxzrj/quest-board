"use client";
import styles from "../page.module.css";
import { useState } from "react";

export type Quest = {
  id: number;
  genre: string;
  title: string;
  description: string;
  hostName: string;
  createdAt: string;
  maxMembers: number;
  currentMembers: number;
};

export const Quest = ({ questInfo }: { questInfo: Quest }) => {
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
            <p>ホスト：{questInfo.hostName}</p>
            <p>募集人数：{questInfo.maxMembers - questInfo.currentMembers}</p>
            <p>現在の人数：{questInfo.currentMembers}</p>
          </div>
        </div>
      )}
    </>
  );
};
