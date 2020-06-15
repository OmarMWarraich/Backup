function onCbChange(cb) {
    var b = document.getElementById(cb).checked;

    var confirmBox = confirm("Welcome to JS Land..");

    if (confirmBox == true) {
        if (b) {
            document.getElementById(cb).checked = true;
        }
        else {
            document.getElementById(cb).checked = false;
        }
    }
    else {

        document.getElementById(cb).checked = !b;
    };

}

var percent = +prompt("Enter your percent")
if(percent >= 80 && percent <= 100){
    alert("A+")
}
else if(percent >= 70 && percent <= 79){
    alert("A")
}
else if(percent >= 60 && percent <= 69){
    alert("B")
}
else if(percent >= 50 && percent <= 59){
    alert("C")
}
else if(percent >= 40 && percent <= 49){
    alert("D")
}
else if(percent >= 33 && percent <= 39){
    alert("E")
}
else if(percent >= 0 && percent <= 32){
    alert("C")
}
else{
    alert("You did not provide correct percentage")
}

var students = ["Omar","Samr","Nasr",123]
console.log(students[1])

alert("welcome" +  students[3])

var students =[];

names[0] = "Tamseela"

console.log(names)

students.pop() //pops last element

students.push("Basit","Junaid") //appends to the last

students.shift() //removes first element

students.unshift("Qamr", "namr") //adds element at start

students.splice(0,1,"Tamseeela")  //removes 1 element starting from index 0 and adds Tam at start.

var copyStudents = students.slice(1,4) //copies elements 1 till 4

var a;
for(a=1, a<=10; a++){    //initialization,condition,increment
    document.write(a)
}

for(var b =10; b >= 1; b--){
    document.write(b + "<br>")
}

var x;
for(x=1, x<=10, x++){
    console.log(x)
}

for( var i = 0; i < 5; i++){
    alert("Hello World");
}

document.write("2" +"x" + "1" + "=" + 2* 1 + "<br>")
document.write("2" +"x" + "2" + "=" + 2* 2 + "<br>")
document.write("2" +"x" + "3" + "=" + 2* 3 + "<br>")
document.write("2" +"x" + "4" + "=" + 2* 4 + "<br>")
document.write("2" +"x" + "5" + "=" + 2* 5 + "<br>")
document.write("2" +"x" + "6" + "=" + 2* 6 + "<br>")

for (var i=1; i<=10; i++){
    document.write("2" + "x" + i + "=" + 2*i + "<br>")
}  //tables of 2 uptil 10

for(var i = 0; i < names.length, i++){
    console.log(names[i])
}

var cities = ["khi","lhr","ibd","fbd"];

for(var i = 0; i < cities.length; i++){
    if (cities[i] === "khi"){
        alert(cities[i] + " is a cleanest city!")
    }
}

for (var i = 1; i > 0; i++){
    if(i === 10){
        break        //break in loop
    }
    console.log("hello")
}  //infinite loop without break

for(var i =0; i < 5; i++){
    for(var j = 0; j < 3; j++){
        document.write(j+ "Pakistan Zindabad" + "<br>")
    }
}

var firstNames = ["O","P"]
var lastNames = ["Q","R"]

for(var i = 0; i < firstNames.length; i++){
    for(var j = 0; j < lastNames.length; j++){
        console.log(firstNames[i] + " " + lastNames[j])
    }
}

for(var i = 0, i < 10; i++){
    for(var j = 0; j < i; j ++){
        document.write("*")
    }
    document.write("<br>")
}














































































































