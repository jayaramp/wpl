/* form related java script functions */

//To add a new row at the end of the table.
function addRow() {
    document.getElementById("myTable").insertRow(-1).innerHTML = '<td><input type="text" class="123" name="txtUserName" maxlength="20"/></td><td><input type="text" name="txtUserName" maxlength="20"/></td><td><input type="email" name="email" /></td><td><input type="number" /></td><td><input type="button" value="Delete" onclick="deleteRow(this)"></td>';
}
		
//To delete a selected row.
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}


//To check if the alt key pressed and change color of the cell and text.
var altPressed = false;
$(window).keydown(function(evt) {
  if (evt.which == 18) { // alt
    altPressed = true;
  }
}).keyup(function(evt) {
  if (evt.which == 18) { // alt
    altPressed = false;
  }
});


$(document).ready(function(){	
$('#myTable > tbody').on('mouseenter', 'input', function(){
	if (altPressed) {
	$(this).css("color", "red");
     $(this).css("background-color", "blue");
	}
 });
  });
 
 $(document).ready(function(){	
 $('#myTable > tbody').on('mouseleave', 'input', function(){
	 $(this).css("color", "black");
     $(this).css("background-color", "white");
 });
 });