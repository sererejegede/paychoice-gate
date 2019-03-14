window.onload = () => {
  var paychoiceGate = new Vue({
    el: '#paychoice-gate',
    data: {
      current_tab: 'tab-one',
      current_stage: 'one'
    },
    computed: {
      
    },
    methods: {
      switchTab(tab) {
        this.current_tab = tab;
      },
      currentTab(tab) {
        return {
          'shadow': this.current_tab === tab,
          'active-tab': this.current_tab === tab
        }
      }
    },
    mounted() {
      console.log('Vue initialized');
    }
  })
}

console.log('We are here');