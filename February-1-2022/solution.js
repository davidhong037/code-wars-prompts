function getCount(str) {
    var vowelsCount = 0;
    
    let vowels = ['a','e','i','o','u']
   
    for(let letter of str.toLowerCase()) {
      if(vowels.includes(letter)) {
        vowelsCount++
      }
    }
  
    return vowelsCount;
  }