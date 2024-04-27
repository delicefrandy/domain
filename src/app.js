const changeText = document.getElementById('btn');
const showRandom = document.getElementById('show-random');


let who = ['The dog', 'My grandma', 'His turtle', 'My bird', 'Our Fox', 'That Tiger', 'This Wolf', 'The Zebra', 'My Deer', 'Our Rabbit', 'One Jaguar', 'All Squirrel'];

let action = ['ate', 'peed', 'crushed', 'broke', 'aide', 'analyzed', 'assigned', 'checked', 'chose', 'concluded', 'dealt', 'defined', 'acquired', 'appeard', 'cleared', 'decided'];

let what = ['my homework', 'the keys', 'the car', 'my food', 'my only book', 'the house', 'the toy', 'the window', 'one time again', 'one another day'];

let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying', 'when  was sleeping', 'being on a trip', 'while I was bathimg'];
const random = (()=>{
  const randomWho = Math.round(Math.random()    *(who.length-1));
  const randomAction = Math.round(Math.random() *(action.length-1));
  const randomWhat = Math.round(Math.random()   *(what.length-1));
  const randomWhen = Math.round(Math.random()   *(when.length-1));
  console.log(randomAction);
  
  showRandom.textContent=`${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`;
})

changeText.addEventListener('click', random);

random();
