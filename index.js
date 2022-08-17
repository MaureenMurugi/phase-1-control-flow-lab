function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return "This one is on me!"
  }if (feet >= 2000) {
    return "I will gladly take your thirty bucks."
  }if (feet >= 2500) {
    return "No can do."
  } 
}

scuberGreetingForFeet(199);
//scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(city){
  if (city === "NYC") {
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}
ternaryCheckCity("Pittsburgh");

ternaryCheckCity('NYC');

function switchOnCharmFromTip(tip){
  if (tip === "generous") {
    return "Thank you so much."
  } if (tip === "not as generous") {
    return "Thank you."
  }else{
    return "Bye."
  }

}

switchOnCharmFromTip("generous");