let currentPage = 1;

function goToNextPage() {

    document.getElementById("page " + currentPage).style.display = 'none';
    currentPage++;
    document.getElementById("page " + currentPage).style.display = 'block';
    if (currentPage == 5) {
        createSymbols();
    }
}

function createSymbols() {
    let str = "";
    let obj = document.getElementById("symbols");
    let arrSymbol = shuffle(["&", "!", "@", "#", "$", "%", "^", "*", "?"]);

    let k =0;
    for (let i = 0; i < 11; i++) {

        for (let j = 0; j < arrSymbol.length; j++) {
            str+= "<div class='row'>" + k + "-" + arrSymbol[j] + "</div>";
            k++;
        }
    }
    str+= "<div class='row'>" + k + "-" + arrSymbol[0] + "</div>";
    obj.innerHTML = str;
    document.getElementById('answer').innerHTML = arrSymbol[0];
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }