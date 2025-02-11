import AppNavbar from '@/app/components/Navbar'
import Title from '@/app/components/Title'

export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <AppNavbar />
            <main className="flex flex-col items-center gap-4 p-10 ">
            <Title />
            {children}

            </main>
            {/* //Cosmic  voyager h1 */}
        </>
    )
}