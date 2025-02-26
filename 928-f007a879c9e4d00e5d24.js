"use strict";(self.webpackChunkbradkim06=self.webpackChunkbradkim06||[]).push([[928],{14928:function(e,t,r){r.r(t),r.d(t,{default:function(){return I}});var n=r(96540),o=r(58168),l=r(80045),a=r(57166),i=r(53490),c=(0,r(75621).A)(n.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var s=n.forwardRef((function(e,t){var r=e.alt,i=e.children,s=e.classes,u=e.className,m=e.component,d=void 0===m?"div":m,f=e.imgProps,p=e.sizes,g=e.src,h=e.srcSet,b=e.variant,k=void 0===b?"circular":b,v=(0,l.A)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),E=null,y=function(e){var t=e.src,r=e.srcSet,o=n.useState(!1),l=o[0],a=o[1];return n.useEffect((function(){if(t||r){a(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=r,n.onload=function(){e&&a("loaded")},n.onerror=function(){e&&a("error")},function(){e=!1}}}),[t,r]),l}({src:g,srcSet:h}),A=g||h,x=A&&"error"!==y;return E=x?n.createElement("img",(0,o.A)({alt:r,src:g,srcSet:h,sizes:p,className:s.img},f)):null!=i?i:A&&r?r[0]:n.createElement(c,{className:s.fallback}),n.createElement(d,(0,o.A)({className:(0,a.default)(s.root,s.system,s[k],u,!x&&s.colorDefault),ref:t},v),E)})),u=(0,i.A)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(s),m=r(41015),d=r(98905),f=r(87813),p=r(62941),g=r(54245),h=r(61133),b=r(3214),k=r(40646),v=r(59104),E=r(94833),y=r(31259);const A=d.default.div`
  float: right;
  margin: 5px 10px 0 0;

  ${e=>{const{main:t,bars:r}=e.theme;return d.css`
      a {
        color: ${t.colors.title};
      }

      li {
        color: ${t.colors.title};
      }

      .MuiIconButton-root {
        color: ${r.colors.icon};
      }
    `}}
`;var x=e=>{let{pages:t,homeLinkOnClick:r,pageLinkOnClick:o}=e;const[l,a]=n.useState(!1),i=n.useRef(null);function c(){a(!1)}const s=n.useRef(l);return(0,n.useEffect)((()=>{s.current=l}),[l]),n.createElement(A,null,n.createElement(E.A,{ref:i,"aria-controls":l?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){a((e=>!e))},"aria-label":"fontOpen",className:"fontOpen"},n.createElement(y.A,null)),n.createElement(b.A,{open:l,anchorEl:i.current,role:void 0,transition:!0,disablePortal:!0},(e=>{let{TransitionProps:a,placement:i}=e;return n.createElement(g.A,Object.assign({},a,{style:{transformOrigin:"bottom"===i?"center top":"center bottom"}}),n.createElement(h.A,null,n.createElement(p.A,{onClickAway:c},n.createElement(v.A,{autoFocusItem:l,id:"menu-list-grow"},n.createElement(k.A,{onClick:e=>{r(e),c()}},"Home"),t.edges.map((e=>{const{fields:t,frontmatter:r}=e.node;return n.createElement(m.Link,{key:t.slug,to:t.slug,style:{display:"block"}},n.createElement(k.A,{onClick:e=>{o(e),c()}},r.title))}))))))})))},z=r(90264),$=r(99550),w=r(65240),C=r.n(w);const S=d.default.aside`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  ${e=>{const{info:t,bars:r,base:n,minWidth:o}=e.theme;return d.css`
      color: ${t.colors.text};
      background: ${r.colors.background};
      height: ${r.sizes.infoBar}px;
      &::before {
        content: '';
        position: absolute;
        left: ${n.sizes.linesMargin};
        right: ${n.sizes.linesMargin};
        height: 0;
        bottom: 0;
        border-top: 1px solid ${n.colors.lines};
      }

      @media ${o.L} {
        display: none;
      }
    `}}
`,O=d.default.div`
  display: block;
  float: left;
  margin: 13px 0 0 30px;
`,R=(0,d.default)(u)`
  width: 36px;
  height: 36px;
`,L=d.default.div`
  float: left;
  margin: 15px 0 0 15px;
  font-size: 1.4rem;

  & small {
    display: block;
    font-size: 0.7rem;
    margin: 1px 0 0 0;
  }

  ${e=>{const{bars:t}=e.theme;return d.css`
      color: ${t.colors.text};
    `}}
`,M=e=>{let{pages:t}=e;const{logo:r}=(0,z.V)();function o(e){(0,$.de)(e)}return n.createElement(S,null,n.createElement(O,null,n.createElement(m.Link,{to:"/",onClick:o,title:"back to Home"},n.createElement(R,{src:r.childImageSharp.fluid.src,alt:"logo"}))),n.createElement(L,null,C().infoTitle),n.createElement(x,{pages:t,homeLinkOnClick:o,pageLinkOnClick:function(){(0,$.DU)()}}))};var I=(0,f.Ay)((async()=>M))},31259:function(e,t,r){var n=r(24994),o=r(6305);t.A=void 0;var l=o(r(96540)),a=(0,n(r(21816)).default)(l.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");t.A=a}}]);
//# sourceMappingURL=928-f007a879c9e4d00e5d24.js.map