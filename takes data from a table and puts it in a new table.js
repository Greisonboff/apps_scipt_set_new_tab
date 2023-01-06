//takes data from a table and puts it in a new table
function myFunction() {
    // table name
    var nomeTabela = 'tabela';
    var nomeNovaTabela = 'new tab';
  
  
    // table columns
    var quantiti = 'I2';
    var tabA = 'A';
    var tabB = 'B';
    var tabC = 'C';
    var tabE = 'E';
    var tabF = 'F';
  
  // pega a quantidade de linhas preenchidas da tabela
    var quantitiValue = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nomeTabela).getRange(quantiti).getValue();
    quantitiValue = quantitiValue + 1;
  
    var informationTabA = [];
    var informationTabB = [];
    var informationTabC = [];
    var informationTabE = [];
    var informationTabF = [];
  
    //paga os dados na tabela
    for (var i = 1; i < quantitiValue; ++i) {
      informationTabA.push(SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nomeTabela).getRange(tabA + i).getValue());
      informationTabB.push(SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nomeTabela).getRange(tabB + i).getValue())
      informationTabC.push(SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nomeTabela).getRange(tabC + i).getValue())
      informationTabE.push(SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nomeTabela).getRange(tabE + i).getValue())
      informationTabF.push(SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nomeTabela).getRange(tabF + i).getValue())
    }
  
    // imprime os dados na tela
    for (var i = 0; i < informationTabA.length; ++i) {
      console.log(informationTabA[i] + informationTabB[i] + informationTabC[i] + informationTabE[i] + informationTabF[i])
    }
  
    // pega a quantidade de linhas preenchidas da tabela
    var quantitiValueNewTab = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nomeNovaTabela).getRange(quantiti).getValue();
    quantitiValueNewTab = quantitiValueNewTab + 1;
  
    if(quantitiValueNewTab == 0){
    var cont = 1;
    }else{
      var cont = quantitiValueNewTab;
    }
  
    // insere elementos na nova tabela
    for (var i = 0; i < informationTabA.length; ++i) {
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nomeNovaTabela).getRange(tabA + cont).setValue(informationTabA[i]);
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nomeNovaTabela).getRange(tabB + cont).setValue(informationTabB[i]);
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nomeNovaTabela).getRange(tabC + cont).setValue(informationTabC[i]);
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nomeNovaTabela).getRange(tabE + cont).setValue(informationTabE[i]);
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nomeNovaTabela).getRange(tabF + cont).setValue(informationTabF[i]);
      cont ++;
    }
  }
  