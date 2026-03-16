import { css, themeVars } from "src/types/vars";

// 一些列表头, 比如工单的搜索标签里程碑栏
export const listHeader = css`
  .list-header {
    align-items: center;
    align-content: center;
  }
`;

export const svg = css`
  // starred icon
  .octicon-star-fill {
    color: ${themeVars.github.button.star.iconColor} !important;
  }
  // VSCode icon
  .gitea-vscode {
    color: #007acc !important;
  }
  // VSCodium icon
  .gitea-vscodium {
    color: #429cf0 !important;
  }
  // icon size consistency (16px default, matching GitHub)
  .svg {
    width: 16px;
    height: 16px;
    &.octicon-16 {
      width: 16px;
      height: 16px;
    }
  }
  // nav icons slightly larger
  #navbar .svg {
    width: 16px;
    height: 16px;
  }
  // loading spinner style
  .is-loading::after {
    border-color: ${themeVars.color.primary.self};
    border-right-color: transparent;
  }
`;

export const avatar = css`
  img.ui.avatar,
  .ui.avatar img,
  .ui.avatar svg {
    background-color: ${themeVars.github.avatar.bgColor};
    box-shadow: 0 0 0 1px ${themeVars.github.avatar.borderColor};
  }
`;
