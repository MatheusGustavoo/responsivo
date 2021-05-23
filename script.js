const imagens = document.querySelectorAll('.js-div li')
const frase = document.querySelectorAll('.descr-1 img')
frase[0].classList.add('ativo')

function navTab(index){
  frase.forEach((remover) =>{
    remover.classList.remove('ativo')
  });
  frase[index].classList.add('ativo');
}

imagens.forEach((img, index) =>{
  img.addEventListener('click', function(){
    navTab(index)
  })
})

console.log(imagens.index)
