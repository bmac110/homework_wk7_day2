import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      currencies: [],
      selectedCurrency: null,
      selectedCurrency2: null,
      amount: null
    },

    computed: {
      convertCurrency: function(){
        return ((this.amount * this.selectedCurrency2)/(this.selectedCurrency)).toFixed(2);

      },
      //   convertCurrency2: function(){
      //     return ((this.amount * this.selectedCurrency)/(this.selectedCurrency2)).toFixed(2);
      //
      // }
    },

    mounted() {
      this.fetchRates();
    },

    methods: {
      fetchRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(data => this.currencies = data.rates)
      }
    }
  });
})
