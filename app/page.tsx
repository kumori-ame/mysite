import Image from "next/image";
import TypingEffect from "@/components/TypingEffect";

export default function Home() {
  return (
    <main>
      <header>
        <div>place</div>
      </header>
      <div className="flex flex-col main-box m-5">
        <div  className="font-sans text-6xl text-gray-600 font-light">hello <span className="font-sans text-blue-400 font-medium">i'm kumori</span></div>
        <div  className="font-sans text-xl text-gray-600 pt-5 pb-5">3D Modeler and Developer</div>
        <span className="font-sans text-xl text-gray-600 pt-5 pb-5 typing"><TypingEffect /></span>

        <div className="font-mono text-xl flex flex-row gap-10 text-gray-600 pt-10">
          <div className="profile-buttons">about</div>
          <div className="profile-buttons">work</div>
          <div className="profile-buttons">fun</div>
        </div>
      </div>
    </main>
  );
}
