const table = [
    "https://picsum.photos/200/301?id=1", 1, 1,
    "https://picsum.photos/200/301?id=2", 2, 1,
    "https://picsum.photos/200/301?id=3", 3, 1,
    "https://picsum.photos/200/301?id=4", 4, 1,
    "https://picsum.photos/200/301?id=5", 5, 1,
    "https://picsum.photos/200/301?id=6", 6, 1,
    "https://picsum.photos/200/301?id=7", 7, 1,
    "https://picsum.photos/200/301?id=8", 8, 1,
    "https://picsum.photos/200/301?id=9", 9, 1,
    "https://picsum.photos/200/301?id=10", 10, 1,
    "https://picsum.photos/200/301?id=11", 1, 2,
    "https://picsum.photos/200/301?id=12", 2, 2,
    "https://picsum.photos/200/301?id=13", 3, 2,
    "https://picsum.photos/200/301?id=14", 4, 2,
    "https://picsum.photos/200/301?id=15", 5, 2,
    "https://picsum.photos/200/301?id=16", 6, 2,
    "https://picsum.photos/200/301?id=17", 7, 2,
    "https://picsum.photos/200/301?id=18",  8, 2,
    "https://picsum.photos/200/301?id=19", 9, 2,
    "https://picsum.photos/200/301?id=20", 10, 2,
    "https://picsum.photos/200/301?id=21",  1, 3,
    "https://picsum.photos/200/301?id=22", 2, 3,
    "https://picsum.photos/200/301?id=23", 3, 3,
    "https://picsum.photos/200/301?id=24", 4, 3,
    "https://picsum.photos/200/301?id=25", 5, 3,
    "https://picsum.photos/200/301?id=26", 6, 3,
    "https://picsum.photos/200/301?id=27", 7, 3,
    "https://picsum.photos/200/301?id=28", 8, 3,
    "https://picsum.photos/200/301?id=29", 9, 3,
    "https://picsum.photos/200/301?id=30", 10, 3,
    "https://picsum.photos/200/301?id=31", 1, 4,
    "https://picsum.photos/200/301?id=32", 2, 4,
    "https://picsum.photos/200/301?id=33", 3, 4,
    "https://picsum.photos/200/301?id=34", 4, 4,
    "https://picsum.photos/200/301?id=35", 5, 4,
    "https://picsum.photos/200/301?id=36", 6, 4,
    "https://picsum.photos/200/301?id=37", 7, 4,
    "https://picsum.photos/200/301?id=38", 8, 4,
    "https://picsum.photos/200/301?id=39", 9, 4,
    "https://picsum.photos/200/301?id=40", 10, 4,
    "https://picsum.photos/200/301?id=41", 1, 5,
    "https://picsum.photos/200/301?id=42", 2, 5,
    "https://picsum.photos/200/301?id=43", 3, 5,
    "https://picsum.photos/200/301?id=44", 4, 5,
    "https://picsum.photos/200/301?id=45", 5, 5,
    "https://picsum.photos/200/301?id=46", 6, 5,
    "https://picsum.photos/200/301?id=47", 7, 5,
    "https://picsum.photos/200/301?id=48", 8, 5,
    "https://picsum.photos/200/301?id=49", 9, 5,
    "https://picsum.photos/200/301?id=50", 10, 5,
    "https://picsum.photos/200/301?id=51", 1, 6,
    "https://picsum.photos/200/301?id=52", 2, 6,
    "https://picsum.photos/200/301?id=53", 3, 6,
    "https://picsum.photos/200/301?id=54", 4, 6,
    "https://picsum.photos/200/301?id=55", 5, 6,
    "https://picsum.photos/200/301?id=56", 6, 6,
    "https://picsum.photos/200/301?id=57", 7, 6,
    "https://picsum.photos/200/301?id=58", 8, 6,
    "https://picsum.photos/200/301?id=59", 9, 6,
    "https://picsum.photos/200/301?id=60", 10, 6,
];

let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], table: [], sphere: [], helix: [], grid: []};

init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 2000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();
}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    addClickListener(targets.sphere, 'sphere');
    addClickListener(targets.helix, 'helix');
    addClickListener(targets.grid, 'grid');

}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 3) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        console.log(object)
        object.position.x = Math.random() * 4000 - 2000;
        console.log(object.position.x)
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}

function htmlElement(table, i) {
    
    let element = document.createElement('div');
    element.className = 'element';
    element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';

    let imgElement = document.createElement("img");
    imgElement.className = 'image';
    imgElement.src = table[i];
    element.appendChild(imgElement);

    element.addEventListener('click', ()=>elementClickHandler(i), false);

    return element;
}

function elementClickHandler(i){

    transform(targets.table,1000);

    new TWEEN.Tween(targets.simple[i / 3].position)
        .to({
            x: 0,
            y: 0,
            z: 1500
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 1] * 140) - 800;
    object.position.y = -(table[index + 2] * 180) + 690;
    targets.table.push(object);

}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addGridObject(i);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 8) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}

function addGridObject(index) {

    let object = new THREE.Object3D();
    object.position.x = ((index % 5) * 400) - 800;
    object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
    targets.grid.push(object);

}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}


function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    composer.render();
}
