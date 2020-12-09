import AnimationManager from "/js/libraries/AnimationManager.js";

import CameraData from "/js/data/CameraData.js";


const {fov, aspect, near, far} = CameraData;

window.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

window.scene = new THREE.Scene();

window.renderer = new THREE.WebGLRenderer({
  canvas,
  //powerPreference: "high-performance",
});

//window.AM = new AnimationManager();

const script = document.createElement("script");
script.src = "js/startup/index.js";

script.setAttribute("type", "module");

body.append(script);