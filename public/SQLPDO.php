<?php
try {
<<<<<<< HEAD
    $serverName = "localhost";
    $databaseName = "CRM360";
    $uid = "reflo";
    $pwd = "123";
=======
    $serverName = "MTPIRA1350N";
    $databaseName = "CRM360";
    $uid = "diego";
    $pwd = "diego123";
>>>>>>> 48dc5dcb056792439776f2bf6ecc8d4f1558d52c
    
    $conn = new PDO("sqlsrv:server = $serverName; Database = $databaseName;", $uid, $pwd);

    // Select Query
    $tsql = "SELECT @@Version AS SQL_VERSION";

    // Executes the query
    $stmt = $conn->query($tsql);
} catch (PDOException $exception1) {
    echo "<h1>Caught PDO exception:</h1>";
    echo $exception1->getMessage() . PHP_EOL;
    echo "<h1>PHP Info for troubleshooting</h1>";
    phpinfo();
}

?>

<h1> Success Results : </h1>

<?php
try {
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo $row['SQL_VERSION'] . PHP_EOL;
    }
} catch (PDOException $exception2) {
    // Display errors
    echo "<h1>Caught PDO exception:</h1>";
    echo $exception2->getMessage() . PHP_EOL;
}

unset($stmt);
unset($conn);
?>