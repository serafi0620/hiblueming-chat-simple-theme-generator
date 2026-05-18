export const generateCSS = (config) => {
    const {
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
        donationHamuEnabled = true,
        donationHamuPosition = 'right',
        donationHamuSize = 50,
        donationTiers = {},
        useTierSpecificIcons = false,
        unifiedIconType = 'cheeze',
        hamuUrls = {}
    } = config;

    return `/******************************** 
* 변수
********************************/
:root {
    --main-font: 'Gyeombalbal', 'M PLUS Rounded 1c', sans-serif;
    
    /* 채팅 스타일 1 (홀수) */
    --bubble-bg-color: ${bubbleBgColor};
    --bubble-sub-color: ${bubbleSubColor};
    --bubble-line-color: ${bubbleLineColor};
    --bubble-txt-color: ${bubbleTxtColor};
    --bubble-name-font-color: ${nicknameTxtColor};
    --bubble-inner-bg-color: ${bubbleDesignInnerBgColor};

    /* 채팅 스타일 2 (짝수) */
    --bubble-bg-color-2: ${bubbleBgColor2};
    --bubble-sub-color-2: ${bubbleSubColor2};
    --bubble-line-color-2: ${bubbleLineColor2};
    --bubble-txt-color-2: ${bubbleTxtColor2};
    --bubble-name-font-color-2: ${nicknameTxtColor2};
    --bubble-inner-bg-color-2: ${bubbleDesignInnerBgColor2};

    --bubble-design-width: ${bubbleDesignWidth}px;
    --bubble-design-circle-size: ${bubbleDesignCircleSize}px;
    --bubble-design-circle-position: ${bubbleDesignCirclePosition}px;

    /* 채팅 디자인 상단/하단 */
    --bubble-design-top-img: url("${bubbleDesignTopImg}");
    --bubble-design-bottom-img: url("${bubbleDesignBottomImg}");
    --bubble-design-height: 60px;

    /* 채팅 닉네임 */
    --bubble-name-font-size: 18px;
    
    --inner-padding-side: calc(var(--bubble-design-circle-size) + var(--bubble-design-circle-position) + var(--bubble-design-width) + 10px);
}

/******************************** 
 * 일반채팅 
*********************************/
.chat_list .text {
    color: var(--bubble-txt-color) !important;
    text-shadow: none !important;
    letter-spacing: 0.5px;
}

.chat_list .chat_box:nth-child(even) .text {
    color: var(--bubble-txt-color-2) !important;
}

.chat_list div.chat {
    position: relative !important; 
    margin: calc(30px + ${showNickname ? '10' : '0'}px) 0px 20px 10px !important; 
    padding: calc(20px + ${showNickname ? '10' : '0'}px) calc(var(--inner-padding-side) + 20px) 15px calc(var(--inner-padding-side) + 10px) !important;
    max-width: ${fullWidthChat ? '100%' : '90%'} !important;
    width: ${fullWidthChat ? '100%' : 'max-content'} !important;
    word-wrap: break-word !important;
    box-shadow: 0 0 0 3px var(--bubble-bg-color), 2px 4px 5px rgba(0, 0, 0, 0.08) !important;
    background-color: var(--bubble-bg-color) !important;
    border-radius: 18px !important; 
    border: 4px solid var(--bubble-sub-color) !important;

    background: 
        radial-gradient(circle at calc(var(--bubble-design-circle-position) + var(--bubble-design-width)) 50%, var(--bubble-sub-color) var(--bubble-design-circle-size), transparent 21px),
        radial-gradient(circle at calc(100% - var(--bubble-design-width) - var(--bubble-design-circle-position)) 50%, var(--bubble-sub-color) var(--bubble-design-circle-size), transparent 21px),
        linear-gradient(to right, var(--bubble-sub-color) var(--bubble-design-width), var(--bubble-inner-bg-color) var(--bubble-design-width), var(--bubble-inner-bg-color) calc(100% - var(--bubble-design-width)), var(--bubble-sub-color) calc(100% - var(--bubble-design-width))) !important;
}

/* 짝수 번째 채팅 스타일 (스타일 세트 2) */
.chat_list .chat_box:nth-child(even) div.chat {
    box-shadow: 0 0 0 3px var(--bubble-bg-color-2), 2px 4px 5px rgba(0, 0, 0, 0.08) !important;
    background-color: var(--bubble-bg-color-2) !important;
    border: 4px solid var(--bubble-sub-color-2) !important;

    background: 
        radial-gradient(circle at calc(var(--bubble-design-circle-position) + var(--bubble-design-width)) 50%, var(--bubble-sub-color-2) var(--bubble-design-circle-size), transparent 21px),
        radial-gradient(circle at calc(100% - var(--bubble-design-width) - var(--bubble-design-circle-position)) 50%, var(--bubble-sub-color-2) var(--bubble-design-circle-size), transparent 21px),
        linear-gradient(to right, var(--bubble-sub-color-2) var(--bubble-design-width), var(--bubble-inner-bg-color-2) var(--bubble-design-width), var(--bubble-inner-bg-color-2) calc(100% - var(--bubble-design-width)), var(--bubble-sub-color-2) calc(100% - var(--bubble-design-width))) !important;
}

.chat_list div.chat .name .id { display: none !important; }
.chat_list div.chat .text { margin: 0 !important; padding: 0 !important; display: block !important; position: static !important; }

.chat_list div.chat::after {
    content: ""; position: absolute; top: -11px; right: -12px; z-index: 5;   
    width: calc(var(--bubble-design-height) * 2); height: var(--bubble-design-height);
    background-image: var(--bubble-design-top-img); background-size: contain; background-repeat: no-repeat; background-position: center;
}

.chat_list div.chat::before {
    content: ""; position: absolute; bottom: -17px; right: -25px; z-index: 5;   
    width: calc(var(--bubble-design-height) * 2); height: var(--bubble-design-height);
    background-image: var(--bubble-design-bottom-img); background-size: contain; background-repeat: no-repeat; background-position: center;
}

.chat_list div.chat .name {
    display: ${showNickname ? 'flex' : 'none'} !important;
    position: absolute !important; top: 0 !important; left: 50% !important; transform: translate(-50%, -50%) !important;
    background: var(--bubble-sub-color) !important; color: var(--bubble-name-font-color) !important;
    padding: 2px 20px !important; border-radius: 20px !important;
    font-size: var(--bubble-name-font-size) !important; font-weight: bold !important; white-space: nowrap !important; z-index: 10 !important;
    border: 2px solid var(--bubble-line-color) !important; align-items: center !important; gap: 4px !important; margin: 0 !important;
}

.chat_list .chat_box:nth-child(even) div.chat .name {
    background: var(--bubble-sub-color-2) !important; color: var(--bubble-name-font-color-2) !important;
    border: 2px solid var(--bubble-line-color-2) !important;
}
`;
};
