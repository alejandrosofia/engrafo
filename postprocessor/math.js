let utils = require('./utils');

module.exports = function(dom) {
  let mathBlocks = dom.getElementsByClassName('engrafo-math-inner');
  Array.from(mathBlocks).forEach((el) => {
    let dtMath = dom.createElement('dt-math');
    dtMath.setAttribute('block', null);
    utils.replaceAndKeepChildren(el, dtMath);
  });
};
