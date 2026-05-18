import React from 'react';
import { Palette } from 'lucide-react';

const EditorPanel = ({
    character,
    bubbleLineColor, setBubbleLineColor,
    bubbleTxtColor, setBubbleTxtColor,
    bubbleMarginTop, setBubbleMarginTop,
    bubblePaddingY, setBubblePaddingY,
    bubblePaddingLeft, setBubblePaddingLeft,
    bubblePaddingRight, setBubblePaddingRight,
    bubbleBorderRadius, setBubbleBorderRadius,
    bubbleFullWidth, setBubbleFullWidth,
    donationFullWidth, setDonationFullWidth,
    donationAlignLeft, setDonationAlignLeft,
    haruEar, setHaruEar,
    haruExpression, setHaruExpression
}) => {
    // 캐릭터별 기본값 정의 (App.jsx의 useEffect 로직과 일치시킴)
    const defaults = {
        haru: { line: '#391010', txt: '#000000', radius: 35, marginTop: 10, paddingY: 20, paddingLeft: 25, paddingRight: 40, fullWidth: false },
        hane: { line: '#102239', txt: '#000000', radius: 35, marginTop: 10, paddingY: 20, paddingLeft: 25, paddingRight: 40, fullWidth: false },
        ate: { line: '#E6AE4D', txt: '#000000', radius: 35, marginTop: 10, paddingY: 20, paddingLeft: 25, paddingRight: 40, fullWidth: false }
    };

    const currentDefaults = defaults[character] || defaults.haru;

    const translate = (ko, ja) => {
        return character === 'hane' ? (
            <span className="flex items-center gap-1">
                {ko} <span className="text-[10px] font-normal text-neutral-400">[{ja}]</span>
            </span>
        ) : ko;
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 flex flex-col relative overflow-hidden">
            <div className="p-5 space-y-6">
                {/* 하루 전용 설정 */}
                {character === 'haru' && (
                    <div className="space-y-4 pb-6 border-b border-neutral-100">
                        <label className="text-sm font-bold text-neutral-800 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                            테롱이는 귀 너무 커
                        </label>
                        <div className="grid gap-4">
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-neutral-500 uppercase">귀 모양</label>
                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => setHaruEar('normal')}
                                        className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${haruEar === 'normal' ? 'bg-amber-100 text-amber-700 border border-amber-200' : 'bg-neutral-50 text-neutral-500 border border-transparent'}`}
                                    >
                                        테롱
                                    </button>
                                    <button 
                                        onClick={() => setHaruEar('mishi')}
                                        className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${haruEar === 'mishi' ? 'bg-amber-100 text-amber-700 border border-amber-200' : 'bg-neutral-50 text-neutral-500 border border-transparent'}`}
                                    >
                                        미시테롱
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-neutral-500 uppercase">표정</label>
                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => setHaruExpression('normal')}
                                        className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${haruExpression === 'normal' ? 'bg-amber-100 text-amber-700 border border-amber-200' : 'bg-neutral-50 text-neutral-500 border border-transparent'}`}
                                    >
                                        테롱
                                    </button>
                                    <button 
                                        onClick={() => setHaruExpression('mishi')}
                                        className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${haruExpression === 'mishi' ? 'bg-amber-100 text-amber-700 border border-amber-200' : 'bg-neutral-50 text-neutral-500 border border-transparent'}`}
                                    >
                                        미시테롱
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="space-y-4">
                    <label className="text-sm font-bold text-neutral-800 flex items-center gap-2">
                        <Palette size={14} className="text-indigo-500" />
                        {translate('말풍선 스타일 설정', '吹き出しのスタイル設定')}
                    </label>
                    
                    <div className="grid gap-4">
                        {/* 도네이션 옵션 (공통) */}
                        <div className="p-4 bg-neutral-50 rounded-xl space-y-3 border border-neutral-100">
                            <label className="text-[11px] font-bold text-neutral-400 uppercase flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                                {translate('도네이션 설정', 'ドネーション設定')}
                            </label>
                            
                            <div className="flex items-center justify-between">
                                <label className="text-xs font-bold text-neutral-600">
                                    {translate('좌우 꽉 채우기', '左右いっぱいに広げる')}
                                </label>
                                <button 
                                    onClick={() => setDonationFullWidth(!donationFullWidth)}
                                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${donationFullWidth ? 'bg-indigo-500' : 'bg-neutral-200'}`}
                                >
                                    <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${donationFullWidth ? 'translate-x-5' : 'translate-x-1'}`} />
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="text-xs font-bold text-neutral-600">
                                    {translate('왼쪽에 붙이기', '左側に寄せる')}
                                </label>
                                <button 
                                    onClick={() => setDonationAlignLeft(!donationAlignLeft)}
                                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${donationAlignLeft ? 'bg-indigo-500' : 'bg-neutral-200'}`}
                                >
                                    <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${donationAlignLeft ? 'translate-x-5' : 'translate-x-1'}`} />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-neutral-500 uppercase">
                                {translate('테두리 색상', '枠線の色')} [default: {currentDefaults.line}]
                            </label>
                            <div className="flex gap-2">
                                <input type="color" value={bubbleLineColor} onChange={(e) => setBubbleLineColor(e.target.value)} className="h-10 w-12 cursor-pointer rounded-lg border border-neutral-200 p-1 bg-white shrink-0" />
                                <input type="text" value={bubbleLineColor} onChange={(e) => setBubbleLineColor(e.target.value)} className="flex-1 h-10 border border-neutral-200 rounded-lg px-3 text-xs outline-none uppercase font-mono focus:border-indigo-500 transition-colors bg-neutral-50/50" />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-neutral-500 uppercase">
                                {translate('텍스트 색상', 'テキストの色')} [default: {currentDefaults.txt}]
                            </label>
                            <div className="flex gap-2">
                                <input type="color" value={bubbleTxtColor} onChange={(e) => setBubbleTxtColor(e.target.value)} className="h-10 w-12 cursor-pointer rounded-lg border border-neutral-200 p-1 bg-white shrink-0" />
                                <input type="text" value={bubbleTxtColor} onChange={(e) => setBubbleTxtColor(e.target.value)} className="flex-1 h-10 border border-neutral-200 rounded-lg px-3 text-xs outline-none uppercase font-mono focus:border-indigo-500 transition-colors bg-neutral-50/50" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <label className="text-[11px] font-bold text-neutral-500 uppercase">
                                {translate('좌우 꽉 채우기', '左右いっぱいに広げる')} [default: {currentDefaults.fullWidth ? 'ON' : 'OFF'}]
                            </label>
                            <button 
                                onClick={() => setBubbleFullWidth(!bubbleFullWidth)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${bubbleFullWidth ? 'bg-indigo-500' : 'bg-neutral-200'}`}
                            >
                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${bubbleFullWidth ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-neutral-100">
                            <div className="space-y-2">
                                <div className="flex justify-between items-end">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">
                                        {translate('채팅 곡률', '角の丸み')} [default: {currentDefaults.radius}px]
                                    </label>
                                    <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{bubbleBorderRadius}px</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="35" 
                                    value={bubbleBorderRadius} 
                                    onChange={(e) => setBubbleBorderRadius(Number(e.target.value))} 
                                    className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" 
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-end">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">
                                        {translate('상단 간격', '上の間隔')} [default: {currentDefaults.marginTop}px]
                                    </label>
                                    <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{bubbleMarginTop}px</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="100" 
                                    value={bubbleMarginTop} 
                                    onChange={(e) => setBubbleMarginTop(Number(e.target.value))} 
                                    className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" 
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-end">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">
                                        {translate('상하 패딩', '上下の余白')} [default: {currentDefaults.paddingY}px]
                                    </label>
                                    <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{bubblePaddingY}px</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="100" 
                                    value={bubblePaddingY} 
                                    onChange={(e) => setBubblePaddingY(Number(e.target.value))} 
                                    className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" 
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-end">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">
                                        {translate('좌측 패딩', '左の余白')} [default: {currentDefaults.paddingLeft}px]
                                    </label>
                                    <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{bubblePaddingLeft}px</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="100" 
                                    value={bubblePaddingLeft} 
                                    onChange={(e) => setBubblePaddingLeft(Number(e.target.value))} 
                                    className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" 
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-end">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">
                                        {translate('우측 패딩', '右の余白')} [default: {currentDefaults.paddingRight}px]
                                    </label>
                                    <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{bubblePaddingRight}px</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="150" 
                                    value={bubblePaddingRight} 
                                    onChange={(e) => setBubblePaddingRight(Number(e.target.value))} 
                                    className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorPanel;
