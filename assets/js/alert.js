function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

const boton = document.getElementById('button-ip');
boton.addEventListener('click', function () {
    Swal.fire({
        background: "rgba(0, 0, 0, 0.820)",
        html: '<p class="colors">Discord Copiado</p>',
    })
});