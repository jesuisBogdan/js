let text = 'salut ce faci';
const vocale = ['a', 'e', 'i','o','u'];
let Rezultat = [];
for(let i=0; i<text.length; i++){
  
  for(let j = 0; j < vocale.length; j++){

    if(text[i] === vocale[j]){
      //Rezultat.push(vocale[j]);
    
  if(text[i] === 'e'){
    Rezultat.push('ee');
  }
  else if(text[i] === 'u'){
    Rezultat.push('uu');
  } else{
    Rezultat.push(vocale[j])
  }
  }
  };
}

console.log(Rezultat.join('').toUpperCase());
