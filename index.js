//carrega o botão de incluir o jogo no carrinho
const carrinho = document.getElementById("colocarnocarrinho")

//busca o JSON com os jogos e percorre pelo array para incluir os jogos
fetch("https://raw.githubusercontent.com/mucadlucca/BolaoJson/master/jogos.json").then((response) => {
  response.json().then((dados) => {
    for (let j = 0; j < 150; j++) {
      setTimeout(function timer() {
        const jogo = dados[j].Jogo.split(",")
        for (let i = 0; i < 15; i++) {
          const ID = "n" + jogo[i]
          const nID = document.getElementById(ID)
          nID.click()
        }
        carrinho.click()
      }, j * 3000)
    }
  })
})