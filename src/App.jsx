import React, { useState, useEffect, useRef } from 'react';
import { CHAT_DATA } from './constants/chatData';
import { generateCSS } from './utils/cssGenerator';
import EditorPanel from './components/EditorPanel';
import PreviewPanel from './components/PreviewPanel';
import CodePanel from './components/CodePanel';
import bgImage from './img/background.png';

function App() {
    // 스타일 상태 관리
    const [bubbleLineColor, setBubbleLineColor] = useState('#391010');
    const [bubbleTxtColor, setBubbleTxtColor] = useState('#000000');
    const [bubbleMarginTop, setBubbleMarginTop] = useState(20);
    const [bubbleMarginBottom, setBubbleMarginBottom] = useState(20);
    const [bubbleBorderRadius, setBubbleBorderRadius] = useState(18);

    const backgroundImageUrl = bgImage;  
    const fontSize = 24;

    const [previewChats, setPreviewChats] = useState([
        { id: 0, text: CHAT_DATA[0], type: 'chat' },
        { id: 1, text: CHAT_DATA[1], type: 'chat' }
    ]);
    const messageIndexRef = useRef(2);
    const idCounterRef = useRef(2);

    useEffect(() => {
        let timeoutId;
        const addNextMessage = () => {
            setPreviewChats(prev => {
                const nextChats = [
                    ...prev, 
                    { 
                        id: idCounterRef.current++, 
                        text: CHAT_DATA[messageIndexRef.current],
                        type: 'chat'
                    }
                ];
                return nextChats.slice(-12);
            });
            
            messageIndexRef.current = (messageIndexRef.current + 1) % CHAT_DATA.length;
            const randomDelay = 1000 + Math.random() * 2000;
            timeoutId = setTimeout(addNextMessage, randomDelay);
        };

        timeoutId = setTimeout(addNextMessage, 1000);
        return () => clearTimeout(timeoutId);
    }, []);

    const config = {
        bubbleLineColor,
        bubbleTxtColor,
        bubbleMarginTop,
        bubbleMarginBottom,
        bubbleBorderRadius
    };

    const generatedCSS = generateCSS(config);

    return (
        <div className="p-4 md:p-8 max-w-[1440px] mx-auto space-y-8">
            <style dangerouslySetInnerHTML={{ __html: `
                ${generatedCSS}
                .chat_list .text { 
                    font-family: var(--main-font); 
                    font-size: ${fontSize}px !important;
                    line-height: 1.2 !important;
                    vertical-align: middle !important;
                    display: inline-block !important;
                }
            `}} />

            <div className="text-center space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight flex items-center justify-center gap-3">
                    <span className="text-amber-400">✨</span> CUSTOM THEME GENERATOR
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Panel */}
                <div className="lg:col-span-3 space-y-4">
                    <EditorPanel 
                        bubbleLineColor={bubbleLineColor} setBubbleLineColor={setBubbleLineColor}
                        bubbleTxtColor={bubbleTxtColor} setBubbleTxtColor={setBubbleTxtColor}
                        bubbleMarginTop={bubbleMarginTop} setBubbleMarginTop={setBubbleMarginTop}
                        bubbleMarginBottom={bubbleMarginBottom} setBubbleMarginBottom={setBubbleMarginBottom}
                        bubbleBorderRadius={bubbleBorderRadius} setBubbleBorderRadius={setBubbleBorderRadius}
                    />
                </div>

                {/* Right Panel */}
                <div className="lg:col-span-9">
                    <div className="sticky top-8 space-y-6">
                        <PreviewPanel 
                            previewChats={previewChats}
                            fontSize={fontSize}
                            backgroundImageUrl={backgroundImageUrl}
                        />
                        <CodePanel generatedCSS={generatedCSS} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
