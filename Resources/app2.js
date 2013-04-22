// ########################################################################
// ############### Dit is de code voor in app2.js #########################
// ########################################################################

var win1 = Titanium.UI.currentWindow;

var cities = [
  { title: "Uit eten in "+win1.title },
  { title: "Hotels in "+win1.title },
  { title: win1.title+" in de zomer" }
];

// Als je de lijst eenmaal hebt, is de rest makkelijk. Maak een nieuwe tableView en geef aan dat je 
// de array 'cities' wilt gebruiken om de tableView te vullen:
  
var tview = Ti.UI.createTableView({
    data: cities
});

win1.add(tview);