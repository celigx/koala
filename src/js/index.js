const tophat = document.querySelector('#tophat')
const sunglasses = document.querySelector('#sunglasses')
const tie = document.querySelector('#tie')

// Control Top hat
const hatControl = document.querySelector('#hatControl')
hatControl.checked = "false"

const handleHat = () => {
  if (hatControl.checked === "false") {
    tophat.style.transform = "translate(0, 0)";
    hatControl.checked = "true"
  } else {
    tophat.style.transform = "translate(0, -200px)";
    hatControl.checked = "false"
  }
  console.log(hatControl.checked);
}

// Control sunglasses
const glassesControl = document.querySelector('#glassesControl')
glassesControl.checked = "false"

const handleGlasses = () => {
  if (glassesControl.checked === "false") {
    sunglasses.style.transform = "translate(0, 0)";
    glassesControl.checked = "true"
  } else {
    sunglasses.style.transform = "translate(-400px, 0)";
    glassesControl.checked = "false"
  }
  console.log(glassesControl.checked);
}

// Control tie
const tieControl = document.querySelector('#tieControl')
tieControl.checked = "false"

const handleTie = () => {
  if (tieControl.checked === "false") {
    tie.style.transform = "translate(0, 0)";
    tieControl.checked = "true"
  } else {
    tie.style.transform = "translate(0, 200px)";
    tieControl.checked = "false"
  }
  console.log(tieControl.checked);
}