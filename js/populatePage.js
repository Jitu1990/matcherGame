function addHeader() //add header in the page
{
 $('#main').html('<div id="header">match the following</div>');
}

function addLeftItems() // add items in left coloumn
{
 $('#leftCol').html('<div   id="li1" class="itemL">Item 1</div>');
 $('#leftCol').append('<div   id="li2" class="itemL">Item 2</div>');
 $('#leftCol').append('<div    id="li3" class="itemL">Item 3</div>');
 $('#leftCol').append('<div   id="li4" class="itemL">Item 4</div>');
 $('#leftCol').append('<div   id="li5" class="itemL">Item 5</div>');
}

function addRightItems() // add item in right coloumn
{
 $('#rightCol').html('<div   id="ri1" class="itemR">Item A</div>');
 $('#rightCol').append('<div  id="ri2" class="itemR">Item B</div>');
 $('#rightCol').append('<div   id="ri3" class="itemR">Item C</div>');
 $('#rightCol').append('<div  id="ri4" class="itemR">Item D</div>');
 $('#rightCol').append('<div  id="ri5" class="itemR">Item E</div>');
}

function init()  //initialize the game
{
 addHeader()
 $('#main').append('<div id="leftCol" class="leftCls"></div>');
 $('#main').append('<div id="rightCol" class="rightCls"></div>');
 addLeftItems()
 addRightItems()
 $('#main').append('<div id="footer">THIS IS FOOTER</div>');

}
//only show when drag and drop get starts
function addButton()
{
 $('#footer').before('<div id="buttons"></div>');
 $('#buttons').html('<input type="button" id="score"  class="btn" value="Score" disabled/>');
 $('#buttons').append('<input type="reset" id="reset"  class="btn" onclick="init()" value="Reset" disabled/>');
 $('.btn').button();
}

function showButton()
{
 $('.btn').css("disabled",false);
}



var flag=0; //a global variable
function Left_rightOp() // move elements from left to right
{

 $('.itemL').draggable({
      revert:'invalid',
      start:function(event,ui){
       ui.helper.css('transform','rotate(5deg) scale(1.5)');
      },
      stop:function(event,ui){
       ui.helper.css('transform','rotate(0deg) scale(1)');
      },
      zIndex:100
 });

 $('.itemR').droppable({
     activeClass:'highlight',
     drop:function(event,ui){
     flag+=1;
     var mainHeight= $('#main').css("height");
     var leftColH=$('leftCol').css("height");
     var rightColH=$('rightCol').css("height");
     $('#main').css("minHeight",mainHeight);
    // if(flag==1){addButton()}
     if(flag==1){showButton()}
     ui.helper.hide('explode');
     $("#"+event.target.id).hide();

  }
 });

}