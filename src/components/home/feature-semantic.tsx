import { BrainCircuit, MessageSquareText } from "lucide-react";

export function FeatureSemantic() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Visual Content - Semantic Search Demo */}
                    <div className="order-1 relative">
                        <div className="absolute inset-0 bg-gradient-to-bl from-purple-100 to-transparent rounded-3xl transform -rotate-3 scale-105 opacity-50"></div>
                        <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden aspect-[4/3] flex flex-col">
                            {/* Fake UI Search Bar */}
                            <div className="p-6 border-b border-slate-50 bg-white z-10">
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                        <SearchIcon />
                                    </div>
                                    <div className="w-full bg-slate-50 rounded-xl py-3 pl-11 pr-4 text-slate-900 border border-slate-100 focus:border-purple-500 outline-none flex items-center shadow-inner">
                                        <span className="font-medium text-slate-800">Cats eat food</span>
                                    </div>
                                </div>
                            </div>

                            {/* Grid Result - Realistic Images */}
                            <div className="p-6 grid grid-cols-3 gap-3 overflow-hidden flex-1 bg-slate-50/50">
                                {[
                                    { src: "images/demo/cat-1.png", alt: "Tabby cat eating" },
                                    { src: "images/demo/cat-2.png", alt: "Ginger cat eating" },
                                    { src: "images/demo/cat-3.png", alt: "Calico cat eating", match: true },
                                    { src: "images/demo/cat-4.png", alt: "Tuxedo cat eating" },
                                    { src: "images/demo/cat-1.png", alt: "Tabby cat eating" },
                                    { src: "images/demo/cat-2.png", alt: "Ginger cat eating" },
                                ].map((photo, i) => (
                                    <div key={i} className={`aspect-square rounded-xl relative overflow-hidden group transition-all duration-300 ${photo.match ? 'ring-2 ring-purple-500 shadow-md transform scale-[1.02] z-10' : 'hover:opacity-90'}`}>
                                        <img
                                            src={photo.src}
                                            alt={photo.alt}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Match Badge for specific item */}
                                        {photo.match && (
                                            <div className="absolute bottom-2 inset-x-2 bg-white/95 backdrop-blur rounded-lg py-1.5 text-center shadow-sm border border-purple-100/50">
                                                <span className="text-[10px] font-bold text-purple-600 block leading-none mb-0.5">Match</span>
                                                <span className="text-xs font-black text-slate-800 block leading-none">98%</span>
                                            </div>
                                        )}
                                        {/* Hover Overlay */}
                                        {!photo.match && (
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-6">
                            <BrainCircuit className="w-4 h-4" />
                            <span>Smart AI Core</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            AI 語意搜尋
                            <span className="block text-slate-500">用自然的語言找圖</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            忘記照片的拍攝時間或檔名了嗎？QuMagie 整合 Qsirch 與 AI Core 強大效能，現在支援更直覺的語意搜尋 (Semantic Search)。
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                                    <MessageSquareText className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">直覺式描述搜尋</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        不再受限於精確的關鍵字標籤。只需輸入您腦海中的畫面描述，例如「貓在吃東西 (Cats eat food)」，系統便能理解語句含義並找出相關情境照片。
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                                    <BrainCircuit className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">打破關鍵字限制</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        透過自然語言處理技術，搜尋結果將依照關聯性 (Relevance) 排序，讓您用最符合人類直覺的方式，重新探索您的生活回憶。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SearchIcon() {
    return (
        <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
    );
}
