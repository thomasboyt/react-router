var ScrollsOnTransition = {
  statics: {
    willTransitionFrom: function() {
      window.scrollTo(0, 0);
    }
  }
};

module.exports = ScrollsOnTransition;
