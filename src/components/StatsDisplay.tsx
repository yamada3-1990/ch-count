
import React from 'react';
import { type CountOptions, countCharacters, analyzeParagraphs } from '../utils/counter';
import './StatsDisplay.css';

interface Props {
    text: string;
    options: CountOptions;
    setOptions: (opts: CountOptions) => void;
}

export const StatsDisplay: React.FC<Props> = ({ text, options, setOptions }) => {
    const totalCount = countCharacters(text, options);
    const paragraphData = analyzeParagraphs(text, options);

    // Filter to show only non-empty paragraphs if there are too many?
    // Or just show all. Let's filter out completely empty lines for the DISPLAY list to reduce noise,
    // but the count logic (analyzeParagraphs) currently returns everything.
    // Actually, user might want to know empty lines exist.
    // We'll show distinct visual for empty lines.
    const visibleParagraphs = paragraphData;//.filter(p => p.content.trim().length > 0 || p.count > 0);

    return (
        <div className="stats-container">
            <div className="total-count-card">
                <h2>{totalCount}</h2>
                <p>Total Characters</p>
                <label>
                    <input
                        type="checkbox"
                        checked={options.includeNewlines}
                        onChange={(e) => setOptions({ ...options, includeNewlines: e.target.checked })}
                    />
                    Include Newlines
                </label>
            </div>

            <div className="paragraphs-list">
                <h3>Paragraphs ({visibleParagraphs.length})</h3>
                <div className="scroll-area">
                    {visibleParagraphs.length === 0 ? (
                        <p style={{ padding: 12, color: '#94a3b8' }}>Type something...</p>
                    ) : (
                        visibleParagraphs.map((p) => (
                            <div key={p.id} className="paragraph-item">
                                <span className="p-count">{p.count}</span>
                                <span className="p-preview">
                                    {p.content.length === 0 ? <em>(Empty Line)</em> : p.content}
                                </span>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
