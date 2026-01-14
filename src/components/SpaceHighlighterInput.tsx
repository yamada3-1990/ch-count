
import React, { useRef } from 'react';
import './SpaceHighlighterInput.css';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export const SpaceHighlighterInput: React.FC<Props> = ({ value, onChange }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);

    // Sync scroll positions
    const handleScroll = () => {
        if (textareaRef.current && backdropRef.current) {
            backdropRef.current.scrollTop = textareaRef.current.scrollTop;
            backdropRef.current.scrollLeft = textareaRef.current.scrollLeft;
        }
    };

    // Render text with highlighted spaces
    const renderBackdrop = () => {
        // split leaves ' ' out.
        // We want to reconstruct exactly.
        // Map approach:
        const segments = value.split(/ /g);
        return segments.map((seg, i) => (
            <React.Fragment key={i}>
                {seg}
                {i < segments.length - 1 && <span className="space-highlight"> </span>}
            </React.Fragment>
        ));
    };

    return (
        <div className="input-container">
            <div className="backdrop" ref={backdropRef} aria-hidden="true">
                {renderBackdrop()}
                <br /> {/* Extra br to ensure height matches if text ends strictly */}
            </div>
            <textarea
                ref={textareaRef}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onScroll={handleScroll}
                placeholder="Type or paste your text here..."
                spellCheck={false}
            />
        </div>
    );
};
