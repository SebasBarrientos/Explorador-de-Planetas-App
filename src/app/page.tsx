import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="max-w-[50rem] sm:max-w-[49rem] px-3 md:px-0 sm:text-5xl md:text-7xl text-4xl font-bold font-display md:leading-[1.1em] text-center z-10 bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text">
          Cosmic Voyager
        </h1>

        <div className="flex flex-col gap-4 items-center  sm:flex-row">
          <p>Welcome explorer</p>
          <Link href="planets" className="underline">Access the list of planets</Link>
        </div>
      </main>

    </div>
  );
}
