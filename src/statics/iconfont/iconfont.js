import { createGlobalStyle } from "styled-components";

export const GlobalStyleFont=createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1544692858237'); /* IE9*/
    src: url('./iconfont.eot?t=1544692858237#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1544692858237') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1544692858237#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`


