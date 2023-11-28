import Image from "next/image";
import Navbar from "./navbar/Navbar";
import MainPage from "./mainpage/page";
import SessionBooking from "./sessions/page";
import ContinueAs from "./continueAs/ContinueAs"
import Form from "./Components/Form";

export default function Home() {
  return (
    <main>
      {/* <Form/> */}
      <ContinueAs/>
      {/* <MainPage /> */}
      {/* <SessionBooking/> */}
    </main>
  );
}
