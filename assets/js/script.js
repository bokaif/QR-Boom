function encode(x) {
    return $("<div/>").text(x).html();
}

$(document).ready(function() {
    $('.blank-qr').show();
    $('.qr-code').hide();
});

function generate() {
    let url ="https://chart.googleapis.com/chart?cht=qr&chl="+encode($("#qrtext").val())+"&chs=500x500&chld=L|2"
    $('p').remove();
    $('.qr-code').show();
    $(".qr-code").attr("src", url);
}

$('form').keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		generate();
        event.preventDefault();
	}
});

$(function () {
    $(".fa-qrcode").click(function () {
        generate();
    });
});
