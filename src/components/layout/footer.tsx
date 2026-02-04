import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="w-full border-t border-gray-100 bg-white py-12 text-sm text-slate-500">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="mb-4 flex items-center gap-2">
                            <div className="relative h-6 w-6">
                                <Image src="/QuMagie.svg" alt="QNAP Logo" fill className="object-contain" />
                            </div>
                            <span className="font-bold text-slate-900">QNAP Systems, Inc.</span>
                        </div>
                        <p className="mb-4 max-w-xs leading-relaxed">
                            Providing comprehensive solutions in software development, hardware design, and in-house manufacturing.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 font-semibold text-slate-900">Product</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-qnap-blue">QTS 5.0</Link></li>
                            <li><Link href="#" className="hover:text-qnap-blue">QuTS hero</Link></li>
                            <li><Link href="#" className="hover:text-qnap-blue">QuMagie</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 font-semibold text-slate-900">Resources</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-qnap-blue">Download Center</Link></li>
                            <li><Link href="#" className="hover:text-qnap-blue">Support Portal</Link></li>
                            <li><Link href="#" className="hover:text-qnap-blue">Community</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 font-semibold text-slate-900">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-qnap-blue">About QNAP</Link></li>
                            <li><Link href="#" className="hover:text-qnap-blue">Newsroom</Link></li>
                            <li><Link href="#" className="hover:text-qnap-blue">Careers</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 md:flex-row">
                    <p>© 2026 QNAP Systems, Inc. All Rights Reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-qnap-blue">Privacy Policy</Link>
                        <Link href="#" className="hover:text-qnap-blue">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
