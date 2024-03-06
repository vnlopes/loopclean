const banho = document.querySelector("#banho-ck");
    const escovar = document.querySelector("#escovar-ck");
    const tosa = document.querySelector("#tosa-ck");
    const person = document.querySelector("#user");
    const pet = document.querySelector("#pet");
    const instant = document.querySelector(".instant")
    const carrinho = document.querySelector(".carrinho")

    const main = () => {
      let bolha = document.querySelector('.bolha').style = "display: none";
      const instant = document.querySelector(".instant").style =
        "display: flex;";
      const cadTb = document.querySelector(".cadastro").style =
        "display: none;";
        let boxCar = document.querySelector('.box-car').style = "display: flex;"
        let mainHeader = document.querySelector('.main-header').style = "justify-content: space-between;"
    };

    const cadastro = () => {
      if (person.value == "" || pet.value == "") {
        alert("Preencha os campos corretamente!");
      } else {
        const msgCad = document.querySelector(".cad-rl").style =
          "display: flex;";
        const bttCad = document.querySelector(".bttCad").style =
          "visibility: hidden;";
        const bttMain = document.querySelector(".box-arrow").style =
          "display: flex;";
        pessoaAnimal.pessoa = person.value;
        pessoaAnimal.cachorro = pet.value;
        const recebePet = document.querySelector(".recebe-pet").innerHTML =
          pessoaAnimal.cachorro;
        const recebeNome = document.querySelector(".recebe-nome").innerHTML =
          pessoaAnimal.pessoa;
      }
    };


    let pessoaAnimal = [(pessoa = ""), (cachorro = "")];

    console.log(pessoaAnimal);

    const addBanho = () => {
      banho.checked = true;
      let msgTop = document.querySelector('#addToCart-banho').classList.add('aparece');
    };

    const addTosa = () => {
      tosa.checked = true;
      let msgTop = document.querySelector('#addToCart-tosa').classList.add('aparece');
    };

    const addEscovar = () => {
      escovar.checked = true;
      let msgTop = document.querySelector('#addToCart-escova').classList.add('aparece');
    };

    const check = () => {
      // let soma = document.querySelector(".total-price");
      // let finalValue = 0;
      // let whatProduct = '';

      // if (banho.checked == true) {
      //   finalValue += 99.99;
      //   whatProduct += 'Banho;';
      // }

      // if (tosa.checked == true) {
      //   finalValue += 79.99;
      //   whatProduct += ' Tosa;';
      // }

      // if (escovar.checked == true) {
      //   finalValue += 29.99;
      //   whatProduct += ' Escovação.';
      // }

      // if (
      //   banho.checked == false &&
      //   tosa.checked == false &&
      //   escovar.checked == false
      // ) {
      //   alert("Você deve selecionar pelomenos uma opção!");
      // }
      // console.log(finalValue)
      // soma.innerHTML = 'R$' + finalValue.toFixed(2);
      // let products = document.querySelector('.products').innerHTML = whatProduct;
    };

    const partTwo = () => {
      let finalValue = 0;
      let whatProduct = '';

      if (banho.checked == true) {
        finalValue += 99.99;
        whatProduct += 'Banho;';
        // let msgTop = document.querySelector('#addToCart').classList.add('aparece')
      }

      if (tosa.checked == true) {
        finalValue += 79.99;
        whatProduct += ' Tosa;';
      }

      if (escovar.checked == true) {
        finalValue += 29.99;
        whatProduct += ' Escovação.';
      }

      if (
        banho.checked == false &&
        tosa.checked == false &&
        escovar.checked == false
      ) {
        alert("Você deve selecionar pelomenos uma opção!");
      }else{
      console.log(finalValue)
      let soma = document.querySelector(".total-price");
      instant.style = "display: none;"
      carrinho.style = "display: flex"
      soma.innerHTML = 'R$' + finalValue.toFixed(0);
      let products = document.querySelector('.products').innerHTML = whatProduct;
      let bolha = document.querySelector('.bolha').style = "display: flex";
    }
  }