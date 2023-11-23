import Image from "next/image";
import Navbar from "./navbar/Navbar";
import MainPage from "./mainpage/MainPage";
import SessionBooking from "./sessions/page";

export default function Home() {
  return (
    <main>
      <MainPage />
      {/* <SessionBooking/> */}
    </main>
  );
}
