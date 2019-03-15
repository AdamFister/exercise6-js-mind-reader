var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        pages: [
            {
                pageId: 1,
                pageTitle: 'I can read your mind',
                pageP1: '',
                pageP2: ''
            },
            {
                pageId: 2,
                pageTitle: 'Pick a number from 01 - 99',
                pageP1: 'When you have your number click next',
                pageP2: ''
            },
            {
                pageId: 3,
                pageTitle: 'Add both digits together to get a new number',
                pageP1: 'Ex: 14 is 1 + 4 = 5',
                pageP2: 'Click next to proceed'
            },
            {
                pageId: 4,
                pageTitle: 'Subtract your new number from the original number',
                pageP1: 'Ex: 14 - 5 = 9',
                pageP2: 'Click next to proceed'
            },
            {
                pageId: 5,
                pageTitle: 'I can read your mind',
                pageP1: 'Find your new number',
                pageP2: 'Note the symbol beside the number'
            },
            {
                pageId: 6,
                pageTitle: '',
                pageP1: '',
                pageP2: ''
            }
        ],
        currentPage: 0,
        disableNext: false,
        arrSymbol: ["&", "^", "%", "$", "#", "@", "!", "*", "?"]

    },
    methods: {
        goToNextPage() {
            this.currentPage++;
            console.log(this.currentPage);
            // if (this.currentPage == 4) {
            //     app.createSymbols();
            //     //console.log(arrSymbol);
            // }
            if (this.currentPage == 5) {
                this.disableNext = true;
            }
        },

        shuffledArray: function () {
            for (var i = this.arrSymbol.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = this.arrSymbol[i];
                this.arrSymbol[i] = this.arrSymbol[j];
                this.arrSymbol[j] = temp;
                return this.arrSymbol;
                // var str = "";
                // var obj = document.getElementById("symbolsHere");


                // var k = 0;
                // for (let i = 0; i <= 10; i++) {
                //     for (let j = 0; j < arrSymbol.length; j++) {

                //         str += "<div class='row'>" + k + " - " + arrSymbol[j] + "</div>";
                //         k++;
                //     }
                // }
                // str += "<div class='row'>" + k + " - " + arrSymbol[0] + "</div>";

                // console.log(str);
                // obj.innerHTML = str;

                // document.getElementById('answer').innerHTML = arrSymbol[0];
                // document.getElementById('answerText').innerHTML = "Your symbol is " + arrSymbol[0];


            }
        
    }}})