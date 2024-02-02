<p>
        Filter by Common Name starting with
        <a href="index.php">All</a>
<?php

for ($i = 0; $i < 26; $i++)
{
    $letter = chr($i + ord("A"));
    echo "<a href=index.php?common_name=$letter>$letter</a> ";
}

?>
        <br>
        <form action="index.php">
            Filter by Order
            <input type="text" name="order"/> 
            <input type="submit" value="Filter"/>
        </form>
        <form action="index.php">
            Filter by Class
            <input type="text" name="class"/> 
            <input type="submit" value="Filter"/>
        </form>
        <form action="index.php">
            Filter by Subphylum
            <input type="text" name="subphylum"/> 
            <input type="submit" value="Filter"/>
        </form>
        <form action="index.php">
            Filter by Location
            <input type="text" name="location"/> 
            <input type="submit" value="Filter"/>
        </form>
        
    </p>


<table class="table table-striped table-hover">
    <thead>
        <tr>
            <th>Name</th>
            <th>Species</th>
            <th>Order</th>
            <th>Class</th>
            <th>Subphylum</th>
            <th>Ecosystem</th>
            <th>Location</th>
            <th>Wiki Link</th>
        </tr>
    </thead>

    <tbody>
<?php

$connection = get_database_connection();

extract($_REQUEST);

$sql =<<<SQL
SELECT arth_id, arth_common_name, arth_species, arth_order, arth_class, arth_subphylum, arth_ecosystem, arth_habitat, arth_location, arth_wiki_link, arth_img_link
  FROM arthropod 
 
SQL;



if (isset($common_name))
{
    $sql .= "WHERE arth_common_name LIKE '$common_name%' ";
}
if (isset($order))
{
    $sql .= "WHERE arth_order LIKE '%$order%' ";
}
if (isset($class))
{
    $sql .= "WHERE arth_class LIKE '%$class%' ";
}
if (isset($subphylum))
{
    $sql .= "WHERE arth_subphylum LIKE '%$subphylum%' ";
}
$sql .= "ORDER BY arth_common_name ";
echo $sql;
$result = $connection->query($sql);
while ($row = $result->fetch_assoc())
{
    echo '<tr>';
    echo '<td>';
    echo '<a href="index.php?content=arthropod-detail&id=' . $row['arth_id'] . '">' . $row['arth_common_name'] . '</a>';
    echo '</td>';
    echo '<td>' . $row['arth_species'] . '</td>';
    echo '<td>' . $row['arth_order'] . '</td>';
    echo '<td>' . $row['arth_class'] . '</td>';
    echo '<td>' . $row['arth_subphylum'] . '</td>';
    echo '<td>' . $row['arth_ecosystem'] . '</td>';
    echo '<td>' . $row['arth_location'] . '</td>';
    echo '<td>' . $row['arth_wiki_link'] . '</td>';
    echo '<td>';
    if ($row['arth_wiki_link'] != '')
    {
        echo ' X ';
    }
    echo '</td>';
    echo '</tr>';
}

?>
    </tbody>
</table>

<a href="index.php?content=arthropod-detail" class="btn btn-primary" role="button" aria-disabled="true">Add a Arthropod</a>