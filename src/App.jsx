import React, { useState, useEffect, useRef, useMemo } from 'react';
import { CHAT_DATA } from './constants/chatData';
import { generateCSS } from './utils/cssGenerator';
import EditorPanel from './components/EditorPanel';
import PreviewPanel from './components/PreviewPanel';
import CodePanel from './components/CodePanel';
import bgImage from './img/background.png';

function App() {
    // 스타일 상태 관리
    const [bubbleBgColor, setBubbleBgColor] = useState('#FFEEB3');
    const [bubbleSubColor, setBubbleSubColor] = useState('#4A4342');
    const [bubbleLineColor, setBubbleLineColor] = useState('#534204');
    const [bubbleTxtColor, setBubbleTxtColor] = useState('#534204');
    const [nicknameTxtColor, setNicknameTxtColor] = useState('#ffffff');

    const [bubbleBgColor2, setBubbleBgColor2] = useState('#4A4342');
    const [bubbleSubColor2, setBubbleSubColor2] = useState('#FFEEB3');
    const [bubbleLineColor2, setBubbleLineColor2] = useState('#534204');
    const [bubbleTxtColor2, setBubbleTxtColor2] = useState('#ffffff');
    const [nicknameTxtColor2, setNicknameTxtColor2] = useState('#534204');
    
    // 신규 디자인 요소
    const [bubbleDesignWidth, setBubbleDesignWidth] = useState(12);
    const [bubbleDesignInnerBgColor, setBubbleDesignInnerBgColor] = useState('#FFF084');
    const [bubbleDesignInnerBgColor2, setBubbleDesignInnerBgColor2] = useState('#4A4342');
    const [bubbleDesignCircleSize, setBubbleDesignCircleSize] = useState(25);
    const [bubbleDesignCirclePosition, setBubbleDesignCirclePosition] = useState(-15);
    
    // 디자인 요소 개별 플래그
    const [topStripe, setTopStripe] = useState(true);
    const [topRibbon, setTopRibbon] = useState(true);
    const [bottomClip, setBottomClip] = useState(true);
    const [bottomDuck, setBottomDuck] = useState(true);
    const [bottomButton, setBottomButton] = useState(false);

    const bubbleDesignTopImg = useMemo(() => {
        if (topStripe && topRibbon) return 'https://raw.githubusercontent.com/serafi0620/ate-chat-nano-theme-generator/main/src/img/bubble-design-top-stripe-ribbon.png';
        if (topStripe) return 'https://raw.githubusercontent.com/serafi0620/ate-chat-nano-theme-generator/main/src/img/bubble-design-top-stripe-none.png';
        if (topRibbon) return 'https://raw.githubusercontent.com/serafi0620/ate-chat-nano-theme-generator/main/src/img/bubble-design-top-none-ribbon.png';
        return '';
    }, [topStripe, topRibbon]);

    const bubbleDesignBottomImg = useMemo(() => {
        if (bottomClip && bottomDuck) return 'https://raw.githubusercontent.com/serafi0620/ate-chat-nano-theme-generator/main/src/img/design-bottom-clip-duck.png';
        if (bottomClip && bottomButton) return 'https://raw.githubusercontent.com/serafi0620/ate-chat-nano-theme-generator/main/src/img/bubble-design-bottom-clip-buttom.png';
        if (bottomClip) return 'https://raw.githubusercontent.com/serafi0620/ate-chat-nano-theme-generator/main/src/img/bubble-design-bottom-clip-none.png';
        if (bottomDuck) return 'https://raw.githubusercontent.com/serafi0620/ate-chat-nano-theme-generator/main/src/img/bubble-design-bottom-none-duck.png';
        if (bottomButton) return 'https://raw.githubusercontent.com/serafi0620/ate-chat-nano-theme-generator/main/src/img/bubble-design-bottom-none-button.png';
        return '';
    }, [bottomClip, bottomDuck, bottomButton]);

    const [fullWidthChat, setFullWidthChat] = useState(false);
    const [showNickname, setShowNickname] = useState(false);

    const fontSize = 24; // 텍스트 크기 24px로 고정
    
    const [removeDonationWidth, setRemoveDonationWidth] = useState(false);
    const [alignDonationLeft, setAlignDonationLeft] = useState(true);
    const [showDonationOutline, setShowDonationOutline] = useState(true);
    const [donationBorderBrightness, setDonationBorderBrightness] = useState(0);
    const [donationBorderOpacity, setDonationBorderOpacity] = useState(30);
    const [donationBorderThickness, setDonationBorderThickness] = useState(3);
    const [donationBorderDashGap, setDonationBorderDashGap] = useState(12);

    // 하무 설정 상태
    const [donationHamuEnabled, setDonationHamuEnabled] = useState(true);
    const [useTierSpecificIcons, setUseTierSpecificIcons] = useState(false);
    const [unifiedIconType, setUnifiedIconType] = useState('cheeze');
    const [donationTiers, setDonationTiers] = useState({
        1000: 'cheeze',
        10000: 'cheeze',
        100000: 'cheeze',
        1000000: 'cheeze'
    });
    const [donationHamuPosition, setDonationHamuPosition] = useState('right'); // 'left', 'center', 'right'
    const [donationHamuSize, setDonationHamuSize] = useState(50);
    
    const forceNextDonation = useRef(false);
    const backgroundImageUrl = bgImage;  


    const applyPreset = (type) => {
        if (type === 'default') {
            setBubbleBgColor('#FFEEB3');
            setBubbleSubColor('#4A4342');
            setBubbleLineColor('#534204');
            setBubbleTxtColor('#534204');
            setNicknameTxtColor('#ffffff');

            setBubbleBgColor2('#4A4342');
            setBubbleSubColor2('#FFEEB3');
            setBubbleLineColor2('#534204');
            setBubbleTxtColor2('#ffffff');
            setNicknameTxtColor2('#534204');

            setBubbleDesignWidth(12);
            setBubbleDesignInnerBgColor('#FFF084');
            setBubbleDesignInnerBgColor2('#4A4342');
            setBubbleDesignCircleSize(25);
            setBubbleDesignCirclePosition(-15);
            setTopStripe(true);
            setTopRibbon(true);
            setBottomClip(true);
            setBottomDuck(true);
            setBottomButton(false);
            setShowNickname(true);
        } else if (type === 'newOutfit') {
            setBubbleBgColor('#ffffff');
            setBubbleSubColor('#a4d0f9');
            setBubbleLineColor('#7bb4ea');
            setBubbleTxtColor('#00101f');
            setNicknameTxtColor('#00101f');

            setBubbleBgColor2('#a4d0f9');
            setBubbleSubColor2('#ffffff');
            setBubbleLineColor2('#7bb4ea');
            setBubbleTxtColor2('#00101f');
            setNicknameTxtColor2('#00101f');

            setBubbleDesignWidth(12);
            setBubbleDesignInnerBgColor('#ffffff');
            setBubbleDesignInnerBgColor2('#a4d0f9');
            setBubbleDesignCircleSize(25);
            setBubbleDesignCirclePosition(-15);
            setTopStripe(true);
            setTopRibbon(true);
            setBottomClip(true);
            setBottomDuck(true);
            setBottomButton(false);
            setShowNickname(true);
        }
    };

    const [previewChats, setPreviewChats] = useState([
        { id: 0, text: CHAT_DATA[0], type: 'chat' },
        { id: 1, text: CHAT_DATA[1], type: 'chat' }
    ]);
    const messageIndexRef = useRef(2);
    const idCounterRef = useRef(2);
    const donationThemeCounterRef = useRef(0);
    const isFirstRun = useRef(true);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        
        // 설정 변경 시 4가지 금액대 도네이션을 미리보기에 즉시 주입
        const tiers = ['1,000', '10,000', '100,000', '1,000,000'];
        const themes = ['purple', 'green', 'gold', 'red'];
        
        setPreviewChats(prev => {
            const newDonations = tiers.map((amount, idx) => ({
                id: idCounterRef.current++,
                text: `${amount}원 설정 테스트`,
                type: 'donation',
                amount: amount,
                theme: themes[idx]
            }));
            
            // 기존 채팅 목록 끝에 4개의 도네이션 추가 (최대 12개 유지)
            return [...prev, ...newDonations].slice(-12);
        });
    }, [
        removeDonationWidth,
        alignDonationLeft,
        showDonationOutline,
        donationBorderBrightness,
        donationBorderOpacity,
        donationBorderThickness,
        donationBorderDashGap,
        donationHamuEnabled,
        useTierSpecificIcons,
        unifiedIconType,
        donationTiers,
        donationHamuPosition,
        donationHamuSize
    ]);

    useEffect(() => {
        let timeoutId;
        const addNextMessage = () => {
            setPreviewChats(prev => {
                const isDonation = forceNextDonation.current || (Math.random() < 0.15 && prev[prev.length - 1]?.type !== 'donation');
                
                if (forceNextDonation.current) {
                    forceNextDonation.current = false;
                }

                const randomAmount = ['1,000', '5,000', '10,000', '50,000', '100,000', '1,000,000'][Math.floor(Math.random() * 6)];
                
                // 금액에 따른 테마 매핑
                let theme = 'purple';
                if (randomAmount === '1,000') theme = 'purple';
                else if (randomAmount === '5,000' || randomAmount === '10,000') theme = 'green';
                else if (randomAmount === '50,000' || randomAmount === '100,000') theme = 'gold';
                else if (randomAmount === '1,000,000') theme = 'red';

                const nextChats = [
                    ...prev, 
                    { 
                        id: idCounterRef.current++, 
                        text: CHAT_DATA[messageIndexRef.current],
                        type: isDonation ? 'donation' : 'chat',
                        amount: randomAmount,
                        theme: isDonation ? theme : null
                    }
                ];
                return nextChats.slice(-12);
            });
            
            messageIndexRef.current = (messageIndexRef.current + 1) % CHAT_DATA.length;
            const randomDelay = 200 + Math.random() * 600;
            timeoutId = setTimeout(addNextMessage, randomDelay);
        };

        timeoutId = setTimeout(addNextMessage, 500);
        return () => clearTimeout(timeoutId);
    }, []);

    const hamuUrls = {
        cheeze: 'https://raw.githubusercontent.com/serafi0620/hane-chat-theme-generator/main/src/img/cheeze.png',
        heart: 'https://raw.githubusercontent.com/serafi0620/hane-chat-theme-generator/main/src/img/heart.png',
        'cheeze-orange': 'https://raw.githubusercontent.com/serafi0620/hane-chat-theme-generator/main/src/img/cheeze-orange.png',
        'cheeze-pink': 'https://raw.githubusercontent.com/serafi0620/hane-chat-theme-generator/main/src/img/cheeze-pink.png',
        'cheeze-rainbow': 'https://raw.githubusercontent.com/serafi0620/hane-chat-theme-generator/main/src/img/cheeze-rainbow.png',
        mandu: 'https://raw.githubusercontent.com/serafi0620/hane-chat-theme-generator/main/src/img/mandu.png',
        ddalgi: 'https://raw.githubusercontent.com/serafi0620/hane-chat-theme-generator/main/src/img/ddalgi.png'
    };

    const config = {
        bubbleBgColor,
        bubbleSubColor,
        bubbleLineColor,
        bubbleTxtColor,
        nicknameTxtColor,
        bubbleBgColor2,
        bubbleSubColor2,
        bubbleLineColor2,
        bubbleTxtColor2,
        nicknameTxtColor2,
        bubbleDesignWidth,
        bubbleDesignInnerBgColor,
        bubbleDesignInnerBgColor2,
        bubbleDesignCircleSize,
        bubbleDesignCirclePosition,
        bubbleDesignTopImg,
        bubbleDesignBottomImg,
        fullWidthChat,
        showNickname,
        removeDonationWidth,
        alignDonationLeft,
        showDonationOutline,
        donationBorderBrightness,
        donationBorderOpacity,
        donationBorderThickness,
        donationBorderDashGap,
        donationHamuEnabled,
        donationHamuPosition,
        donationHamuSize: donationHamuEnabled ? donationHamuSize : 0,
        donationTiers,
        useTierSpecificIcons,
        unifiedIconType,
        hamuUrls
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
                .chat_list .chat_box:not(.chat) .donation_box::after {
                    top: ${donationBorderThickness * 2}px !important; 
                    left: ${donationBorderThickness * 2}px !important; 
                    right: ${donationBorderThickness * 2}px !important; 
                    bottom: ${donationBorderThickness * 2}px !important;
                }
            `}} />

            <div className="text-center space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight flex items-center justify-center gap-3">
                    <span className="text-amber-400">✨</span> CUSTOM
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Panel */}
                <div className="lg:col-span-3 space-y-4">
                    <EditorPanel 
                        {...config}
                        topStripe={topStripe} setTopStripe={setTopStripe}
                        topRibbon={topRibbon} setTopRibbon={setTopRibbon}
                        bottomClip={bottomClip} setBottomClip={setBottomClip}
                        bottomDuck={bottomDuck} setBottomDuck={setBottomDuck}
                        bottomButton={bottomButton} setBottomButton={setBottomButton}
                        setBubbleBgColor={setBubbleBgColor}
                        setBubbleSubColor={setBubbleSubColor}
                        setBubbleLineColor={setBubbleLineColor}
                        setBubbleTxtColor={setBubbleTxtColor}
                        setNicknameTxtColor={setNicknameTxtColor}
                        setBubbleBgColor2={setBubbleBgColor2}
                        setBubbleSubColor2={setBubbleSubColor2}
                        setBubbleLineColor2={setBubbleLineColor2}
                        setBubbleTxtColor2={setBubbleTxtColor2}
                        setNicknameTxtColor2={setNicknameTxtColor2}
                        setBubbleDesignWidth={setBubbleDesignWidth}
                        setBubbleDesignInnerBgColor={setBubbleDesignInnerBgColor}
                        setBubbleDesignInnerBgColor2={setBubbleDesignInnerBgColor2}
                        setBubbleDesignCircleSize={setBubbleDesignCircleSize}
                        setBubbleDesignCirclePosition={setBubbleDesignCirclePosition}
                        setFullWidthChat={setFullWidthChat}
                        setShowNickname={setShowNickname}
                        setDonationHamuEnabled={setDonationHamuEnabled}
                        setUseTierSpecificIcons={setUseTierSpecificIcons}
                        setUnifiedIconType={setUnifiedIconType}
                        setDonationTiers={setDonationTiers}
                        actualHamuSize={donationHamuSize}
                        setDonationHamuSize={setDonationHamuSize}
                        setDonationHamuPosition={setDonationHamuPosition}
                        setRemoveDonationWidth={setRemoveDonationWidth}
                        setAlignDonationLeft={setAlignDonationLeft}
                        setShowDonationOutline={setShowDonationOutline}
                        setDonationBorderBrightness={setDonationBorderBrightness}
                        setDonationBorderOpacity={setDonationBorderOpacity}
                        setDonationBorderThickness={setDonationBorderThickness}
                        setDonationBorderDashGap={setDonationBorderDashGap}
                        applyPreset={applyPreset}
                        forceNextDonation={forceNextDonation}
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
