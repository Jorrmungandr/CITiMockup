//Todas as declarações bem bonitas pra eu n precisar escrever isso tudo :C
const megaminxLink = document.querySelector('#megaminx-link');
const fisherCubeLink = document.querySelector('#fisher-cube-link');
const rubiksCubeLink = document.querySelector('#rubiks-cube-link');
const cubeImg = document.querySelector('#cube-img');
const title = document.querySelector('#title');
const subtitle = document.querySelector('#subtitle');
const text = document.querySelector('#text');
const price = document.querySelector('#price');

//Quando eu clico no link do megaminx...
const handleMegaminx = () => {
  //A imagem
  cubeImg.setAttribute('src', 'https://5.imimg.com/data5/SI/GC/MY-6975226/megaminx-stickerless-3d-puzzle-educational-intellectual-learning-toy-500x500.jpg');
  //As classes ativadas e desativadas cada vez que troca
  megaminxLink.className = 'active';
  fisherCubeLink.className = 'deactivated';
  rubiksCubeLink.className = 'deactivated';
  //Título, Subtítulo, Texto do Parágrafo e o Preço
  title.innerHTML = '<a href="https://www.google.com.br/search?client=opera&q=megaminx&sourceid=opera&ie=UTF-8&oe=UTF-8" target="_blank">Megaminx</a>';
  subtitle.innerHTML = `
  O Megaminx é um quebra-cabeça em forma de dodecaedro similar ao <a href="https://www.google.com.br/search?client=opera&q=Cubo+Mágico+3x3&sourceid=opera&ie=UTF-8&oe=UTF-8" target="_blank" >Cubo Mágico 3x3</a>.
  `;
  text.innerHTML = `
  Ele tem um total de 50 peças móveis para serem arrumadas, em comparação com as 20 peças móveis do Cubo Mágico 3x3.
  `;
  price.innerHTML = ` R$49,99 `;
}

//..No link do Fisher Cube...
const handleFisherCube = () => {
  cubeImg.setAttribute('src', 'https://cdn.shopify.com/s/files/1/1710/6615/products/41DQcW50V2L.jpg?v=1545294663');
  fisherCubeLink.className = 'active';
  megaminxLink.className = 'deactivated';
  rubiksCubeLink.className = 'deactivated';
  title.innerHTML = '<a href="https://www.google.com.br/search?client=opera&hs=u03&ei=X_ClXNaJG_fC5OUP7pK16AY&q=fisher+cube&oq=fisher+cube&gs_l=psy-ab.3..35i39l2j0l2j0i7i30l6.860.860..1751...0.0..0.143.143.0j1......0....1..gws-wiz.......0i71.lJ74cjHjKW0" target="_blank">Fisher Cube</a>';
  subtitle.innerHTML = `
    O Fisher Cube é um puzzle rotacional metamorfo criado por <a href="https://en.wikipedia.org/wiki/Tony_Fisher_(puzzle_designer)" target="_blank" >Tony Fisher</a>. 
  `;
  text.innerHTML = `
    Ele tem um estilo fragmentado que deixa a impressão de dificuldade mas na verdade ele possui apenas alguns níveis de dificuldade a mais que o Cubo Mágico normal.
  `;
  price.innerHTML = ` R$54,99 `;
}

//...E o do Cubo Normal
const handleRubiksCube = () => {
  cubeImg.setAttribute('src', 'https://tz.jumia.is/9vsNVcwber1X1vGdIDHI2CAZQio=/fit-in/500x500/filters:fill(white):sharpen(1,0,false):quality(100)/product/95/703/1.jpg?9274');
  rubiksCubeLink.className = 'active';
  megaminxLink.className = 'deactivated';
  fisherCubeLink.className = 'deactivated';
  title.innerHTML = '<a href="https://www.google.com.br/search?client=opera&hs=l13&ei=lPClXJLoNPqz5OUP9OqK4AY&q=Cubo+Mágico&oq=Cubo+Mágico&gs_l=psy-ab.3..35i39j0l2j0i67j0i131j0l5.2478.2478..2652...0.0..0.141.141.0j1......0....1..gws-wiz.......0i71.dFgGpIjPZgw" target="_blank">Cubo Mágico</a>';
  subtitle.innerHTML = `
    O Cubo Mágico ou Cubo de Rubik é um puzzle inventado em 1974 por <a href="https://pt.wikipedia.org/wiki/Ernő_Rubik" target="_blank">Ernõ Rubik</a>.
  `;
  text.innerHTML = `
    É um quebra cabeça que ajuda a evoluir a capacidade de imaginação tridimensional e lógica do usuário.
  `;
  price.innerHTML = ` R$39,99 `;
}

//Linkando os eventos de click
megaminxLink.addEventListener('click', handleMegaminx);
fisherCubeLink.addEventListener('click', handleFisherCube);
rubiksCubeLink.addEventListener('click', handleRubiksCube);