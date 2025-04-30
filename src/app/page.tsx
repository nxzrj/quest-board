"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { Quest } from "./components/Quest";
import { quests } from "./lib/placeholder-data";
import Link from "next/link";

export default function Home() {
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [showingGenre, setShowingGenre] = useState("ALL");

  const showRequestModal = () => setIsRequestOpen(true);
  const closeRequestModal = () => setIsRequestOpen(false);

  return (
    <>
      <Header />
      <div>
        <button onClick={showRequestModal}>リクエスト一覧</button>
        {isRequestOpen && (
          <div className={styles.modalOverlay} onClick={closeRequestModal}>
            <h1 className={styles.modalContent}>参加リクエスト一覧</h1>
          </div>
        )}
      </div>
      <div>
        <select
          onChange={(e) => {
            setShowingGenre(e.target.value);
          }}
        >
          <option value="ALL">ALL</option>
          {[...new Set(quests.map((quest) => quest.genre))].map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // 折り返し
          gap: "16px", // 適度な間隔（なくてもOK）
          justifyContent: "flex-start", // ← 左詰め！！
        }}
      >
        {showingGenre === "ALL"
          ? quests.map((quest, index) => (
              <Quest key={index} questInfo={quest} />
            ))
          : quests
              .filter((quest) => quest.genre === showingGenre)
              .map((quest, index) => <Quest key={index} questInfo={quest} />)}
      </div>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <small>クエストボード</small>
        </div>
        <div>
          <h1>QuestBoard</h1>
        </div>
      </header>
      <Link href="/login">ログアウト</Link>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <small>QuestBoard</small>
        </div>
        <div>
          <small>クエストボード</small>
        </div>
      </footer>
    </>
  );
}
