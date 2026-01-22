let obj = [{
    "name": "deepak",
    "age": 25,
    "gender": "male"
},
{
    "name": "jyoti",
    "age": 30,
    "gender": "female"
}
    ,
{
    "name": "Motu",
    "age": 28,
    "gender": "female"
},
{
    "name": "Vishant",
    "age": 29,
    "gender": "male"
},
{
    "name": "Harvinder",
    "age": 28,
    "gender": "male"
},
{
    "name": "Siddarth",
    "age": 27,
    "gender": "male"
}
]


for (let i = 0; i < obj.length; i++) {
    if (obj[i]["gender"] == "male") {
        console.log(obj[i]["name"]);
    }
}