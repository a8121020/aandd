function createSequentialNumbers(array, n) {
    for (var i = 1; i <= n; i++) {
        for (var j = 0; j < i; j++) {
            array.push(i);
        }
    }
}

function createRandomNumbers(array, n) {
    for (var i = 0; i < n; i++) {
        array.push(Math.round(Math.random() * 100));
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