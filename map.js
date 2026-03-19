function initMap(){

let map = new google.maps.Map(
document.getElementById("map"),
{
center:{lat:18.5204,lng:73.8567},
zoom:12
});

let shelters = [

{lat:18.530,lng:73.847,name:"Hope Shelter"},

{lat:18.510,lng:73.870,name:"Care Shelter"}

];

shelters.forEach(s=>{

new google.maps.Marker({

position:{lat:s.lat,lng:s.lng},

map:map,

title:s.name

});

});

}