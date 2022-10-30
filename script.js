//document.getElementById('showResult').onclick = function(){
//  if (age >= 18 && age <= 60)
//  alert(Welcome);
//  else if (age < 18 && age > 60)
//  alert (Ups);
//}

//console.log('Hello World')

const age = 60;
const weight = 94;
const height = 195;

if (age <18){
  console.log('you are too young to our gym');
}

if (age >=18){
  console.log('you are welcome');
}

if (age >60){
  console.log('you are too old for us');
}

if (weight <60){
  console.log('you are too thin for us');
}

if (weight >=60){
  console.log('welcome');
}

if (weight >120){
  console.log('your ass is too fat');
}

if (height <160){
  console.log('you are too short');
}

if (height >=160){
  console.log('Welcome, new client');
}

if (height >195){
  console.log('you are too tall');
}

//else (age >= 18 && age <=60 && weight >=60 && weight <=120 && height >=160 && height <=195) 
  {
  //alert('Welcome to our gym-family');
}

document.getElementById('showResult').onclick = function() {
  let name = document.getElementById('fullName').value;
  let age = document.getElementById('age').value;
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;

  if (age >= 18 && age <=60 && weight >=60 && weight <=120 && height >=160 && height <=195) {
    alert('Welcome to our gym-family, ' + name);
  }  else age <18 && age >60 && weight <60 && weight >120 && height <160 && height >195; {
    alert('Go away and find some other gym, ' + name);
  }
}



//const fullName = 'Franki';
//const age = 45;
//const weight = 94;
//const height = 195;

//if (age >60) {
//  console.log('you are too damn old. Go and play "Bingo"')
//}

//console.log ('you are too old for this shit')