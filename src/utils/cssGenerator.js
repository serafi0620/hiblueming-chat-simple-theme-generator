export const generateCSS = (config) => {
    const {
        character,
        bubbleLineColor,
        bubbleTxtColor,
        bubbleMarginTop,
        bubblePaddingY,
        bubblePaddingLeft,
        bubblePaddingRight,
        bubbleBorderRadius,
        bubbleFullWidth=10,
        donationFullWidth,
        donationAlignLeft,
        haruEar,
        haruExpression
    } = config;

    const getCharacterUrls = () => {
        if (character === 'haru') {
            return {
                line: `https://raw.githubusercontent.com/serafi0620/hiblueming-chat-simple-theme-generator/main/src/img/haru-line-${haruEar}-${haruExpression}.png`,
                fill: `https://raw.githubusercontent.com/serafi0620/hiblueming-chat-simple-theme-generator/main/src/img/haru-fill-${haruEar}.png`
            };
        }
        
        const characterUrls = {
            hane: {
                line: 'https://raw.githubusercontent.com/serafi0620/hiblueming-chat-simple-theme-generator/main/src/img/hane-line.png',
                fill: 'https://raw.githubusercontent.com/serafi0620/hiblueming-chat-simple-theme-generator/main/src/img/hane-fill.png'
            },
            ate: {
                line: 'https://raw.githubusercontent.com/serafi0620/hiblueming-chat-simple-theme-generator/main/src/img/ate-line.png',
                fill: 'https://raw.githubusercontent.com/serafi0620/hiblueming-chat-simple-theme-generator/main/src/img/ate-fill.png'
            }
        };
        return characterUrls[character] || characterUrls.hane; // Default to hane if haru is not handled here
    };

    const currentCharacter = getCharacterUrls();

    return `/******************************** 
* 변수
********************************/
:root {
    --main-font: 'Gyeombalbal', 'M PLUS Rounded 1c', sans-serif;

    /* 채팅 스타일 */
    --bubble-bg-color: #FFFFFF;
    --bubble-line-color: ${bubbleLineColor};
    --bubble-txt-color: ${bubbleTxtColor};
    --bubble-margin-top: ${bubbleMarginTop}px;
    --bubble-margin-bottom: 20px;
    --bubble-padding-y: ${bubblePaddingY}px;
    --bubble-padding-left: ${bubblePaddingLeft}px;
    --bubble-padding-right: ${bubblePaddingRight}px;
    --bubble-border-radius: ${bubbleBorderRadius}px;

    /* 채팅 디자인 */
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
    ${bubbleFullWidth ? 'display: block !important;' : ''}

    margin: var(--bubble-margin-top) 0px 10px 10px !important; 
    padding: var(--bubble-padding-y) var(--bubble-padding-right) var(--bubble-padding-y) var(--bubble-padding-left) !important;
    max-width: calc(100% - 50px) !important;
    min-width: 150px !important;
    ${bubbleFullWidth ? '' : 'width: fit-content !important;'}
    box-sizing: border-box !important;
    
    word-wrap: break-word !important;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.08) !important;
    background-color: var(--bubble-bg-color) !important;
    border-radius: var(--bubble-border-radius) !important; 
    border: 2.5px solid var(--bubble-line-color) !important;
}

/******************************** 
* 도네이션
*********************************/
.chat_list .chat_box:not(.chat) {
    ${donationFullWidth ? 'max-width: 100% !important;\n    width: 100% !important;' : ''}
    margin: 20px 5px 20px 5px !important;
    justify-self: ${donationAlignLeft ? 'left' : 'center'} !important;
    position: relative !important;
}

.chat_list .chat_box:not(.chat) .donation_box {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 250px !important;
    box-sizing: border-box !important;
    margin: 0 !important;
    position: relative !important;
}

/******************************** 
* 팬키릭터
*********************************/
.chat_list div.chat::after,
.chat_list div.chat::before {
    content: ""; position: absolute; 
    top: -59px; 
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
