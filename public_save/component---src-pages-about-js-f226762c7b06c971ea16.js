webpackJsonp([0xefeaa6d1881d],{188:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}t.__esModule=!0;var u=a(1),c=o(u),i=a(10),d=(o(i),a(51)),f=(o(d),a(34)),m=o(f),h=function(e){function t(){var a,o,n;l(this,t);for(var u=arguments.length,c=Array(u),i=0;i<u;i++)c[i]=arguments[i];return a=o=r(this,e.call.apply(e,[this].concat(c))),o.state={email:"",resume:"",randomColors:[]},o.handleMouseEnter=function(e){var t;console.log("BG",e);var a=(0,m.default)({luminosity:"bright"}),l=s(a),r="rgba("+l.r+", "+l.g+", "+l.b+", 0.5)";o.setState((t={},t[e]=r,t)),console.log(o.state)},o.handleMouseLeave=function(e){var t;o.setState((t={},t[e]="",t))},n=a,r(o,n)}return n(t,e),t.prototype.componentDidMount=function(){var e=(0,m.default)({luminosity:"dark",count:17});this.setState({randomColors:e})},t.prototype.render=function(){return c.default.createElement("div",{className:"about-container"},c.default.createElement("div",{className:"about-card-static"},c.default.createElement("h1",null,c.default.createElement("span",{style:{color:""+this.state.randomColors[0]}},"I am a full stack web developer and visual artist, based in New York. I like"," "),c.default.createElement("span",{style:{color:""+this.state.randomColors[1]}},"Ruby on Rails,"," "),c.default.createElement("span",{style:{color:""+this.state.randomColors[2]}},"React,"," "),c.default.createElement("span",{style:{color:""+this.state.randomColors[0]}},"and"," "),c.default.createElement("span",{style:{color:""+this.state.randomColors[3]}},"l"),c.default.createElement("span",{style:{color:""+this.state.randomColors[4]}},"o"),c.default.createElement("span",{style:{color:""+this.state.randomColors[5]}},"o"),c.default.createElement("span",{style:{color:""+this.state.randomColors[6]}},"o"),c.default.createElement("span",{style:{color:""+this.state.randomColors[7]}},"o"),c.default.createElement("span",{style:{color:""+this.state.randomColors[8]}},"o"),c.default.createElement("span",{style:{color:""+this.state.randomColors[9]}},"o"),c.default.createElement("span",{style:{color:""+this.state.randomColors[10]}},"v"),c.default.createElement("span",{style:{color:""+this.state.randomColors[11]}},"e"," "),c.default.createElement("span",{style:{color:""+this.state.randomColors[12]}},"Three.js"))),c.default.createElement("div",{className:"about-card",style:{backgroundColor:""+this.state.email},onMouseEnter:this.handleMouseEnter.bind(this,"email"),onMouseLeave:this.handleMouseLeave.bind(this,"email")},c.default.createElement("a",{id:"emailMe",href:"mailto:colesayershapiro@gmail.com"},c.default.createElement("h1",{style:{color:""+this.state.randomColors[13]}},"Email Me"))),c.default.createElement("div",{className:"about-card",style:{backgroundColor:""+this.state.resume},onMouseEnter:this.handleMouseEnter.bind(this,"resume"),onMouseLeave:this.handleMouseLeave.bind(this,"resume")},c.default.createElement("a",{href:"http://res.cloudinary.com/dwnehv6tb/image/upload/v1519938715/Cole_Shapiro__Resume_ihxxvq.pdf",download:!0},c.default.createElement("h1",{style:{color:""+this.state.randomColors[14]}},"Download Resume"))))},t}(u.Component);t.default=h,e.exports=t.default},200:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=o(l),n=a(188),s=o(n),u=function(){return r.default.createElement("div",null,r.default.createElement(s.default,null))};t.default=u,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-about-js-f226762c7b06c971ea16.js.map