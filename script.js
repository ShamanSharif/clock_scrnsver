var app = new Vue({
  el: "#app",
  data: {
    message: "made with ❤️ by shaman.sharif",
    hours: 99,
    minutes: 99,
    seconds: 99,
    format: "",
    upHere: false,
    isDark: false,
    moon: "./image/moon_dim.png",
    quotes: {},
  },
  beforeCreate: function () {
    setInterval(() => {
      this.getTime();
    }, 1000);
    setInterval(() => {
      this.getQuotes();
    }, 30000);
  },
  methods: {
    async getQuotes() {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://morning-earth-07825.herokuapp.com/api/randomQuotes/`
      );
      this.quotes = response.data;
      // this.message = this.quotes[0].body;
    },
    getTime: function () {
      var d = new Date();
      let _hours = d.getHours();
      let _minutes = d.getMinutes();
      let _seconds = d.getSeconds();
      if (_hours >= 12) {
        if (_hours != 12) {
          _hours = _hours - 12;
        }
        this.format = "PM";
      } else if (_hours == 0) {
        _hours = 12;
        this.format = "AM";
      } else {
        this.format = "AM";
      }
      this.hours = _hours;
      if (_minutes < 10) {
        this.minutes = "0" + _minutes;
      } else {
        this.minutes = _minutes;
      }
      if (_seconds < 10) {
        this.seconds = "0" + _seconds;
      } else {
        this.seconds = _seconds;
      }
    },
    darkModeToggle: function () {
      if (this.isDark == false) {
        this.isDark = true;
        this.moon = "./image/moon_lit.png";
      } else {
        this.isDark = false;
        this.moon = "./image/moon_dim.png";
      }
    },
  },
});
