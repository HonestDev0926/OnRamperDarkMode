import React from 'react';
interface HelpViewProps {
    buttonText?: string;
    maxHeight?: string;
    fixedHeight?: boolean;
    onActionClick?: () => Promise<boolean>;
    error?: string;
    dismissAfterClick?: boolean;
}
declare const HelpView: React.FC<HelpViewProps>;
export default HelpView;
