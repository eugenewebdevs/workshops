<?php
/**
 * PHP lambda function handler
 */

function apiCall(){
    // create curl resource 
    $ch = curl_init(); 

    // set url 
    curl_setopt($ch, CURLOPT_URL, "https://api.themoviedb.org/3/discover/movie?api_key=372f168ae29875f30eb9f0cda74358c1"); 

    //return the transfer as a string 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 

    // $output contains the output string 
    $output = curl_exec($ch); 

    // close curl resource to free up system resources 
    curl_close($ch); 

    return $output;

}


function handler($eventData){
    $apiReturn = apiCall();
	//this runtime prints stdout and the handler return value
	return $apiReturn;
}
