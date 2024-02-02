<?php

include('library.php');

$connection = get_database_connection();

$sql = '';

$common_name = $connection->real_escape_string($common_name);
$species = $connection->real_escape_string($species);
$order = $connection->real_escape_string($order);
$class = $connection->real_escape_string($class);
$subphylum = $connection->real_escape_string($subphylum);
$ecosystem = $connection->real_escape_string($ecosystem);
$habitat = $connection->real_escape_string($habitat);
$location = $connection->real_escape_string($location);
$wiki_link = $connection->real_escape_string($wiki_link);
$wiki_link = $connection->real_escape_string($wiki_link);

if (isset($id) && $id != '')
{
    $sql =<<<SQL
    UPDATE arthropod
       SET arth_common_name = '$common_name',
           arth_species = '$species',
           arth_order = '$order',
           arth_class = '$class',
           arth_subphylum = '$subphylum',
           arth_ecosystem = '$ecosystem',
           arth_habitat = '$habitat',
           arth_location = '$location',
           arth_wiki_link = '$wiki_link',
           arth_img_link = '$img_link'

     WHERE arth_id = $id
    SQL;
}
else
{
    $sql =<<<SQL
    INSERT INTO arthropod (arth_common_name, arth_species, arth_order, arth_class, arth_subphylum, arth_ecosystem, arth_habitat, arth_location, arth_wiki_link, arth_img_link)
    VALUES ('$common_name', '$species', '$order', '$class', '$subphylum', '$ecosystem', '$habitat', '$location', '$wiki_link', '$img_link')
    SQL;
}

$connection->query($sql);

header('Location: index.php');