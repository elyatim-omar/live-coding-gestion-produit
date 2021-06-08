$(document).ready(function(){
    var studentlist;
    function getall(){
$(".studentlist").html(" ");
$.ajax({
url:"getstudents.php",
method:"GET",
success:function(data){
    studentlist = JSON.parse(data);
    console.log(studentlist);
    $(".studentlist").append(" <tr><th>NAME</th><th>FATHERNAME</th><th>ROLLNO</th><th>DEGREE</th><th>BRANCH</th></tr>")
    for (var i = 0 ; i < studentlist.length ; i++){
        $(".studentlist").append("<tr><td>"+studentlist[i]["name"]+"</td><td>"+studentlist[i]["fathername"]+"</td><td>"+studentlist[i]["rollno"]+"</td><td>"+studentlist[i]["degree"]+"</td><td>"+studentlist[i]["branch"]+"</td></tr>")
    }
}



})

}
getall();
})