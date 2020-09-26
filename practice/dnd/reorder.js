let lists = [
  { 
    id: 0,
    title: 'to-do',
    position: 0
  }, 
  {
    id: 1,
    title: 'in progress',
    position: 1
  },
  {
    id: 2,
    title: 'complete',
    position: 2
  },
  {
    id: 3,
    title: 'play',
    position: 3
  }
] 

function reorder (array) {

  array.sort((a,b) => a.position - b.position)
  return array
}

function moveElement(array, initialPos, finalPos) {
  // let movingEl = array.find(el => el.position === initialPos)
  let currentEl = array.find(el => el.position === finalPos)
  
  // here i need to slice from initialPos..finalPos
  

  if(initialPos > finalPos) {
    let left = array.slice(finalPos, initialPos)
    for(let i = 0; i < left.length; i++){

    }
  }

  // map over array (el) => {
    // if(el.position < initialPos) {
    //   el.position + 1
    // } 
    // find element at initialPos set pos === finalPos
  // }

    // moving pos 2 to equal pos 0. 
    // currentPos 0, 1 get + 1 

  let moveEl = array.splice(initialPos, 1)[0]
  console.log('splice',moveEl)
  console.log('after splice', array)
  console.log('index:', array[2])

  // removing from array you would update the items that had greater index values than the one removed. 
  
  
  
  // found and saved object to be moved. 
  // need to loop over elements that are less than or greater than initial index and change their position values 
  //// if start pos is greater than end pos add 1 to all positions 
  //// if start pos is less than end pos subtract 1 from all positions


  // for(let i = initialIndex; i >= finalIndex; i-- ) {
  //   array[i] = array[i - 1]
  //   console.log('i:',array[i])
  // }
  // let initialPos = lists.splice(initialIndex)
  // let finalPos = 
  // array.splice(finalIndex, 0, array.splice(initialIndex, 1)[0])
  
  // movingEl.position = finalIndex 
  // array[finalIndex] = movingEl
  // console.log(movingEl)

  // lists.findIndex(list => list.id === id)

  let reordered = reorder(array)
  return reordered
}
// console.log(lists)
// console.log('spliced',lists.splice(2)[0])

// console.log('movingEl',lists.find(el => el.position === 3))

console.log(moveElement(lists, 2, 0))