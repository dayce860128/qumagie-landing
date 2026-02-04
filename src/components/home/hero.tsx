import { Users, Video } from "lucide-react";



export function Hero() {
    return (
        <>
            {/* Text Section (White Background) */}
            <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center">
                        <div className="text-center max-w-4xl">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
                                AI 核心再進化<br />讓影像管理更聰明、更直覺
                            </h1>

                            <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                全新的 OCR 文字識別、語意搜尋與短影片人臉辨識，<br />
                                為您的回憶建立最強大的索引，隨時隨地輕鬆找回珍貴時刻。
                            </p>

                            <div className="flex flex-col sm:flex-row gap-8 justify-center">
                                <div className="flex gap-4 items-start text-left">
                                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                        <Users className="w-6 h-6 text-qnap-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-slate-900">AI 智慧相簿</h4>
                                        <p className="text-sm text-slate-600">自動辨識人物、事物與地點，分類整理照片。</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start text-left">
                                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                        <Video className="w-6 h-6 text-qnap-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-slate-900">跨平台存取</h4>
                                        <p className="text-sm text-slate-600">隨時隨地透過手機、電腦瀏覽與分享回憶。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section (Purple Background) */}
            <section className="bg-[#4E54A4] py-16 lg:py-24 relative overflow-hidden">
                {/* Decorative circle background */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-5xl aspect-video bg-black/20 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/E6M5IzLGLqY?rel=0"
                                title="QuMagie Demo Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
