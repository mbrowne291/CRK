<?
	$msg = "\n\n\n";
	$msg .= 'Email: ' .  ($_POST['email']) . "\n\n";
	$msg .= 'Name: ' .   ($_POST['name']) . "\n\n";
	$msg .= 'Phone: ' .  ($_POST['phone']) . "\n\n";
   
	echo json_decode(mail('evan.boorman@coderevkids.com', 'Form contact', $msg);
?>