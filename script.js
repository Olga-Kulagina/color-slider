$(function () {

    let colorToggle = 'background-color'

    let ColorBtn = document.getElementById('btn-color')

    ColorBtn.addEventListener('click', function () {
        colorToggle = 'color'
        $("#btn-color").css('background-color', 'blue');
        $("#btn-background-color").css('background-color', 'aliceblue');
    });

    let BackgroundColorBtn = document.getElementById('btn-background-color')

    BackgroundColorBtn.addEventListener('click', function () {
        colorToggle = 'background-color'
        $("#btn-background-color").css('background-color', 'blue');
        $("#btn-color").css('background-color', 'aliceblue');
    });


    function hexFromRGB(r, g, b) {
        let hex = [
            r.toString(16),
            g.toString(16),
            b.toString(16)
        ];
        $.each(hex, function (nr, val) {
            if (val.length === 1) {
                hex[nr] = "0" + val;
            }
        });
        return hex.join("").toUpperCase();
    }

    function refreshSwatch() {
        let red = $("#red").slider("value"),
            green = $("#green").slider("value"),
            blue = $("#blue").slider("value"),
            hex = hexFromRGB(red, green, blue);
        $("#swatch").css(colorToggle, "#" + hex);
    }

    $("#red, #green, #blue").slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: refreshSwatch,
        change: refreshSwatch
    });
    $("#red").slider("value", 100);
    $("#green").slider("value", 100);
    $("#blue").slider("value", 100);
});


