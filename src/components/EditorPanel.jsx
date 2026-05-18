import React, { useState, useEffect, useRef } from 'react';
import { Settings, MessageCircle, Heart, Palette } from 'lucide-react';

const EditorPanel = ({
    bubbleBgColor, setBubbleBgColor,
    bubbleSubColor, setBubbleSubColor,
    bubbleLineColor, setBubbleLineColor,
    bubbleTxtColor, setBubbleTxtColor,
    nicknameTxtColor, setNicknameTxtColor,
    bubbleBgColor2, setBubbleBgColor2,
    bubbleSubColor2, setBubbleSubColor2,
    bubbleLineColor2, setBubbleLineColor2,
    bubbleTxtColor2, setBubbleTxtColor2,
    nicknameTxtColor2, setNicknameTxtColor2,
    bubbleDesignInnerBgColor2, setBubbleDesignInnerBgColor2,
    bubbleDesignWidth, setBubbleDesignWidth,
    bubbleDesignInnerBgColor, setBubbleDesignInnerBgColor,
    bubbleDesignCircleSize, setBubbleDesignCircleSize,
    bubbleDesignCirclePosition, setBubbleDesignCirclePosition,
    bubbleDesignTopImg, setBubbleDesignTopImg,
    bubbleDesignBottomImg, setBubbleDesignBottomImg,
    topStripe, setTopStripe,
    topRibbon, setTopRibbon,
    bottomClip, setBottomClip,
    bottomDuck, setBottomDuck,
    bottomButton, setBottomButton,
    fullWidthChat, setFullWidthChat,
    showNickname, setShowNickname,
    removeDonationWidth, setRemoveDonationWidth,
    alignDonationLeft, setAlignDonationLeft,
    showDonationOutline, setShowDonationOutline,
    donationBorderBrightness, setDonationBorderBrightness,
    donationBorderOpacity, setDonationBorderOpacity,
    donationBorderThickness, setDonationBorderThickness,
    donationBorderDashGap, setDonationBorderDashGap,
    donationHamuEnabled, setDonationHamuEnabled,
    useTierSpecificIcons, setUseTierSpecificIcons,
    unifiedIconType, setUnifiedIconType,
    donationTiers, setDonationTiers,
    donationHamuPosition, setDonationHamuPosition,
    actualHamuSize, setDonationHamuSize,
    applyPreset,
    forceNextDonation
}) => {
    const [activeTab, setActiveTab] = useState('chat1');
    const miniPreviewRef = useRef(null);
    const [miniScale, setMiniScale] = useState(0.5);

    const tabs = [
        { id: 'chat1', label: '채팅1', icon: <MessageCircle size={16} /> },
        { id: 'chat2', label: '채팅2', icon: <Palette size={16} /> },
        { id: 'donation', label: '도네이션', icon: <Heart size={16} /> },
    ];

    useEffect(() => {
        if (!miniPreviewRef.current) return;
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const containerWidth = entry.contentRect.width;
                setMiniScale((containerWidth / 600) * 0.9);
            }
        });
        observer.observe(miniPreviewRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 flex flex-col relative overflow-hidden">
            
            {/* 1. Top Section - Design Preset */}
            <div className="p-5 space-y-3 border-b border-neutral-100 bg-white">
                <label className="text-sm font-bold text-neutral-800 flex items-center gap-2">
                    <Palette size={14} className="text-indigo-500" />
                    디자인 프리셋
                </label>
                <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => applyPreset('default')} className="px-3 py-2.5 bg-[#FFEEB3] border-2 border-[#534204] text-[#534204] rounded-xl text-[11px] font-bold shadow-sm hover:brightness-95 transition-all flex flex-col items-center gap-1 group">
                        <span>노랑</span>
                    </button>
                    <button onClick={() => applyPreset('newOutfit')} className="px-3 py-2.5 bg-[#F0F9FF] border-2 border-[#BAE6FD] text-[#03273A] rounded-xl text-[11px] font-bold shadow-sm hover:brightness-95 transition-all flex flex-col items-center gap-1 group">
                        <span>파랑</span>
                    </button>
                </div>
            </div>

            {/* 2. Tab Navigation Section */}
            <div className="bg-white border-b border-neutral-100">
                <div className="flex border-b border-neutral-100 bg-neutral-50/50">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-3.5 flex flex-col items-center gap-1 transition-all border-b-2 ${
                                activeTab === tab.id 
                                ? 'border-indigo-500 text-indigo-600 bg-white font-bold' 
                                : 'border-transparent text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100/50'
                            }`}
                        >
                            {tab.icon}
                            <span className="text-[11px] uppercase tracking-wider">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* 3. Scrollable Content Area */}
            <div className="p-5 space-y-6 max-h-[70vh] overflow-y-auto">
                
                {/* Chat 1 Tab */}
                {activeTab === 'chat1' && (
                    <div className="space-y-5 animate-fadeIn">
                        <div className="grid grid-cols-1 gap-2">
                            <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-neutral-100/80 transition-colors cursor-pointer group" 
                                onClick={() => setFullWidthChat(!fullWidthChat)}>
                                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all shrink-0 ${fullWidthChat ? 'bg-indigo-500 border-indigo-500 shadow-sm' : 'bg-white border-neutral-300'}`}>
                                    {fullWidthChat && <span className="text-white text-[12px] leading-none">✔</span>}
                                </div>
                                <span className="text-xs text-neutral-700 font-bold">말풍선 좌우 꽉 채우기</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-neutral-100/80 transition-colors cursor-pointer group" 
                                onClick={() => setShowNickname(!showNickname)}>
                                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all shrink-0 ${showNickname ? 'bg-indigo-500 border-indigo-500 shadow-sm' : 'bg-white border-neutral-300'}`}>
                                    {showNickname && <span className="text-white text-[12px] leading-none">✔</span>}
                                </div>
                                <span className="text-xs text-neutral-700 font-bold">닉네임 표시</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-sm font-bold text-neutral-800 flex items-center gap-2">
                                <Palette size={14} className="text-indigo-500" />
                                말풍선 컬러 (홀수 세트)
                            </label>
                            <div className="grid gap-3">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">배경 색상</label>
                                    <div className="flex gap-2">
                                        <input type="color" value={bubbleBgColor} onChange={(e) => setBubbleBgColor(e.target.value)} className="h-10 w-12 cursor-pointer rounded-lg border border-neutral-200 p-1 bg-white shrink-0" />
                                        <input type="text" value={bubbleBgColor} onChange={(e) => setBubbleBgColor(e.target.value)} className="flex-1 h-10 border border-neutral-200 rounded-lg px-3 text-xs outline-none uppercase font-mono focus:border-indigo-500 transition-colors bg-neutral-50/50" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">테두리 색상</label>
                                    <div className="flex gap-2">
                                        <input type="color" value={bubbleLineColor} onChange={(e) => setBubbleLineColor(e.target.value)} className="h-10 w-12 cursor-pointer rounded-lg border border-neutral-200 p-1 bg-white shrink-0" />
                                        <input type="text" value={bubbleLineColor} onChange={(e) => setBubbleLineColor(e.target.value)} className="flex-1 h-10 border border-neutral-200 rounded-lg px-3 text-xs outline-none uppercase font-mono focus:border-indigo-500 transition-colors bg-neutral-50/50" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">텍스트 색상</label>
                                    <div className="flex gap-2">
                                        <input type="color" value={bubbleTxtColor} onChange={(e) => setBubbleTxtColor(e.target.value)} className="h-10 w-12 cursor-pointer rounded-lg border border-neutral-200 p-1 bg-white shrink-0" />
                                        <input type="text" value={bubbleTxtColor} onChange={(e) => setBubbleTxtColor(e.target.value)} className="flex-1 h-10 border border-neutral-200 rounded-lg px-3 text-xs outline-none uppercase font-mono focus:border-indigo-500 transition-colors bg-neutral-50/50" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">닉네임 글자 색상</label>
                                    <div className="flex gap-2">
                                        <input type="color" value={nicknameTxtColor} onChange={(e) => setNicknameTxtColor(e.target.value)} className="h-10 w-12 cursor-pointer rounded-lg border border-neutral-200 p-1 bg-white shrink-0" />
                                        <input type="text" value={nicknameTxtColor} onChange={(e) => setNicknameTxtColor(e.target.value)} className="flex-1 h-10 border border-neutral-200 rounded-lg px-3 text-xs outline-none uppercase font-mono focus:border-indigo-500 transition-colors bg-neutral-50/50" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-neutral-50">
                            <label className="text-sm font-bold text-neutral-800 flex items-center gap-2">
                                <Settings size={14} className="text-indigo-500" />
                                공통 디자인
                            </label>

                            <div className="space-y-4 pt-2">
                                <div className="grid gap-3">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-neutral-500 uppercase">서브 색상 (원 장식 배경)</label>
                                        <div className="flex gap-2">
                                            <input type="color" value={bubbleSubColor} onChange={(e) => setBubbleSubColor(e.target.value)} className="h-10 w-12 cursor-pointer rounded-lg border border-neutral-200 p-1 bg-white shrink-0" />
                                            <input type="text" value={bubbleSubColor} onChange={(e) => setBubbleSubColor(e.target.value)} className="flex-1 h-10 border border-neutral-200 rounded-lg px-3 text-xs outline-none uppercase font-mono focus:border-indigo-500 transition-colors bg-neutral-50/50" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-neutral-500 uppercase">내부 배경색 (중앙 영역)</label>
                                        <div className="flex gap-2">
                                            <input type="color" value={bubbleDesignInnerBgColor} onChange={(e) => setBubbleDesignInnerBgColor(e.target.value)} className="h-10 w-12 cursor-pointer rounded-lg border border-neutral-200 p-1 bg-white shrink-0" />
                                            <input type="text" value={bubbleDesignInnerBgColor} onChange={(e) => setBubbleDesignInnerBgColor(e.target.value)} className="flex-1 h-10 border border-neutral-200 rounded-lg px-3 text-xs outline-none uppercase font-mono focus:border-indigo-500 transition-colors bg-neutral-50/50" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <label className="text-[11px] font-bold text-neutral-500 uppercase">디자인 너비</label>
                                            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{bubbleDesignWidth}px</span>
                                        </div>
                                        <input type="range" min="0" max="50" value={bubbleDesignWidth} onChange={(e) => setBubbleDesignWidth(Number(e.target.value))} className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <label className="text-[11px] font-bold text-neutral-500 uppercase">원 크기</label>
                                            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{bubbleDesignCircleSize}px</span>
                                        </div>
                                        <input type="range" min="0" max="100" value={bubbleDesignCircleSize} onChange={(e) => setBubbleDesignCircleSize(Number(e.target.value))} className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <label className="text-[11px] font-bold text-neutral-500 uppercase">원 위치</label>
                                            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{bubbleDesignCirclePosition}px</span>
                                        </div>
                                        <input type="range" min="-100" max="100" value={bubbleDesignCirclePosition} onChange={(e) => setBubbleDesignCirclePosition(Number(e.target.value))} className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4 border-t border-neutral-50">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">상단 디자인</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button 
                                            onClick={() => setTopStripe(!topStripe)}
                                            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-2 ${topStripe ? 'bg-indigo-500 border-indigo-500 text-white shadow-sm' : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}
                                        >
                                            <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${topStripe ? 'bg-white border-white' : 'bg-white border-neutral-300'}`}>
                                                {topStripe && <span className="text-indigo-500 text-[10px] leading-none">✔</span>}
                                            </div>
                                            장식 라인
                                        </button>
                                        <button 
                                            onClick={() => setTopRibbon(!topRibbon)}
                                            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-2 ${topRibbon ? 'bg-indigo-500 border-indigo-500 text-white shadow-sm' : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}
                                        >
                                            <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${topRibbon ? 'bg-white border-white' : 'bg-white border-neutral-300'}`}>
                                                {topRibbon && <span className="text-indigo-500 text-[10px] leading-none">✔</span>}
                                            </div>
                                            리본
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-2">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">하단 디자인</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button 
                                            onClick={() => setBottomClip(!bottomClip)}
                                            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-2 ${bottomClip ? 'bg-indigo-500 border-indigo-500 text-white shadow-sm' : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}
                                        >
                                            <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${bottomClip ? 'bg-white border-white' : 'bg-white border-neutral-300'}`}>
                                                {bottomClip && <span className="text-indigo-500 text-[10px] leading-none">✔</span>}
                                            </div>
                                            클립
                                        </button>
                                        <button 
                                            onClick={() => {
                                                const newValue = !bottomDuck;
                                                setBottomDuck(newValue);
                                                if (newValue) setBottomButton(false);
                                            }}
                                            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-2 ${bottomDuck ? 'bg-indigo-500 border-indigo-500 text-white shadow-sm' : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}
                                        >
                                            <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${bottomDuck ? 'bg-white border-white' : 'bg-white border-neutral-300'}`}>
                                                {bottomDuck && <span className="text-indigo-500 text-[10px] leading-none">✔</span>}
                                            </div>
                                            오리
                                        </button>
                                        <button 
                                            onClick={() => {
                                                const newValue = !bottomButton;
                                                setBottomButton(newValue);
                                                if (newValue) setBottomDuck(false);
                                            }}
                                            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-2 ${bottomButton ? 'bg-indigo-500 border-indigo-500 text-white shadow-sm' : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}
                                        >
                                            <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${bottomButton ? 'bg-white border-white' : 'bg-white border-neutral-300'}`}>
                                                {bottomButton && <span className="text-indigo-500 text-[10px] leading-none">✔</span>}
                                            </div>
                                            단추
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Chat 2 Tab */}
                {activeTab === 'chat2' && (
                    <div className="space-y-5 animate-fadeIn">
                        <div className="space-y-4">
                            <label className="text-sm font-bold text-neutral-800 flex items-center gap-2">
                                <Palette size={14} className="text-indigo-500" />
                                말풍선 컬러 (짝수 세트)
                            </label>
                            <p className="text-xs text-neutral-500 pb-2">홀수 번째 메시지와 번갈아가며 적용될 색상입니다.</p>
                            
                            <div className="grid gap-3">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">배경 색상</label>
                                    <div className="flex gap-2">
                                        <input type="color" value={bubbleBgColor2} onChange={(e) => setBubbleBgColor2(e.target.value)} className="h-10 w-12 cursor-pointer rounded-lg border border-neutral-200 p-1 bg-white shrink-0" />
                                        <input type="text" value={bubbleBgColor2} onChange={(e) => setBubbleBgColor2(e.target.value)} className="flex-1 h-10 border border-neutral-200 rounded-lg px-3 text-xs outline-none uppercase font-mono focus:border-indigo-500 transition-colors bg-neutral-50/50" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">테두리 색상</label>
                                    <div className="flex gap-2">
                                        <input type="color" value={bubbleLineColor2} onChange={(e) => setBubbleLineColor2(e.target.value)} className="h-10 w-12 cursor-pointer rounded-lg border border-neutral-200 p-1 bg-white shrink-0" />
                                        <input type="text" value={bubbleLineColor2} onChange={(e) => setBubbleLineColor2(e.target.value)} className="flex-1 h-10 border border-neutral-200 rounded-lg px-3 text-xs outline-none uppercase font-mono focus:border-indigo-500 transition-colors bg-neutral-50/50" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">텍스트 색상</label>
                                    <div className="flex gap-2">
                                        <input type="color" value={bubbleTxtColor2} onChange={(e) => setBubbleTxtColor2(e.target.value)} className="h-10 w-12 cursor-pointer rounded-lg border border-neutral-200 p-1 bg-white shrink-0" />
                                        <input type="text" value={bubbleTxtColor2} onChange={(e) => setBubbleTxtColor2(e.target.value)} className="flex-1 h-10 border border-neutral-200 rounded-lg px-3 text-xs outline-none uppercase font-mono focus:border-indigo-500 transition-colors bg-neutral-50/50" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">닉네임 글자 색상</label>
                                    <div className="flex gap-2">
                                        <input type="color" value={nicknameTxtColor2} onChange={(e) => setNicknameTxtColor2(e.target.value)} className="h-10 w-12 cursor-pointer rounded-lg border border-neutral-200 p-1 bg-white shrink-0" />
                                        <input type="text" value={nicknameTxtColor2} onChange={(e) => setNicknameTxtColor2(e.target.value)} className="flex-1 h-10 border border-neutral-200 rounded-lg px-3 text-xs outline-none uppercase font-mono focus:border-indigo-500 transition-colors bg-neutral-50/50" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-neutral-50">
                            <div className="grid gap-3">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">서브 색상 (짝수 세트 장식)</label>
                                    <div className="flex gap-2">
                                        <input type="color" value={bubbleSubColor2} onChange={(e) => setBubbleSubColor2(e.target.value)} className="h-10 w-12 cursor-pointer rounded-lg border border-neutral-200 p-1 bg-white shrink-0" />
                                        <input type="text" value={bubbleSubColor2} onChange={(e) => setBubbleSubColor2(e.target.value)} className="flex-1 h-10 border border-neutral-200 rounded-lg px-3 text-xs outline-none uppercase font-mono focus:border-indigo-500 transition-colors bg-neutral-50/50" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">내부 배경색 (중앙 영역)</label>
                                    <div className="flex gap-2">
                                        <input type="color" value={bubbleDesignInnerBgColor2} onChange={(e) => setBubbleDesignInnerBgColor2(e.target.value)} className="h-10 w-12 cursor-pointer rounded-lg border border-neutral-200 p-1 bg-white shrink-0" />
                                        <input type="text" value={bubbleDesignInnerBgColor2} onChange={(e) => setBubbleDesignInnerBgColor2(e.target.value)} className="flex-1 h-10 border border-neutral-200 rounded-lg px-3 text-xs outline-none uppercase font-mono focus:border-indigo-500 transition-colors bg-neutral-50/50" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Donation Tab */}
                {activeTab === 'donation' && (
                    <div className="space-y-4 animate-fadeIn">
                        <div className="space-y-4">
                            <label className="text-sm font-bold text-neutral-800 flex items-center gap-2">
                                <Heart size={14} className="text-pink-500" />
                                도네이션 설정
                            </label>
                            <p className="text-xs text-neutral-500 pb-2">도네이션 박스의 레이아웃을 조정합니다.</p>
                            
                            <div className="grid gap-2">
                                <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-neutral-100/80 transition-colors cursor-pointer group" 
                                    onClick={() => setRemoveDonationWidth(!removeDonationWidth)}>
                                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all shrink-0 ${removeDonationWidth ? 'bg-indigo-500 border-indigo-500 shadow-sm' : 'bg-white border-neutral-300'}`}>
                                        {removeDonationWidth && <span className="text-white text-[12px] leading-none">✔</span>}
                                    </div>
                                    <span className="text-xs text-neutral-700 font-bold">너비 꽉 차게 표시</span>
                                </div>
                                
                                <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-neutral-100/80 transition-colors cursor-pointer group" 
                                    onClick={() => setAlignDonationLeft(!alignDonationLeft)}>
                                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all shrink-0 ${alignDonationLeft ? 'bg-indigo-500 border-indigo-500 shadow-sm' : 'bg-white border-neutral-300'}`}>
                                        {alignDonationLeft && <span className="text-white text-[12px] leading-none">✔</span>}
                                    </div>
                                    <span className="text-xs text-neutral-700 font-bold">왼쪽 정렬</span>
                                </div>

                                <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-neutral-100/80 transition-colors cursor-pointer group" 
                                    onClick={() => setShowDonationOutline(!showDonationOutline)}>
                                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all shrink-0 ${showDonationOutline ? 'bg-indigo-500 border-indigo-500 shadow-sm' : 'bg-white border-neutral-300'}`}>
                                        {showDonationOutline && <span className="text-white text-[12px] leading-none">✔</span>}
                                    </div>
                                    <span className="text-xs text-neutral-700 font-bold">점선 테두리 디자인 추가</span>
                                </div>
                            </div>

                            {showDonationOutline && (
                                <div className="space-y-4 pt-4 border-t border-neutral-100 animate-fadeIn">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <label className="text-[11px] font-bold text-neutral-500 uppercase">테두리 밝기[default: 0%]</label>
                                            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{donationBorderBrightness}%</span>
                                        </div>
                                        <input type="range" min="0" max="200" value={donationBorderBrightness} onChange={(e) => setDonationBorderBrightness(Number(e.target.value))} className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <label className="text-[11px] font-bold text-neutral-500 uppercase">테두리 투명도[default: 30%]</label>
                                            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{donationBorderOpacity}%</span>
                                        </div>
                                        <input type="range" min="0" max="100" value={donationBorderOpacity} onChange={(e) => setDonationBorderOpacity(Number(e.target.value))} className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <label className="text-[11px] font-bold text-neutral-500 uppercase">테두리 두께[default: 3px]</label>
                                            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{donationBorderThickness}px</span>
                                        </div>
                                        <input type="range" min="1" max="10" value={donationBorderThickness} onChange={(e) => setDonationBorderThickness(Number(e.target.value))} className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <label className="text-[11px] font-bold text-neutral-500 uppercase">점선 간격[default: 12px]</label>
                                            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{donationBorderDashGap}px</span>
                                        </div>
                                        <input type="range" min="2" max="40" value={donationBorderDashGap} onChange={(e) => setDonationBorderDashGap(Number(e.target.value))} className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                                    </div>
                                </div>
                            )}

                            <div className="space-y-4 pt-4 border-t border-neutral-100">
                                <label className="text-sm font-bold text-neutral-800 flex items-center gap-2">
                                    <Heart size={14} className="text-pink-500" />
                                    캐릭터 설정
                                </label>
                                
                                <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:bg-neutral-100/80 transition-colors cursor-pointer group" 
                                    onClick={() => setDonationHamuEnabled(!donationHamuEnabled)}>
                                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all shrink-0 ${donationHamuEnabled ? 'bg-indigo-500 border-indigo-500 shadow-sm' : 'bg-white border-neutral-300'}`}>
                                        {donationHamuEnabled && <span className="text-white text-[12px] leading-none">✔</span>}
                                    </div>
                                    <span className="text-xs text-neutral-700 font-bold">하무 아이콘 표시</span>
                                </div>

                                {donationHamuEnabled && (
                                    <div className="space-y-4 animate-fadeIn">
                                        <div className="space-y-3">
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-bold text-neutral-500 uppercase">아이콘 타입</label>
                                                <div 
                                                    className="flex items-center gap-2 cursor-pointer group pb-0.5"
                                                    onClick={() => setUseTierSpecificIcons(!useTierSpecificIcons)}
                                                >
                                                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${useTierSpecificIcons ? 'bg-indigo-500 border-indigo-500 shadow-sm' : 'bg-white border-neutral-300 group-hover:border-neutral-400'}`}>
                                                        {useTierSpecificIcons && <span className="text-white text-[10px]">✔</span>}
                                                    </div>
                                                    <span className="text-[11px] font-bold text-neutral-600">금액별 별도 설정</span>
                                                </div>
                                            </div>

                                            {useTierSpecificIcons ? (
                                                <div className="space-y-3 animate-fadeIn">
                                                    {[1000, 10000, 100000, 1000000].map((tier) => (
                                                        <div key={tier} className="space-y-1.5 p-3 bg-white rounded-xl border border-neutral-100 shadow-sm">
                                                            <span className="text-[11px] font-bold text-neutral-500">{tier.toLocaleString()}원 설정</span>
                                                            <div className="grid grid-cols-2 gap-1.5">
                                                                {[
                                                                    { key: 'cheeze', label: '치즈' },
                                                                    { key: 'heart', label: '하트' },
                                                                    { key: 'cheeze-orange', label: '치즈 오랜지' },
                                                                    { key: 'cheeze-pink', label: '치즈 핑크' },
                                                                    { key: 'cheeze-rainbow', label: '치즈 무지개' },
                                                                    { key: 'mandu', label: '치즈 만두' },
                                                                    { key: 'ddalgi', label: '치즈 딸기' }
                                                                ].map((opt) => (
                                                                    <button 
                                                                        key={opt.key}
                                                                        onClick={() => setDonationTiers({...donationTiers, [tier]: opt.key})}
                                                                        className={`py-1.5 px-2 rounded-md text-[10px] font-bold transition-all border ${donationTiers[tier] === opt.key ? 'bg-indigo-500 border-indigo-500 text-white shadow-sm' : 'bg-neutral-50 border-neutral-200 text-neutral-500 hover:bg-neutral-100'}`}
                                                                    >
                                                                        {opt.label}
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-2 gap-2 p-2 bg-neutral-50 rounded-xl border border-neutral-100 animate-fadeIn">
                                                    {[
                                                        { key: 'cheeze', label: '치즈' },
                                                        { key: 'heart', label: '하트' },
                                                        { key: 'cheeze-orange', label: '치즈 오랜지' },
                                                        { key: 'cheeze-pink', label: '치즈 핑크' },
                                                        { key: 'cheeze-rainbow', label: '치즈 무지개' },
                                                        { key: 'mandu', label: '치즈 만두' },
                                                        { key: 'ddalgi', label: '치즈 딸기' }
                                                    ].map((opt) => (
                                                        <button 
                                                            key={opt.key}
                                                            onClick={() => setUnifiedIconType(opt.key)}
                                                            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border ${unifiedIconType === opt.key ? 'bg-indigo-500 border-indigo-500 text-white shadow-sm' : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}
                                                        >
                                                            {opt.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold text-neutral-500 uppercase">하무 위치</label>
                                            <div className="flex gap-2">
                                                <button 
                                                    onClick={() => setDonationHamuPosition('left')}
                                                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all border ${donationHamuPosition === 'left' ? 'bg-indigo-500 border-indigo-500 text-white shadow-sm' : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}
                                                >
                                                    좌
                                                </button>
                                                <button 
                                                    onClick={() => setDonationHamuPosition('center')}
                                                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all border ${donationHamuPosition === 'center' ? 'bg-indigo-500 border-indigo-500 text-white shadow-sm' : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}
                                                >
                                                    중앙
                                                </button>
                                                <button 
                                                    onClick={() => setDonationHamuPosition('right')}
                                                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all border ${donationHamuPosition === 'right' ? 'bg-indigo-500 border-indigo-500 text-white shadow-sm' : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}
                                                >
                                                    우
                                                </button>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between items-end">
                                                <label className="text-[11px] font-bold text-neutral-500 uppercase">하무 크기[default: 50px]</label>
                                                <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{actualHamuSize}px</span>
                                            </div>
                                            <input type="range" min="20" max="150" value={actualHamuSize} onChange={(e) => setDonationHamuSize(Number(e.target.value))} className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default EditorPanel;
