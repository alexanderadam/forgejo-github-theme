import { css, otherThemeVars, themeVars } from "src/types/vars";

export const org = css`
  .page-content.organization {
    // member avatars in sidebar — small, no border, tight grid like GitHub
    .members .ui.avatar {
      border-radius: 9999px;
    }
    // org avatar
    .org-avatar {
      margin: 8px 24px 16px 0px;
    }
    #org-info {
      margin-top: 8px;
      gap: 8px;
      > .ui.header {
        font-size: 24px;
        > .org-visibility {
          margin-left: 8px;
        }
        .ui.label.button {
          padding: 4px 16px;
          .svg {
            width: 20px;
            min-width: 20px;
          }
          &:hover {
            border-color: ${themeVars.color.light.border};
          }
        }
      }
      > .markup {
        color: ${themeVars.color.text.light.num1};
      }
      > .meta {
        font-size: 12px;
        svg {
          color: ${themeVars.color.text.light.num1};
        }
      }
    }

    // sidebar — GitHub-like width and clean look
    &.profile .ui.five.wide.column {
      max-width: 296px;
      // members header — no attached segment border
      .ui.top.attached.header {
        background: none !important;
        border: none !important;
        padding: 0 0 8px 0;
        font-size: 14px;
      }
      // member avatars — 36px, no border, tight row like GitHub "People"
      .ui.attached.segment.members {
        background: none !important;
        border: none !important;
        padding: 0 0 16px 0;
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        .ui.avatar {
          width: 36px !important;
          height: 36px !important;
          border: none !important;
          border-radius: 9999px;
          outline: none !important;
          box-shadow: none !important;
        }
      }
      // teams section — no attached border
      .ui.attached.table.segment.teams {
        background: none !important;
        border: none !important;
        border-top: 1px solid ${themeVars.color.light.border} !important;
        padding: 8px 0;
        .item {
          padding: 4px 0;
        }
      }
      // "New team" button — not green, subdued like GitHub
      .ui.primary.button {
        background: ${themeVars.color.button} !important;
        border: 1px solid ${themeVars.color.light.border} !important;
        color: ${themeVars.color.text.self} !important;
      }
    }

    // search bar and filters on org page — no background, no border
    &.profile .repo-search {
      background: none !important;
      border: none !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    // filter/sort dropdowns — no border, plain text
    &.profile .repo-filter {
      background: none !important;
      border: none !important;
      .ui.dropdown {
        border: none !important;
        background: none !important;
        box-shadow: none !important;
        font-weight: 600;
        font-size: 14px;
      }
    }

    // org repo list — single column, shared borders, rounded group
    // matches both with sidebar (.ui.eleven) and without (.ui.column)
    &.profile > .ui.container > .ui.stackable > .ui.column > .flex-list,
    &.profile > .ui.container > .ui.stackable > .ui.eleven > .flex-list {
      display: flex !important;
      flex-direction: column;
      gap: 0 !important;
      border: 1px solid ${themeVars.color.light.border};
      border-radius: ${otherThemeVars.border.radius};
      overflow: hidden;
      > .flex-item {
        border: none !important;
        border-radius: 0 !important;
        border-bottom: 1px solid ${themeVars.color.light.border} !important;
        padding: 16px;
        &:last-child {
          border-bottom: none !important;
        }
      }
    }
  }
`;
