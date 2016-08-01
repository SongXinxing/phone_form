
var reg_phone=/^1[3458]\d{9}$/;
$('#form_telPhone').blur(function(){
	if(!reg_phone.test( $('#form_telPhone').val() )){
		$('label[for=form_telPhone]').css({'color':'red'});
	}else{
		$('label[for=form_telPhone]').css({'color':'#333'});
	}
});
//推荐人手机号判断
$('#recommend_telPhone').blur(function(){
	if(!reg_phone.test( $('#recommend_telPhone').val() )){
		$('label[for=recommend_telPhone]').css({'color':'red'});
	}else{
		$('label[for=recommend_telPhone]').css({'color':'#333'});
	}
});

var reg_IDNumber=/^\d{17}[0-9xX]$/;
$('#form_IDNumber').blur(function(){
	if(!reg_IDNumber.test($('#form_IDNumber').val() ) ){
		$('label[for=form_IDNumber]').css({'color':'red'});
	}else{
		$('label[for=form_IDNumber]').css({'color':'#333'});
	}
});

var reg_userName=/^(\s*)$/;
$('#form_userName').blur(function(){
	if( reg_userName.test( $('#form_userName').val() ) ){
		$('label[for=form_userName]').css({'color':'red'});
	}else{
		$('label[for=form_userName]').css({'color':'#333'});
	}
});
//推荐人姓名判断
$('#recommend_userName').blur(function(){
	if( reg_userName.test( $('#recommend_userName').val() ) ){
		$('label[for=recommend_userName]').css({'color':'red'});
	}else{
		$('label[for=recommend_userName]').css({'color':'#333'});
	}
});
//判断地址
$('#form_addr').blur(function(){
	if( reg_userName.test( $('#form_addr').val() ) ){
		$('label[for=form_addr]').css({'color':'red'});
	}else{
		$('label[for=form_addr]').css({'color':'#333'});
	}
});


var reg_company=/^[ABCDEFGHIJKL]$/;
$('#form_company').blur(function(){
	if( !reg_company.test( $('#form_company').val() ) ){
		$('label[for=form_company]').css({'color':'red'});
	}else{
		/*if($('#form_company').val()=='L'){
			$('#form_company_L').blur(function(){
				if( /^(\s)*$/.test( $('#form_company_L').val() ) ){
					$('label[for=form_company]').css({'color':'red'});
				}else{
					$('label[for=form_company]').css({'color':'#333'});
				}
			});
		}else{
			$('label[for=form_company]').css({'color':'#333'});
		}*/
		$('label[for=form_company]').css({'color':'#333'});
	}
});

$('#form_company').on('change',function(){
	if(this.value=="L"){
		$('#form_company_L').css({'display':'block'});
	}else{
		$('#form_company_L').css({'display':'none'});
		$('#form_company_L').val('');
	}
})


var reg_email=/^[a-z0-9]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i;
$('#form_email').blur(function(){
	if( !reg_email.test( $('#form_email').val() ) ){
		$('label[for=form_email]').css({'color':'red'});
	}else{
		$('label[for=form_email]').css({'color':'#333'});
	}
});


$('input[type="button"]').click(function(){
	if( reg_userName.test( $('#recommend_userName').val() ) ){
		$('#recommend_userName')[0].focus();
	}else if( !reg_phone.test( $('#recommend_telPhone').val() ) ){
		$('#recommend_telPhone')[0].focus();
	}else if( !reg_company.test( $('#form_company').val() ) ){
        $('#form_company')[0].focus();
    }else if( reg_userName.test($('#form_userName').val()) ){
        $('#form_userName')[0].focus();
    }else if( !reg_IDNumber.test( $('#form_IDNumber').val() ) ){
        $('#form_IDNumber')[0].focus();
    }else if( !reg_phone.test( $('#form_telPhone').val() ) ){
        $('#form_telPhone')[0].focus();
    }else if( !reg_email.test( $('#form_email').val() ) ){
        $('#form_email')[0].focus();
    }else if( reg_userName.test( $('#form_addr').val() ) ){
        $('#form_addr')[0].focus();
    //}else if( !$('#isAgree')[0].checked ){
		//$('#isAgree')[0].focus();
	}else{
        //if($('input[name=agree]')[0].checked){
			/*$.ajax({
				type: "POST",
				url: "https://songxinxing.github.io/phone_form/data/save.php",
				data: "userName="+$('#form_userName').val()+"&IDNumber="+$('#form_IDNumber').val()+"&telPhone="+$('#form_telPhone').val()+"&email="+$('#form_email').val()+"&company="+$('#form_company').val()+"&company_L="+$('#form_company_L').val()+"&recommend_userName="+$('#recommend_userName').val()+"&recommend_telPhone="+$('#recommend_telPhone').val()+"&addr="+$('#form_addr').val(),
				success: function(data){ 
					window.location.href="success.html";
					//console.log(data);
				}
			});*/
			//失败的跨域
			/*var data0= {
			 	"userName":$('#form_userName').val(),
				"IDNumber":$('#form_IDNumber').val(),
				"telPhone":$('#form_telPhone').val(),
				"email":$('#form_email').val(),
				"company":$('#form_company').val(),
				"company_L":$('#form_company_L').val(),
				"recommend_userName":$('#recommend_userName').val(),
				"recommend_telPhone":$('#recommend_telPhone').val(),
				"addr":$('#form_addr').val()
			 };
			 var data=[];
			 for(var k in data0){
			 	data[data.length]={name:k,value:data0[k]}
			 }
			$.getJSON("https://songxinxing.github.io/phone_form/data/save.php",data,function(){
				window.location.href="success.html";
			});*/
		//}
	window.location.href(success.html);
    }
});
//表单获取交点时 清除提交失败按钮
$('input').focus(function(){
	$('#form_info').html('');
})






