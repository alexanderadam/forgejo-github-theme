import { css } from "src/types/vars";

export const body = css`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans",
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 14px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  a {
    text-underline-offset: 0.2rem;
  }
  // monospace font stack matching GitHub
  code,
  pre,
  .mono,
  tt,
  kbd,
  samp {
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas,
      "Liberation Mono", monospace;
  }
  // default code blocks
  code:not(.code-inner) {
    padding: 0.2em 0.4em;
    font-size: 85%;
  }
  // smooth scrolling
  html {
    scroll-behavior: smooth;
  }
  // heading sizes matching GitHub
  h1 {
    font-size: 2em;
    font-weight: 600;
  }
  h2 {
    font-size: 1.5em;
    font-weight: 600;
  }
  h3 {
    font-size: 1.25em;
    font-weight: 600;
  }
  h4 {
    font-size: 1em;
    font-weight: 600;
  }
  // selection color
  ::selection {
    background-color: var(--color-primary-alpha-20, rgba(9, 105, 218, 0.15));
  }
  // focus ring for accessibility
  :focus-visible {
    outline: 2px solid var(--color-primary-self);
    outline-offset: -2px;
    border-radius: 6px;
  }
  // print styles
  @media print {
    #navbar,
    .page-footer,
    .repo-button-row,
    .repo-header .flex-item-trailing {
      display: none !important;
    }
    body {
      font-size: 12px;
    }
  }
`;
