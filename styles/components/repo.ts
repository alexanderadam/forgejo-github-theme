import { css, otherThemeVars, themeVars } from "src/types/vars";

// repo header info
export const repoHeader = css`
  .page-content.repository .repo-header {
    // Watch/Star/Fork buttons
    .ui.compact.button {
      padding: 3px 12px;
      font-size: 12px;
      height: 28px;
      line-height: 20px;
    }
    // counter badges on Watch/Star/Fork
    .ui.labeled.button > .ui.label {
      font-size: 12px;
      font-weight: 600;
      padding: 3px 8px;
      min-width: 28px;
      text-align: center;
      height: 28px;
      line-height: 20px;
    }
    // all button groups same height
    .flex-item-trailing {
      align-items: center;
      // move Star to the right via order
      > .ui.labeled.button:has(.basic.button[href*="star"]),
      > .ui.labeled.button:has(button[formaction*="star"]) {
        order: 10;
      }
    }
    // clone URL input
    .repo-clone-url {
      height: 28px;
    }
    // repo name
    .flex-item {
      .flex-item-title {
        // separator color
        color: ${themeVars.color.text.light.num1};
        // repo name links
        a {
          display: flex;
          align-items: center;
          color: ${themeVars.color.text.self};
          font-size: 18px;
          text-decoration: none !important;
          min-width: 3ch;
          padding: 0px 6px;
          border-radius: ${otherThemeVars.border.radius};
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          &:hover {
            background: ${themeVars.github.control.transparent.bgColor.hover};
          }
          &.muted:not(.tw-font-normal) {
            font-weight: 600;
          }
        }
      }
      a:not(.label, .button):hover {
        color: ${themeVars.color.text.self} !important;
      }
    }
    // mirror URL - hide sensitive tokens in display
    .flex-item-body a[href*="x-access-token"],
    .flex-item-body a[href*="oauth2:"] {
      word-break: break-all;
      font-size: 12px;
    }
  }
`;

// hide summary bar on code page (GitHub doesn't have one)
export const hideSummaryBar = css`
  .page-content.repository.file.list > .ui.container > .repository-summary {
    display: none;
  }
`;

// 顶部提交, 标签, 分支统计 (other pages like commits still show it)
export const repoMenu = css`
  .page-content.repository {
    .repository-summary .repository-menu {
      background-color: transparent;
      border: none;
      .item {
        color: ${themeVars.color.text.light.num1};
        height: 31px; // 文件列表下与右侧输入框对齐
        b {
          color: ${themeVars.color.text.self};
          margin: 0 2px;
        }
        &.active {
          background-color: ${themeVars.color.active};
          color: ${themeVars.color.text.self};
          font-weight: 500;
          svg {
            color: ${themeVars.color.text.light.num1};
          }
        }
      }
    }
  }
`;

export const repoTopic = css`
  // 理应只能覆盖探索/组织/用户下仓库的 topic 标签
  // 避免渲染到仓库的类型标签
  .flex-item-main > .label-list .ui.label,
  // 仓库文件列表下的 topic 标签
  #repo-topics .ui.label.repo-topic {
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 500;
    padding: 0px 10px;
    line-height: 22px;
    background-color: ${themeVars.github.bgColor.accent.muted};
    color: ${themeVars.github.fgColor.accent};
    &:hover {
      background-color: ${themeVars.github.bgColor.accent.emphasis};
      color: ${themeVars.color.white};
    }
  }
`;

// 仓库动态页面关闭工单状态条颜色
export const closedIssueTableCell = css`
  .stats-table .table-cell.tw-bg-red[href="#closed-issues"] {
    background-color: ${themeVars.color.purple.self} !important;
  }
`;
