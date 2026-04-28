import { fallbackVar } from "src/functions";
import { css, customThemeVars, otherThemeVars, themeVars } from "src/types/vars";

const userRepoVar = fallbackVar(customThemeVars.userRepolistColumns, "2");
const exploreRepoVar = fallbackVar(customThemeVars.explore.repolistColumns, "2");
// 仓库列表
export const repoList = css`
  // 组织 (with sidebar: .ui.eleven, without: .ui.column)
  .page-content.organization.profile > .ui.container > .ui.stackable > .ui.eleven,
  .page-content.organization.profile > .ui.container > .ui.stackable > .ui.column,
  // 用户
  .page-content.user.profile > .ui.container > .ui.stackable > .ui.twelve,
  // 探索
  .page-content.explore.repositories > .ui.container {
    // 排除用户的公开活动页
    > .flex-list:not(#activity-feed) {
      display: grid;
      > .flex-item {
        border: 1px solid ${themeVars.color.light.border};
        border-radius: ${otherThemeVars.border.radius};
        padding: 16px;
        // 仓库头像
        > .flex-item-leading {
          img,
          svg {
            color: ${themeVars.color.text.light.num1};
          }
        }
        // 仓库信息
        > .flex-item-main {
          // 仓库标题
          > .flex-item-header {
            // 仓库名称
            > .flex-item-title {
              gap: 8px;
              // 仓库中间的间隔线
              &:not(a) {
                color: ${themeVars.color.text.light.num1};
              }
            }
            // 仓库语言, 星标
            > .flex-item-trailing {
              color: ${themeVars.color.text.light.num1};
              gap: 16px;
              font-size: 12px;
              > .flex-text-inline .color-icon {
                width: 12px;
                height: 12px;
                margin-right: 0 !important;
              }
            }
          }
          // description and update time
          > .flex-item-body {
            margin-top: 8px;
            // description truncation (max 3 lines)
            &:not(:last-child) {
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
              color: ${themeVars.color.text.light.num1};
              font-size: 13px;
              line-height: 1.5;
            }
            // update time
            &:last-child {
              font-size: 12px;
              color: ${themeVars.color.text.light.num1};
            }
          }
          // topic labels
          > .label-list {
            margin-top: 8px;
          }
        }
      }
    }
  }
  // org repo list columns — overridden to single list in org.ts
  .page-content.organization.profile > .ui.container > .ui.stackable > .ui.eleven > .flex-list,
  .page-content.organization.profile > .ui.container > .ui.stackable > .ui.column > .flex-list {
    grid-template-columns: 1fr;
    gap: 0;
  }
  // 用户
  // 排除用户的公开活动页
  .page-content.user.profile > .ui.container > .ui.stackable > .ui.twelve > .flex-list:not(#activity-feed) {
    grid-template-columns: repeat(${userRepoVar}, 1fr);
    gap: min(${userRepoVar} * 8px, 16px);
  }
  // 探索
  .page-content.explore.repositories > .ui.container > .flex-list {
    grid-template-columns: repeat(${exploreRepoVar}, 1fr);
    gap: min(${exploreRepoVar} * 8px, 16px);
  }
`;

const exploreUserVar = fallbackVar(customThemeVars.explore.userlistColumns, "3");
const orgUserVar = fallbackVar(customThemeVars.org.userlistColumns, "2");

// 用户列表
export const userList = css`
  // 组织
  .page-content.organization.members > .ui.container,
  // 探索的用户和组织
  .page-content.explore.users > .ui.container {
    > .flex-list {
      display: grid;
      > .flex-item {
        border: 1px solid ${themeVars.color.light.border};
        border-radius: ${otherThemeVars.border.radius};
        padding: 16px;
        > .flex-item-main {
          // 用户名称
          > .flex-item-title {
            gap: 8px;
            margin-bottom: 8px;
            // 用户标签
            > .label {
              font-size: 12px;
            }
          }
          // 用户描述
          > .flex-item-body {
            font-size: 12px;
            svg {
              width: 12px;
              min-width: 12px;
            }
          }
        }
      }
    }
  }
  // org members — compact grid with smaller avatars
  .page-content.organization.members > .ui.container > .flex-list {
    grid-template-columns: repeat(${orgUserVar}, 1fr);
    gap: min(${orgUserVar} * 8px, 16px);
    > .flex-item {
      border: none !important;
      padding: 8px !important;
      .flex-item-leading {
        img, svg {
          width: 32px !important;
          height: 32px !important;
        }
      }
    }
  }
  // 探索的用户和组织
  .page-content.explore.users > .ui.container > .flex-list {
    grid-template-columns: repeat(${exploreUserVar}, 1fr);
    gap: min(${exploreUserVar} * 8px, 16px);
  }
`;

