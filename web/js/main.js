var app = new Vue({
    el: '#app',
    data: {
        message: 'I can read your mnind!',
        symbols: '',
        answer: '',
        answerText: '',
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
                pageTitle: '',
                pageP1: 'Find your new number',
                pageP2: 'Note the symbol beside the number'
            },
            {
                pageId: 6,
                pageTitle: this.answer,
                pageP1: this.answerText,
                pageP2: ''
            }
        ],
        currentPage: 0,
        disableNext: false,
        showSymbols: false,
        showAnswer: false,
    },
    methods: {
        goToNextPage() {
            this.currentPage++;
            console.log(this.currentPage);
            if (this.currentPage == 4) {
                app.createSymbols();
            }
            if (this.currentPage == 5) {
                this.disableNext = true;
                this.showSymbols = false;
                this.showAnswer = true;
            }
        },
        createSymbols() {
            let arrSymbol = app.shuffleArray(["&", "^", "%", "$", "#", "@", "!", "*", "?"]);
            var str = "";
            console.log(arrSymbol);

            var k = 0;
            for (let i = 0; i <= 10; i++) {
                for (let j = 0; j < arrSymbol.length; j++) {

                    str += "<div class='row'>" + k + " - " + arrSymbol[j] + "</div>";
                    k++;
                }
            }
            str += "<div class='row'>" + k + " - " + arrSymbol[0] + "</div>";

            this.symbols = str;
            this.showSymbols = true;
            this.answer = arrSymbol[0];
            this.answerText = "Your symbol is " + arrSymbol[0];
            
            //console.log(this.symbols);
            //console.log(this.symbols[0]);
            //console.log(this.answer);
            //console.log(this.answerText);
            
        },
        shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
    }
})