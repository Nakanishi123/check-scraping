"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.navigator.webdriver) {
      alert("Webdriverを検出しました");
    }
  }, []);

  return (
    <div className="App">
      <h1>WebDriver検出テスト</h1>
      <p>現在の言語: {window.navigator.language}</p>
      <p>UserAgent : {window.navigator.userAgent}</p>
    </div>
  );
}
