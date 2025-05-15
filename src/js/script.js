const pratos = [
    {
      imagem: './src/assets/imagem1.jpg',
      titulo: 'Taco Loco',
      descricao: 'Muito sabor pra você se sentir no México!'
    },
    {
      imagem: './src/assets/imagem2.jpg',
      titulo: 'Burrito Especial',
      descricao: 'Uma explosão de sabor com toque mexicano.'
    },
    {
      imagem: './src/assets/imagem3.jpg',
      titulo: 'Tortilla',
      descricao: 'Crocrantes e irresistíveis, com guacamole fresco.'
    },
    {
        imagem: './src/assets/imagem4.jpg',
        titulo: 'Quesadilla',
        descricao: 'Uma deliciosa tortilla crocante recheada com queijo derretido e um toque especial de pimenta mexicana.'
    },
    {
        imagem: './src/assets/imagem5.jpg',
        titulo: 'Nacho e Guaccamole',
        descricao: 'Nachos crocantes com guacamole fresco.'
    }
  ];
  
  let indice = 0;
  
  // Elementos HTML
  const img = document.getElementById('imagem-cardapio');
  const titulo = document.getElementById('titulo-cardapio');
  const descricao = document.getElementById('descricao-cardapio');
  
  // Função para trocar os dados
  function trocarPrato() {
    indice = (indice + 1) % pratos.length;
    img.src = pratos[indice].imagem;
    titulo.textContent = pratos[indice].titulo;
    descricao.textContent = pratos[indice].descricao;
  }
  
  // Intervalo automático
  setInterval(trocarPrato, 4000);
  
  // Redirecionamento
  function irParaCardapio() {
    window.location.href = '../pages/cardapio.html';
  }
  