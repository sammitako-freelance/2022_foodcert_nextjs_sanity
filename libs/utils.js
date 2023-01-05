export const debounce = (func, wait, immediate) => {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timeout);
    if (immediate && !timeout) func.apply(context, args);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
  };
};

export const throttle = (callback, delay) => {
  let timer = null;
  return () => {
    if (timer) return;
    timer = window.setTimeout(() => {
      callback();
      timer = null;
    }, delay);
  };
};

// ChannelService.js
// https://developers.channel.io/docs/web-installation

class ChannelService {
  constructor() {
    this.loadScript();
  }

  loadScript() {
    var w = window;
    if (w.ChannelIO) {
      return;
    }
    var ch = function () {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function (args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
      s.charset = "UTF-8";
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === "complete") {
      l();
    } else if (window.attachEvent) {
      window.attachEvent("onload", l);
    } else {
      window.addEventListener("DOMContentLoaded", l, false);
      window.addEventListener("load", l, false);
    }
  }

  boot(settings) {
    window.ChannelIO("boot", settings);
  }

  shutdown() {
    window.ChannelIO("shutdown");
  }
}

export default ChannelService;
