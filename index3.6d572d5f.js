var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=e.parcelRequire57db;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var i=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire57db=i);var n=i("ilwiq"),r=i("8YxfO"),a=i("9aI46");const s=document.querySelector(".content"),l=new n.Scene,c=new n.PerspectiveCamera(60,s.offsetWidth/s.offsetHeight,.1,50);c.position.z=220,c.position.y=100,c.lookAt(0,0,0);const d=new n.WebGLRenderer({antialias:!0,alpha:!0});d.setSize(s.offsetWidth,s.offsetHeight),s.appendChild(d.domElement);const f=new n.Group;l.add(f);let p=null,u=[];(new(0,r.OBJLoader)).load("cathedral.obj",(e=>{p=new(0,a.MeshSurfaceSampler)(e.children[0]).build();for(let e=0;e<4;e++){const t=new y(e);u.push(t),f.add(t.line)}d.setAnimationLoop(g)}),(e=>console.log(e.loaded/e.total*100+"% loaded")),(e=>{console.log("oops"),console.error(e)}));const h=new n.Vector3,w=[new n.LineBasicMaterial({color:16428416,transparent:!0,opacity:.5}),new n.LineBasicMaterial({color:16738151,transparent:!0,opacity:.5}),new n.LineBasicMaterial({color:16727400,transparent:!0,opacity:.5}),new n.LineBasicMaterial({color:10957961,transparent:!0,opacity:.5})];class y{constructor(e){this.geometry=new n.BufferGeometry,this.material=w[e%4],this.line=new n.Line(this.geometry,this.material),this.vertices=[],p.sample(h),this.previousPoint=h.clone()}update(){let e=!1;for(;!e;)p.sample(h),h.distanceTo(this.previousPoint)<30&&(this.vertices.push(h.x,h.y,h.z),this.previousPoint=h.clone(),e=!0);this.geometry.setAttribute("position",new n.Float32BufferAttribute(this.vertices,3))}}function g(e){f.rotation.y+=.002,u.forEach((e=>{e.vertices.length<1e4&&e.update()})),d.render(l,c)}window.addEventListener("resize",(function(){c.aspect=s.offsetWidth/s.offsetHeight,c.updateProjectionMatrix(),d.setSize(s.offsetWidth,s.offsetHeight)}),!1);
//# sourceMappingURL=index3.6d572d5f.js.map