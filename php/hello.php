<!DOCTYPE html>

<head>
    <title>PHP Lesson 1</title>
</head>


<body>
    <?php

    // Keywords are NOT case sensitive (variables and functions are)
    echo "<h1>Welcome to PHP!</h1>";
    ecHO "<br>";
    EChO "It's a great language to know!";
    eChO "<br><br>";


    echo "<h2> I added this message as an experiment. This is my first website </h2>";
    echo "<br>";
    // String comcatenation
    $name = "Ian MacDougall";
    echo "Hello " . $name . "! (with concatenation)";
    echo "<br><br><br>";
    
    // Concatenation only works with double quotes!!
        echo "Hello $name!";
    // vs
        echo 'Hello $name!';

    echo "<br><br><br>";

    // Math
    $x = 5;
    $y = 3;
    echo "$x * $y = " . ($x * $y);
    echo "<br><br><br>";

    // Function
    function square($number)
    {
        return $number * $number;
    }
    echo "4 squared = ". square(4);

    ?>
    
</body>


</html>