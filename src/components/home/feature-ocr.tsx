import { ScanText, Search, X, Zap, User, Phone, Mail, Sparkles, Copy, Check } from "lucide-react";

export function FeatureOCR() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="order-2 md:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-qnap-blue text-sm font-semibold mb-6">
                            <ScanText className="w-4 h-4" />
                            <span>New Feature</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            AI OCR 文字識別
                            <span className="block text-slate-500">搜尋圖片中的文字資訊</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            別再為了尋找一張收據或筆記照片而手動翻遍整個相簿。QuMagie 全新整合 AI OCR（光學字元識別） 技術，提供「背景索引」與「即時偵測」雙重模式。
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                                    <Search className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">以圖找文，精準搜尋 (OCR Search)</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        系統會在背景自動分析並建立圖片文字索引。只需輸入關鍵字（如：「飯店」、「菜單」），就能從成千上萬張照片中找出含有該文字的圖片。
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-qnap-blue">
                                    <ScanText className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">即時文字擷取 (OCR Scan)</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        在瀏覽模式下，透過「文字偵測」按鈕即可即時辨識圖片內容。海報資訊、筆記或標籤文字皆可直接選取複製、搜尋或翻譯。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Content - OCR Scan Demo (Alex Johnson Ref) */}
                    <div className="order-1 md:order-2 relative">
                        {/* Background Decoration */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 rounded-3xl transform rotate-1 scale-105"></div>

                        {/* Main Interface Window */}
                        <div className="relative bg-[#1a1c2e] rounded-2xl shadow-2xl overflow-hidden border border-slate-800/50 aspect-[4/3] flex flex-col font-sans">

                            {/* Scanning Viewport */}
                            <div className="flex-1 relative bg-slate-900 flex flex-col items-center pt-8 overflow-hidden">

                                {/* Close / Flash Controls */}
                                <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80">
                                    <X className="w-5 h-5" />
                                </div>
                                <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80">
                                    <Zap className="w-5 h-5 fill-current" />
                                </div>

                                {/* Business Card Visual */}
                                <div className="w-64 aspect-[1.75/1] bg-white rounded-lg shadow-lg relative overflow-hidden flex transform rotate-1">
                                    {/* Card Design (Blue Accent) */}
                                    <div className="absolute top-0 right-0 w-24 h-full bg-blue-50/50 skew-x-12 origin-bottom-right"></div>

                                    <div className="p-5 w-full flex flex-col justify-center relative z-10">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                {/* Name - Detected */}
                                                <div className="relative inline-block mb-1">
                                                    <h3 className="text-lg font-bold text-slate-900 leading-none">Alex Johnson</h3>
                                                    <div className="absolute -inset-1 bg-blue-500/20 border border-blue-500 rounded flex items-center justify-center"></div>
                                                </div>
                                                {/* Title - Detected */}
                                                <div className="relative inline-block">
                                                    <p className="text-xs text-slate-500 font-medium">Senior Product Designer</p>
                                                    <div className="absolute -inset-1 bg-blue-500/20 border border-blue-500 rounded"></div>
                                                </div>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
                                                <div className="w-full h-full bg-slate-300 flex items-center justify-center">
                                                    <User className="w-6 h-6 text-slate-400" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2 mt-auto">
                                            {/* Phone - Detected */}
                                            <div className="relative flex items-center gap-2 text-[10px] text-slate-600">
                                                <Phone className="w-3 h-3 text-blue-500" />
                                                <span>+1 (555) 000-1234</span>
                                                <div className="absolute -inset-1 inset-y-[-2px] bg-blue-500/20 border border-blue-500 rounded"></div>
                                            </div>
                                            {/* Email - Detected */}
                                            <div className="relative flex items-center gap-2 text-[10px] text-slate-600">
                                                <Mail className="w-3 h-3 text-blue-500" />
                                                <span>alex.j@company.com</span>
                                                <div className="absolute -inset-1 inset-y-[-2px] bg-blue-500/20 border border-blue-500 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Result Bottom Sheet */}
                            <div className="bg-white rounded-t-3xl p-6 relative z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
                                <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-6"></div>

                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">OCR Scan Results</h4>
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                                            <span className="text-xs font-bold text-blue-600 tracking-wide">HIGH ACCURACY DETECTION</span>
                                        </div>
                                    </div>
                                    <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                                        Copy All
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between group">
                                        <div>
                                            <p className="font-semibold text-slate-900">Alex Johnson</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button className="text-slate-400 hover:text-blue-600 transition-colors"><Copy className="w-5 h-5" /></button>
                                            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-px bg-slate-100 w-full"></div>
                                    <div className="flex items-center justify-between group">
                                        <div>
                                            <p className="font-semibold text-slate-900">Senior Product Designer</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button className="text-slate-400 hover:text-blue-600 transition-colors"><Copy className="w-5 h-5" /></button>
                                            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
