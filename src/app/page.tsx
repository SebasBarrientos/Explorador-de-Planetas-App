import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center  p-10">
      <main className="flex flex-col gap-4 row-start-2 items-center ">
        <h1 className="max-w-[50rem] sm:max-w-[49rem] px-3 md:px-0 sm:text-5xl md:text-7xl text-4xl font-semibold font-display md:leading-[1.1em] text-center z-10 bg-gradient-to-b from-gray-200 to-gray-500 text-transparent bg-clip-text mt-5">
          Cosmic Voyager<span className="text-white sm:text-5xl md:text-7xl text-4xl">🪐</span>
        </h1>

        <h2 className="font-medium text-center px-4 text-gray-400 text-xl">
          A disquisition on the newly found planetary systems.
        </h2>
        <div className="w-full border-t border-gray-600 opacity-50 mb-6 mt-4"></div>

        <div className="max-w-2xl text-center px-4 text-aliceblue ">
          <p className="mb-4">
            In the twilight of Earth&apos;s final days, as our planet succumbed to relentless climate change, humanity turned its gaze upward with hope and determination. In 2072, when the oceans reclaimed coastal cities and extreme temperatures rendered vast regions uninhabitable, the Agency of Galactic Exploration (AEG) unveiled a groundbreaking planetary intelligence system.
          </p>
          <p className="mb-4">
            Yet this beacon of our future remained obscured behind an unfinished interface—a cryptic portal to untold worlds waiting to be discovered. Now, the AEG challenges the finest coders of the solar system to build an intuitive platform that will visualize, classify, and analyze habitable exoplanets.
          </p>
          <p>
            Embark on this cosmic odyssey, where every line of code not only maps a distant planet but also charts the course to humanity&apos;s next home.
          </p>
        </div>

        <Link href="planets" className="mt-2 inline-block bg-content1 border border-gray-600 hover:bg-gray-800 text-aliceblue font-bold py-3 px-6 rounded-large transition">
          Begin your voyage
        </Link>
      </main>
    </div>
  );
}
