







       // function gfg() { 
        //     var s = "Geeks for Geeks"; 
        //     var f = "Geeks"; 
        //     var r = s.indexOf(f); 
        //     var c = 0; 
        //     while (r != -1) { 
        //         c++; 
        //         r = s.indexOf(f, r + 1); 
        //     } 
        //     document.getElementById("rk").innerHTML = c; 
        // } 
// ------------------------ working 01 
// document.getElementById('import').onclick = function() {
//     var files = document.getElementById('selectFiles').files;
//      console.log(files);
//      if (files.length <= 0) {
//         return false;
//       }

//   var fr = new FileReader();

//   fr.onload = function(e) { 
//   // console.log(e);
//     var result = JSON.parse(e.target.result);
//     var formatted = JSON.stringify(result, null, 2);
//         document.getElementById('result').value = formatted;
//   }

//   fr.readAsText(files.item(0));
// };
// ------------------------ working 01 


// let filterWords = "{"w3school","youtube","gmail" }";

// ------------------------ working 02

// ------------------------ smooth scroll
// function pageScroll() {
//     window.scrollBy(0,800); // horizontal and vertical scroll increments
//     // scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
// }

// function up() {
//     document.getElementById( 'landing' ).scrollIntoView();
//     // window.setTimeout( function () { up(); }, 2000 );    
// };

// function bottom() {
//     document.getElementById( 'bottom' ).scrollIntoView();
//     window.setTimeout( function () { top(); }, 2000 );
// };



//parse


   

// function searchData()







// (function gfg(){
    
//     function onChange(event) {
//         var reader = new FileReader();
//         reader.onload = onReaderLoad;
//         reader.readAsText(event.target.files[0]);
//     }

//     function onReaderLoad(event){
//         console.log(event.target.result);
//         var obj = JSON.parse(event.target.result);
//         alert_data(obj.title, obj.header);
//     }
    
//     function alert_data(title, header){
//         alert('Name : ' + title + ', Family : ' + header);
//     }
 
//     document.getElementById('file').addEventListener('change', myFunction);
//     // document.getElementById('fileInput').innerHTML = c; 



// }());

