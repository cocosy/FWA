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
        TableRow += "<td>" + ((formatted.match(rgxp)).length * value.CPC).toFixed(2) + "</td>";

    
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

function demoFromHTML() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    source = $('#export')[0];

    // we support special element handlers. Register them with jQuery-style 
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors 
    // (class, of compound) at this time.
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };
    margins = {
        top: 60,
        bottom: 60,
        left: 40,
        width: 522
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
    source, // HTML string or DOM elem ref.
    margins.left, // x coord
    margins.top, { // y coord
        'width': margins.width, // max width of content on PDF
        'elementHandlers': specialElementHandlers
    },

    function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF 
        //          this allow the insertion of new lines after html
        pdf.save('Invoice.pdf');
    }, margins);
}

