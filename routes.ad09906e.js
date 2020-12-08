// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/about.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = about;

function about() {
  console.log("About");
  var content = document.querySelector("#main");
  content.innerHTML = "<div class=\"mainContent\">\n  <header>\n     <h1>About celebration</h1>\n  </header>\n\n  <p>The holiday of Mardi Gras is celebrated in all of Louisiana, including the city of New Orleans. Celebrations are concentrated for about two weeks before and through Shrove Tuesday, the day before Ash Wednesday (the start of lent in the Western Christian tradition). Usually there is one major parade each day (weather permitting); many days have several large parades. The largest and most elaborate parades take place the last five days of the Mardi Gras season. In the final week, many events occur throughout New Orleans and surrounding communities, including parades and balls (some of them masquerade balls).\n  </p>\n  <div id=\"placehold\"></div>\n\n   <div class=\"aboutmayor\">\n      <p><img src=\"\"> LaToya Cantrell (born April 3, 1972) is an American politician serving as the Mayor of New Orleans, Louisiana, a post she has held since May 7, 2018. Cantrell, a Democrat, is the first black woman to hold the post. Before becoming mayor, Cantrell represented District B on the New Orleans City Council from 2012\u20132018.Cantrell was inaugurated as mayor on May 7, 2018, the first woman to hold the position in the city's history.As part of that initiative, in October 2018 the City of New Orleans filed a lawsuit against four opioid manufactures and distributors.\n      </p>\n      \n    </div>\n\n  </div>";
}
},{}],"js/faq.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = faq;

function faq() {
  console.log("FAQ");
  var content = document.querySelector("#main");
  content.innerHTML = "<div class=\"mainContent\">\n  \n  <header>\n  <h1>Frequantly asked question's</h1>\n  </header>\n\n<div id=\"accordion\">\n\n  <div class=\"card\">\n      <div class=\"card-header\" id=\"headingOne\">\n        <h5 class=\"mb-0\">\n          <button class=\"btn btn-link\" data-toggle=\"collapse\" style=\"color:white;\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n            When the MARDI GRASS?\n          </button>\n        </h5>\n      </div>\n\n    <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n      In 2021, Mardi Gras Day is February 16. Fat Tuesday is the last day of the Carnival season as it always falls the day before Ash Wednesday, the first day of Lent.     \n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"card\">\n  <div class=\"card-header\" id=\"headingTwo\">\n    <h5 class=\"mb-0\">\n      <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" style=\"color:white;\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n      More About Mardi Gras In New Orleans?\n      </button>\n    </h5>\n  </div>\n\n<div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n  <div class=\"card-body\">\n  The origins of Mardi Gras can be traced to medieval Europe, passing through Rome and Venice in the 17th and 18th centuries to the French House of the Bourbons. From here, the traditional revelry of \"Boeuf Gras,\" or fatted calf, followed France to her colonies.     \n  </div>\n</div>\n\n</div>\n\n\n\n<div class=\"card\">\n      <div class=\"card-header\" id=\"headingTre\">\n        <h5 class=\"mb-0\">\n          <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" style=\"color:white;\" data-target=\"#collapseTre\" aria-expanded=\"true\" aria-controls=\"collapseTre\">\n          A King Cake?\n          </button>\n        </h5>\n      </div>\n\n    <div id=\"collapseTre\" class=\"collapse\" aria-labelledby=\"headingTre\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n      Mardi Gras and king cakes go hand in hand \u2013 especially in New Orleans where hundreds of thousands of king cakes are enjoyed at parties, offices and in homes every year.   \n      </div>\n    </div>\n\n  </div>\n\n\n  <div class=\"card\">\n  <div class=\"card-header\" id=\"headingFour\">\n    <h5 class=\"mb-0\">\n      <button class=\"btn btn-link collapsed\" data-toggle=\"collapse\" style=\"color:white;\" data-target=\"#collapseFour\" aria-expanded=\"true\" aria-controls=\"collapseFour\">\n      Twelfth Night\n      </button>\n    </h5>\n  </div>\n\n<div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFor\" data-parent=\"#accordion\">\n  <div class=\"card-body\">\n  That's because the day that to most of the world is the twelfth and final day of Christmas is recognized here as Twelfth Night, the first day of the Carnival season.     \n  </div>\n</div>\n\n</div>\n</div>\n\n<div id=\"placehold\">\n \n</div>\n\n<h2 style=\"margin:20px\">GAME DAY WITH A TASTE OF LOUISIANA</h2>\n<iframe src=\"https://walk-ons.com/\" style=\"width:60vw; height:250px; margin:20px\"></iframe>\n\n  </div>";
}
},{}],"js/media.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = media;

