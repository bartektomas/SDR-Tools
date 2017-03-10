new Vue({
  el: '#app',
  data() {
    return {
      password: '',
      type: 'strong',
      length: 15,
      count: 0
    }
  },
  computed: {
    password: function() {
      this.count++ // just used for generating another password via vue dependency
      if(this.length >= 1 && this.count) {
        return this.generate()
      }
      else {
        return ""
      }
    }
  },
  watch: {
    type: function() {
      if(this.type == 'strong' || this.type == 'alphanumeric')
        this.length = 15
      else
        this.length = 3
    }
  },
  methods: {
    generate: function() {
      var pass = ''
      switch(this.type) {
        case 'strong':
          pass = passhelp.character(this.length, passhelp.alphabets.full_friendly);
        break;
        case 'alphanumeric':
          pass = passhelp.character(this.length, passhelp.alphabets.alphanumeric, true);
        break;
        case 'phrase':
          pass = passhelp.phrase(this.length);
        break;
        case 'phrase_special_chars':
          pass = passhelp.phrase(this.length, true);
        break;
      }
      return pass
    },
    copy: function() {

    },
  }
})