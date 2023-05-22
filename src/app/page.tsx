import Image from "next/image";
import { HomeComponent } from "./page.component";
import { HomeHeader } from "./header";
import { HomeFooter } from "./footer";

export default function Home() {
  return (
    <main className="">
      <HomeHeader />
      <div className="max-w-[1366px] mx-auto">
        <HomeComponent />
      </div>
      <HomeFooter />
    </main>
  );
}
