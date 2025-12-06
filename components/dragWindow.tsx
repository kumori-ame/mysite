"use client";

import { Hedvig_Letters_Sans } from 'next/font/google';
import React, { useState, useEffect, useRef } from 'react';
import MyButton from "@/components/ModalButton";


// スタイルを分離して定義
const styles = {
  window: {
    position: 'absolute',
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    zIndex: 1000,
    overflow: 'hidden',
  } as React.CSSProperties,
  header: {
    cursor: 'grab',
    padding: '10px 15px',
    backgroundColor: '#f1f1f1',
    borderBottom: '1px solid #ddd',
    userSelect: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
  } as React.CSSProperties,
  closebutton:{
  backgroundColor: '#ff0000',
  } as React.CSSProperties,
  content: {
    
  } as React.CSSProperties,
};

let highestZ = styles.window.zIndex as number || 1000;

// 正しいPropsのインターフェースを定義
interface DragWindowProps {
  children: React.ReactNode;
  title: string;
}

// 正しいコンポーネントの定義方法
export default function DragWindow({ children, title, toggleButton }: DragWindowProps & { toggleButton: () => void }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState(() => {
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    const screenHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    return {
      x: Math.max(0, screenWidth / 4),
      y: Math.max(0, screenHeight / 5), 
    };
  });
  //z-index管理
  const [zIndex, setZIndex] = useState<number>(highestZ);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !windowRef.current) return;

      const windowWidth = windowRef.current.offsetWidth;
      const windowHeight = windowRef.current.offsetHeight;

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // offset分を引いて計算
      let newX = e.clientX - offset.current.x;
      let newY = e.clientY - offset.current.y;

      // 画面内に収める
      newX = Math.max(0, Math.min(newX, screenWidth - windowWidth));
      newY = Math.max(0, Math.min(newY, screenHeight - windowHeight));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // 親要素をクリックしたときにもこのウィンドウを前面にする
  useEffect(() => {
    const node = windowRef.current;
    if (!node) return;
    const parent = node.parentElement;
    if (!parent) return;

    const bringToFront = () => {
      highestZ += 1;
      setZIndex(highestZ);
    };

    parent.addEventListener('pointerdown', bringToFront);
    parent.addEventListener('touchstart', bringToFront);

    return () => {
      parent.removeEventListener('pointerdown', bringToFront);
      parent.removeEventListener('touchstart', bringToFront);
    };
  }, []);



  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      offset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }

    highestZ += 1;
    setZIndex(highestZ);

    setIsDragging(true);
  };
  const handleClose = () => {
    // 閉じるアニメーションを開始
    setIsClosing(true);
    
    // アニメーションの完了を待って、親のトグル関数を呼ぶ
    // CSSアニメーションの時間に合わせて、setTimeoutの時間を設定
    const animationDuration = 150; // ms
    setTimeout(() => {
      toggleButton(); // 親コンポーネントの表示状態をfalseにする
    }, animationDuration);
  };

  return (
    <div
      ref={windowRef}
      className={`window-box ${isClosing ? 'animate-pop-out' : 'animate-pop-in'}`}
      style={{
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
        zIndex: zIndex,
  }}
    >
      <div style={{}}>
        <div className='window-header' onMouseDown={handleMouseDown}>
          {title}
           <button title="×" className='ml-auto text-5xl pl-2 pr-2 rounded-2xl cursor-pointer font-normal' onClick={handleClose}>×</button>
        </div>
        <div style={{overflowY: 'scroll', maxHeight: '54vh'}}>
          {children}
        </div>
      </div>  
    </div>
  );
}