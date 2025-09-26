const big_lists = document.querySelectorAll('.big-list');
const see_more_buttons = document.querySelectorAll('.see-more-button');

big_lists.forEach((big_list, index) => {
  const see_more_button = see_more_buttons[index];
  if (see_more_button) {
    see_more_button.addEventListener('click', () => {
      big_list.classList.toggle('opened');
    });
  }
});

const imagens = document.querySelectorAll('.imagem'); // Seleciona todas as imagens da galeria
const modal = document.getElementById('modalImagem'); // O modal onde a imagem será expandida
const imgExpandida = document.getElementById('imgExpandida'); // A tag de imagem dentro do modal
const fechar = document.getElementsByClassName('fechar')[0]; // Botão de fechar o modal
const body = document.querySelector('body'); // Corpo da página, para aplicar o blur

// Adiciona um evento de clique para cada imagem
imagens.forEach(imagem => {
  imagem.onclick = function() {
    // Usa o ID da imagem clicada para definir a imagem expandida
    const imagemID = this.id; // Pega o ID da imagem clicada
    
    // Aqui, usamos o caminho correto para as imagens. Ajuste conforme sua estrutura de diretórios.
    const imagemSrc = `/img/gallery/${imagemID}.webp`; 

    // Verifica se o caminho da imagem existe
    imgExpandida.src = imagemSrc;
    
    // Confirma que a imagem foi carregada corretamente
    imgExpandida.onload = function() {
      modal.style.display = "flex"; // Abre o modal de forma flexível para centralizar
    };

    // Caso a imagem não seja encontrada, mostra um erro
    imgExpandida.onerror = function() {
      alert("Imagem não encontrada!");
    }

    // Adiciona o blur no fundo
    body.classList.add('blur');
  };
});

// Função para fechar o modal
fechar.onclick = function() {
  modal.style.display = "none"; // Fecha o modal

  // Remove o blur do fundo
  body.classList.remove('blur');
};

// Fecha o modal se clicar fora da área da imagem expandida
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Fecha o modal
    
    // Remove o blur do fundo
    body.classList.remove('blur');
  }
};


//Função para executar apenas um vídeo por vez. 
const videos = document.querySelectorAll('.my-video');

videos.forEach(video => {
  video.addEventListener('play', () => {
    videos.forEach(otherVideo => {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    });
  });
});