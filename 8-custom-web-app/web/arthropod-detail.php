<?php

$common_name = '';
$species = '';
$order = '';
$class = '';
$subphylum = '';

$ecosystem = '';
$habitat = '';
$location = '';
$wiki_link = '';
$img_link = '';


if (isset($id))
{
    $connection = get_database_connection();

    $sql =<<<SQL
    SELECT arth_id, arth_common_name, arth_species, arth_order, arth_class, arth_subphylum, arth_ecosystem, arth_habitat, arth_location, arth_wiki_link, arth_img_link
      FROM arthropod
      WHERE arth_id = $id
    SQL;

    $result = $connection->query($sql);
    $row = $result->fetch_assoc();

    $common_name = $row['arth_common_name'];
    $species = $row['arth_species'];
    $order = $row['arth_order'];
    $class = $row['arth_class'];
    $subphylum = $row['arth_subphylum'];
    $ecosystem = $row['arth_ecosystem'];
    $habitat = $row['arth_habitat'];
    $location = $row['arth_location'];
    $wiki_link = $row['arth_wiki_link'];
    $img_link = $row['arth_img_link'];
}

?>

<form action="save-arthropod.php"> 
    <input type="hidden" class="form-control" id="id" name="id" value="<?php echo isset($id) ? $id : '' ?>" />

    <div id="img_div" class="img_div">
        <img src="<?php echo $img_link ?>" class="img" >
    </div>

    <div class="mb-3">
        <label for="common_name" class="form-label">Common Name</label>
        <input type="text" class="form-control w-25" id="common_name" name="common_name" value="<?php echo $common_name ?>" />
    </div>

    <div class="mb-3">
        <label for="species" class="form-label">Species</label>
        <input type="text" class="form-control w-25" id="species" name="species" value="<?php echo $species ?>" />
    </div>

    <div class="mb-3">
        <label for="order" class="form-label">Order</label>
        <input type="text" class="form-control w-25" id="order" name="order" value="<?php echo $order ?>" />
    </div>

    <div class="mb-3">
        <label for="class" class="form-label">Class</label>
        <input type="text" class="form-control" id="class" name="class" value="<?php echo $class ?>" />
    </div>

    <div class="mb-3">
        <label for="subphylum" class="form-label">Subphylum</label>
        <select class="form-select" name="subphylum">
            <option <?php echo $subphylum == 'Euthycarcinoids' ? 'selected' : '' ?>>Euthycarcinoids</option>
            <option <?php echo $subphylum == 'Myriapods' ? 'selected' : '' ?>>Myriapods</option>
            <option <?php echo $subphylum == 'Crustaceans' ? 'selected' : '' ?>>Crustaceans</option>
            <option <?php echo $subphylum == 'Hexapods' ? 'selected' : '' ?>>Hexapods</option>
            <option <?php echo $subphylum == 'Chelicerates' ? 'selected' : '' ?>>Chelicerates</option>
        </select>
    </div>


    <div class="mb-3">
        <label for="ecosystem" class="form-label">Ecosystem</label>
        <input type="text" class="form-control" id="ecosystem" name="ecosystem" value="<?php echo $ecosystem ?>" />
    </div>

    <div class="mb-3">
        <label for="habitat" class="form-label">Habitat</label>
        <input type="text" class="form-control" id="habitat" name="habitat" value="<?php echo $habitat ?>" />
    </div>

    <div class="mb-3">
        <label for="location" class="form-label">Location</label>
        <input type="text" class="form-control" id="location" name="location" value="<?php echo $location ?>" />
    </div>

    <div class="mb-3">
        <label for="wiki_link" class="form-label">Wiki Link</label>
        <input type="text" class="form-control" id="wiki_link" name="wiki_link" value="<?php echo $wiki_link ?>" />
    </div>

    <div class="mb-3">
        <label for="img_link" class="form-label">Image Link</label>
        <input type="text" class="form-control" id="img_link" name="img_link" value="<?php echo $img_link ?>" />
    </div>


    <button type="submit" class="btn btn-primary">Save</button>
    <a href="index.php?content=arthropod-list" class="btn btn-secondary" role="button" aria-disabled="true">Cancel</a>
<?php if (isset($id)) { ?>
    <button type="button" class="btn btn-danger" onclick="deleteArthropod()">Delete</button>
    <script>

    function deleteArthropod() {
        if (confirm('Are you sure you want to delete this arthropod from the database?')) {
            location.href = 'delete-arthropod.php?id=<?php echo isset($id) ? $id : '' ?>';
        }
    }

    </script>
<?php } ?>
</form>