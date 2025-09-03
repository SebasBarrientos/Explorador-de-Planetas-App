import { Navbar, NavbarContent, NavbarItem, Link } from "@heroui/react";

export const SearchIcon = ({ size = 24, strokeWidth = 1.5 }) => {
    return (
        <svg aria-hidden="true" fill="none" focusable="false" height={size} role="presentation" viewBox="0 0 24 24" width={size}>
            <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
            />
            <path d="M22 22L20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
        </svg>
    );
};

export default function AppNavbar() {
    return (
        <Navbar isBordered>
            <NavbarContent justify="start">
                <NavbarContent as="div" className="" justify="center">
                    <NavbarItem>
                        <Link href="/" color="foreground" className="text-lg">
                            Home
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarContent as="div" className="gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="planets" className="text-lg">
                            Access database
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link aria-current="page" color="foreground" href="updatedb" className="text-lg">
                            Update database
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>
        </Navbar>
    );
}
