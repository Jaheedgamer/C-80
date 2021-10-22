var name_of_the_student_arry = [];

function submit() {

    var display_student_arry = [];

    for(var j = 1;j<=4;j++)
    {
        var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
        name_of_the_student_arry.push(name_of_the_student);
    }
console.log(name_of_the_student_arry);
var length_of_arry = name_of_the_student_arry.length;
console.log(length_of_arry);
for(var k =0;k<length_of_arry;k++)
{
display_student_arry.push("<h4>Name- "+name_of_the_student_arry[k]+"</h4>");
console.log(display_student_arry);
}
console.log(display_student_arry);

document.getElementById("display_name_with_commas").innerHTML=display_student_arry;

var remove = display_student_arry.join(" ");
console.log(remove);

document.getElementById("display_name_without_commas").innerHTML=remove;
document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting() {
    name_of_the_student_arry.sort();
    var display_student_arry_sort = [];
    var length_of_arry = name_of_the_student_arry.length;
console.log(length_of_arry);
for(var k =0;k<length_of_arry;k++)
{
display_student_arry_sort.push("<h4>Name- "+name_of_the_student_arry[k]+"</h4>");
console.log(display_student_arry_sort);
}
console.log(display_student_arry_sort);



var remove = display_student_arry_sort.join(" ");
console.log(remove);

document.getElementById("display_name_without_commas").innerHTML=remove;
}