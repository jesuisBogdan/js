const alegereaUserului = ceIntroduce => {
  ceIntroduce = ceIntroduce.toLowerCase();
  if (ceIntroduce === 'piatra' || ceIntroduce ==='hartie' || ceIntroduce === 'foarfeca' || ceIntroduce === 'bomba'){
    return ceIntroduce;
   
  } else {
    console.log('Eroare. Poti alege doar piatra, hartie sau foarfeca');
  } 
  } 
  
  
const alegereaComp = () => {
     const numar = Math.floor(Math.random() * 3) 
  switch(numar){
    case 0:
    return 'piatra';
    case 1:
    return 'foarfeca';
    case 2:
    return 'hartie';
  } 
}  
  

  const Castigator = (alegereaUserului, alegereaComp) => {    if (alegereaUserului === 'bomba'){
    return 'Tu ai castigat. L-ai distrus';
  }
    if (alegereaUserului === alegereaComp) {
      return 'Egalitate';
    }
    
    if (alegereaUserului === 'piatra'){
      if(alegereaComp === 'hartie'){
      return 'Computerul a castigat!'
      } else {
        return 'Tu ai castigat!'
      }
    }
      if (alegereaUserului === 'hartie'){
        if(alegereaComp === 'foarfeca'){
          return 'Computerul a castigat!';
        } else{
          return 'Tu ai castigat!';}
      }
      if(alegereaUserului === 'foarfeca'){
          if(alegereaComp === 'hartie'){
            return 'Tu ai castigat!'}
            else{
              return 'Computerul a castigat'
            }
        }
    } 



const saJucam = () => {
  const alegereaTA = alegereaUserului('balamuc');
  const alegereaPC = alegereaComp();
  console.log('Tu ai ales: '+ alegereaTA);
  console.log('Computerul a ales: '+ alegereaPC);
  
  console.log(Castigator(alegereaTA, alegereaPC));
  
};
saJucam();