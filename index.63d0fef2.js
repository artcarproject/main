const s=V=>{let A,t;V.preload=()=>{soundEffect=new Audio,soundEffect.autoplay=!0,soundEffect.src="data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",A=document.getElementById("myAudio")},V.setup=()=>{playBtn=document.querySelector("#play-btn"),playBtn.addEventListener("click",(()=>{document.body.classList.add("start-anim"),A.play(),A.is_playing=!0,setTimeout(window.loadAllMan,20200)})),V.pixelDensity(1),V.createCanvas(V.windowWidth,V.windowHeight,V.WEBGL),t=document.querySelector("#toggle-btn"),t.addEventListener("click",(()=>{t.classList.toggle("toggle--on"),this.toggleAudio()}))},toggleAudio=()=>{!0===A.is_playing?(A.pause(),A.is_playing=!1):(A.play(),A.is_playing=!0)}};new p5(s);
//# sourceMappingURL=index.63d0fef2.js.map
