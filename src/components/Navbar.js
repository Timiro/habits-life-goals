import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href="/">Dashboard</Link>
            <Link href="/habits">Habits</Link>
            <Link href="/quests">Quests</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/Inventory">Inventory</Link>
        </nav>
    )
}