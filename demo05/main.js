


$("#selectFiles").change(function(e) {
    onChange(e);
});










function onChange(event) {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);  
}



function onReaderLoad(event){
    //alert(event.target.result);
    var title = [];
    var result = JSON.parse(event.target.result);
    // var title = JSON.parse(event.target.result.title);
    // var formatted = JSON.stringify(result, null, null);
    // var w3school = result.filter(function (entry) {
    // return entry.title === 'w3schools';
    // });
 for(i =0; i<result.length;i++){
     title += [result[i].header, result[i].title];
     }
    var formatted = JSON.stringify(title,null,0);

    


$.getJSON("keyword.json", function(data) {
    var TableRow = '';

// for (var  i = 0; i <= data.length - 1;i++) {
//      var searchKey = data[i].Keyword;
// }

// var mydata = JSON.parse(data);
// console.log(mydata);
 
      var num = [];
   //console.log(json); // this will show the info it in firebug console
   $.each(data, function(i, value) {
      // TableRow += "<td>" + val + "</td>";
      //    $(".keywords").append(TableRow);
    
    // console.log(i);
    // $(".keywords").append(val);
    // document.getElementsByClassName("price")[i].innerHTML = val.CPC;

      var TableRow = "<tr>";
      
       $.each(value, function (key, val) {
        TableRow += "<td> " + val + "</td>";

  });


      var patt = value.Keyword;
      // console.log(searchKey);
      // var cost = value.CPC;
      // var total;
      var rgxp = new RegExp(patt,"gi");
      var search;

      var cost;
      // var index = (formatted.match(rgxp)).index;
      
      if ( search=(formatted.match(rgxp)) !== null ) {
        // console.log(value.Keyword.findIndex(rgxp));
        var total = data.Keyword;
        // var Key = value.Keyword;
        // var index = searchKey.indexOf(Key);
        // console.log(value[]);

        TableRow += "<td>" + (formatted.match(rgxp)).length + "</td>";
        num.push((formatted.match(rgxp)).length * value.CPC);
        // var a = va[ar.index];
        TableRow += "<td>" + (formatted.match(rgxp)).length * value.CPC + "</td>";

    
  }else{
     TableRow += "<td>" + "/" + "</td>";
     TableRow += "<td>" + "/" + "</td>";
  }


      // cost += num;
      // console.log(cost);

        TableRow += "</tr>";
  $(".table").append(TableRow);
     
   })

   arrSum = function(arr){
  return arr.reduce(function(a,b){
    return a + b
  }, 0);
}

    // console.log(num);
        TableRow += "<tr>";
        TableRow += "<td>total:</td>";
        TableRow += "<td> </td>";
        TableRow += "<td> </td>";
        TableRow += "<td>" + arrSum(num)+ "</td>";
         TableRow += "</tr>";
        $(".table").append(TableRow);
     



});


}

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