// mobile repo and user list
export const mobileList = css`
  @media (max-width: 767.98px) {
    // all repo/user grids collapse to single column on mobile
    .page-content.organization.profile > .ui.container > .ui.stackable > .ui.eleven,
    .page-content.organization.profile > .ui.container > .ui.stackable > .ui.column,
    .page-content.user.profile > .ui.container > .ui.stackable > .ui.twelve,
    .page-content.explore.repositories > .ui.container,
    .page-content.organization.members > .ui.container,
    .page-content.explore.users > .ui.container {
      > .flex-list:not(#activity-feed) {
        grid-template-columns: 1fr;
        gap: 8px;
      }
    }
    // hide commit message column on mobile in file list
    #repo-files-table .repo-file-cell.message {
      display: none;
    }
    // tab navigation scrollable on small screens
    .header-wrapper .ui.tabular.menu {
      overflow-x: auto;
      overflow-y: hidden;
      flex-wrap: nowrap;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      .item {
        white-space: nowrap;
        flex-shrink: 0;
      }
    }
    // repo header buttons stack on mobile
    .repo-header .flex-item-trailing {
      flex-wrap: wrap;
      gap: 4px;
    }
  }
  // tablet breakpoint
  @media (max-width: 1023.98px) {
    // file list: reduce commit message width
    #repo-files-table .repo-file-cell.message {
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

// Explore / org / user search bar — match GitHub's split control exactly.
// GitHub's repo-list filter (e.g. /orgs/n8n-io/repositories) is a 2-piece
// composite: a left-rounded input with body-tone bg, joined to a 32×32
// right-rounded square submit button with control-surface bg (slightly
// lighter than body in dark mode). The two pieces share an overlapping
// 1px border so they read as a 32px-tall pill with a subtle vertical seam
// between text and icon.
//
// Forgejo emits the right markup naturally:
//   .ui.action.input > input[type="search"] + button.ui.icon.button
// so we just style each piece independently and rely on flex layout.
export const searchBar = css`
  #repo-search-form .ui.action.input {
    display: flex;
    align-items: stretch;
    height: 32px;
    background: transparent;
    border: 0;
    border-radius: 0;
    overflow: visible;

    > input[type="search"] {
      // left half: rounded only on the left, transparent bg so the body's
      // canvas.default tone shows through (github does the same — its input
      // uses bg=canvas.default, not canvas.muted, so the text area matches
      // the page). Full border with border-right dropped so the seam is a
      // single 1px line — the button's left border.
      height: 32px;
      padding: 0 12px;
      font-size: 14px;
      background: transparent !important;
      border: 1px solid ${themeVars.color.light.border} !important;
      border-right: 0 !important;
      border-radius: ${otherThemeVars.border.radius} 0 0 ${otherThemeVars.border.radius} !important;
      box-shadow: none !important;
      flex: 1;

      &::placeholder {
        color: ${themeVars.color.text.light.num1};
      }
    }

    > input[type="search"]:focus,
    > input[type="search"]:focus-visible {
      background: transparent !important;
      box-shadow: none !important;
    }

    // right half: 32×32 square submit button, control-surface bg, rounded only on the right
    > button.ui.icon.button {
      width: 32px;
      height: 32px;
      padding: 0;
      flex: 0 0 32px;
      background: ${themeVars.color.button} !important;
      border: 1px solid ${themeVars.color.light.border} !important;
      border-radius: 0 ${otherThemeVars.border.radius} ${otherThemeVars.border.radius} 0 !important;
      color: ${themeVars.color.text.light.num1};

      &:hover {
        background: ${themeVars.color.hover.self} !important;
      }
    }

    // focus ring spans both pieces when the input is focused
    &:focus-within > input[type="search"] {
      border-color: ${themeVars.github.borderColor.accent.emphasis} !important;
      box-shadow: inset 0 0 0 1px ${themeVars.github.borderColor.accent.emphasis} !important;
    }
    &:focus-within > button.ui.icon.button {
      border-color: ${themeVars.github.borderColor.accent.emphasis} !important;
    }
  }
`;

// 统一无搜索结果时的样式
export const notMatch = css`
  // 组织的仓库列表
  .page-content.organization.profile > .ui.container > .ui.stackable > .ui.eleven,
  .page-content.organization.profile > .ui.container > .ui.stackable > .ui.column,
  // 用户的仓库列表
  .page-content.user.profile > .ui.container > .ui.stackable > .ui.twelve,
  // 探索的仓库列表
  .page-content.explore.repositories > .ui.container,
  // 组织的成员列表
  .page-content.organization.members >.ui.container,
  // 探索的用户和组织列表
  .page-content.explore.users >.ui.container {
    // 排除用户的公开活动页
    > .flex-list:not(#activity-feed) {
      &:has(> div:only-child):not(:has(.flex-item-main)) {
        grid-template-columns: 1fr;
        > div {
          border: 1px solid ${themeVars.color.light.border};
          border-radius: ${otherThemeVars.border.radius};
          font-size: 16px;
          font-weight: 500;
          padding: 32px;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;
