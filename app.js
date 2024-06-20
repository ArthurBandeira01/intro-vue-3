const myApp = {
    data () {
        return {
            title: 'Curso de Vue 3',
            name: 'Arthur',
            lastName: 'Bandeira',
            products: [
                {
                    title: 'Image 01',
                    description: 'Teste 01',
                    image: './assets/images/image1.jpg',
                    stars: 3
                },
                {
                    title: 'Image 02',
                    description: 'Teste 02',
                    image: './assets/images/image2.jpg',
                    stars: 0
                }
            ],
            cart: [],
            styles: {
                backgroundColor: 'black',
                color: 'white'
            },
            themeBlack: true
        }
    },

    computed: {
        fullName () {
            return this.name + ' ' + this.lastName
        }
    },

    methods: {
        addCart (product) {
            this.cart.push(product)
        },

        inCart (product) {
            return this.cart.indexOf(product) != -1
        },

        removeCart (product) {
            return this.cart = this.cart.filter((prod, index) => product != prod)
        },

        toogleTheme () {
            this.themeBlack = !this.themeBlack

            if (this.themeBlack) {
                this.styles.backgroundColor = '#000'
                this.styles.color = '#fff'
            } else {
                this.styles.backgroundColor = '#fff'
                this.styles.color = '#000'
            }
        }
    },
}

const app = Vue.createApp(myApp)