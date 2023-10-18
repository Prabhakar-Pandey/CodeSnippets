const arr = [
    [0, 1, 0],
    [0, 1, 1],
    [0, 0, 1]
  ];

evaluateResult(arr)

function evaluateResult(array) {
    //case 1: checkhorizontally
    let isResultAvailable = true;
    let winner = "No Winner";
    let flag = false;
    for (let i = 0; i < array.length; i++) {
        if(!flag){
            isResultAvailable = true;
            let count = 2;
            for (let j = 0; j < 2; j++) {
                winner = arr[i][j]; // [0,1]
                if (arr[i][j] !== arr[i][j + 1]) {
                  isResultAvailable = false;
                  winner = "No winner"
                }else{
                    count--;
                    if(count==0&&isResultAvailable){
                        flag=true;
                        break;
                        
                    }
                }
              
          }
        }
      
    }

    // for (let i = 0; i < array.length; i++) {
    //   for (let j = i; j < 2; j++) {
    //     // arr[0][0] arr [1][0]
    //     winner = arr[i][j]; // [0,1]
    //     if (arr[i][j] != arr[i + 1][j]) {
    //       isResultAvailable = false;
    //       winner = "No winner";
    //     }
    //   }
    // }

    for (let i = 0; i < 2; i++) {
        if(!flag){
            isResultAvailable = true;
            let count = 2;
            for (let j = 0; j < 3; j++) {
                winner = arr[i][j]; // [0,1]
                if (arr[i][j] !== arr[i+1][j]) {
                  isResultAvailable = false;
                  winner = "No winner"
                }else{
                    count--;
                    if(count==0&&isResultAvailable){
                        flag=true;
                        break;
                        
                    }
                }
              
          }
        }
      
    }

    if (isResultAvailable) {
      console.log(winner, "<<<WIINNER<");
    }
  }