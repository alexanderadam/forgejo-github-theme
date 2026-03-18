import { css, otherThemeVars, themeVars } from "src/types/vars";

// 提交列表
export const commit = css`
  .page-content.repository {
    // 提交列表 (选择器保证同等优先级覆盖了 gitea 原生的样式)
    #commits-table.ui.basic.striped.table tbody.commit-list {
      // 作者
      .author {
        img.ui.avatar {
          border-radius: 9999px;
        }
        // 作者名称
        .author-wrapper {
          color: ${themeVars.color.text.light.num1};
        }
      }
      // SHA plain text
      td.sha a.sha.label {
        background: none !important;
        border: none !important;
        box-shadow: none !important;
        padding: 0;
        height: auto;
        margin: 0;
      }
      // compact rows
      tr td {
        padding-top: 6px !important;
        padding-bottom: 6px !important;
      }
      // action buttons hover only
      td.tw-py-0 .btn.interact-bg,
      td.text.right .btn.interact-bg {
        opacity: 0;
        transition: opacity 0.1s;
      }
      tr:hover td.tw-py-0 .btn.interact-bg,
      tr:hover td.text.right .btn.interact-bg {
        opacity: 1;
      }
      // 提交信息
      .message {
        // tag 标签
        a.ui.basic.primary.label {
          border-radius: 9999px;
          border-width: 1.5px;
          padding: 3px 8px !important;
        }
      }
      // 提交信息右侧
      .tw-text-right {
        relative-time,
        svg {
          color: ${themeVars.color.text.light.num1};
        }
      }
      tr {
        // 整行悬停色
        &:hover {
          background-color: ${themeVars.color.hover.opaque};
        }
        // 偶数行悬停色
        &:nth-child(2n):hover {
          background-color: ${themeVars.color.hover.opaque} !important;
        }
        // 尾行圆角
        &:last-child {
          td:first-child {
            border-bottom-left-radius: ${otherThemeVars.border.radius};
          }
          td:last-child {
            border-bottom-right-radius: ${otherThemeVars.border.radius};
          }
        }
      }
    }
  }
`;

export const commitStatus = css`
  .flex-text-inline[data-global-init="initCommitStatuses"] {
    padding: 3px;
    margin-top: 2px;
    border-radius: ${otherThemeVars.border.radius};
    &:hover {
      background-color: ${themeVars.github.control.transparent.bgColor.hover};
    }
    svg {
      width: 16px;
      height: 16px;
      min-width: 16px;
      min-height: 16px;
    }
  }
`;

// commit age coloring
export const commitAge = css`
  .github-theme-commit {
    &[data-age="0"] {
      border-left: 3px solid ${themeVars.github.fgColor.success};
    }
    &[data-age="1"] {
      border-left: 3px solid ${themeVars.github.fgColor.accent};
    }
    &[data-age="2"] {
      border-left: 3px solid ${themeVars.color.text.light.num1};
    }
  }
`;

// 提交图
export const commitGraph = css`
  .page-content.repository #git-graph-container {
    img.ui.avatar {
      border-radius: 9999px;
    }
    // 提交图的 SHA 标签
    li .ui.label.commit-id-short {
      height: 25px;
      // 验证提交 SHA 标签
      &.commit-is-signed {
        span.ui.label.commit-is-signed {
          height: 25px;
        }
      }
    }
  }
`;
