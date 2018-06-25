$ ( document).ready (readyNow);

function readyNow () {
    $ ('#generateBtn').on('click', addDiv);
}

sum = 0;

function addDiv () {
    console.log('btn click');
    $('#bodyDiv').append( [
        '<div><p id="numberClick">' + 'Number of times Generate button is press: ' + sum++ + '</p></div>',
        '<button id="swapBtn">Swap</button>',
        '<button id="deleteBtn">Delete</button>',
    ])
}

