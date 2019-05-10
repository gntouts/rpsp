<!DOCTYPE html>
<?php
if (isset($_GET['name'])) {
    if (isset($_GET['surname'])) {
		$filename = $_GET['name'] . "_" . $_GET['surname'] . ".txt";
		//echo $filename;
		$handle = fopen($filename, "r");
		$data=array();
		$count = 0;
		if (isset($handle)) {
			while (($buffer = fgets($handle, 4096)) !== false) {
				$data[$count] = $buffer;
				$count = $count + 1;
    }
		if (!feof($handle)) {
			echo "Error: unexpected fgets() fail\n";
    }
		fclose($handle);
}
}
}

echo $data[7];

?>
<html>
<head>
    <meta charset="utf-8">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="formstyle.css">

</head>
<body>
    <h1>Αίτηση Έκδοσης Πιστοποιητικού</h1>
    <hr>
    <h3>Στοιχεία Φοιτητή</h3>
    <p>Συμπληρώστε τα στοιχεία σας με ελληνικούς χαρακτήρες</p>
    <form action="form.php" method="post">
        <div>
        <label for="name">Ονοματεπώνυμο</label><br>
        <input type="text" name="name" id="name" placeholder="<?php echo isset($data[0]) ? $data[0] : "Όνομα"; ?>">
        <input type="text" name="surname" id="surname" placeholder="<?php echo isset($data[1]) ? $data[1] : "Επώνυμο"; ?>"><br>
        </div>
        
        <label for="adress">Στοιχεία Διεύθυνσης</label><br>
            <input type="text" class="adress"  name="adress" id="adress" placeholder="<?php echo isset($data[2]) ? $data[2] : "Οδός και αριθμός"; ?>"><br>
            
                <input type="text" name="town" id="town" placeholder="<?php echo isset($data[3]) ? $data[3] : "Πόλη"; ?>">
            
           
                <input type="text" name="postal" id="postal" placeholder="<?php echo isset($data[4]) ? $data[4] : "Ταχυδρομικός κώδικας"; ?>"><br>
             
            <div>
        <label for="phone">Στοιχεία Επικοινωνίας</label><br>
        <input type="text" class="left" name="phone" id="phone" placeholder="<?php echo isset($data[5]) ? $data[5] : "Τηλέφωνο"; ?>">
        <input type="text" name="email" id="email" placeholder="<?php echo isset($data[6]) ? $data[6] : "Διεύθυνση Email"; ?>"><br>
        </div>
        <div class="left">
        <label for="year">Έτος Σπουδών</label><br>
        <input type="radio" name="year" value="A" <?php echo ('A' === $data[7]) ? 'checked' : ""?>>Α
        <input type="radio" name="year" value="B" <?php echo (strcmp('B', $data[7]) == 0) ? 'checked' : '' ?>> Β
        <input type="radio" name="year" value="C" <?php echo ('C' === $data[7]) ? 'checked' : '' ?>>Γ
        <input type="radio" name="year" value="D" <?php echo ('D' === $data[7]) ? 'checked' : '' ?>> Δ
        <input type="radio" name="year" value="E" <?php echo (isset($data[7])&&('E+' === $data[7])) ? 'checked' : '' ?>> Ε
        <input type="radio" name="year" value="E+" <?php echo (strcmp("E+", $data[7]) === 0) ? 'checked' : '' ?>> Ε+
        <input type="radio" name="year" value="MF" <?php echo ('MF' === $data[7]) ? 'checked' : '' ?>> ΜΦ
    </div>
        <div><label for="am">Αριθμός Μητρώου</label><br>
            <input type="text" name="am" id="am" placeholder="<?php echo isset($data[8]) ? $data[8] : "AM"; ?>"><br>
        </div>
        <hr>
    
        <h3>Πιστοποιητικό</h3>
        
        <label for="doc"><strong>Είδος Πιστοποιητικού</strong></label><br>


        <select id="doc" name="doc">
            <option value="2">Φωτοτυπία Καρτέλας</option>
            <option value="1">Πιστοποιητικό Ενεργού Φοιτητή</option>
           <option value="3">Πιστοποιητικό Σπουδών</option>
            </select>
            <label for="receive">Τρόπος παραλαβής Πιστοποιητικού</label><br>
            <input type="radio" name="receive" value="Grammateia" placeholder="Α"> Παραλαβή από την γραμματεία<br>
            <input type="radio" name="receive" value="Apostoli" placeholder="Β"> Αποστολή στην διεύθυνση κατοικίας
            <label for="date">Ημερομηνία παραλαβής</label><br>
            <input type="month" name="date" id="date"><br>
            
            <input type="submit" value="Υποβολή">
    </form>


</body>
</html>

