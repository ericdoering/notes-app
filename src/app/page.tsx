import NotesDisplay from "./components/NotesDisplay";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="mb-10 text-5xl">Notes App</h1>
      <NotesDisplay />
    </div>
  );
}
