let ctx = document.getElementById("chart");

new Chart(ctx,{

type:"line",

data:{

labels:["Jan","Feb","Mar","Apr","May"],

datasets:[{

label:"People Sheltered",

data:[20,45,70,110,145]

}]

}

});