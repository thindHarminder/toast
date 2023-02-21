import $ from 'https://cdn.skypack.dev/pin/blingblingjs@v2.3.0-e2PTciHn3Q19fSwvwGKy/mode=imports,min/optimized/blingblingjs.js'
import Toast from 'https://cdn.jsdelivr.net/gh/thindHarminder/toast@main/toast.js'



$('#actions').on('click', () => {
  Toast(randomAction())
})

$('#spells').on('click', async () => {
  const toastText = document.getElementById('textToast').value.trim();
  if (toastText) {
    await Toast(toastText);
  } else {
    await Toast(randomSpell());
  }
  console.log('poof');
});


const randomSpell = () => {
  const spells = ['Text Empty 😫', 'Im not ready yet 😡', 'Try Again with Text 😁']
  const levels = ['I','II','III','IV','V']
  return `${spells[getRandomInt(0, spells.length-1)]} ${levels[getRandomInt(0, levels.length-1)]}`
}

const randomAction = () => {
  const actions = ['Saved', 'Added to cart', 'In cart', 'User removed', 'Timer set', 'Added to Favorites', `Multi-Line \n Support 👍`, 'This is just really long and completely unnecessary']
  return `${actions[getRandomInt(0, actions.length-1)]}`
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
