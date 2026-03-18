import { css, themeVars } from "src/types/vars";

export const heatmap = css`
  #user-heatmap {
    + .divider:not(.divider-text) {
      border-color: #0000;
      margin: 8px 0px;
    }
    .total-contributions {
      left: 25px + 20px;
      bottom: 0 + 12px;
      font-size: 16px;
    }
    .total-contributions,
    .vch__legend-right {
      color: ${themeVars.color.text.light.num1};
    }
    .vch__container {
      padding: 8px 0px;
      border: 1px solid ${themeVars.color.light.border};
      border-radius: 6px 6px 0 0;
      // month and day labels
      text {
        font-size: 12px;
      }
      // 覆盖热力图和图例的背景色
      .vch__day__square,
      .vch__legend__wrapper rect {
        // 圆角
        rx: 2px;
        ry: 2px;
        border-radius: 2px;
        // 宽度和高度
        width: 11px;
        height: 11px;
        // 边框
        outline: 0.5px solid ${themeVars.github.contribution.default.borderColor.num0};
        // 边框向内偏移
        outline-offset: -0.5px;

        &[style="fill: var(--color-secondary-alpha-60);"] {
          fill: ${themeVars.github.contribution.default.bgColor.num0} !important;
        }

        &[style="fill: var(--color-primary-light-4);"] {
          fill: ${themeVars.github.contribution.default.bgColor.num1} !important;
          outline-color: ${themeVars.github.contribution.default.borderColor.num1};
        }

        &[style="fill: var(--color-primary-light-2);"] {
          fill: ${themeVars.github.contribution.default.bgColor.num2} !important;
          outline-color: ${themeVars.github.contribution.default.borderColor.num2};
        }

        &[style="fill: var(--color-primary);"] {
          fill: ${themeVars.github.contribution.default.bgColor.num3} !important;
          outline-color: ${themeVars.github.contribution.default.borderColor.num3};
        }

        &[style="fill: var(--color-primary-dark-2);"] {
          fill: ${themeVars.github.contribution.default.bgColor.num4} !important;
          outline-color: ${themeVars.github.contribution.default.borderColor.num4};
        }

        &[style="fill: var(--color-primary-dark-4);"] {
          fill: ${themeVars.github.contribution.default.bgColor.num5} !important;
          outline-color: ${themeVars.github.contribution.default.borderColor.num5};
        }
      }
    }
  }
`;

// 动态
export const activity = css`
  .activity-heatmap-container + .divider:not(.divider-text) {
    border-color: #0000;
  }
  .flex-list#activity-feed {
    border-radius: 6px;
    border: 1px solid ${themeVars.color.light.border};
    > .flex-item {
      gap: 12px;
      padding: 16px;
      > .flex-item-leading {
        img {
          width: 32px;
          height: 32px;
          border-radius: 9999px;
        }
        // leading icon color
        svg {
          color: ${themeVars.color.text.light.num1};
        }
      }
      // 动态的主要内容
      > .flex-item-main {
        gap: 8px !important;
        font-size: 14px;
        // 动态的标题
        > div:not([class]) {
          display: flex;
          align-items: baseline;
          gap: 6px;
          flex-wrap: wrap;
          font-size: 16px;
          color: ${themeVars.color.text.light.num1};
          > a {
            color: ${themeVars.color.text.self};
            // 不匹配作者
            &:not([title]) {
              // 尽量只选中仓库名, 不匹配标签和分支
              &:not([href*="tag"]):not([href*="branch"]) {
                color: ${themeVars.color.primary.self};
                text-decoration: underline;
              }
            }
          }
          relative-time {
            color: ${themeVars.color.text.light.num1};
            font-size: 12px;
          }
        }
        // 动态的描述
        > .tw-flex-col {
          gap: 0px !important;
          > .flex-text-block {
            gap: 4px;
            font-size: 12px;
            color: ${themeVars.color.text.light.num1};
            img {
              width: 16px;
              height: 16px;
              border-radius: 9999px;
            }
            .ui.sha.label {
              margin-top: 0;
            }
          }
        }
        > .flex-item-body {
          gap: 4px;
          font-size: 12px;
          color: ${themeVars.color.text.light.num1};
        }
        > a {
          font-size: 12px;
        }
      }
      // 动态的右侧 svg 图标
      .flex-item-trailing {
        align-self: center;
        color: ${themeVars.color.text.light.num1};
        svg {
          height: 16px;
          width: 16px;
        }
      }
    }
    > .page.buttons {
      border-top: 1px solid ${themeVars.color.light.border};
      padding: 12px 0px;
    }
  }
  // gitea-unlock icon muted
  .flex-list#activity-feed .gitea-unlock,
  .flex-list#activity-feed svg.gitea-unlock,
  .flex-list#activity-feed .svg.gitea-unlock {
    color: ${themeVars.color.text.light.num1} !important;
    opacity: 0.6;
  }
`;
