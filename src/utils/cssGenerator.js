export const generateCSS = (config) => {
    const {
        character,
        bubbleLineColor,
        bubbleTxtColor,
        bubbleMarginTop,
        bubbleMarginBottom,
        bubbleBorderRadius
    } = config;

    const characterUrls = {
        haru: {
            line: 'https://raw.githubusercontent.com/serafi0620/hiblueming-chat-simple-theme-generator/main/src/img/haru-line.png',
            fill: 'https://raw.githubusercontent.com/serafi0620/hiblueming-chat-simple-theme-generator/main/src/img/haru-fill.png'
        },
        hane: {
            line: 'https://raw.githubusercontent.com/serafi0620/hiblueming-chat-simple-theme-generator/main/src/img/hane-line.png',
            fill: 'https://raw.githubusercontent.com/serafi0620/hiblueming-chat-simple-theme-generator/main/src/img/hane-fill.png'
        },
        ate: {
            line: 'https://raw.githubusercontent.com/serafi0620/hiblueming-chat-simple-theme-generator/main/src/img/ate-line.png',
            fill: 'https://raw.githubusercontent.com/serafi0620/hiblueming-chat-simple-theme-generator/main/src/img/ate-fill.png'
        }
    };

    const currentCharacter = characterUrls[character] || characterUrls.haru;

    return `/******************************** 
    * 변수
    ********************************/
    :root {
    --main-font: 'Gyeombalbal', 'M PLUS Rounded 1c', sans-serif;

    /* 채팅 스타일 1 (홀수) */
    --bubble-bg-color: #FFFFFF;
    --bubble-line-color: ${bubbleLineColor};
    --bubble-txt-color: ${bubbleTxtColor};
    --bubble-margin-top: ${bubbleMarginTop}px;
    --bubble-margin-bottom: ${bubbleMarginBottom}px;
    --bubble-border-radius: ${bubbleBorderRadius}px;

    /* 채팅 디자인 상단/하단 */
    --bubble-design-top-img: url("${currentCharacter.line}");
    --bubble-design-bottom-img: url("${currentCharacter.fill}");
    }

    /******************************** 
    * 일반채팅 
    *********************************/
    .chat_list .text {
    color: var(--bubble-txt-color) !important;
    text-shadow: none !important;
    letter-spacing: 0.5px;
    }

    .chat_list div.chat {
    position: relative !important; 

    margin: var(--bubble-margin-top) 0px var(--bubble-margin-bottom) 10px !important; 
    padding: 20px 25px 20px 25px !important;
    max-width: 100% !important;
    width: 100% !important;
    box-sizing: border-box !important;
    
    word-wrap: break-word !important;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.08) !important;
    background-color: var(--bubble-bg-color) !important;
    border-radius: var(--bubble-border-radius) !important; 
    border: 2px solid var(--bubble-line-color) !important;
}

.chat_list div.chat::after,
.chat_list div.chat::before {
    content: ""; position: absolute; 
    top: -58.7px; 
    right: -48.5px; 
    
    width: 100px; 
    height: 120px;

    background-size: contain; 
    background-repeat: no-repeat; 
    background-position: center;
}

.chat_list div.chat::before {
    z-index: 4;
    background-image: var(--bubble-design-bottom-img); 
}

.chat_list div.chat::after {
    z-index: 5;
    background-color: var(--bubble-line-color) !important;
    -webkit-mask-image: var(--bubble-design-top-img);
    mask-image: var(--bubble-design-top-img);
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
}
`;
};
