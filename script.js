$ ( document).ready (readyNow);

function readyNow () {
    addClickHandlers();
    function addClickHandlers () {
    $ ('#generateBtn').on('click', addDiv);
    $ ('#bodyDiv').on('click', swapButton);
    $ ('#bodyDiv').on('click', deleteButton);
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
    
    function swapButton () {
        console.log('button working')
        $(this).toggleClass("bodyDiv");
       
    }

    function deleteButton () {
        console.log('delete button working')
        $(this).parent().remove();
       
    }
    
}




