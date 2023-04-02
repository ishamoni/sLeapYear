function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
       return true 
    } 
    else {
        return false
    }
}

const numberLeapYear = isLeapYear(100);
console.log(numberLeapYear)
const leapYear = isLeapYear(2023);
console.log(leapYear);


  function getLeapYears(startYear , endYear){
    const leapYears = [];
    for (let year = startYear; year<= endYear; year++){
        if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
            leapYears.push(year);
        }
    }
    return leapYears;
  }
  const leapYears = getLeapYears(1000,2020);
  console.log(leapYears);

  




  
function isLeapYear(year){
  if (year % 4 == 0 && (year % 100 !== 0)|| (year % 400 == 0)) {
    return true;
  }
  else{
    return false;
  }
}
  const year = 2024;
const remainder = isLeapYear(year);
console.log (remainder);

function isLeapYear(year) {
  var leapyear =[];
  for (let i = 0; i <= isLeapYear.length; year++) {

    if ((i % 4 == 0 && i % 100 !== 0)|| i % 400 == 0){
      
    }
  }
  return leapYear;
}
const leapYear =2023;
console.log (leapYear) ;