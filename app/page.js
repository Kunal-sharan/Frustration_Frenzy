import Image from "next/image";
import Navbar from "./navbar/Navbar";
import MainPage from "./mainpage/page";
import SessionBooking from "./sessions/page";
import ContinueAs from "./continueAs/ContinueAs"

export default function Home() {
  return (
    <main>
      <ContinueAs/>
      {/* <MainPage /> */}
      {/* <SessionBooking/> */}
    </main>
  );
}
