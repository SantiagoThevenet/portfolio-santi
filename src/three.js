import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';


document.addEventListener("DOMContentLoaded", function () {
  const initScene = () => {
    const scene = new THREE.Scene();
    const texture = new THREE.TextureLoader().load('/src/assets/img/earth.jpg');
    const geometry = new THREE.SphereGeometry(6, 64, 64);

    const material = new THREE.MeshStandardMaterial({
      color: "#fff",
      roughness: 0.2,
      map: texture
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const sizes = {
      width: window.innerWidth < 650 ? 350 : 600,
      height: window.innerWidth < 650 ? 350 : 600
    };


    const resizeSphere = () => {
      if (window.innerWidth < 650) {
        mesh.scale.set(0.5, 0.6, 0.6); // Modifica los valores de escala según tu necesidad
      } else {
        mesh.scale.set(1, 1, 1); // Tamaño original de la esfera
      }
    };

    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      resizeSphere();
    };

    window.addEventListener('resize', handleResize);

    resizeSphere();
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    light.intensity = 1;
    scene.add(light);

    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 20;
    scene.add(camera);

    const canvas = document.querySelector('.webgl');
    const upanimation = document.querySelector('.upanimation');
    canvas.style.backgroundColor = 'transparent';

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;

    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    };
    loop();

    const tl = gsap.timeline({ defaults: { duration: 2 } });
    tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
  };

  initScene();

});
