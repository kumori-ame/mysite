"use client";

import Image from "next/image";
import TypingEffect from "@/components/TypingEffect";
import MyButton from "@/components/ModalButton";
import DragWindow from "@/components/dragWindow";
import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [visible, setVisible] = React.useState(false);
  return (
    <main className="bg-zinc-50">
      <header>
        <div>place</div>
      </header>
      <div className="flex flex-col main-box m-5">
        <div  className="font-sans text-6xl text-gray-600 font-light">hello <span className="font-sans text-blue-400 font-medium">i'm kumori</span></div>
        <div  className="font-sans text-xl text-gray-600 pt-5 pb-5">3D Modeler and Developer</div>
        <span className="font-sans text-xl text-gray-600 pt-5 pb-5 typing"><TypingEffect /></span>

        <div className="font-mono text-xl flex flex-row gap-10 text-gray-600 pt-10">
          <div className="profile-buttons">about</div>
            <MyButton title="about2" isVisible={visible}onToggle={setVisible} >
              <DragWindow title="about2" toggleButton={() => setVisible(!visible)} >
                  <div className="window-content">
                  <div className="pt-10 pl-20">
                    <div className="flex flex-row items-center m-5 gap-5">
                      <div>
                      <p className="font-bold text-4xl text-blue-400">kumori</p>
                      <p className="text-medium text-gray-500">札幌在住エンジニア</p>
                      <p className="text-medium text-gray-500">3dmodel,frontend,airsoft...</p>
                      </div>
                      
                      <Image
                          src="/images/512-kisser.png"
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
                        <li>Blenderを使ったモデリング</li>
                        <li>PythonやPHPでの開発</li>
                        <li>フロントエンド開発(このサイト!)</li>
                      </ul>
                      <p className="pt-5 pb-5">興味のあること</p>
                      <ul className="list-disc list-inside">
                        <li>ゲーム開発</li>
                        <li>シェーダー</li>
                        <li>絵を描く</li>
                        <li>サバゲー</li>
                      </ul>
                      <p>eded</p>
                      <p>eded</p>
                      <p>eded</p>
                      <p>eded</p>
                      <p>eded</p>
                    </div>
                  </div>
                  </div>
              </DragWindow>
            </MyButton>

          <div className="profile-buttons">work</div>
          <div className="profile-buttons">fun</div>
        </div>
      </div>
    </main>
  );
}
