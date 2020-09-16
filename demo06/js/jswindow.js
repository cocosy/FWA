var state = {
    isDragging: false,
    isHidden: true,
    xDiff: 0,
    yDiff: 0,
    x: 50,
    y: 50
};


var state02 = {
    isDragging: false,
    isHidden: true,
    xDiff: 0,
    yDiff: 0,
    x: 50,
    y: 50
};

var state03 = {
    isDragging: false,
    isHidden: true,
    xDiff: 0,
    yDiff: 0,
    x: 50,
    y: 50
};

var state04 = {
    isDragging: false,
    isHidden: true,
    xDiff: 0,
    yDiff: 0,
    x: 50,
    y: 50
};




function showButton()
    {
    document.getElementById ("button2").style .visibility ="visible";
    }

function showInvoice()
    {
    document.getElementById ("invoice").style .visibility ="visible";
    }

    
function closeWindow05() {
    document.getElementById('invoice').style .visibility ="hidden";
}






   // document.getElementById('02').innerHTML = youtube;
   // list.getElementsByClassName('quantity')[0].innerHTML = ar;


   // list.getElementsByClassName('quantity')[1].innerHTML = (formatted.match(/youtube/gi)).length;
   // document.getElementBy('02').innerHTML = (formatted.match(/w3school/gi)).length;

    // document.getElementById('02').innerHTML =(formatted.match(/software/gi)).length;

    // var closeButtons = document.querySelectorAll('.window-close');
    // closeButtons[4].addEventListener('click',document.getElementById ("invoice").style.visibility = "hidden");

    //------------------------------ trash
    // document.getElementById('result').value = formatted;


//--------------------------------------------------------- part2 ---------------------------------------------------------------------------------
 

// hehe: http://youmightnotneedjquery.com/
function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function renderWindow(w, myState) {
    if (myState.isHidden) {
        w.style.display = 'none';
    } else {
        w.style.display = '';
    }
    w.style.transform = 'translate(' + myState.x + 'px, ' + myState.y + 'px)';
}




function clampX(n) {
    return Math.min(Math.max(n, 0),
                    // container width - window width
                 window.innerWidth - 400);
}

function clampY(n) {
    return Math.min(Math.max(n, 0),  window.innerHeight+300);
}



//introduction
function onMouseMove(e) {
    if (state.isDragging) {
        state.x = clampX(e.pageX - state.xDiff);
        state.y = clampY(e.pageY - state.yDiff);
    }
    // Update window position
    var w = document.getElementById('window');
    renderWindow(w, state);
}


//info
function onMouseMove02(e) {
    if (state02.isDragging) {
        state02.x = clampX(e.pageX - state02.xDiff);
        state02.y = clampY(e.pageY - state02.yDiff);
    }

    // Update window02 position
    var w02 = document.getElementById('information');
    renderWindow(w02, state02);
}

//instruction
function onMouseMove03(e) {
    if (state03.isDragging) {
        state03.x = clampX(e.pageX - state03.xDiff);
        state03.y = clampY(e.pageY - state03.yDiff);
    }

    // Update window02 position
    var w03 = document.getElementById('instruction');
    renderWindow(w03, state03);
}

//resource
function onMouseMove04(e) {
    if (state04.isDragging) {
        state04.x = clampX(e.pageX - state04.xDiff);
        state04.y = clampY(e.pageY - state04.yDiff);
    }

    // Update window02 position
    var w04 = document.getElementById('resource');
    renderWindow(w04, state04);
}

//introduction
function onMouseDown(e) {
    state.isDragging = true;
    state.xDiff = e.pageX - state.x;
    state.yDiff = e.pageY - state.y;
}

//info
function onMouseDown02(e) {
    state02.isDragging = true;
    state02.xDiff = e.pageX - state02.x;
    state02.yDiff = e.pageY - state02.y;
}

//instruction
function onMouseDown03(e) {
    state03.isDragging = true;
    state03.xDiff = e.pageX - state03.x;
    state03.yDiff = e.pageY - state03.y;
}

//resource
function onMouseDown04(e) {
    state04.isDragging = true;
    state04.xDiff = e.pageX - state04.x;
    state04.yDiff = e.pageY - state04.y;
}





function onMouseUp() {
    if(state.isDragging === true){
    state.isDragging = false;
} else if (state02.isDragging === true){
    state02.isDragging = false;
}else if (state03.isDragging === true){
    state03.isDragging = false;
}else if (state04.isDragging === true){
    state04.isDragging = false;
}
}


//introduction
function closeWindow() {
    state.isHidden = true;

    var w = document.getElementById('window');
    renderWindow(w, state);
}


//info
function closeWindow02() {
    state02.isHidden = true;

    var w02 = document.getElementById('information');
    renderWindow(w02, state02);
}

//instruction
function closeWindow03() {
    state03.isHidden = true;

    var w03 = document.getElementById('instruction');
    renderWindow(w03, state03);
}

//resource
function closeWindow04() {
    state04.isHidden = true;

    var w04 = document.getElementById('resource');
    renderWindow(w04, state04);
}


// .ready(function () {
//     $.getJSON(url,
//     function (json) {
//         var tr;
//         for (var i = 0; i < json.length; i++) {
//             tr = $('<tr/>');
//             tr.append("<td>" + json[i].User_Name + "</td>");
//             tr.append("<td>" + json[i].score + "</td>");
//             tr.append("<td>" + json[i].team + "</td>");
//             $('table').append(tr);
//         }
//     });
// });






//script
$(document).ready(function() {

    var w = document.getElementById('window');
    renderWindow(w, state);
    var w02 = document.getElementById('information');
    renderWindow(w02, state02);
    var w03 = document.getElementById('instruction');
    renderWindow(w03, state03);
    var w04 = document.getElementById('resource');
    renderWindow(w04, state03);


//drag
    var windowBar = document.querySelectorAll('.window-bar');
    windowBar[0].addEventListener('mousedown', onMouseDown);
    windowBar[1].addEventListener('mousedown', onMouseDown02);
    windowBar[2].addEventListener('mousedown', onMouseDown03);
    windowBar[4].addEventListener('mousedown', onMouseDown04);
//move
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousemove', onMouseMove02);
    document.addEventListener('mousemove', onMouseMove03);
    document.addEventListener('mousemove', onMouseMove04);
    document.addEventListener('mouseup', onMouseUp);
//close

    var closeButton = document.querySelectorAll('.window-close');
    closeButton[0].addEventListener('click', closeWindow);
    closeButton[1].addEventListener('click', closeWindow02);
    closeButton[2].addEventListener('click', closeWindow03);
    closeButton[4].addEventListener('click', closeWindow04);
    // closeButton[4].addEventListener('click', closeWindow05);


//toggleButton
    var toggleButton = document.querySelectorAll('.windowtoggle');
    toggleButton[0].addEventListener('click', function() {
        state.isHidden = !state.isHidden;
        renderWindow(w, state);
    });


    toggleButton[1].addEventListener('click', function() {
        state02.isHidden = !state02.isHidden;

        renderWindow(w02, state02);
    });

    toggleButton[2].addEventListener('click', function() {
        state03.isHidden = !state03.isHidden;

        renderWindow(w03, state03);
    });

     toggleButton[3].addEventListener('click', function() {
        state04.isHidden = !state04.isHidden;

        renderWindow(w04, state04);
    });
   
});