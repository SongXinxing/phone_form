<?php
header('Content-Type:text/plain,charset=utf-8,Access-Control-Allow-Origin:https://songxinxing.github.io/phone_form/xinmei.html');
$userName=$_REQUEST['userName'];
$IDNumber=$_REQUEST['IDNumber'];
$telPhone=$_REQUEST['telPhone'];
$email=$_REQUEST['email'];
$company=$_REQUEST['company'];
$company_L=$_REQUEST['company_L'];
$recommend_userName=$_REQUEST['recommend_userName'];
$recommend_telPhone=$_REQUEST['recommend_telPhone'];
$addr=$_REQUEST['addr'];

echo $userName.'__'.$IDNumber.'__'.$telPhone.'__'.$email.'__'.$company.'__'.$company_L.'__'.$recommend_userName.'__'.$recommend_telPhone.'__'.$addr;
?>
