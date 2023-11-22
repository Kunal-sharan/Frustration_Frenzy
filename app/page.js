import Image from "next/image";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import SessionBooking from "./sessions/page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <MainPage />
      {/* <SessionBooking/> */}
    </main>
  );
}
