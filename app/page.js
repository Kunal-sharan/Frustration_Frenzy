import Image from 'next/image';
import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';

export default function Home() {
  return (
    <main>
    <Navbar />
    <MainPage/>
    </main>
  );
}
