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

    return (
        <div className="bg-white rounded-3xl shadow-md border border-neutral-200 overflow-hidden flex flex-col transition-shadow hover:shadow-lg">
            <div className="bg-neutral-100 px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="ml-3 text-xs font-bold text-neutral-400 uppercase tracking-widest">미리보기</span>
                </div>
            </div>
            <div 
                ref={previewRef}
                className="relative w-full aspect-video bg-slate-900 overflow-hidden bg-cover bg-center" 
                style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
            >
                {/* 실시간 샘플 (Floating Sample Preview) */}
                <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden relative shadow-2xl flex items-center justify-center" style={{ width: '250px', height: '180px' }}>
                        <div 
                            className="flex flex-col items-center origin-center"
                            style={{ 
                                width: '400px',
                                transform: `scale(0.45)` 
                            }}
                        >
                            <div className="chat_list w-full flex flex-col items-center">
                                <div className="chat_box" style={{ width: 400 }}>
                                    <div className="chat">
                                        <div className="inner_box">
                                            <p className="text" style={{ fontSize: '24px' }}>샘플 메시지입니다</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat_box" style={{ width: 400 }}>
                                    <div className="chat">
                                        <div className="inner_box">
                                            <p className="text" style={{ fontSize: '24px' }}>디자인을 확인해보세요!</p>
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
                            <div className="chat_list block relative z-10 w-full">
                                {previewChats.map((chat) => (
                                    <div key={chat.id} className="chat_box chat-preview-item">
                                        <div className="chat">
                                            <div className="inner_box">
                                                <p className="text">{chat.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewPanel;
