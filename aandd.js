function createSequentialNumbers(array,n){
                    for(var i=1; i<=n; i++){
                    array.push(i);
                    console.log(array);
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

function show(obj) {
            if (Array.isArray(obj)) {
                var html = '';
                html = html + '<table border="1">';
                html = html + '<tr>';
                for (var i = 0; i < obj.length; i++) {
                    html = html + '<td>' + obj[i] + '</td>';
                }
                html = html + '</tr>';
                html = html + '</table>';
                //html = html + '<br>';
                document.getElementById('res').insertAdjacentHTML('beforeend', html);
            } else {
                var string = JSON.stringify(obj);
                string = string + '<br>';
                document.getElementById('res').insertAdjacentHTML('beforeend', string);
            }
        }