"use strict";(self.webpackChunkbradkim06=self.webpackChunkbradkim06||[]).push([[453],{21783:function(e,t,n){var i=n(96540),o=n(98905),l=n(70223);const r=o.default.div`
  margin: 0 auto;

  & strong,
  & b {
    letter-spacing: -0.02em;
  }

  ${e=>{const{main:t,minWidth:n,base:i,bars:l}=e.theme,{fontSize:r}=e;return o.css`
      font-size: calc(${t.fonts.content.size*r}rem);

      @media ${n.M} {
        font-size: calc(${t.fonts.content.sizeM*r}rem);
      }

      @media ${n.M} {
        font-size: calc(${t.fonts.content.sizeL*r}rem);
      }

      background: ${t.colors.background};
      max-width: ${t.sizes.articleMinWidth};
      padding: calc(${l.sizes.infoBar}px + 1.5em) 1.5em;

      & a {
        font-weight: bold;
        letter-spacing: -0.02em;
        text-decoration: underline;
        transition: 0.1s;

        &:hover {
          color: ${i.colors.linkHover};
        }
      }

      @media ${n.M} {
        padding: calc(2.5rem + ${l.sizes.infoBar}px) 2.5em;
      }

      @media ${n.L} {
        max-width: ${t.sizes.articleMaxWidth};
        padding: 3.5rem 3.5em;
      }
    `}}
`;t.A=e=>{let{children:t}=e;const n=(0,l.d4)((e=>e.fontSizeIncrease));return i.createElement(r,{fontSize:n},t)}},24872:function(e,t,n){var i=n(96540),o=n(98905);const l=o.default.article`
  & li {
    margin: 0 0 0.5em 0;
  }

  & p {
    margin: 0 0 1.5em 0;
    font-weight: 400;
  }

  & table {
    display: inline-block;
    overflow-x: auto;
    margin: 0.5em 0 2.5em;
    max-width: 100%;
    width: auto;
    border-spacing: 0;
    border-collapse: collapse;
    white-space: nowrap;
    vertical-align: top;
  }

  ${e=>{const{main:t,base:n,minWidth:i}=e.theme;return o.css`
      color: ${t.colors.content};
      line-height: ${t.fonts.content.lineHeight};

      & a {
        color: ${n.colors.link};
      }

      & h1,
      & h2,
      & h3 {
        color: ${t.colors.contentHeading};
        font-weight: ${t.fonts.contentHeading.weight};
        line-height: ${t.fonts.contentHeading.lineHeight};
        margin: 2em 0 1em;
        letter-spacing: -0.02em;
      }
      & h3 {
        font-size: ${t.fonts.contentHeading.h3Size}em;
      }
      & ul {
        list-style: circle;
        padding: 0 0 0 1.3em;
        @media ${i.M} {
          padding: 0 0 0 2em;
        }
      }
      & blockquote {
        border-left: 5px solid ${t.colors.blockquoteFrame};
        font-style: italic;

        margin: 2.5em 0;
        padding: 1em 1.1em 1em 1.3em;
        position: relative;

        & p {
          margin: 0;
        }
      }

      & table th {
        // color: ${n.colors.text};
        font-size: 1.2rem;
        font-weight: 700;
        letter-spacing: 0.2px;
        text-align: left;
        text-transform: uppercase;
        background-color: ${n.colors.lines};
      }

      & table th,
      & table td {
        padding: 6px 12px;
        border: 1px solid ${n.colors.text};
      }
    `}}
`;t.A=function(e){let{children:t}=e;return i.createElement(l,null,t)}},26166:function(e,t,n){n.r(t);var i=n(96540),o=n(88862),l=n(21783),r=n(24872),s=n(31284);t.default=function(){return i.createElement(o.A,null,i.createElement(l.A,null,i.createElement(r.A,null,i.createElement(s.A,{title:"404 Error: Page not Found"}),"404 Error: Page not Found")))}},31284:function(e,t,n){var i=n(96540),o=n(98905);const l=o.default.div`
  margin: 0 0 3em;
`,r=o.default.h1`
  letter-spacing: -0.04em;

  ${e=>{const{main:t,minWidth:n}=e.theme;return o.css`
      color: ${t.colors.title};
      font-size: ${t.fonts.title.size}em;
      font-weight: ${t.fonts.title.weight};
      line-height: ${t.fonts.title.lineHeight};
      margin: 0 0 0.4em;

      @media ${n.M} {
        font-size: ${t.fonts.title.sizeM}em;
      }

      @media ${n.L} {
        font-size: ${t.fonts.title.sizeL}em;
        letter-spacing: -0.05em;
      }
    `}}
`,s=o.default.h2`
  ${e=>{const{main:t,minWidth:n}=e.theme;return o.css`
      color: ${t.colors.subTitle};
      font-size: ${t.fonts.subTitle.size}em;
      line-height: ${t.fonts.subTitle.lineHeight};
      font-weight: ${t.fonts.subTitle.weight};

      @media ${n.M} {
        font-size: ${t.fonts.subTitle.sizeM}em;
      }

      @media ${n.L} {
        font-size: ${t.fonts.subTitle.sizeL}em;
      }
    `}}
`,a=o.default.time`
  ${e=>{const{main:t}=e.theme;return o.css`
      font-size: ${t.fonts.meta.size}em;
      font-weight: ${t.fonts.meta.weight};
      color: ${t.colors.meta};
    `}}
`;function c(e){let{title:t,subTitle:n,date:o}=e;return i.createElement(l,null,i.createElement(r,null,t),i.createElement(s,null,n),i.createElement(a,null,o))}c.defaultProps={subTitle:"",date:""},t.A=c},88862:function(e,t,n){var i=n(87813);t.A=(0,i.Ay)((()=>Promise.all([n.e(223),n.e(906),n.e(251)]).then(n.bind(n,67251))))}}]);
//# sourceMappingURL=component---src-pages-404-tsx-7a1a404077ca88428152.js.map