function media() {
  console.log("Media");
  var content = document.querySelector("#main");
  content.innerHTML = "<div class=\"mainContent\">\n  <header>\n     <h1>Our Gallery</h1>\n  </header>\n  <div class=\"gallery\">\n  <a data-fancybox=\"gallery\" href=\"/images/firstbig.png\"\n  ><img src=\"/1.a7f2b1ea.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/secondbig.png\"\n  ><img src=\"/images/second.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/thirthbig.png\"\n  ><img src=\"/images/third.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/fourthbig.png\"\n  ><img src=\"/images/fourth.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/fifthbig.png\"\n  ><img src=\"/images/fifth.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/sixstbig.png\"\n  ><img src=\"/images/sixst.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/seventhbig.png\"\n  ><img src=\"/images/seventh.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/8big.png\"\n  ><img src=\"/images/8.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/9big.png\"\n  ><img src=\"/images/9.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/10big.png\"\n  ><img src=\"/images/10.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/11big.png\"\n  ><img src=\"/images/11.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/12big.png\"\n  ><img src=\"/images/12.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/13big.png\"\n  ><img src=\"/images/13.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/14big.png\"\n  ><img src=\"/images/14.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/15big.png\"\n  ><img src=\"/images/15.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/16big.png\"\n  ><img src=\"/images/16.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/17big.png\"\n  ><img src=\"/images/17.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/18big.png\"\n  ><img src=\"/images/18.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/19big.png\"\n  ><img src=\"/images/19.png\"\n/></a>\n<a data-fancybox=\"gallery\" href=\"/images/20big.png\"\n  ><img src=\"/images/20.png\"\n/></a> \n\n\n</div>\n\n  <div id=\"placehold\"></div>\n\n\n<div>\n<iframe src=\"https://www.youtube.com/embed/hzj1Hwa_6A8\" allowfullscreen style=\"width:250px; height:200px; margin:10px;\"></iframe>\n\n<iframe src=\"https://www.youtube.com/embed/9Bv1mFl9SI4\" allowfullscreen style=\"width:250px; height:200px; margin:10px;\"></iframe>\n\n\n<iframe src=\"https://www.youtube.com/embed/EkIZwXbSh-Y\" allowfullscreen style=\"width:250px; height:200px; margin:10px;\"></iframe>\n\n\n<iframe src=\"https://www.youtube.com/embed/cT5vnPybf3Y\" allowfullscreen style=\"width:250px; height:200px; margin:10px;\"></iframe>\n\n<iframe src=\"https://www.youtube.com/embed/VgiAXlX9PPM\" allowfullscreen style=\"width:250px; height:200px; margin:10px;\"></iframe>\n\n<iframe src=\"https://www.youtube.com/embed/PcjLTrUDF3w\" allowfullscreen style=\"width:250px; height:200px; margin:10px;\"></iframe>\n\n</div> \n\n\n  </div>";
}
},{}],"js/contacts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contacts;

function contacts() {
  console.log("Contacts");
  var content = document.querySelector("#main");
  content.innerHTML = "<div class=\"mainContent\">\n  <header>\n  <h1>Contact us...</h1>\n  </header>\n  <h3>we were glad to hear from you...</h3>\n  <form name=\"myForm\" action=\"\" role=\"form\">\n  <label class=\"form-label\" id=\"nameLabel\" for=\"name\"></label>\n  <input\n    type=\"text\"\n    class=\"form-control\"\n    id=\"name\"\n    name=\"name\"\n    placeholder=\"Your name\"\n  />\n\n  <label class=\"form-label\" id=\"emailLabel\" for=\"email\"></label>\n  <input\n    type=\"email\"\n    class=\"form-control\"\n    id=\"email\"\n    name=\"email\"\n    placeholder=\"Your Email\"\n  />\n\n  <label class=\"form-label\" id=\"messageLabel\" for=\"message\"></label>\n  <textarea\n    rows=\"6\"\n    cols=\"60\"\n    name=\"message\"\n    class=\"form-control\"\n    id=\"message\"\n    placeholder=\"Your message\"\n  ></textarea>\n\n  <div class=\"text-center mt-5\">\n    <button type=\"submit\" class=\"btn btn-mod btn-border btn-large\">\n      Send Message\n    </button>\n  </div>\n</form>\n\n\n<div id=\"placehold\"></div>\n\n  </div>";
}
},{}],"js/home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = home;

