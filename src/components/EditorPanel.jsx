import React from 'react';
import { Palette } from 'lucide-react';

const EditorPanel = ({
    bubbleLineColor, setBubbleLineColor,
    bubbleTxtColor, setBubbleTxtColor,
    bubbleMarginTop, setBubbleMarginTop,
    bubbleMarginBottom, setBubbleMarginBottom,
    bubbleBorderRadius, setBubbleBorderRadius
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 flex flex-col relative overflow-hidden">
            <div className="p-5 space-y-6">
                <div className="space-y-4">
                    <label className="text-sm font-bold text-neutral-800 flex items-center gap-2">
                        <Palette size={14} className="text-indigo-500" />
                        말풍선 스타일 설정
                    </label>
                    
                    <div className="grid gap-4">
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-neutral-500 uppercase">테두리 색상 (--bubble-line-color)</label>
                            <div className="flex gap-2">
                                <input type="color" value={bubbleLineColor} onChange={(e) => setBubbleLineColor(e.target.value)} className="h-10 w-12 cursor-pointer rounded-lg border border-neutral-200 p-1 bg-white shrink-0" />
                                <input type="text" value={bubbleLineColor} onChange={(e) => setBubbleLineColor(e.target.value)} className="flex-1 h-10 border border-neutral-200 rounded-lg px-3 text-xs outline-none uppercase font-mono focus:border-indigo-500 transition-colors bg-neutral-50/50" />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-neutral-500 uppercase">텍스트 색상 (--bubble-txt-color)</label>
                            <div className="flex gap-2">
                                <input type="color" value={bubbleTxtColor} onChange={(e) => setBubbleTxtColor(e.target.value)} className="h-10 w-12 cursor-pointer rounded-lg border border-neutral-200 p-1 bg-white shrink-0" />
                                <input type="text" value={bubbleTxtColor} onChange={(e) => setBubbleTxtColor(e.target.value)} className="flex-1 h-10 border border-neutral-200 rounded-lg px-3 text-xs outline-none uppercase font-mono focus:border-indigo-500 transition-colors bg-neutral-50/50" />
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-neutral-100">
                            <div className="space-y-2">
                                <div className="flex justify-between items-end">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">채팅 곡률 (Border Radius)</label>
                                    <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{bubbleBorderRadius}px</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="30" 
                                    value={bubbleBorderRadius} 
                                    onChange={(e) => setBubbleBorderRadius(Number(e.target.value))} 
                                    className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" 
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-end">
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">채팅 상단 간격 (Margin Top)</label>
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
                                    <label className="text-[11px] font-bold text-neutral-500 uppercase">채팅 하단 간격 (Margin Bottom)</label>
                                    <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{bubbleMarginBottom}px</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="100" 
                                    value={bubbleMarginBottom} 
                                    onChange={(e) => setBubbleMarginBottom(Number(e.target.value))} 
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
