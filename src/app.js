const GenDomain = document.getElementById('domain');
const showRandom = document.getElementById('show-domain');


let pronoun = ['the', 'my', 'his', 'your', 'mine', 'we'];
let adj = ['odd', 'crazy', 'small', 'big', 'blue', 'pretty'];
let noun = [ 'keys', 'car', 'food', 'book', 'house', 'toy', 'window', 'mouse', 'dog'];


const generatorDomain = (()=>{
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        
        const theDomain = document.createElement("p");
        theDomain.classList="my-domain"
        showRandom.appendChild(theDomain)
        console.log(pronoun[i]+adj[j])
        theDomain.innerHTML =  `<a href="#">${pronoun[i]}${adj[j]}${noun[k]}.com</a> `
        
      }
    
   }
  }
})
GenDomain.addEventListener('click', generatorDomain);


