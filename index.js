const btn = document.getElementById("btn");
const link = document.getElementById("links");
const closeBtn = document.getElementById("x");

btn.addEventListener("click", () => {
  link.style.display = 'flex';
  link.style.opacity = '0';
  link.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    link.style.opacity = '1';
  }, 10);
});
closeBtn.addEventListener("click", () => {
  link.style.opacity = '0';
  link.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    link.style.display = 'none';
  }, 500);
});
//Manipular dados dinâmicos
let nome = localStorage.getItem("nome")
if(nome){
let login = document.querySelector(".login")
login.style.height = '65px'
login.style.width = '65px'
login.style.borderRadius = '50px'
login.style.fontSize = '25pt'
login.style.fontFamily = 'Times new roman'
login.textContent = nome[0].toUpperCase()
  
  login.style.marginBottom = '15px';
  let cd = document.getElementById("cd")
  cd.href = "perfil.html"
  let text = document.getElementById("tex").style.display = 'none';
  let cd1 = document.getElementById("cd1")
  cd1.href = "perfil.html"
  cd1.textContent = "Ver meu Painel..."
}
let send = document.getElementById("send").addEventListener('click',() => {
let escolha = document.querySelector('input[name=opin]')

if(escolha){
  alert("Obrigado, a sua crítica é construtiva e nos ajuda crescer🚀🚀")
}else{
  alert("Você não selecionou um opção.")
}
})
document.querySelectorAll('.no').forEach(el => {
  el.addEventListener('click',()=> {
      const a = "Lamentamos, mas este programa esta actualmente em desenvolvimento, prometemos disponibilizar o mais rápido possível ☺️"
  const b = "Lamentamos, mas estamos desenvolvimento esta secção, explore outras☺️"
  const c = "Caro utilizador, esta secção está temporariamente indisponível, prometemos disponibilizar o mais rápido possível ☺️"
  let sort = Math.floor(Math.random() *3)
  if(sort == 1){
    alert(a)
  }else if(sort == 2){
    alert(b)
  }else if(sort == 3){
    alert(c)
  }else{
    alert(b)
  }
  })
}
)
