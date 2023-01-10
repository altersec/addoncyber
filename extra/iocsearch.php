<?php

// Hosted script to help with external APIs, e.g. Virus Total
// https://altersec.com/iocsearch.php?vt=127.0.0.1

// VirusTotal API search, REPLACE THE API KEY BELOW
// https://developers.virustotal.com/reference/search-1

$vt_url = 'https://www.virustotal.com/api/v3/search?query=';
$vt_api = 'REPLACE_ME!!!';

//parse URL query for VT
if (isset($_GET['vt'])) {	
	$parameter = $_GET['vt'];
	$curl = curl_init($vt_url . $parameter);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($curl, CURLOPT_HTTPHEADER, [
	  'x-apikey: ' . $vt_api,
	  'Content-Type: application/json'
	]);
	$response = curl_exec($curl);
	curl_close($curl);
		
	$arr = json_decode($response, true);
	
	//identify if url, domain, IP, hash and print intel for each
	echo '<b>'.$arr['data'][0]['type'] . ': '. $arr['data'][0]['id'] . '</b><br><br>';
			
	if ($arr['data'][0]['type'] == 'ip_address') {

		echo '<b>Reputation:</b> ' . $arr['data'][0]['attributes']['reputation'] . '<br><br>';
		
		echo '<b>Country:</b> ' . $arr['data'][0]['attributes']['country'] . '<br><br>';
		
		echo '<b>AS_OWNER:</b> ' . $arr['data'][0]['attributes']['as_owner'] . '<br><br>';
	
		echo '<b>Analysis stats:</b><br>';
		$properties = $arr['data'][0]['attributes']['last_analysis_stats'];
			foreach ($properties as $property => $value) {
				echo '<li>' . $property . ': ' . $value . '<br>';
			}
		echo '<br>';
		
		echo '<b>Categories:</b><br>';
		$properties = $arr['data'][0]['attributes']['categories'];
			foreach ($properties as $property => $value) {
				echo '<li>' . $property . ': ' . $value . '<br>';
			}
		echo '<br>';
		
		echo '<b>Tags:</b><br>';
		$properties = $arr['data'][0]['attributes']['tags'];
			foreach ($properties as $property => $value) {
				echo '<li>' . $property . ': ' . $value . '<br>';
			}
		echo '<br>';
		
		echo '<b>WHOIS:</b> ' . $arr['data'][0]['attributes']['whois'] . '<br>';
		
	} elseif ($arr['data'][0]['type'] == 'domain') {
		
		echo '<b>Reputation:</b> ' . $arr['data'][0]['attributes']['reputation'] . '<br><br>';
		
		echo '<b>Analysis stats:</b><br>';
		$properties = $arr['data'][0]['attributes']['last_analysis_stats'];
			foreach ($properties as $property => $value) {
				echo '<li>' . $property . ': ' . $value . '<br>';
			}
		echo '<br>';
		
		echo '<b>Categories:</b><br>';
		$properties = $arr['data'][0]['attributes']['categories'];
			foreach ($properties as $property => $value) {
				echo '<li>' . $property . ': ' . $value . '<br>';
			}
		echo '<br>';
		
		echo '<b>Tags:</b><br>';
		$properties = $arr['data'][0]['attributes']['tags'];
			foreach ($properties as $property => $value) {
				echo '<li>' . $property . ': ' . $value . '<br>';
			}
		echo '<br>';
		
		echo '<b>WHOIS:</b> ' . $arr['data'][0]['attributes']['whois'] . '<br>';
		
	} elseif ($arr['data'][0]['type'] == 'file') {
	
		echo '<b>Reputation:</b> ' . $arr['data'][0]['attributes']['reputation'] . '<br><br>';
	
		echo '<b>Analysis stats:</b><br>';
		$properties = $arr['data'][0]['attributes']['last_analysis_stats'];
			foreach ($properties as $property => $value) {
				echo '<li>' . $property . ': ' . $value . '<br>';
			}
		echo '<br>';
		
		echo '<b>Categories:</b><br>';
		$properties = $arr['data'][0]['attributes']['categories'];
			foreach ($properties as $property => $value) {
				echo '<li>' . $property . ': ' . $value . '<br>';
			}
		echo '<br>';
		
		echo '<b>Tags:</b><br>';
		$properties = $arr['data'][0]['attributes']['tags'];
			foreach ($properties as $property => $value) {
				echo '<li>' . $property . ': ' . $value . '<br>';
			}

	} elseif ($arr['data'][0]['type'] == 'url') {

		echo '<b>Reputation:</b> ' . $arr['data'][0]['attributes']['reputation'] . '<br>';
		echo '<br>';
		
		echo '<b>Analysis stats:</b><br>';
		$properties = $arr['data'][0]['attributes']['last_analysis_stats'];
			foreach ($properties as $property => $value) {
				echo '<li>' . $property . ': ' . $value . '<br>';
			}
		echo '<br>';
		
		echo '<b>Categories:</b><br>';
		$properties = $arr['data'][0]['attributes']['categories'];
			foreach ($properties as $property => $value) {
				echo '<li>' . $property . ': ' . $value . '<br>';
			}
		echo '<br>';
		
		echo '<b>Tags:</b><br>';
		$properties = $arr['data'][0]['attributes']['tags'];
			foreach ($properties as $property => $value) {
				echo '<li>' . $property . ': ' . $value . '<br>';
			}
				
	}
	
	//echo '<br><br>';
	//$arr1 = $arr['data'][0]['attributes'];
	//foreach($arr1 as $key => $value) {
	//	if($key == 'var1'){
	//	 echo $value;
	//	}
	//	echo $key . " => " . $value . '<br>';
	//}

} elseif (isset($_SERVER['QUERY_STRING'])) {
    echo '404';
	//$parameter = $_SERVER['QUERY_STRING'];
	//echo $parameter;
} else {
	echo '404';
}
