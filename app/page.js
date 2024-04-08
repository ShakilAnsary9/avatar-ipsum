import AvatarCard from "./components/AvatarCard";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-4 dark:text-slate-300">
        <AvatarCard />
      </div>
    </main>
  );
}
