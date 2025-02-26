"use strict";(self.webpackChunkbradkim06=self.webpackChunkbradkim06||[]).push([[251],{67251:function(t,i,e){e.r(i);var a=e(96540),n=e(98905),r=e(12695);const s=n.default.main`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  animation-name: main-entry;
  animation-duration: 0.5s;

  @media print {
    position: relative;

    & > div {
      overflow: visible !important;
    }

    & > div > div {
      position: relative !important;
    }
  }

  @keyframes main-entry {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ${t=>{const{minWidth:i,info:e,bars:a}=t.theme;return n.css`
      @media ${i.L} {
        width: calc(100vw - ${e.sizes.width}px - ${a.sizes.actionsBar}px);
        left: ${e.sizes.width}px;
      }
    `}}
`;i.default=function(t){let{children:i}=t;return a.createElement(s,null,a.createElement(r.A,{isPost:!0},i))}}}]);
//# sourceMappingURL=251-6fe74cdb1e5179755c78.js.map