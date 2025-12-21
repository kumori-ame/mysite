"use client";

import Image from "next/image";
import TypingEffect from "@/components/TypingEffect";
import ModalButton from "@/components/ModalButton";
import DragWindow from "@/components/dragWindow";
import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
   const [visibleMap, setVisibleMap] = React.useState<Record<string, boolean>>({});
   const toggle = (id: string) => setVisibleMap(prev => ({ ...prev, [id]: !prev[id] }));
  return (
    <main>
      <header >
      </header>
      <div className="flex flex-col main-box m-5">
        <div  className="font-sans text-6xl text-gray-600 font-light">hello <span className="font-sans text-blue-400 font-medium">i'm kumori</span></div>
        <div  className="font-sans text-xl text-gray-600 pt-5 pb-5">3D Modeler and Developer</div>
        <span className="font-sans text-xl text-gray-600 pt-5 pb-5 typing"><TypingEffect /></span>

        <div className="font-mono text-xl flex flex-row gap-10 text-gray-600 pt-10">
          <ModalButton title="about me" isVisible={!!visibleMap['about']}onToggle={() => toggle('about')} >
              <DragWindow title="aboutme" toggleButton={() => toggle('about')} >
                  <div className="window-content">
                  <div className="pt-10 pl-20">
                    <div className="flex flex-row items-center m-5 gap-5">
                      <div>
                      <p className="font-bold text-4xl text-blue-400">kumori</p>
                      <p className="text-medium text-gray-500">札幌在住エンジニア</p>
                      <p className="text-medium text-gray-500">Github: <a href="https://github.com/kumori-ame" target="_blank" rel="noopener noreferrer">kumori-ame</a></p>
                      <p className="text-medium text-gray-500">Email: esuehu209@gmail.com</p>
                      </div>
                      
                      <Image
                          src="./images/512-kisser.png"
                          alt="Picture of the author"
                          width={170}
                          height={170}
                          style={{ borderRadius: "50%" }}
                          className="pl-10"
                      />
                    </div>
                    <div className="text-gray-500">
                      <p>kumoriと言う名前でこんな活動をしています</p><br></br>
                      <ul className="list-disc list-inside">
                        <li>3Dプリンターを使ったものづくり</li>
                        <li>ドローン操縦</li>
                        <li>フロントエンド開発(このサイト!)</li>
                      </ul>
                      <p className="pt-5 pb-5">スキルセット</p>
                      <ul className="list-disc list-inside">
                        <li>Blender 5年 (自力でのポリゴンモデリングが可能)</li>
                        <li>Python 3年 (技術書を見ながらのコーディングが可能)</li>
                        <li>HTML/CSS/JS 2年 (基礎的なWebサイトが作成可能)</li>
                        <li>TypeScript 1年 (簡単なwebアプリを作成可能)</li>
                        <li>PHP 半年 (授業で触れた程度)</li>
                      </ul>
                      <p className="pt-5 pb-5">興味のあること</p>
                      <ul className="list-disc list-inside">
                        <li>ゲーム開発</li>
                        <li>シェーダー</li>
                        <li>絵を描く</li>
                        <li>サバゲー</li>
                      </ul>
                    </div>
                  </div>
                  </div>
              </DragWindow>
          </ModalButton>
          <ModalButton title="work" isVisible={!!visibleMap['work']}onToggle={() => toggle('work')}>
            <DragWindow title="work" toggleButton={() => toggle('work')} >
              <div className="flex flex-col">
                <div className="flex flex-row pt-10 pl-5 gap-10">
                <Image
                            src="./images/512-kisser.png"
                            alt="Picture of the author"
                            width={170}
                            height={170}
                            style={{ borderRadius: "50%" }}
                            className="pl-10"
                        />
                    <div>
                      <p className="font-bold text-2xl text-blue-400">流体シミュレーション</p>
                      <p className="pt-2">Blenderを使ったコンクリート打設工法のシミュレーションをしていました</p>
                    </div>
                </div>
                <div className="flex flex-row pt-10 pl-5 gap-10">
                <Image
                            src="./images/512-kisser.png"
                            alt="Picture of the author"
                            width={170}
                            height={170}
                            style={{ borderRadius: "50%" }}
                            className="pl-10"
                        />
                    <div>
                      <p className="font-bold text-2xl text-blue-400">流体シミュレーション</p>
                      <p className="pt-2">Blenderを使ったコンクリート打設工法のシミュレーションをしていました</p>
                    </div>
                </div>
              </div>
            </DragWindow>
          </ModalButton>
          {
          //<div className="profile-buttons">fun</div>
          }
        </div>
      </div>
    </main>
  );
}
