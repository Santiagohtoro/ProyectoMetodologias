
//Buscador
export const search = () => {
  let num_cols, display, input, filter, table_body, tableRow, tableCell, 
  i, j, txtValue;
      num_cols = 3;
  
  input = document.getElementById("productSearch"),
  filter = input.value.toUpperCase(),
  table_body = document.getElementsByTagName("TableBody"),
  tableRow = table_body.getElementsByTagName("TableRow");

  for (i = 0; i < tableCell.lenght; i++){
    display = "none";
    for(j=0; j < num_cols; j++){
      tableCell = tableRow[i].getElementsByTagName("TableCell")[j];
      if(tableCell){
        txtValue = tableCell || tableCell.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1){
          display = "";
        }
      }
    }
    tableCell[i].style.display = display;
  }
}