<?php 
$dbh = new PDO("mysql:host=localhost:3306;dbname=schoolstd","root","solicode24");
$sql = " SELECT * FROM schoolstudents ";
$querry = $dbh->query($sql);
$getstudents = $querry-> fetchALL(PDO :: FETCH_ASSOC);
print_r(json_encode($getstudents));
?>