function home() {
  console.log("HOME");
  var content = document.querySelector("#main");
  content.innerHTML = "\n  <div class=\"mainContent\">\n<header>  <h1>Mardi Gras in New Orleans</h1>\n</header>\n  <p>\n  Mardi Gras is about music, parades, picnics, floats and excitement. It's one big holiday in New Orleans!\n\nRevelers know to wear costumes or at least dress in purple, green, and gold, and adorn themselves with long beads caught from the floats of previous parades. You'll see a lot of crazy costumes, kids with their families are everywhere, and both locals and visitors having a great time. Parade goers will sit on the ground, throw balls, play music, eat great food and watch the crowds walk by between parades. On Mardi Gras day, the majority of non-essential businesses are shut down because of the celebration.\n\nExperienced revelers know to bring a large bag with them so they can haul away all the beads and trinkets they will catch from the parades!\n\nEvery year, we get a lot of questions about how it all begin, and how the traditions have changed. Click on the buttons below to find out the answers to some of the most frequently asked questions.\n  </p> \n\n  <div id=\"placehold\">\n \n  </div>\n\n\n  <article>\n  <h2>Convenient Parking in New Orleans</h2>\n<p>\nWhether you are a resident of New Orleans or just passing through, Premium Parking is a great place to park and we will always have a space for you.\n</p>\n<h3>Just Visiting?</h3>\n    <a href=\"https://www.premiumparking.com/search/New%20Orleans?h=true&ms=60&lt=29.951066&ln=-90.071532&z=13&mid=1&clt=29.951066&cln=-90.071532\" target=\"_blank\">\n    <div class=\"logoParking\"></div>\n    </a>\n<p>\nWelcome to the Big Easy! We know there is so much to do and so many places to go to in New Orleans. Through our website, you can search popular destinations and book your parking in advance. We want you to enjoy your time in the city and not worry about parking. Book parking in advance through our website, download our app or use our convenient TextPay option for the easiest way to pay with your phone. If you\u2019re staying at a hotel here in town, we\u2019ve got cheap overnight rates at a location convenient for you.\n</p>\n\n  </article>\n\n  </div>\n\n  ";
}
},{}],"js/trivia.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trivia;

