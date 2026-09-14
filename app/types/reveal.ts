/**
 * One declared line of a display headline.
 *
 * Lines are declared rather than measured: auto-splitting a heading means
 * reading layout after paint and rewriting the DOM, which fights SSR and
 * re-breaks on every resize. Declaring them also puts the line breaks under
 * editorial control, which is where they belong in a display setting.
 */
export interface RevealLine {
  text: string;
  italic?: boolean;
}
