// Função para criar as casas no mapa
function criarMapa() {
  const mapa = document.querySelector('.mapa');

  // Define as casas com suas formas e características
  const casas = [
    {
      id: 1,
      left: '0vw',
      top: '4vh',
      angle: 0,
      forma: 'square',
      width: 70,
      height: 90,
      borderRadius: '0%',
    },
    {
      id: 2,
      left: '8vw',
      top: '6vh',
      angle: -40,
      forma: 'square',
      width: 80,
      height: 120,
      borderRadius: '0%',
    },
    {
      id: 3,
      left: '8vw',
      top: '22vh',
      angle: 0,
      forma: 'rectangle',
      width: 270,
      height: 50,
      borderRadius: '0%',
    },
    {
      id: 4,
      left: '12.7vw',
      top: '30vh',
      angle: 0,
      forma: 'rectangle',
      width: 170,
      height: 110,
      borderRadius: '0%',
    },
    {
      id: 5,
      left: '8vw',
      top: '32.8vh',
      angle: 0,
      forma: 'rectangle',
      width: 65,
      height: 80,
      borderRadius: '0%',
    },
    {
      id: 6,
      left: '11vw',
      top: '45vh',
      angle: 0,
      forma: 'square',
      width: 75,
      height: 80,
      borderRadius: '0%',
    },
    {
      id: 7,
      left: '18vw',
      top: '45vh',
      angle: 0,
      forma: 'rectangle',
      width: 90,
      height: 110,
      borderRadius: '0%',
    },
    {
      id: 8,
      left: '14.2vw',
      top: '60vh',
      angle: 0,
      forma: 'rectangle',
      width: 170,
      height: 60,
      borderRadius: '0%',
    },
    {
      id: 9,
      left: '30vw',
      top: '14vh',
      angle: 0,
      forma: 'rectangle',
      width: 340,
      height: 200,
      borderRadius: '0%',
    },
    {
      id: 10,
      left: '50vw',
      top: '21.5vh',
      angle: 0,
      forma: 'rectangle',
      width: 240,
      height: 120,
      borderRadius: '0%',
    },
    {
      id: 11,
      left: '30vw',
      top: '42vh',
      angle: 0,
      forma: 'rectangle',
      width: 260,
      height: 180,
      borderRadius: '0%',
    },
    {
      id: 12,
      left: '32vw',
      top: '67vh',
      angle: 0,
      forma: 'rectangle',
      width: 120,
      height: 80,
      borderRadius: '0%',
    },
    {
      id: 13,
      left: '45vw',
      top: '47vh',
      angle: 0,
      forma: 'rectangle',
      width: 280,
      height: 90,
      borderRadius: '0%',
    },
    {
      id: 14,
      left: '68vw',
      top: '40vh',
      angle: 4,
      forma: 'rectangle',
      width: 180,
      height: 80,
      borderRadius: '0%',
    },
  ];

  // Loop para criar todas as casas com suas formas, posições, ângulos e tamanhos
  casas.forEach((casa) => {
    const divCasa = document.createElement('div');
    divCasa.classList.add('casa');
    divCasa.id = 'casa' + casa.id;
    divCasa.textContent = casa.id; // Colocando o número da casa no centro

    // Aplicando posições e ângulos
    divCasa.style.left = casa.left;
    divCasa.style.top = casa.top;
    divCasa.style.transform = `rotate(${casa.angle}deg)`;

    // Aplicando forma, tamanho e borda
    divCasa.style.borderRadius = casa.borderRadius;
    divCasa.style.width = casa.width + 'px';
    divCasa.style.height = casa.height + 'px';

    mapa.appendChild(divCasa);
  });
}

// Função para mudar a cor de uma casa com base no número da casa e a cor desejada
function mudarCor(idCasa, cor) {
  const casa = document.getElementById('casa' + idCasa);
  if (casa) {
    casa.style.backgroundColor = cor;
  }
}

// Chama a função para criar o mapa assim que a página carregar
window.onload = () => {
  criarMapa();

  // Definindo as cores das casas diretamente no JS
  mudarCor(1, 'red');
  mudarCor(2, 'green');
  mudarCor(3, 'green');
  mudarCor(4, 'green');
  mudarCor(5, 'green');
  mudarCor(6, 'red');
  mudarCor(7, 'yellow');
  mudarCor(8, 'green');
  mudarCor(9, 'green');
  mudarCor(10, 'green');
  mudarCor(11, 'red');
  mudarCor(12, 'green');
  mudarCor(13, 'green');
  mudarCor(14, 'green');
};
