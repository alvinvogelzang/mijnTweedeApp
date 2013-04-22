// En dan nu: tableViews. Deze kom je heel vaak tegen in iPhone en Android applicaties, in veel verschillende
// vormen. Soms is het een menu met opties om uit te kiezen (zoas in de instellingen van je telefoon, of in de iPod app)
// en soms is het meer een lijstje met informatie (zoals de statusupdates van je vrienden op Facebook). Het kan dus
// een simpele kale lijst zijn of eentje die meer is aangekleed met verschillende teksten (zoals bij Facebook, met een 'like' 
// knop en de datum waarop het bericht geplaatst werd, en een foto).

var win1 = Titanium.UI.createWindow({  
    title:'Reisgids',
    backgroundColor:'#FF0000',
    tabBarHidden: true
});

// Er zijn twee manieren om een tableView te maken in Titanium. De ene voor als je snel een simpel lijstje wilt, en eentje
// als je meer controle wilt over de layout van elke rij in de tabel (zoals bij de Facebook app). In beide gevallen heb je
// een lijstje nodig met elementen die je toe wilt voegen.

// Hier hebben we een voorbeeld lijstje dat we met de hand aanmaken. Dit is dus vooral handig voor vaststaande lijsten,
// zoals bij een menu. Het lijstje is in de vorm van een array (te herkennen aan de [ ]) en elk item in de array
// is een object. De properties in dit object (titel, color, hasChild) vormen straks de properties van elke rij in de
// tableView. De lijst met properties vind je in de documentatie bij Titanium.UI.tableViewRow (elke rij in de tabel is
// dus een part object van het type tableViewRow).

var cities = [
  { title: "Amsterdam", color:'#FF0000', hasChild:true},
  { title: "Rome", hasChild:true },
  { title: "Parijs", hasChild:true },
  { title: "Londen", hasChild:true },
  { title: "Washington", hasChild:true },
  { title: "Bangkok", hasChild:true },
  { title: "Praag", hasChild:true },
  { title: "Berlijn", hasChild:true },
  { title: "Brussel", hasChild:true },
  { title: "Madrid", hasChild:true, eigenProperty:'test' }
];

// Als je de lijst eenmaal hebt, is de rest makkelijk. Maak een nieuwe tableView en geef aan dat je 
// de array 'cities' wilt gebruiken om de tableView te vullen:
  
var tview = Ti.UI.createTableView({
    data: cities
});

// Nu is je tableView al klaar! Meestal wil je echter dat je applicatie reageert als iemand op een
// van de rijen klikt. Daarom maken we ook een functie die reageert op het click event van de tableView.
// Net als bij de knop wordt er weer informatie over de aangeklikte rij doorgegeven aan onze functie.
// Met e.row kun je alles over de aangeklikte rij opvragen, zoals e.row.title of e.row.eigenProperty.

tview.addEventListener('click', function(e){
	win = Titanium.UI.createWindow({
		url: 'app2.js',
		title:e.row.title
	});
	// Hee, een tab? Zie uitleg hieronder.
	tab1.open(win);
});

win1.add(tview);

// In het vorige voorbeeld hebben we zelf nieuwe vensters geopend en gesloten, en ook weer gezorgd
// voor een terugknop. Dat is prima voor simpele applicaties, maar zeker als je meerdere vensters
// met tableViews achter elkaar laat zien wordt dat onoverzichtelijk. Titanium kan ook automatisch zorgen
// dat er een titelbalk met terugknop in beeld komt (iPhone) of dat je applicatie reageert op te terugknop
// op de telefoon (Android). Dat werkt echter alleen als je venster onderdeel is van een tabblad. In deze
// applicatie gebruik ik verder geen tabbladen, dus maak ik een verborgen tabGroup aan. Zo kunnen alsnog
// van de automatische terugknop gebruik maken zonder een tabbalk in beeld te hebben. De tabGroup blijft
// verborgen omdat helemaal bovenaan bij het maken van dit hoofdvenster ik de property tabBarHidden: true heb toegevoegd.

var tabGroup = Titanium.UI.createTabGroup();

var tab1 = Titanium.UI.createTab({
    window: win1
});

tabGroup.addTab(tab1);

tabGroup.open();

