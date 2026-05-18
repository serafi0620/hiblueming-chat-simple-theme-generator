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
    --bubble-bg-color: #FFFFFF;
    --bubble-sub-color: #FFFFFF;
    --bubble-line-color: #391010;;
    --bubble-txt-color: #000000;
    --bubble-name-font-color: #FFFFFF;
    --bubble-inner-bg-color: #FFFFFF;



    /* 채팅 디자인 상단/하단 */
    --bubble-design-top-img: url("https://raw.githubusercontent.com/serafi0620/hiblueming-chat-simple-theme-generator/main/src/img/haru-line.png");
    --bubble-design-bottom-img: url("https://raw.githubusercontent.com/serafi0620/hiblueming-chat-simple-theme-generator/main/src/img/haru-fill.png");
    --bubble-design-height: 80px;

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

.chat_list div.chat {
    position: relative !important; 
    margin: 20px 0px 20px 10px !important; 

    padding: 15px 25px 15px 25px !important;
    max-width: 100% !important;
    width: 100% !important;
    word-wrap: break-word !important;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.08) !important;
    background-color: var(--bubble-bg-color) !important;
    border-radius: 18px !important; 
    border: 2px solid var(--bubble-line-color) !important;
}

.chat_list div.chat::after,
.chat_list div.chat::before {
    content: ""; position: absolute; 
    top: -58.7px; 
    right: -48.5px; 
    z-index: 5;   

    width: 100px; 
    height: 100px;

    background-size: contain; 
    background-repeat: no-repeat; 
    background-position: center;
}

.chat_list div.chat::after {
    background-image: var(--bubble-design-top-img); 
}
.chat_list div.chat::before {
    background-image: var(--bubble-design-bottom-img); 
}


.chat_list div.chat .name {
    display: ${showNickname ? 'flex' : 'none'} !important;
    position: absolute !important; top: 0 !important; left: 50% !important; transform: translate(-50%, -50%) !important;
    background: var(--bubble-sub-color) !important; color: var(--bubble-name-font-color) !important;
    padding: 2px 20px !important; border-radius: 20px !important;
    font-size: var(--bubble-name-font-size) !important; font-weight: bold !important; white-space: nowrap !important; z-index: 10 !important;
    border: 2px solid var(--bubble-line-color) !important; align-items: center !important; gap: 4px !important; margin: 0 !important;
}

`;
};
