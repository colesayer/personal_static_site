webpackJsonp([0xc260c743ec7c],{192:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}t.__esModule=!0;var c=a(1),d=o(c),i=a(10),u=o(i),m=a(51),f=(o(m),a(34)),h=o(f),p=a(40),g=function(e){function t(){var a,o,l;r(this,t);for(var c=arguments.length,d=Array(c),i=0;i<c;i++)d[i]=arguments[i];return a=o=n(this,e.call.apply(e,[this].concat(d))),o.state={sock:"",gallerina:"",postman:"",dnd:"",randomColors:[]},o.handleMouseEnter=function(e){var t;console.log("BG",e);var a=(0,h.default)({luminosity:"bright"}),r=s(a),n="rgba("+r.r+", "+r.g+", "+r.b+", 0.5)";o.setState((t={},t[e]=n,t)),console.log(o.state)},o.handleMouseLeave=function(e){var t;o.setState((t={},t[e]="",t))},l=a,n(o,l)}return l(t,e),t.prototype.componentDidMount=function(){console.log("mounted");var e=(0,h.default)({luminosity:"dark",count:5});this.setState({randomColors:e})},t.prototype.render=function(){return d.default.createElement("div",{className:"projects-container"},d.default.createElement("div",{className:"projects-header"},d.default.createElement("h2",{style:{color:""+this.state.randomColors[4]}},"Some things I've made:")),d.default.createElement(u.default,{to:"/projects/gallerina",style:{borderColor:""+this.state.randomColors[1],backgroundColor:""+this.state.gallerina},onMouseEnter:this.handleMouseEnter.bind(this,"gallerina"),onMouseLeave:this.handleMouseLeave.bind(this,"gallerina")},d.default.createElement("div",{className:"project-card"},d.default.createElement("div",{className:"project-card-text"},d.default.createElement("h3",{id:"gallerina"},"Gallerina"),d.default.createElement("h4",null,"A lightning fast exhibition design tool for gallerists, curators, and artists."),(0,p.logos)(["react","redux","threejs","rails"])),d.default.createElement("div",{className:"project-card-image"},d.default.createElement("img",{src:"http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517462724/gallerina_inqeqa.jpg"})))),d.default.createElement(u.default,{to:"/projects/wear-house-socks",style:{borderColor:""+this.state.randomColors[0],backgroundColor:""+this.state.sock},onMouseEnter:this.handleMouseEnter.bind(this,"sock"),onMouseLeave:this.handleMouseLeave.bind(this,"sock")},d.default.createElement("div",{className:"project-card"},d.default.createElement("div",{className:"project-card-image"},d.default.createElement("img",{src:"http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517462724/socks_yy6yg2.jpg"})),d.default.createElement("div",{className:"project-card-text"},d.default.createElement("h3",{id:"life-socks"},"Wear House Socks"),d.default.createElement("h4",null,"A fully customizable, photorealistic, virtual product display."),(0,p.logos)(["react","redux","rails","threejs","blender"])))),d.default.createElement(u.default,{to:"/projects/hey-mr-postman",style:{borderColor:""+this.state.randomColors[2],backgroundColor:""+this.state.postman},onMouseEnter:this.handleMouseEnter.bind(this,"postman"),onMouseLeave:this.handleMouseLeave.bind(this,"postman")},d.default.createElement("div",{key:"postman",className:"project-card"},d.default.createElement("div",{className:"project-card-text"},d.default.createElement("h3",{id:"postman"},"HEY MR POSTMAN"),d.default.createElement("h4",null,"An exciting new way to read and write emails utilizing the power of WebGL."),(0,p.logos)(["react","threejs","rails"])),d.default.createElement("div",{className:"project-card-image"},d.default.createElement("img",{src:"http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517462724/postman_qokeax.jpg"})))),d.default.createElement(u.default,{to:"projects/dnd-campaign-manager",style:{borderColor:""+this.state.randomColors[3],backgroundColor:""+this.state.dnd},onMouseEnter:this.handleMouseEnter.bind(this,"dnd"),onMouseLeave:this.handleMouseLeave.bind(this,"dnd")},d.default.createElement("div",{className:"project-card"},d.default.createElement("div",{className:"project-card-image"},d.default.createElement("img",{src:"http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517462724/dnd_tuhdt7.jpg"})),d.default.createElement("div",{className:"project-card-text"},d.default.createElement("h3",{id:"dnd"},"D&D Campaign Manager"),d.default.createElement("h4",null,"The daunting task of creating a character for Dungeons and Dragons and organizing a campaign made easy."),(0,p.logos)(["rails","postgresql","bootstrap"])))))},t}(c.Component);t.default=g,e.exports=t.default},203:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),n=o(r),l=a(192),s=o(l),c=function(){return n.default.createElement(s.default,null)};t.default=c,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-projects-js-2890c3adb23e1c47dc31.js.map