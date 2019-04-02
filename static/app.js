const megaminxLink = document.querySelector('#megaminx-link');
const fisherCubeLink = document.querySelector('#fisher-cube-link');
const rubiksCubeLink = document.querySelector('#rubiks-cube-link');
const cubeImg = document.querySelector('#cube-img');
const title = document.querySelector('#title');
const subtitle = document.querySelector('#subtitle');
const text = document.querySelector('#text');

const handleMegaminx = () => {
  cubeImg.setAttribute('src', 'img/megaminx.jpg');
  megaminxLink.className = 'active';
  fisherCubeLink.className = 'deactivated';
  rubiksCubeLink.className = 'deactivated';
  title.innerHTML = 'Megaminx';
}

const handleFisherCube = () => {
  cubeImg.setAttribute('src', 'img/fishercube.png');
  fisherCubeLink.className = 'active';
  megaminxLink.className = 'deactivated';
  rubiksCubeLink.className = 'deactivated';
  title.innerHTML = 'Fisher Cube';
}

const handleRubiksCube = () => {
  cubeImg.setAttribute('src', 'img/rubikscube.jpg');
  rubiksCubeLink.className = 'active';
  megaminxLink.className = 'deactivated';
  fisherCubeLink.className = 'deactivated';
  title.innerHTML = 'Cubo Mágico';
}

megaminxLink.addEventListener('click', handleMegaminx);
fisherCubeLink.addEventListener('click', handleFisherCube);
rubiksCubeLink.addEventListener('click', handleRubiksCube);