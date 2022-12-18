import Image from "next/image";
import ShortyInfo from "../components/shortyInfo/ShortyInfo";
import ShortyRegister from "../components/shortyRegister/ShortyRegister";

export default function Home() {
  return (
    <div className="lg:grid lg:grid-cols-page min-h-screen">
      <ShortyInfo />
      <ShortyRegister />
    </div>
  );
}
