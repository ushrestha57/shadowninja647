var nSplit= "atl (atl is not the best movie lol but ok),un chien andalou,blue velvet,barry lyndon,battleship potemkin,raging bull,the conformist,bicycle thieves,mean streets,gods of the plague,persona,happy together (wong kar wai),fallen angels,apocalypse now,the last laugh,pi,full metal jacket,no country for old men,wild at heart,memento,metropolis,rushmore,the royal tenenbaums,miller's crossing,the discreet charm of the bourgeoisie (luis bunuel),blood simple,orpheus,la confidential,reservoir dogs,eastern promises,battle royale,the passion of anna,bring me the head of alfredo garcia,oldboy (park chan-wook 2003),django unchained,one flew over the cuckoo's nest,the good, the bad and the ugly,the godfather (Probably the triology),m (fritz lang),scarface (howard hawks 1932),scarface (de palma 1983),blade runner,citizen kane,on the waterfront,annie hall,psycho,dr. strangelove,the french connection,the deer hunter,wild strawberries (bergman),fargo,the sacrifice (andrei tarkovsky),el topo,holy mountain,the shining,fitzcarraldo,american beauty,solaris (andrei tarkovsky),true romance,elephant man,woyzeck,jackie brown,aguirre, the wrath of God,paris, texas,devil in a blue dress,inglorious basterds,serpico,alien,ed wood,hard eight,the seventh seal,sonatine,paths of glory,there will be blood,spartacus,assassination of jesse james by the coward robert ford,brazil,throne of blood (akira kurosawa),the master,dog day afternoon,rosemary's baby,phantom of the paradise,inauguration of the pleasure dome,malcolm x,scorpio rising,the friends of eddie coyle,nosferatu (f.w. murnau 1929),basquiat,the king of comedy";

var list = nSplit.split(",");

var select = document.getElementById("removeItem")
for(var x = 0; x < list.length; x++)
{
  var opt = list[x];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

function getRandomMovie() {

    alert(list[getRndInteger(0,list.length)]);
  }

  function getRndInteger(min, max) {
    return (Math.floor(Math.random() * (max - min) ) + min);
  }

  function removeMovie()
  {
    var e =  document.getElementById("removeItem");

    e.remove(e.selectedIndex);
  }