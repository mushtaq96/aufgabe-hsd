$(document).ready(function () {
    const input = $('#input');

    // function to handle button clicks
    $('.calculator button').on('click', function () {
        const $button = $(this);

        switch ($button.attr('id')) {
            case 'onBtn':
                clearInput();
                break;
            case 'clearBtn':
                clearInput();
                break;
            case 'resetBtn':
                clearInput();
                break;
            case 'equals':
                evaluateExpression();
                break;
            default:
                appendValue($button.text());
        }
    });

    // function to append value to display
    function appendValue(value) {
        if (input.val() === '0' || input.val().includes('Error')) {
            input.val(value);
        } else {
            input.val(input.val() + value);
        }
    }

    // function to clear display
    function clearInput() {
        input.val('0');
    }

    // Function to evaluate expression
    function evaluateExpression() {
        try {
            const expression = input.val();
            let result = eval(expression);

            // here we handle division by zero
            if (!isNaN(result)) {
                input.val(result);
            } else {
                input.val('Error');
            }
        } catch (error) {
            input.val('Error');
        }
    }

    // function to handle backspace
    $('.calculator').on('keydown', function (e) {
        if (e.key === 'Backspace') {
            backspace();
        }
    });

    // function to handle backspace
    function backspace() {
        const currentValue = input.val();
        if (currentValue !== '0' && currentValue !== 'Error') {
            input.val(currentValue.slice(0, -1));
        } else {
            clearInput();
        }
    }

    // function to handle large plus button
    $('#largePlus').on('click', function () {
        const currentValue = input.val();
        if (currentValue !== '0' && !currentValue.includes('+')) {
            input.val(currentValue + '+');
        }
    });
});
