
//Estilo principal, com animações iniciais.
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

//Enviado o sms pra o watsaap
let t = document.querySelector(".t")
t.addEventListener('input',() => {
  let mensagem = document.getElementById("mensagem")
  var text = t.value;
  let sms = encodeURIComponent(text)
  mensagem.href='https://wa.me/244953386851?text='+sms
})



//gerenciando Os dados da conta.
let nome;
let sobr;
let curso;
let nivel;
let login = document.querySelector(".login")
  //pegando dados.
  nome = localStorage.getItem('nome')
  sobr = localStorage.getItem('sob')
  curso = localStorage.getItem('cursoSelect')
  nivel = localStorage.getItem('nivelSelect')
  console.log("Nome: "+nome)
  console.log("Sobrenome: "+sobr)
  console.log("Curso: "+ curso)
  console.log("Nivel: "+ nivel)
  
  
if(nome && sobr && nivel && curso){
  login.style.height = '65px'
  login.style.width = '65px'
  login.style.borderRadius = '50%'
  login.style.marginTop = '-30px'
  login.style.fontSize = '25pt'
  login.style.fontFamily = 'Times new roman'
  login.textContent = nome[0].toUpperCase()
  login.style.color = 'white'
  login.style.backgroundColor = '#0057FF'

  let tex = document.getElementById("tex").style.display = 'none'
  let cd = document.getElementById("cd")
  let cd1 = document.getElementById("cd1")
  cd.href = "#"
  cd1.href = "#"
  cd1.textContent = nome+" "+sobr+"... Ver minha conta."
  cd1.style.color = 'blue'
  cd1.classList.add("no")
}
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
