// components/TypingEffect.jsx
"use client";

import { useState, useEffect } from "react";

const texts = [
  "3D Modeler",
  "Developer",
  "Drone Pilot"
];

export default function TypingEffect() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = texts[textIndex];

    if (!isDeleting) {
      // タイピングアニメーション
      if (charIndex < fullText.length) {
        timer = setTimeout(() => {
          setCharIndex(prev => prev + 1);
        }, 100);
      } else {
        // 全文字入力完了後、削除モードへ移行
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // 2秒待機
      }
    } else {
      // 削除アニメーション
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCharIndex(prev => prev - 1);
        }, 50);
      } else {
        // 全文字削除完了後、次の文字列へ移行
        // ここで空白をセットし、次のタイピングへ移行するまでの時間を設ける
        setCurrentText(" ");
        timer = setTimeout(() => {
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % texts.length);
          setCharIndex(0);
        }, 500); // 0.5秒待機
      }
    }

    // 削除が完了した瞬間以外は、`charIndex` に基づいて文字列を更新
    if (charIndex > 0) {
      setCurrentText(fullText.substring(0, charIndex));
    }
    
    // クリーンアップ
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return <span>{currentText}</span>;
}