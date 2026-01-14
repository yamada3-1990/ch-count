
export interface CountOptions {
  includeNewlines: boolean;
}

export interface ParagraphData {
  id: number;
  content: string;
  count: number;
}

/**
 * Counts characters based on options.
 * Spaces are always counted.
 * Newlines are counted if includeNewlines is true.
 */
export const countCharacters = (text: string, options: CountOptions): number => {
  if (options.includeNewlines) {
    return text.length;
  }
  // Remove newlines (CR, LF, CRLF)
  // We replace them with empty string to not count them
  return text.replace(/(\r\n|\n|\r)/gm, "").length;
};

/**
 * Splits text into paragraphs and provides counts for each.
 * Paragraphs are defined as lines separated by newlines.
 * Empty lines are typically distinguished or ignored. user said "lines separated by newlines".
 * We will include empty lines but they will have 0 count.
 */
export const analyzeParagraphs = (text: string, options: CountOptions): ParagraphData[] => {
  // Split by newline
  const lines = text.split(/\r\n|\n|\r/);
  
  return lines.map((line, index) => ({
    id: index,
    content: line,
    count: countCharacters(line, options) // Logic re-used: per paragraph, usually standard char count
  }));
};
