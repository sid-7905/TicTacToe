function func() {
    let count = 0;
    let lock = false;
    let arr = ["", "", "", "", "", "", "", "", ""];
    function check(arr) {
        if (arr[0] == arr[1] && arr[1] == arr[2] && arr[0] != "") {
            lock = true;
            for (let i = 0; i < 9; i++) {
                if (i == 0 || i == 1 || i == 2) {
                    if(screen.width>400){
                        document.getElementById(i).style.fontSize = "70px";
                }
                    else{
                        document.getElementById(i).style.fontSize = "35px";
                    }
            }
                else {
                    document.getElementById(i).style.opacity = "0";
                }
            }

        }
        else if (arr[3] == arr[4] && arr[4] == arr[5] && arr[3] != "") {
            lock = true;
            for (let i = 0; i < 9; i++) {
                if (i == 3 || i == 4 || i == 5) {
                    if(screen.width>400){
                    document.getElementById(i).style.fontSize = "70px";
                    }
                        else{
                            document.getElementById(i).style.fontSize = "35px";
                        }
                }
                else {
                    document.getElementById(i).style.opacity = "0";
                }
            }
        }
        else if (arr[6] == arr[7] && arr[7] == arr[8] && arr[6] != "") {
            lock = true;
            for (let i = 0; i < 9; i++) {
                if (i == 6 || i == 7 || i == 8) {
                      if(screen.width>400){
                    document.getElementById(i).style.fontSize = "70px";
                }
                    else{
                        document.getElementById(i).style.fontSize = "35px";
                    }
                }
                else {
                    document.getElementById(i).style.opacity = "0";
                }
            }
        }
        else if (arr[0] == arr[3] && arr[3] == arr[6] && arr[0] != "") {
            lock = true;
            for (let i = 0; i < 9; i++) {
                if (i == 0 || i == 3 || i == 6) {
                      if(screen.width>400){
                    document.getElementById(i).style.fontSize = "70px";
                }
                    else{
                        document.getElementById(i).style.fontSize = "35px";
                    }
                }
                else {
                    document.getElementById(i).style.opacity = "0";
                }
            }
        }
        else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[1] != "") {
            lock = true;
            for (let i = 0; i < 9; i++) {
                if (i == 1 || i == 4 || i == 7) {
                      if(screen.width>400){
                    document.getElementById(i).style.fontSize = "70px";
                }
                    else{
                        document.getElementById(i).style.fontSize = "35px";
                    }
                }
                else {
                    document.getElementById(i).style.opacity = "0";
                }
            }
        }
        else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[2] != "") {
            lock = true;
            for (let i = 0; i < 9; i++) {
                if (i == 2 || i == 5 || i == 8) {
                      if(screen.width>400){
                    document.getElementById(i).style.fontSize = "70px";
                }
                    else{
                        document.getElementById(i).style.fontSize = "35px";
                    }
                }
                else {
                    document.getElementById(i).style.opacity = "0";
                }
            }
        }
        else if (arr[0] == arr[4] && arr[4] == arr[8] && arr[0] != "") {
            lock = true;
            for (let i = 0; i < 9; i++) {
                if (i == 0 || i == 4 || i == 8) {
                      if(screen.width>400){
                    document.getElementById(i).style.fontSize = "70px";
                }
                    else{
                        document.getElementById(i).style.fontSize = "35px";
                    }
                }
                else {
                    document.getElementById(i).style.opacity = "0";
                }
            }
        }
        else if (arr[2] == arr[4] && arr[4] == arr[6] && arr[2] != "") {
            lock = true;
            for (let i = 0; i < 9; i++) {
                if (i == 2 || i == 4 || i == 6) {
                      if(screen.width>400){
                    document.getElementById(i).style.fontSize = "70px";
                }
                    else{
                        document.getElementById(i).style.fontSize = "35px";
                    }
                }
                else {
                    document.getElementById(i).style.opacity = "0";
                }
            }
        }
        else if (count == 9 && lock == false) {
            let result = document.getElementById("result")
            result.innerHTML = "Game Draw";
            let play = document.getElementById("btn");
            play.style.opacity = "1";
            if (screen.width < 768) {
                result.style.fontSize = "20px";
                result.style.top = "80%"
            }
        }
        return lock;
    }
    let x = document.querySelectorAll(".box");
    x.forEach((box) => {
        box.addEventListener("click", e => {
            if (!lock) {
                if (arr[e.target.id] == "") {
                    e.target.style.boxShadow = "none";
                    e.target.style.background = "transparent";
                    if (count % 2 == 1) {
                        e.target.innerHTML = "O";
                        e.target.style.color = "blue";
                        count++;
                    }
                    else {
                        e.target.innerHTML = "X";
                        e.target.style.color = "red";
                        count++;
                    }
                    arr[e.target.id] = e.target.innerHTML;
                    if (check(arr)) {
                        let result = document.getElementById("result")
                        result.innerHTML = `Congrats! Player '${e.target.innerHTML}' Won The Game`;
                        let play = document.getElementById("btn");
                        play.style.opacity = "1";
                        if (screen.width < 768) {
                            result.style.fontSize = "20px";
                            result.style.top = "80%"
                        }
                    };
                }
            }
        })
    });
}