import React, { useState, useEffect, useRef } from 'react';
import { FIXED_CONFIG } from '../constants/chatData';

const PreviewPanel = ({ previewChats, fontSize, backgroundImageUrl }) => {
    const previewRef = useRef(null);
    const [previewScale, setPreviewScale] = useState(1);

    useEffect(() => {
        if (!previewRef.current) return;
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setPreviewScale(entry.contentRect.width / 1920);
            }
        });
        observer.observe(previewRef.current);
        return () => observer.disconnect();
    }, []);

    const positionStyle = { right: `${FIXED_CONFIG.right}%`, top: `${FIXED_CONFIG.top}%` };

    const DONATION_THEMES = {
        purple: {
            border: 'border-[#4b1c6d]',
            bg: 'bg-[#61248b]',
            bottomBg: 'bg-[#491873]',
            badgeBg: 'bg-[#2c0f49]'
        }
    };

    const theme = DONATION_THEMES.purple;

    return (
        <div className="bg-white rounded-3xl shadow-md border border-neutral-200 overflow-hidden flex flex-col transition-shadow hover:shadow-lg">
            <div className="bg-neutral-100 px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="ml-3 text-xs font-bold text-neutral-400 uppercase tracking-widest">미리보기</span>
                    <span className="ml-3 text-[10px] font-bold text-red-500 bg-red-50/10 px-2 py-0.5 rounded border border-red-500/20">채팅 간격은 실재보다 조금 넓습니다.</span>
                </div>
            </div>
            <div 
                ref={previewRef}
                className="relative w-full aspect-video bg-white overflow-hidden" 
            >
                {/* 실시간 샘플 (Floating Sample Preview) */}
                <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
                    <div className="origin-bottom-left" style={{ transform: 'scale(0.8)' }}>
                        <div className="bg-white/5 backdrop-blur-sm rounded-[40px] border border-white/10 overflow-hidden relative shadow-2xl pb-4 px-4 pt-10 inline-block">
                            <div 
                                style={{ 
                                    width: '576px', // 메인 미리보기와 동일한 기준 너비
                                    zoom: 0.8
                                }}
                            >
                                <div className="chat_list w-full grid">
                                    <div className="chat_box-wrapper mx-auto" style={{ width: '100%' }}>
                                        <div className="chat">
                                            <div className="inner_box">
                                                <p className="text" style={{ fontSize: '24px' }}>샘플 메시지입니다</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat_box-wrapper mx-auto" style={{ width: '100%' }}>
                                        <div className="chat">
                                            <div className="inner_box">
                                                <p className="text" style={{ fontSize: '24px'}}>2줄 샘플 메세지입니다. 뭐라고 적어야 2줄이 될까나. 폰트는 귀염발랄체 </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    className="absolute top-0 left-0 origin-top-left"
                    style={{ 
                        width: '1920px', 
                        height: '1080px',
                        transform: `scale(${previewScale})`
                    }}
                >
                    <div 
                        className="absolute flex flex-col justify-end overflow-hidden z-10"
                        style={{ 
                            ...positionStyle,
                            width: `${FIXED_CONFIG.width}%`, 
                            height: `${FIXED_CONFIG.height}%` 
                        }}
                    >
                        <div className="w-full origin-bottom mb-2" style={{ transform: `scale(${FIXED_CONFIG.scale})` }}>
                            <div className="chat_list grid relative z-10 w-full">
                                {previewChats.map((chat) => {
                                    if (chat.type === 'donation') {
                                        return (
                                            <div key={chat.id} className="chat_box chat-preview-item">
                                                <div className={`donation_box flex flex-col rounded-[16px] shadow-md border-2 ${theme.border} overflow-hidden ${theme.bg} text-white`} style={{ fontFamily: "'Pretendard', sans-serif" }}>
                                                    <div className="p-4 pb-3">
                                                        <div className="font-extrabold leading-snug break-all" style={{ fontSize: `${fontSize}px` }}>{chat.text}</div>
                                                    </div>
                                                    <div className={`${theme.bottomBg} px-4 py-2.5`}>
                                                        <div className={`${theme.badgeBg} inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[14px] font-bold`}>
                                                            <svg className="w-4 h-4 text-white/90" viewBox="0 0 24 24" fill="currentColor"><path d="M21 4H3C1.89 4 1 4.89 1 6V18C1 19.11 1.89 20 3 20H21C22.11 20 23 19.11 23 18V6C23 4.89 22.11 4 21 4ZM21 18H3V12H21V18ZM21 8H3V6H21V8Z"/></svg>
                                                            1,000
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return (
                                        <div key={chat.id} className="chat_box-wrapper chat-preview-item">
                                            <div className="chat">
                                                <div className="inner_box">
                                                    <p className="text">{chat.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewPanel;