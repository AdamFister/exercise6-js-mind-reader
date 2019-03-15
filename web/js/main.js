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
    },
    methods: {
        goToNextPage() {
            this.currentPage++;
            
            if (this.currentPage == 6) {
                console.log(this.disableNext);
                this.disableNext = true;
                console.log(this.disableNext);
                //return this.disableNext;
            }
        }
    }
})