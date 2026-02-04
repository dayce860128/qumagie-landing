import { Users, Video, Play, ScanFace } from "lucide-react";

export function FeatureVideo() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-semibold mb-6">
                        <Video className="w-4 h-4" />
                        <span>Video AI</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        短影片 AI 人臉辨識：讓動態回憶也能被看見
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        人臉辨識不再僅限於靜態照片。QuMagie 擴大了 AI 識別範圍，現在支援 3 分鐘以內的短影片人臉辨識，讓您珍藏的動態時刻也能被完整歸檔。
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Visual Content - Video Player with Face Detection */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-video border-4 border-slate-900 group">

                        {/* Video Content (Simulated) */}
                        <div className="absolute inset-0">
                            <img
                                src="images/demo/video-face.png"
                                alt="Video content child smiling"
                                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Dark Overlay for UI contrast */}
                            <div className="absolute inset-0 bg-black/20"></div>
                        </div>

                        {/* Center Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                            </div>
                        </div>

                        {/* Top Left Detection Badge */}
                        <div className="absolute top-8 left-8 bg-black/60 backdrop-blur rounded-lg px-3 py-1.5 flex items-center gap-2 border border-white/10">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            <span className="text-xs font-medium text-white tracking-wide">REC • 00:14</span>
                        </div>

                        {/* Face Detection Bounding Box */}
                        <div className="absolute top-[20%] left-[35%] w-[30%] h-[50%] border-2 border-yellow-400 rounded-lg shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all duration-500">
                            {/* Detection Label */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                                <ScanFace className="w-3.5 h-3.5" />
                                <span>Person Detected</span>
                            </div>

                            {/* Corner Markers */}
                            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-yellow-400"></div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-yellow-400"></div>
                            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-yellow-400"></div>
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-yellow-400"></div>
                        </div>

                        {/* Video Controls Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end px-6 pb-6">
                            {/* Timeline */}
                            <div className="w-full h-1 bg-white/20 rounded-full mb-4 cursor-pointer group/timeline relative">
                                <div className="absolute inset-y-0 left-0 w-[45%] bg-qnap-blue rounded-full"></div>
                                <div className="absolute top-1/2 left-[45%] -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover/timeline:opacity-100 transition-opacity"></div>
                            </div>
                            {/* Control Icons */}
                            <div className="flex justify-between items-center text-white/90">
                                <div className="flex gap-4">
                                    <Play className="w-5 h-5 fill-current" />
                                    <span className="text-sm font-mono">00:14 / 01:23</span>
                                </div>
                                <div className="text-xs font-medium text-white/70">
                                    QuMagie Smart Player
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid Below Video */}
                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow group">
                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-qnap-blue mb-4 group-hover:scale-110 transition-transform">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">照片與影片的人臉庫整合</h3>
                            <p className="text-slate-600 leading-relaxed">
                                系統自動偵測短影片中的人物並整合至既有「人物相簿」。同時查看該人物的照片與影片，讓回憶收集更完整。
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow group">
                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-qnap-blue mb-4 group-hover:scale-110 transition-transform">
                                <Video className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">智慧背景任務處理</h3>
                            <p className="text-slate-600 leading-relaxed">
                                新增背景任務監控，隨時檢視辨識進度。系統會在背景默默完成每一段珍貴動態影像的 AI 分析，不影響您的操作。
                            </p>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-8 text-center text-sm text-slate-500">
                        <p>OCR 與語意搜尋功能需搭配指定版本的 Qsirch 與 AI Core 使用。短影片辨識目前支援長度 3 分鐘以內的影片檔。</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
