var nSplit= "passion of joan of arc,wings of honneamise,venus wars,THX 1138,castle in the sky,arcadia of my youth,pather panchali,koyaanisqatsi,nausicaa of the valley of the wind,newton,koi mil gaya,mobile suit gundam 2,star wars the phantom menace,om shanti om,police story,godzilla (1954),borat,sorry to bother you,the great escape (1963),the guns of navarone (1961),escape from new york (1981),north by northwest (1959),planet of the apes (1968),dawn of the dead (1978),tokyo story (1953),la strada (1954),lawrence of arabia (1972),city lights (1931),beauty and the beast (1946),the third man (1949),singin in the rain (1952),the wages of fear (1953),12 angry men (1957),kanal (1957),umbrellas of cherbourg (1964),django (1966),fantastic voyage (1966),deep red (1975),somewhere in time (1980),das boot (1981),mad max 2 (1981),streets of fire (1984),bad blood (1986),a better tomorrow (1986),cinema paradiso (1988),fantastic planet (1973),wicked city (1987),asobi (1971),castle of sand (1974),burst city (1982),night and fog (1955),casablanca (1942),the thing from another world (1951),elevator to the gallows (1958),the fabulous world of jules verne (1958),alphaville (1965),one million years B.C. (1966),the last adventure (1967),barbarella (1968),butch cassidy and the sundance kid (1969),el topo (1970),silent running (1972),the spirit of the beehive (1973),the towering inferno (1974),rollerball (1975),the bullet train (1975),the cassandra crossing (1976),the right stuff (1983),the name of the rose (1986),bad taste (1987),nikita (1990), atl (atl is not the best movie lol but ok),un chien andalou,blue velvet,barry lyndon,battleship potemkin,raging bull,bicycle thieves,mean streets,persona,happy together (wong kar wai),fallen angels,apocalypse now,the last laugh,pi,full metal jacket,no country for old men,wild at heart,memento,metropolis,rushmore,the royal tenenbaums,miller's crossing,the discreet charm of the bourgeoisie (luis bunuel),blood simple,orpheus,la confidential,reservoir dogs,eastern promises,battle royale,the passion of anna,bring me the head of alfredo garcia,oldboy (park chan-wook 2003),django unchained,one flew over the cuckoo's nest,the good the bad and the ugly,the godfather,m (fritz lang),scarface (howard hawks 1932),scarface (de palma 1983),blade runner,citizen kane,on the waterfront,annie hall,psycho,dr. strangelove,the french connection,the deer hunter,wild strawberries (bergman),fargo,the sacrifice (andrei tarkovsky),el topo,holy mountain,the shining,fitzcarraldo,american beauty,solaris (andrei tarkovsky),true romance,elephant man,woyzeck,jackie brown,aguirre, the wrath of God,paris texas,devil in a blue dress,inglorious basterds,serpico,alien,ed wood,hard eight,the seventh seal,sonatine,paths of glory,there will be blood,spartacus,assassination of jesse james by the coward robert ford,brazil,throne of blood (akira kurosawa),the master,dog day afternoon,rosemary's baby,phantom of the paradise,inauguration of the pleasure dome,malcolm x,scorpio rising,the friends of eddie coyle,nosferatu (f.w. murnau 1929),basquiat,the king of comedy";

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
