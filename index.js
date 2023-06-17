// code your solution here
/*const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
*/

 function superbowlWin(arrayObject){

    for(const item of arrayObject){
        let findWinYear=arrayObject.find(a=>a.result=="W")

        if (findWinYear==undefined){
            return console.log('undefined')
        }

        else{
            return findWinYear.year
        }
        
    }

  }

  superbowlWin(record)
