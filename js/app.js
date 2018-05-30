/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 58,
      "density": {
        "enable": false,
        "value_area": 80.11985930952697
      }
    },
    "color": {
      "value": "#e6e6e6"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 7,
        "color": "#e6e6e6"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 4.5445323595049745,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 2.4345709068776644,
        "size_min": 11.361330898762436,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 208.3116342047702,
      "color": "#c0bcbc",
      "opacity": 0.35252738096191877,
      "width": 1.1216780303333778
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 80.11985930952697,
        "rotateY": 80.11985930952697
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 1071.2111990261724,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 121.72854534388323,
        "size": 16.230472712517763,
        "duration": 0,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 105.49807263136547,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);