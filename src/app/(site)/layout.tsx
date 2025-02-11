import AppNavbar from '@/app/components/Navbar'

export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <AppNavbar />
            <main>{children}</main>
        </>
    )
}