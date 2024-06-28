
function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

function formatDate(date: Date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('') /*+
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')*/
    );
}

export const existMobile = ()=>{
    return (
        '223412222'
      );
}
export const existPassword = ()=>{
    return (
        '123456aA'
      );
}
function greet():string { //the function returns a string 
    return '1'+formatDate 
 } 
export const mobile = (date: Date)=>{
    return (
        rand(100000000, 499999999)
      );
}

export const email = (date: Date)=>{
    return ('test'+
    [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('')+
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join('')
      +'@test.tes');
}
export const password = ()=>{
    return (
        'zaq1!QAZ'
      );
}

function rand(min: number, max: number) {
    return min + Math.floor((max - min) * Math.random());
};

function getMonthOffsetForPesel(century: number) {
    switch (century) {
    case 18: return 80;
    case 19: return 0;
    case 20: return 20;
    case 21: return 40;
    case 22: return 60;
    }
};

var daysInMonth = function(year: number, month: number) {
    // JS - month are zero based, but days are 1 based
    // so 1 is first day of month.
    // If we pass 0 day of next month - we get LAST day of month.
    return new Date(year, month + 1, 0).getDate();
};

var last2Digits = function(number: number) {
    var n = Math.floor(number % 100);
    return ('00' + n.toString(10)).slice(-2);
};

var computePeselControlDigit = function(rawPesel: string) {
    var peselDigits = rawPesel.split('').map(function(d) { return +d; });
    var weigths = [1,3,7,9,1,3,7,9,1,3];
    
    var sum1 = 0, i;
    for (i = 0; i < weigths.length; i += 1) {
        sum1 += weigths[i] * peselDigits[i];
    }

    sum1 = (10 - (sum1 % 10)) % 10;
    return sum1;
};


export const pesel = ()=>{
    var birthYear = rand(1950, 2000);

    var century = Math.floor(birthYear / 100);
    var monthOffset = getMonthOffsetForPesel(century);

    var birthMonth = rand(1, 13);
    var birthDay = rand(1, daysInMonth(birthYear, birthMonth) + 1);
    var peselMonth = birthMonth + monthOffset!;

    var fourRandomDigits = ('0000' + rand(0, 10000).toString(10)).slice(-4);

    var rawPesel = last2Digits(birthYear) +
        last2Digits(peselMonth) +
        last2Digits(birthDay) + 
        fourRandomDigits;

    var controlDigit = computePeselControlDigit(rawPesel);
    return (
        rawPesel + controlDigit
      );
}