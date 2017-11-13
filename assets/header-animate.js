let polygon = document.getElementById('polygon');

let r, c, l;

r = 584;
c = 443;
l = 839;

let start = 0;
let rSin, cSin, lSin;
rSin = cSin = lSin = 0;


function AnimatePoints() {

  let _r, _c, _l;

  _r = 30 * Math.sin(rSin) + r;
  _c = 90 * Math.sin(cSin) + c;
  _l = 70 * Math.sin(lSin) + l;

  let variablePoints = `2214,${_r} 1344,${_c} 597,${_l}`;
  // bottom right point, middle point, first point
  let staticPoints = " 0,800 0,0 2856,0 2856,380";

  let points = variablePoints + staticPoints;

  // console.log(points);

  polygon.setAttribute('points', points);
  // polygon.setAttribute('points', '2214,584 1344,443 597,839 0,800 0,0 2856,0 2856,380');

  rSin += 0.007;
  cSin += 0.003;
  lSin += 0.005;
  requestAnimationFrame(AnimatePoints);
}
requestAnimationFrame(AnimatePoints);





