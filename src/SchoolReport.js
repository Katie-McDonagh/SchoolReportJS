class SchoolReport {
  constructor(){
  }

  results(string){
    let string_array = string.split(" ")
    if(string_array.includes("green")){
      return `green: ${string_array.length}` 
    } else if(string_array.includes("amber")){
      return `amber: ${string_array.length}`
    } else {
      return "red: 1"
    }
  }
}

