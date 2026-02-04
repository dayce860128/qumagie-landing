import Link from 'next/link';
import Image from 'next/image';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/QuMagie.svg" alt="QuMagie Logo" width={32} height={32} className="h-8 w-8" />
                    <span className="text-xl font-bold tracking-tight text-slate-900">QuMagie</span>
                </Link>

                <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                    <Link href="#features" className="hover:text-qnap-blue transition-colors">Features</Link>
                    <Link href="#specs" className="hover:text-qnap-blue transition-colors">Specs</Link>
                    <Link href="#" className="hover:text-qnap-blue transition-colors">Support</Link>
                    <Link href="#" className="hover:text-qnap-blue transition-colors">Download</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-qnap-blue px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-qnap-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950"
                    >
                        Live Demo
                    </Link>
                </div>
            </div>
        </header>
    );
}
