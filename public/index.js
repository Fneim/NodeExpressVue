new Vue({
  el: "#home",
  data: {
    seen: true,
    button: {
      txt: "Login"
    }
  },
  methods: {
    changeButtonTxt: function() {
      if(this.seen !== true) {
        this.button.txt = "Sign Up";
      } else {
        this.button.txt = "Login"
      }
    }
    }
});