function trivia() {
  console.log("Trivia");
  var contentModal = document.querySelector("#exampleModal");
  contentModal.innerHTML = "\n  <div class=\"modal-dialog\" role=\"document\">\n\n  <div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h1 class=\"modal-title\" style=\"width:100%;justify-content: center;\n    text-align:center; color:#9453a6;\" id=\"exampleModalLabel\">\n    find the answer</h1>\n    <button\n      type=\"button\"\n      class=\"close\"\n      data-dismiss=\"modal\"\n      aria-label=\"Close\"\n    >\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form action=\"\" style=\"color:#0d0d0d; text-align: center; width:100%;\">\n        <label for=\"\">When New Orleans has held street processions? </label>\n        <br />\n        <input type=\"radio\" name=\"street\" value=\"fi\">late 1830s<br />\n        <input type=\"radio\" name=\"street\"  />late 1840s<br />\n        <input type=\"radio\" name=\"street\"  />late 1730s\n        <br />\n        <hr>\n       \n        <label for=\"\">Twelfth Night Revelers, was formed in...?</label>\n        <br />\n        <input type=\"radio\" name=\"Revelers\"  />1730<br />\n        <input type=\"radio\" name=\"Revelers\"  value=\"fi\">1870<br />\n        <input type=\"radio\" name=\"Revelers\" />1900\n        <br />\n        <hr>\n       \n        <label for=\"\">When was the first Mardi Gras?</label>\n        <br />\n        <input type=\"radio\" name=\"funded\"  />2005<br />\n        <input type=\"radio\" name=\"funded\"  />1890<br />\n        <input type=\"radio\" name=\"funded\"  value=\"fi\"/>1857\n        <br />\n        <hr>\n\n        <label for=\"\">Do I need tickets?</label>\n        <br />\n        <input type=\"radio\" name=\"tickets\"  />need coupon<br />\n        <input type=\"radio\" name=\"tickets\" value=\"fi\" />nope<br />\n        <input type=\"radio\" name=\"tickets\"  />yes\n        <br />\n        <hr>\n\n        <label for=\"\">What is the significance colors,</label>\n        <br />\n        <input type=\"radio\" name=\"colors\"  />white,blue,gray<br />\n        <input type=\"radio\" name=\"colors\"  />red,green,blue<br />\n        <input type=\"radio\" name=\"colors\"  value=\"fi\"/>purple,green,gold\n        <br />\n        <hr>\n\n        <label for=\"\">if float riders must always have a mask on?</label>\n        <br />\n        <input type=\"radio\" name=\"float\"  />no<br />\n        <input type=\"radio\" name=\"float\" value=\"fi\" />yes<br />\n        <br />\n        <hr>\n\n        <label for=\"\">How is a king chosen?</label>\n        <br />\n        <input type=\"radio\" name=\"king\" value=\"fi\" />varies from krewe to krewe<br />\n        <input type=\"radio\" name=\"king\"  />volume of the crowd screaming<br />\n        <br />\n        <hr>\n\n        <label for=\"\">How long have \"throws\" been around?</label>\n        <br />\n        <input type=\"radio\" name=\"throws\" value=\"fi\"/>1870s<br />\n        <input type=\"radio\" name=\"throws\"  />1670s<br />\n        <br />\n        <hr>\n\n        <label for=\"\">How does Mardi Gras benefit the New Orleans economy?</label>\n        <br />\n        <input type=\"radio\" name=\"benefit\" value=\"fi\" /> generates over $1 billion<br />\n        <input type=\"radio\" name=\"benefit\"  />no benefits<br />\n        <br />\n        <hr>\n\n        <label for=\"\">How is the City government involved?</label>\n        <br />\n        <input type=\"radio\" name=\"government\" value=\"fi\" />not involved <br />\n        <input type=\"radio\" name=\"government\"  />\n        everything rests on they shoulders<br />\n        <br />\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn\" style=\"color:#9453a6; text-align: center; width:100%; font-family:Henny Penny; font-size:30pt;\" id=\"checkAnsw\">Check Answers</button>\n  <br />\n  <p id=\"demo\" style=\"color:#0d0d0d; text-align: center; width:100%; font-family:Henny Penny; font-size:30pt;\"></p>\n  </div>\n</div>\n\n</div>\n\n";
  var checkAnsw = document.querySelector("#checkAnsw");
  var arr = [];
  var inp = document.getElementsByTagName("input");
  checkAnsw.addEventListener("click", function () {
    for (var i = 0; i < inp.length; i++) {
      if (inp[i].checked && inp[i].value == "fi") {
        arr.push(inp[i].value);
      }
    }

    console.log(arr);
    document.getElementById("demo").innerHTML = "you score is:  ".concat(arr.length);
  });
}
},{}],"js/routes.js":[function(require,module,exports) {
"use strict";

var _about = _interopRequireDefault(require("./about"));

var _faq = _interopRequireDefault(require("./faq"));

var _media = _interopRequireDefault(require("./media"));

var _contacts = _interopRequireDefault(require("./contacts"));

var _home = _interopRequireDefault(require("./home"));

var _trivia = _interopRequireDefault(require("./trivia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _trivia.default)();

function select_tab(id) {
  document.querySelectorAll(".route").forEach(function (item) {
    return item.classList.remove("selected");
  });
  document.querySelectorAll(id).forEach(function (item) {
    return item.classList.add("selected");
  });
}

function load_content(id) {
  var content = document.querySelector("#main");

  if (id == "home") {
    (0, _home.default)();
  } else if (id == "about") {
    (0, _about.default)();
  } else if (id == "media") {
    (0, _media.default)();
  } else if (id == "faq") {
    (0, _faq.default)();
  } else if (id == "contacts") {
    (0, _contacts.default)();
  } else {
    content.innerHTML = "Error";
  }
}

function push(event) {
  var id = event.target.id;
  select_tab(id);
  document.title = id;
  load_content(id); // window.history.pushState({ id }, `${id}`, `/${id}`);

  window.history.replaceState({
    id: id
  }, "".concat(id), "/".concat(id));
}

window.onload = function (event) {
  window["home"].addEventListener("click", function (event) {
    return push(event);
  });
  window["about"].addEventListener("click", function (event) {
    return push(event);
  });
  window["media"].addEventListener("click", function (event) {
    return push(event);
  });
  window["faq"].addEventListener("click", function (event) {
    return push(event);
  });
  window["contacts"].addEventListener("click", function (event) {
    return push(event);
  });
};
},{"./about":"js/about.js","./faq":"js/faq.js","./media":"js/media.js","./contacts":"js/contacts.js","./home":"js/home.js","./trivia":"js/trivia.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50151" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/routes.js"], null)
//# sourceMappingURL=/routes.ad09906e.js.map