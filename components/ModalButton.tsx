"use client";
import React from "react";

type MybuttonProps = {
  title: string;
  children: React.ReactNode;
  isVisible?: boolean; // 親から渡せる表示状態
  onToggle?: (next: boolean) => void; // 親に切替通知
};

export default function Mybutton({ title, children, isVisible: propVisible, onToggle }: MybuttonProps) {
  const [internalVisible, setInternalVisible] = React.useState(false);
  const isControlled = propVisible !== undefined;
  const isVisible = isControlled ? propVisible : internalVisible;

  const toggle = () => {
    if (isControlled && onToggle) {
      onToggle(!isVisible); // 親に切替通知
    } else {
      setInternalVisible(!internalVisible); // 内部状態を切替
    }
  };
  return(
      <div>
          <button onClick={toggle}
          className="profile-buttons">
              {title}
            </button>
            {isVisible && <div>{children}</div>}
        </div>
    );
}