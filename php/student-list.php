<!DOCTYPE html>
<head>
    <title>Sample School District</title>

    <link rel="stylesheet" href="student-list-css.css">
</head>
<body>
    <h1>Welcome to Sample School District</h1>    

    <h2>Student Enrollment</h2>

    <p>
        Filter by last name starting with
        <a href="student-list.php">All</a>
<?php

for ($i = 0; $i < 26; $i++)
{
    $letter = chr($i + ord("A"));
    echo "<a href='student-list.php?last_name=$letter'>$letter</a> ";
}

?>
        <br>
        <form action="student-list.php">
            Filter by first name contains
            <input type="text" name="first_name"/> 
            <input type="submit" value="Filter"/>
        </form>
        <form action="student-list.php">
            Filter by year of graduation
            <input type="text" name="stu_yog"/> 
            <input type="submit" value="Filter"/>
        </form>
        <form action="student-list.php">
            Filter by homeroom
            <input type="text" name="stu_homeroom"/> 
            <input type="submit" value="Filter"/>
        </form>
    </p>


    <table border="1">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>YOG</th>
            <th>Homeroom</th>
            <th>Counselor</th>
            <th>School</th>
        </tr>

        <!-- Add Student List -->
<?php

$servername = "localhost";
$username = "root";
$password = "947-1184";
$dbname = "sis";

$connection = new mysqli($servername, $username, $password, $dbname);
if ($connection->connect_error)
{
    die("Connection Failed: " . $connection->connect_error);
}

extract($_REQUEST);
// extract command is built in function
// REQUEST variable is a "magic" variable

$sql = "SELECT stu_first_name, stu_last_name, stu_yog, stu_homeroom, stu_counselor, skl_name FROM students JOIN schools ON skl_id = stu_skl_id ";

if (isset($last_name))
{
    $sql .= "WHERE stu_last_name LIKE '$last_name%' ";
}
if (isset($first_name))
{
    $sql .= "WHERE stu_first_name LIKE '%$first_name%' ";
}
if (isset($stu_homeroom))
{
    $sql .= "WHERE stu_homeroom LIKE '%$stu_homeroom%' ";
}
if (isset($stu_yog))
{
    $sql .= "WHERE stu_yog LIKE '%$stu_yog%' ";
}

$sql .= "ORDER BY stu_last_name, stu_first_name ";

//echo $sql;

$result = $connection->query($sql);
while ($row = $result->fetch_assoc())
{
    echo "<tr>";
    echo "<td>" . $row["stu_first_name"] . "</td>";
    echo "<td>" . $row["stu_last_name"] . "</td>";
    echo "<td>" . $row["stu_yog"] . "</td>";
    echo "<td>" . $row["stu_homeroom"] . "</td>";
    echo "<td>" . $row["stu_counselor"] . "</td>";
    echo "<td>" . $row["skl_name"] . "</td>";
    echo "</tr>";
}
?>

    </table>



</body>
</html>