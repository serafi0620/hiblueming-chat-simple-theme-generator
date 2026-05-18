import React, { useState, useEffect, useRef } from 'react';
import { CHAT_DATA } from './constants/chatData';
import { generateCSS } from './utils/cssGenerator';
import EditorPanel from './components/EditorPanel';
import PreviewPanel from './components/PreviewPanel';
import CodePanel from './components/CodePanel';
import bgImage from './img/background.png';

function App() {
    // 스타일 상태 관리
    const [character, setCharacter] = useState('haru');
    const [bubbleLineColor, setBubbleLineColor] = useState('#391010');
    const [bubbleTxtColor, setBubbleTxtColor] = useState('#000000');
    const [bubbleMarginTop, setBubbleMarginTop] = useState(20);
    const [bubblePaddingY, setBubblePaddingY] = useState(20);
    const [bubblePaddingLeft, setBubblePaddingLeft] = useState(25);
    const [bubblePaddingRight, setBubblePaddingRight] = useState(50);
    const [bubbleBorderRadius, setBubbleBorderRadius] = useState(18);
    const [bubbleFullWidth, setBubbleFullWidth] = useState(true);

    // 하루 전용 옵션
    const [haruEar, setHaruEar] = useState('normal'); // normal(테롱), mishi(미시테롱)
    const [haruExpression, setHaruExpression] = useState('normal'); // normal(보통), mishi(미시)

    // 캐릭터 변경 시 기본 설정값 적용
    useEffect(() => {
        if (character === 'haru') {
            setBubbleLineColor('#391010');
            setBubbleTxtColor('#000000');
            setBubbleBorderRadius(30);
            setBubbleMarginTop(30);
            setBubblePaddingY(20);
            setBubblePaddingLeft(25);
            setBubblePaddingRight(50);
            setBubbleFullWidth(false);
        } else if (character === 'hane') {
            setBubbleLineColor('#102239');
            setBubbleTxtColor('#000000');
            setBubbleBorderRadius(30);
            setBubbleMarginTop(25);
            setBubblePaddingY(15);
            setBubblePaddingLeft(20);
            setBubblePaddingRight(45);
            setBubbleFullWidth(false);
        } else if (character === 'ate') {
            setBubbleLineColor('#E6AE4D');
            setBubbleTxtColor('#000000');
            setBubbleBorderRadius(30);
            setBubbleMarginTop(20);
            setBubblePaddingY(25);
            setBubblePaddingLeft(30);
            setBubblePaddingRight(55);
            setBubbleFullWidth(false); // 아테는 텍스트에 딱 붙는 게 기본값이라면
        }
    }, [character]);

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
        character,
        bubbleLineColor,
        bubbleTxtColor,
        bubbleMarginTop,
        bubblePaddingY,
        bubblePaddingLeft,
        bubblePaddingRight,
        bubbleBorderRadius,
        bubbleFullWidth,
        haruEar,
        haruExpression
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
                    <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-2 flex gap-2">
                        <button 
                            onClick={() => setCharacter('haru')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-all ${character === 'haru' ? 'bg-indigo-500 text-white shadow-md shadow-indigo-200' : 'bg-transparent text-neutral-500 hover:bg-neutral-50'}`}
                        >
                            하루
                        </button>
                        <button 
                            onClick={() => setCharacter('hane')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-all ${character === 'hane' ? 'bg-indigo-500 text-white shadow-md shadow-indigo-200' : 'bg-transparent text-neutral-500 hover:bg-neutral-50'}`}
                        >
                            하네
                        </button>
                        <button 
                            onClick={() => setCharacter('ate')}
                            className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-all ${character === 'ate' ? 'bg-indigo-500 text-white shadow-md shadow-indigo-200' : 'bg-transparent text-neutral-500 hover:bg-neutral-50'}`}
                        >
                            아테
                        </button>
                    </div>
                    <EditorPanel 
                        character={character}
                        bubbleLineColor={bubbleLineColor} setBubbleLineColor={setBubbleLineColor}
                        bubbleTxtColor={bubbleTxtColor} setBubbleTxtColor={setBubbleTxtColor}
                        bubbleMarginTop={bubbleMarginTop} setBubbleMarginTop={setBubbleMarginTop}
                        bubblePaddingY={bubblePaddingY} setBubblePaddingY={setBubblePaddingY}
                        bubblePaddingLeft={bubblePaddingLeft} setBubblePaddingLeft={setBubblePaddingLeft}
                        bubblePaddingRight={bubblePaddingRight} setBubblePaddingRight={setBubblePaddingRight}
                        bubbleBorderRadius={bubbleBorderRadius} setBubbleBorderRadius={setBubbleBorderRadius}
                        bubbleFullWidth={bubbleFullWidth} setBubbleFullWidth={setBubbleFullWidth}
                        haruEar={haruEar} setHaruEar={setHaruEar}
                        haruExpression={haruExpression} setHaruExpression={setHaruExpression}
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
