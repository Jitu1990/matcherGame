function addHeader()
{
 $('#main').html('<div id="header">match the following</div>');
}

function addLeftItems()
{
 $('#leftCol').html('<div draggable="true" id="li1" class="itemL">Item 1</div>');
 $('#leftCol').append('<div draggable="true" id="li2" class="itemL">Item 2</div>');
 $('#leftCol').append('<div  draggable="true" id="li3" class="itemL">Item 3</div>');
 $('#leftCol').append('<div draggable="true" id="li4" class="itemL">Item 4</div>');
 $('#leftCol').append('<div draggable="true" id="li5" class="itemL">Item 5</div>');
}

function addRightItems()
{
 $('#rightCol').html('<div draggable="true" id="ri1" class="itemR">Item A</div>');
 $('#rightCol').append('<div draggable="true"id="ri2" class="itemR">Item B</div>');
 $('#rightCol').append('<div draggable="true" id="ri3" class="itemR">Item C</div>');
 $('#rightCol').append('<div draggable="true"id="ri4" class="itemR">Item D</div>');
 $('#rightCol').append('<div draggable="true" id="ri5" class="itemR">Item E</div>');
}
//only show when drag and drop get starts
function addButton()
{
 $('#footer').before('<div id="buttons" class="btn"></div>');
 $('#buttons').html('<input type="button" id="score" class="btn" value="Score"/>');
 $('#buttons').append('<input type="button" id="reset" class="btn" value="Reset"/>');

}
/*
function handleDropEvent(event, ui) {
 alert('Dropped ' + ui.draggable.attr('id') + ' onto ' + event.target.id);
}

function takeDrop(){
$('.itemR').droppable({
 drop: handleDropEvent
})
}*/