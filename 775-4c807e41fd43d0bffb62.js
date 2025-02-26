"use strict";(self.webpackChunkbradkim06=self.webpackChunkbradkim06||[]).push([[775],{9775:function(e,t,i){i.r(t),i.d(t,{default:function(){return k}});var a=i(96540),n=i(70223),o=i(98905),l=i(50277),r=i(71922),s=i(99550),c=i(94833),m=i(48621),d=i(39600);const p=o.default.div`
  display: none;

  ${e=>{const{navigator:t}=e.theme;return o.css`
      .is-aside.closed &,
      .moving-featured.closed & {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        margin: 0;
        height: ${t.sizes.closedHeight}px;
        padding: 0 30px 0 40px;
      }

      & h1 {
        font-size: 1.1em;
        color: ${t.colors.postsHeader};
        font-weight: 600;
        margin: -0.2em 0 0 0;
        text-transform: uppercase;
        & small {
          font-size: 0.6em;
          display: block;
          margin: 0 0 0.1em;
          font-weight: 300;
          letter-spacing: 0.2em;
        }
      }

      .expandButton {
        color: ${t.colors.postsHeader};
      }
    `}}
`,g=o.default.div`
  position: relative;
  font-size: 1.2em;
  line-height: 1;
  padding: 0 1em 1em;
  font-weight: 300;

  & strong {
    font-weight: 600;
    display: block;
  }
  & small {
    display: block;
    margin: 0 0 0.3em 0;
  }

  ${e=>{const{base:t,navigator:i,minWidth:a}=e.theme;return o.css`
      color: ${t.colors.accent};
      border-bottom: 1px solid ${t.colors.lines};
      margin: 0 calc(-0.5rem + ${t.sizes.linesMargin}) 1em
        calc(-0.5rem + ${t.sizes.linesMargin});
      .removeButton {
        position: absolute;
        top: 0;
        right: 0;
        color: ${i.colors.postsHeader};
      }
      @media ${a.L} {
        margin: 0 0 1em 0;
        padding: 0 1em 1.5em;
        .is-aside & {
          padding: 0 0 1em 0.5em;
          margin: 0 calc(-0.5rem + ${t.sizes.linesMargin}) 1em
            calc(-0.5rem + ${t.sizes.linesMargin});
        }
      }
    `}}
`;var h=e=>{let{expandOnClick:t,categoryFilter:i,navigatorShape:n,removeFilter:o}=e;return a.createElement("header",null,"closed"===n&&a.createElement(p,null,a.createElement("h1",null,"List of posts"),a.createElement(c.A,{"aria-label":"Expand the list",onClick:t,title:"Expand the list",className:"expandButton"},a.createElement(d.A,null))),"open"===n&&"all posts"!==i&&a.createElement(g,null,a.createElement("small",null,"Active Category Filter:"),a.createElement("strong",null,i),a.createElement(c.A,{"aria-label":"Remove filtering",onClick:o,title:"Clear filtering",className:"removeButton"},a.createElement(m.A,null))))},u=i(59065);var f=e=>{let{post:t,categoryFilter:i,linkOnClick:n}=e;const{excerpt:o,frontmatter:{category:l,title:r,subTitle:s,date:c,cover:m},fields:{slug:d}}=t.node,{0:p,1:g}=(0,a.useState)(!1);return(0,a.useEffect)((()=>{"all posts"===i?g(!1):l!==i?g(!0):l===i&&g(!1)}),[i]),a.createElement(a.Fragment,null,p||a.createElement(u.A,{title:r,subTitle:s,excerpt:o,date:c,slug:d,cover:m,linkOnClick:n}))},v=i(64619),$=i(12695);const x=o.default.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
`,b=o.default.div`
  ${e=>{const{minWidth:t,bars:i,info:a}=e.theme;return o.css`
      padding: calc(${i.sizes.infoBar}px + 1.3rem) 1.3rem
        calc(${i.sizes.actionsBar}px + 1.3rem) 1.3rem;

      @media ${t.M} {
        padding: calc(${i.sizes.infoBar}px + 2rem) 2rem
          calc(${i.sizes.actionsBar}px + 2rem) 2rem;
      }

      @media ${t.L} {
        padding: 2rem calc(1rem + 17px) calc(2rem + 17px) 2rem;
        left: ${a.sizes.width}px;
        .moving-featured &,
        .is-aside & {
          padding: 1rem 0.5rem 1rem 0.5rem;
        }
      }
    `}}
`;var w=function(e){let{posts:t,linkOnClick:i,expandOnClick:n,removeFilter:o,categoryFilter:l,navigatorShape:r}=e;return a.createElement(x,null,a.createElement($.A,null,a.createElement(b,null,a.createElement(h,{expandOnClick:n,categoryFilter:l,navigatorShape:r,removeFilter:o}),a.createElement(v.A,null,t.edges&&t.edges.map((e=>a.createElement(f,{key:e.node.id,post:e,linkOnClick:i,categoryFilter:l})))))))};const z=o.default.nav`
  transform: translate3d(0, 0, 0);
  will-change: left, top, bottom, width;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  transition-timing-function: ease;
  // Main Frame Left Moving part
  // transition: left 0.5s;
  width: 100%;

  ${e=>{const{navigator:t,info:i,bars:a,base:n,maxWidth:l,minWidth:r}=e.theme;return o.css`
      background: ${t.colors.background};

      @media ${l.L} {
        &.is-aside {
          left: -100%;
        }

        &.is-featured {
          left: 0;
        }
      }

      @media ${r.L} {
        &.is-featured {
          // Main Frame Right Moving part
          // transition: left 0.5s;
          width: calc(100vw - ${i.size.width} - ${a.size.actionsBar});
          left: ${i.size.width};
          top: 0;
        }

        &.is-aside {
          // side frame up part
          transition: bottom 0.2s;
          left: 0;
          width: calc(${i.size.width} - 1px);
          z-index: 1;
          top: auto;

          &.closed {
            bottom: calc(-100% + 6.25rem + ${t.size.closedHeight});
            height: calc(100% - 6.25rem);
          }

          &.open {
            bottom: 0;
            height: calc(100% - 6.25rem);
          }

          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: ${n.sizes.linesMargin};
            right: ${n.sizes.linesMargin};
            height: 0;
            border-top: 1px solid ${n.colors.lines};
          }
        }

        &.moving-aside {
          left: calc(-100vw + ${i.sizes.width}*2px + 2px);
          width: calc(100vw - ${i.sizes.width}px - 60px);
          top: 0;
        }

        &.resizing-aside {
          transition: none;
          width: ${i.sizes.width}px;
          top: auto;
          left: 0;

          &.closed {
            bottom: calc(-100% + 6.25rem);
            height: calc(100% - 6.25rem);
          }

          &.open {
            bottom: calc(-100% + 6.25rem);
            height: calc(100% - 6.25rem);
          }
        }

        &.moving-featured {
          // side frame down part
          transition: bottom 0.2s;
          bottom: -100%;
          top: auto;
          left: 0;
          z-index: 1;
          width: calc(${i.size.width} - 1px);
        }

        &.resizing-featured {
          transition: none;
          top: 0;
          bottom: auto;
          left: calc(-100vw + ${i.size.width}*2 + 60px);
          width: calc(100vw - ${i.size.width} - 60px);
        }
      }
    `}}
`;var k=e=>{let{posts:t}=e;const i=(0,l.A)((e=>({categoryFilter:e.categoryFilter,navigatorShape:e.navigatorShape,navigatorPosition:e.navigatorPosition}))),o=(0,n.wA)();return a.createElement(z,{className:`${i.navigatorPosition?i.navigatorPosition:""} ${i.navigatorShape?i.navigatorShape:""} `},t.totalCount&&a.createElement(w,{posts:t,navigatorShape:i.navigatorShape,linkOnClick:function(){(0,s.DU)()},expandOnClick:function(){o((0,r.zp)("open"))},categoryFilter:i.categoryFilter,removeFilter:function(){o((0,r.Dz)("all posts"))}}))}},39600:function(e,t,i){var a=i(24994),n=i(6305);t.A=void 0;var o=n(i(96540)),l=(0,a(i(21816)).default)(o.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.A=l},48621:function(e,t,i){var a=i(24994),n=i(6305);t.A=void 0;var o=n(i(96540)),l=(0,a(i(21816)).default)(o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.A=l}}]);
//# sourceMappingURL=775-4c807e41fd43d0bffb62.js.map