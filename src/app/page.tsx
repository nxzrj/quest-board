"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { Quest } from "./components/Quest";
import Link from "next/link";

export default function Home() {
  const [isRequestOpen, setIsRequestOpen] = useState(false);

  const showRequestModal = () => setIsRequestOpen(true);
  const closeRequestModal = () => setIsRequestOpen(false);

  type Quest = {
    title: string;
    description: string;
  };

  const quests: Quest[] = [
    {
      title: "森のスライム討伐",
      description: "村の近くの森に出没するスライムを退治してください。",
    },
    {
      title: "なくした指輪を探せ",
      description: "市場で落とした指輪を見つけ出してください。",
    },
    {
      title: "ポーション材料の収集",
      description: "薬師のために薬草を5つ集めましょう。",
    },
    {
      title: "おばあちゃんの荷物運び",
      description: "街の外れまで荷物を届けてあげてください。",
    },
    {
      title: "盗賊のアジトを調査",
      description: "最近現れた盗賊団の動向を調査してください。",
    },
    {
      title: "魔法書の修復",
      description: "破れた魔法書のページを集めて修復しよう。",
    },
    {
      title: "失踪した猫の捜索",
      description: "村長の飼い猫「ミケ」を探してあげよう。",
    },
    {
      title: "橋の補修",
      description: "町外れの橋が壊れているので修理の手伝いをしよう。",
    },
    {
      title: "魔物の痕跡を追え",
      description: "不気味な足跡の正体を突き止めよう。",
    },
    {
      title: "剣の試練",
      description: "訓練場で剣術の試練をクリアしよう。",
    },
  ];

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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // 折り返し
          gap: "16px", // 適度な間隔（なくてもOK）
          justifyContent: "flex-start", // ← 左詰め！！
        }}
      >
        {quests.map((quest, index) => (
          <Quest key={index} questInfo={quest} />
        ))}
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
