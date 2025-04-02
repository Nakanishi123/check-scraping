"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [navigatorInfo, setNavigatorInfo] = useState({
    language: "",
    userAgent: "",
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setNavigatorInfo({
      language: window.navigator.language,
      userAgent: window.navigator.userAgent,
    });
    if (window.navigator.webdriver) {
      alert("Webdriverを検出しました");
    }
    setIsMounted(true);
  }, []);

  return (
    <div className="App">
      <h1>WebDriver検出テスト</h1>
      <p>現在の言語: {isMounted ? navigatorInfo.language : "読み込み中…"}</p>
      <p>UserAgent : {isMounted ? navigatorInfo.userAgent : "読み込み中…"}</p>
    </div>
  );
}
