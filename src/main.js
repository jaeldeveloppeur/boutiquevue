import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  data: {
    products: [{
      id: '1',
      img: '',
      title: 'MacBook',
      description: 'Conçu pour ceux qui repoussent les limites du possible, le nouveau MacBook Pro est de loin l’ordinateur portable le plus puissant que nous ayons jamais créé.',
      price: 1500
    },
    {
      id: '2',
      img: '',
      title: 'Predator',
      description: 'Conçu pour ceux qui repoussent les limites du possible, le nouveau MacBook Pro est de loin l’ordinateur portable le plus puissant que nous ayons jamais créé.',
      price: 2300
    },
    {
      id: '3',
      img: '',
      title: 'Asus ROG G703',
      description: 'Conçu pour ceux qui repoussent les limites du possible, le nouveau MacBook Pro est de loin l’ordinateur portable le plus puissant que nous ayons jamais créé.',
      price: 1800
    },
    {
      id: '4',
      img: '',
      title: 'MacBook',
      description: 'Graphics are handled by an overclockable',
      price: 1500
    },
    {
      id: '5',
      img: '',
      title: 'MacBook',
      description: 'Conçu pour ceux qui repoussent les limites du possible, le nouveau MacBook Pro est de loin l’ordinateur portable le plus puissant que nous ayons jamais créé.',
      price: 1500
    },
    ],
    cart: [
      
    ]

  },
  methods: {
    addProductToCart(product) {
      if(!this.cart.map( i => i.id).includes(product.id)){
        this.cart = [...this.cart, product];
        this.$emit('update:cart', this.cart.slice());
      }
    },
    removeItemFromCart(item){
      this.cart = this.cart.slice().filter( i => i.id !== item.id );
      this.$emit('update:cart', this.cart.slice());
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
