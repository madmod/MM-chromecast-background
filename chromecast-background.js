'use strict';

/* global Log, Module, config, L, Tangram */
/* Magic Mirror
 * Module: Chromecast Background
 *
 * By madmod https://github.com/user/madmod
 * MIT Licensed.
 */
Module.register('chromecast-background', {
  // Module config defaults.
  defaults: {
  },

  // Define styles.
  getStyles: function() {
    return [
      'chromecast-background_styles.css',
    ];
  },

  // Define start sequence.
  start: function() {
    Log.info('Starting module: ' + this.name);
  },

  // Override dom generator.
  getDom: function() {
    var wrapper = document.createElement('div');
    wrapper.className = 'chromecast-background-container';

    var backgroundElement = document.createElement('iframe');
    backgroundElement.className = 'chromecast-background';
    backgroundElement.src = 'https://clients3.google.com/cast/chromecast/home/v/c9541b08';

    wrapper.appendChild(backgroundElement);

    // Return the wrapper to the dom.
    return wrapper;
  }

});


