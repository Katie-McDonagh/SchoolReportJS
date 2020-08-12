class SchoolReport {
  constructor(){
  }

  results(string){
    if(string === "green"){
      return "green: 1"
    } else if(string === "amber"){
      return "amber: 1"
    } else {
      return "red: 1"
    }
  }
}

