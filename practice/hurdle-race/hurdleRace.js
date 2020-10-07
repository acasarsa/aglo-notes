// player jumps hurdles - players have max height they can jump
// k = max height
// h = [ of hurdle heights ]
// each magic potion allows player to jump + 1 more unit of height (k + 1)
// return min number of doses required to jump all hurdles 
function hurdleRace(k, h){
  // is k >= h[n] ? 0 : dose += h[n] - k
  let dose = k
  for(let i = 0; i < h.length; i++) {
    dose >= h[i] ? dose : dose += h[i] - dose
  }
  return dose - k
}

console.log(hurdleRace(1, [1,2,3,7,2]), "doses needed")