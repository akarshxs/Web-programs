const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 800;

const settings = {
  particleGap: isMobile ? 6 : 4,
  particleSize: isMobile ? 3 : 2,
  mouseForce: 40,
  noise: 25,
  layerCount: isMobile ? 1 : 2,
  layerDistance: 4,
  heartBeat: true,
  particleColor: '#00e5ff' // Blue Neon Color
};

const heart = new NextParticle({
  renderer: 'webgl',
  image: document.querySelector('#valentines'),
  width: window.innerWidth,
  height: window.innerHeight,
  particleGap: settings.particleGap,
  particleSize: settings.particleSize,
  mouseForce: settings.mouseForce,
  noise: settings.noise,
  layerCount: settings.layerCount,
  layerDistance: settings.layerDistance,
  color: settings.particleColor
});

function redraw() {
  heart.particleGap = settings.particleGap;
  heart.particleSize = settings.particleSize;
  heart.mouseForce = settings.mouseForce;
  heart.noise = settings.noise;
  heart.layerCount = settings.layerCount;
  heart.layerDistance = settings.layerDistance;
  heart.width = window.innerWidth;
  heart.height = window.innerHeight;
  heart.start();
}

window.addEventListener('resize', () => {
  redraw();
});
