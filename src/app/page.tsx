import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       

        <div className="flex gap-4 items-center flex-col sm:flex-row">
        <h1>Welcome explorer</h1>
        <Link href="planets" className="bg-slate-950 text-slate-400 border border-slate-400 rounded-md ">Access the list of planets</Link>        
        </div>
      </main>
      
    </div>
  );
}
