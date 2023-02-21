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


const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

