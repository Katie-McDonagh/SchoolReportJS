class SchoolReport {
  constructor(){
    this.greenScore
  }

  grade_count(string){
    let stringArray = string.split(" ")
    for (var j = 0; j < myArray.length; j++){
      if(stringArray.includes("green")){
        greenScore++
      }
      
      }
  }

  results(string){
    if(stringArray.includes("green")){
      return `green: ${greenScore}` 
    } else if(string_array.includes("amber")){
      return `amber: ${string_array.length}`
    } else if(string_array.includes("red")) {
      return `red: ${string_array.length}`
    }
  }
}

