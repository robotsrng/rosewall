$(document).on('turbolinks:load', function () {

    $(document).on('click', '#square-calc-button', function () {
        var hght = $('#calc-height').val();
        var wdth = $('#calc-width').val();
        var dpth = $('#calc-depth').val();
        var number = ((hght * wdth * dpth) / 27)
        var total = Math.round(number * 10) / 10
        $('.js-calculator-total').html('The total material required is ' + total + ' cubic yards.');

    });

    $(document).on('click', '#cone-calc-button', function () {
        var rds = $('#calc-radius').val() / 3;
        var dpth = $('#calc-depth').val() / 3;
        var number = 3.14 * (rds * rds) * (dpth / 3)
        var total = Math.round(number * 10) / 10
        $('.js-calculator-total').html('The total material required is ' + total + ' cubic yards.');
    });

    $(document).on('click', '#cylinder-calc-button', function () {
        var rds = $('#calc-radius').val() / 3;
        var dpth = $('#calc-depth').val() / 3;
        var number = ((((rds * rds) * dpth) * 3.14))
        var total = Math.round(number * 10) / 10
        $('.js-calculator-total').html('The total material required is ' + total + ' cubic yards.');
    });

    $('#calculator-selector').on('change', function () {
        var calc_type = $('input[name="calculator-selector"]:checked').val();
        if (calc_type.startsWith('square')) {
            $('#calculator-container').html(square_calculator_html);
        } else if (calc_type.startsWith('cone')) {
            $('#calculator-container').html(cone_calculator_html);
        } else {
            $('#calculator-container').html(cylinder_calculator_html);
        }
    });

    $


    var square_calculator_html =

        '<div class="square-calculator ">\n' +
        '<table class="table">\n' +
        '  <tr class="row">\n' +
        '      <td class="col-md-2"><label for="calc-height">Height (ft): </label></td><td class="col-md-2"><input id="calc-height" type="number" name="calc-height"></td>\n' +
        '  </tr>\n' +
        '  <tr class="row">\n' +
        '    <td class="col-md-2"><label for="calc-width">Width (ft): </label></td><td class="col-md-2"><input id="calc-width" type="number" name="calc-width"></td>\n' +
        '  </tr>\n' +
        '  <tr class="row">\n' +
        '    <td class="col-md-2"><label for="calc-depth">Depth (ft): </label></td><td class="col-md-2"><input id="calc-depth" type="number" name="calc-depth"></td>\n' +
        '  </tr>\n' +
        '  <tr class="row">\n' +
        '    <td class="col-md-2"><button type="button" id="square-calc-button" data-toggle="modal" data-target="#myModal">Calculate</button></td>\n' +
        '  </tr>\n  ' +
        '</table>\n' +
        '</div>';

    var cone_calculator_html =
        '<div class="cone-calculator ">\n' +
        '<table class="table">\n' +
        '  <tr class="row">\n' +
        '    <td class="col-md-2"><label for="calc-radius">Radius (ft): </label></td><td class="col-md-2"><input id="calc-radius" type="number" name="calc-radius"></td>\n' +
        '  </tr>\n    ' +
        '  <tr class="row">\n' +
        '    <td class="col-md-2"><label for="calc-depth">Depth (ft): </label></td><td class="col-md-2"><input id="calc-depth" type="number" name="calc-depth"></td>\n' +
        '  </tr>\n    ' +
        '  <tr class="row">' +
        '    <td class="col-md-2"><button type="button" id="cone-calc-button" data-toggle="modal" data-target="#myModal">Calculate</button></td>\n' +
        '  </tr>\n' +
        '</table>\n ' +
        '</div>';

    var cylinder_calculator_html = '<div class="cylinder-calculator ">\n' +
        '<table class="table">\n' +
        '  <tr class="row">\n' +
        '    <td class="col-md-2"><label for="calc-radius">Radius (ft): </label></td><td class="col-md-2"><input id="calc-radius" type="number" name="calc-radius"></td>\n' +
        '  </tr>\n    ' +
        '  <tr class="row">\n' +
        '    <td class="col-md-2"><label for="calc-depth">Depth (ft): </label></td><td class="col-md-2"><input id="calc-depth" type="number" name="calc-depth"></td>\n' +
        '  </tr>\n    ' +
        '  <tr class="row">' +
        '    <td class="col-md-2"><button type="button" id="cylinder-calc-button" data-toggle="modal" data-target="#myModal">Calculate</button></td>\n' +
        '  </tr>\n' +
        '</table>\n ' +
        '</div>';
});