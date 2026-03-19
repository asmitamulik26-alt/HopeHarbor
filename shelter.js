let shelterData = [

{
name:"Hope Shelter",
city:"Pune",
beds:10,
food:"Available"
},

{
name:"Care Center",
city:"Pune",
beds:3,
food:"Limited"
},

{
name:"Night Safe Home",
city:"Mumbai",
beds:7,
food:"Available"
}

];


function displayShelters(list){

let container = document.getElementById("shelters");

container.innerHTML="";

list.forEach(s=>{

container.innerHTML +=

`<div class="bg-white p-5 rounded shadow">

<h3 class="text-xl font-bold">${s.name}</h3>

<p class="text-gray-600">
Beds Available: ${s.beds}
</p>

<p>
Food: ${s.food}
</p>

<button class="mt-3 bg-green-600 text-white px-4 py-2 rounded">

Reserve Bed

</button>

</div>`;

});

}


displayShelters(shelterData);


function searchShelter(){

let city =
document.getElementById("city").value.toLowerCase();

let result =
shelterData.filter(
s => s.city.toLowerCase() === city
);

displayShelters(result);

}


function emergency(){

alert("Emergency request sent to nearest NGO!");

}