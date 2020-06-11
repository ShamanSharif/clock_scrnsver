var app = new Vue({
  el: "#app",
  data: {
    message: "made with ❤️ by shaman.sharif",
    hours: 99,
    minutes: 99,
    seconds: 99,
    format: "",
  },
  created: function () {
    setInterval(() => {
      this.getTime();
    }, 1000);
  },
  methods: {
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
  },
});
