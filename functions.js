//1.Generate table using JS
function Maez(w, h) {
    var cells = [];
    
    var table = document.createElement("table");
    
    for(var i=0; i < h; i++) {
        var tr = document.createElement("tr");
        table.appendChild(tr);
        var row = [];
        cells.push(row);
        for(var j = 0; j < w; j++) {
            var td = document.createElement("td");
            tr.appendChild(td);
            td.classList.add("n_off", "s_off", "w_off", "e_off");
            row.push(tr);
        }
    }
    //todo create walls
    
    function add_n(i, j) {
        cells[i][j].classList.replace("n_off", "n_on");
        if(i>0) cells[i-1][j].classList.replace("s_off", "s_on");
    }
    
        function add_e(i, j) {
        cells[i][j].classList.replace("e_off", "e_on");
        if(i>0) cells[i-1][j].classList.replace("w_off", "w_on");
    }
    
    this.cells = cells;
    this.table = table;
}



//3.Remove border




//4.move space



//2.keep track of current location


document.addEventListener("DOMContentLoaded", function() {
    var maez = new Maez(10, 10); 
    document.body.appendChild(maez.table);
    console.log(maez);
})
