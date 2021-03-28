function encode(x) {
    return $("<div/>").text(x).html();
}

$(document).ready(function() {
    $('.blank-qr').show();
    $('.qr-code').hide();
});

$(function () {
    $(".fa-qrcode").click(function () {
        let url ="https://chart.googleapis.com/chart?cht=qr&chl="+encode($("#qrtext").val())+"&chs=160x160&chld=L|0"
        $('p').remove();
        $('.qr-code').show();
        $(".qr-code").attr("src", url);
    });
});