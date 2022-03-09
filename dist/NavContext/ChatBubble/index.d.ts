import React from 'react';
interface ChatBubbleType {
    intro?: boolean;
    isChatOpen: boolean;
    onActionChatClick: () => void;
    isBubbleActive?: boolean;
}
export declare const ChatBubble: React.FC<ChatBubbleType>;
export default ChatBubble;
