/* global THREE */
const container = document.getElementById("container");
let width = container.clienWidth;
let height = container.clientHeight;
let aspect = width / height;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
container.appendChild(renderer.domElement);

let geometry = new THREE.CubeGeometry(1,1,1);
let material = new THREE.MeshBasicMaterial({
	wireframe: true,
	color: 0x111111
});

let cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

function render() {
	requestAnimationFrame(render);
	cube.rotation.x += 0.03;
	cube.rotation.y += 0.03;
	renderer.render(scene, camera);
	// console.log("rad 30");
}
render();