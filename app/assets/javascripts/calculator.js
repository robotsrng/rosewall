$(document).on('turbolinks:load', function () {

    $(document).on('click', '#square-calc-button', function () {
        var hght = $('#calc-height').val();
        var wdth = $('#calc-width').val();
        var dpth = $('#calc-depth').val();
        alert('You require : ' + ( (hght * wdth * dpth) / 27 ) + 'cubic yards of material.');

    });

    $(document).on('click', '#cone-calc-button', function () {
        let rds = $('#calc-radius').val();
        let dpth = $('#calc-depth').val();
        alert('You require : ' + (((((rds*rds) * dpth) * Math.PI) / 3) / 27 ) + 'cubic yards of material.');
    });

    $(document).on('click', '#cylinder-calc-button', function () {
        let rds = $('#calc-radius').val();
        let dpth = $('#calc-depth').val();
        alert('You require : ' + ((((rds*rds) * dpth) * Math.PI) / 27).toString() + ' cubic yards of material.' );
    });

    $('#calculator-selector').on('change', function () {
        let calc_type = $('input[name="calculator-selector"]:checked').val();
        if (calc_type.startsWith('square')) {
            $('#calculator-container').html(square_calculator_html);
        } else if (calc_type.startsWith('cone')) {
            $('#calculator-container').html(cone_calculator_html);
        } else {
            $('#calculator-container').html(cylinder_calculator_html);
        }
    });

    $


    let square_calculator_html = '<div class="square-calculator ">\n' +
        '      <label for="calc-height">Height (ft): </label><input id="calc-height" type="number" name="calc-height"><br>\n' +
        '      <label for="calc-width">Width (ft): </label><input id="calc-width" type="number" name="calc-width"><br>\n' +
        '      <label for="calc-depth">Depth (ft): </label><input id="calc-depth" type="number" name="calc-depth"><br>\n' +
        '      <button type="button" id="square-calc-button">Calculate</button>\n' +
        '    </div>';

    let cone_calculator_html = '<div class="cone-calculator ">\n' +
        '\n' +
        '    <label for="calc-radius">Radius (ft): </label><input id="calc-radius" type="number" name="calc-radius"><br>\n' +
        '    <label for="calc-depth">Depth (ft): </label><input id="calc-depth" type="number" name="calc-depth"><br>\n' +
        '    <button type="button" id="cone-calc-button">Calculate</button>\n' +
        '\n' +
        '  </div>';

    let cylinder_calculator_html = '<div class="cylinder-calculator ">\n' +
        '\n' +
        '    <label for="calc-radius">Radius (ft): </label><input id="calc-radius" type="number" name="calc-radius"><br>\n' +
        '    <label for="calc-depth">Depth (ft): </label><input id="calc-depth" type="number" name="calc-depth"><br>\n' +
        '    <button type="button" id="cylinder-calc-button">Calculate</button>\n' +
        '\n' +
        '  </div>';
});