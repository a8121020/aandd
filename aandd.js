 function createSequentialNumbers(array,n){
                for(var j=1; j<=n; j++){
                    for(var i=1; i<=j; i++){
                    array.push(i);
                    console.log(array);
                    }
                }
 }


  var random1;
            function createRandomNumbers(array,n){
                for(var i=0; i<=n; i++){
                    array.push(random1);
                    console.log(array);
                    random1 = Math.floor(Math.random() * 10 + 1);
                }
            }