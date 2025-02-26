"use strict";(self.webpackChunkbradkim06=self.webpackChunkbradkim06||[]).push([[971],{9971:function(t,e,n){n.r(e),n.d(e,{default:function(){return L}});var i=n(96540),o=n(98905),a=n(70223),l=n(41015),r=n(94833),s=n(41320),c=n(65240),d=n.n(c),m=n(90264);const p=o.default.header`
  ${t=>{const{info:e}=t.theme;return o.css`
      line-height: 1;
      position: relative;

      .expand {
        position: absolute;
        top: 30px;
        right: -25px;
        display: none;
        color: ${e.colors.socialIcons};

        .is-aside.open & {
          display: block;
        }
      }
    `}}
`,f=o.default.div`
  ${t=>{const{minWidth:e}=t.theme;return o.css`
      will-change: left, top;
      float: left;
      display: block;
      position: relative;
      margin: 0 12px 0 0;

      @media ${e.M} {
        margin: 0 20px 0 0;
      }

      @media ${e.L} {
        position: absolute;
        top: 10px;
        left: 50%;
        margin-left: -30px;
        transition: all 0.5s;
        transition-timing-function: ease;

        .navigator-in-transition-from.navigator-is-opened & {
          left: 50%;
        }

        .is-aside.open & {
          left: 8%;
          top: 0;
        }
      }
    `}}
`,u=o.default.div`
  ${t=>{const{minWidth:e}=t.theme;return o.css`
      width: 36px;
      height: 36px;
      transition: all 0.3s;
      transition-timing-function: ease;
      display: inline-block;
      overflow: hidden;
      & img {
        max-width: 100%;
      }
      @media ${e.M} {
        width: 44px;
        height: 44px;
      }

      @media ${e.L} {
        width: 60px;
        height: 60px;
      }
    `}}
`,h=o.default.h1`
  ${t=>{const{info:e,minWidth:n}=t.theme;return o.css`
      will-change: transform, left, top;
      font-size: ${e.fonts.boxTitleSize}rem;
      margin: 0;
      float: left;
      transition-timing-function: ease;

      & small {
        display: block;
        font-size: 1.1rem;
        margin-top: 0.3rem;
      }

      @media ${n.M} {
        font-size: ${e.fonts.boxTitleSizeM}rem;
      }

      @media ${n.L} {
        font-size: ${e.fonts.boxTitleSizeL}rem;
        position: absolute;
        top: 85px;
        text-align: center;
        left: 50%;
        transform: translate(-50%);
        transition: all 0.5s;

        .is-aside.open & {
          left: 60%;
          top: 0.15rem;
          text-align: left;
        }
      }
    `}}
`;var g=function(t){let{avatarOnClick:e,expandOnClick:n}=t;const o=d().infoTitle.replace(/ /g," "),{logo:a}=(0,m.V)();return i.createElement(p,null,i.createElement(f,null,i.createElement(l.Link,{to:"/",onClick:e,title:"back to Home"},i.createElement(u,null,i.createElement("img",{src:a.childImageSharp.fluid.src,alt:"avatar"})))),i.createElement(h,null,o,i.createElement("small",null,d().infoTitleNote)),i.createElement(r.A,{"aria-label":"Expand the box",className:"expand",onClick:n,title:"Expand the box"},i.createElement(s.A,null)))};const x=o.default.div`
  display: block;
  font-weight: 300;
  line-height: 1.5;
  font-size: 0.95rem;
  text-align: center;
  margin-bottom: 0.8em;
  word-break: break-word;

  & p::first-of-type {
    margin-top: 0;
  }

  & p::last-child {
    margin-bottom: 0;
  }
`;var b=function(){return i.createElement(x,null,d().infoText)};const k=o.default.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  width: 100%;
`,v=(0,o.default)(l.Link)`
  padding: 0.5rem;
  font-weight: 400;
  text-transform: lowercase;

  ${t=>{const{info:e}=t.theme;return o.css`
      color: ${e.colors.menuLink};

      &:hover {
        color: ${e.colors.menuLinkHover};
      }
    `}}
`;var $=function(t){let{linkOnClick:e}=t;return i.createElement(k,null,i.createElement(v,{key:"/about/",to:"/about/",onClick:e,"data-shape":"closed"},"About"))},w=n(50277),E=n(99550),y=n(71922);const z=o.default.aside`
  display: none;

  ${t=>{const{info:e,base:n,minWidth:i}=t.theme;return o.css`
      @media ${i.L} {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        padding: 20px 40px;

        color: ${e.colors.text};
        background: ${e.colors.background};
        width: ${e.size.width};

        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 20px;
          bottom: 20px;
          width: 1px;
          border-right: 1px solid ${n.colors.lines};
        }
      }
    `}}
`,C=o.default.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 40px 0;
  will-change: opacity, bottom;
  transition: bottom 0.5s 0s;
  opacity: 1;
  transition-timing-function: ease;

  .moving-featured & {
    bottom: 0;
  }

  .is-aside.open & {
    display: none;
  }

  ${t=>{const{info:e,navigator:n}=t.theme;return o.css`
      top: ${e.size.headerHeight};

      .is-aside.closed & {
        bottom: ${n.size.closedHeight};
      }
    `}}
`;var L=()=>{const t=(0,w.A)((t=>({navigatorShape:t.navigatorShape,navigatorPosition:t.navigatorPosition}))),e=(0,a.wA)();return i.createElement(z,{className:`${t.navigatorPosition?t.navigatorPosition:""} \n         ${t.navigatorShape?t.navigatorShape:""}`},i.createElement(g,{avatarOnClick:function(t){(0,E.de)(t)},expandOnClick:function(){e((0,y.zp)("closed"))}}),i.createElement(C,null,i.createElement(b,null),i.createElement($,{linkOnClick:function(){e((0,y.zp)("closed")),(0,E.DU)()}})))}},41320:function(t,e,n){var i=n(24994),o=n(6305);e.A=void 0;var a=o(n(96540)),l=(0,i(n(21816)).default)(a.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");e.A=l}}]);
//# sourceMappingURL=971-ec8708244ed475409ce5.js.map