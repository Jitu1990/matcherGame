function addHeader() //add header in the page
{
    $('#main').html('<div id="header">match the following</div>');

    $('#main').append('<div id="leftCol" class="leftCls"></div>');

    $('#main').append('<div id="rightCol" class="rightCls"></div>');
} // end addHeader

function addLeftItems() // add items in left coloumn
{
 $('#leftCol').html('<div   id="li1" class="itemL">Item 1</div>');

 $('#leftCol').append('<div   id="li2" class="itemL">Item 2</div>');

 $('#leftCol').append('<div    id="li3" class="itemL">Item 3</div>');

 $('#leftCol').append('<div   id="li4" class="itemL">Item 4</div>');

 $('#leftCol').append('<div   id="li5" class="itemL">Item 5</div>');

} // end addLeftItems

function addRightItems() // add item in right coloumn
{
 $('#rightCol').html('<div   id="ri1" class="itemR">Item A</div>');

 $('#rightCol').append('<div  id="ri2" class="itemR">Item B</div>');

 $('#rightCol').append('<div   id="ri3" class="itemR">Item C</div>');

 $('#rightCol').append('<div  id="ri4" class="itemR">Item D</div>');

 $('#rightCol').append('<div  id="ri5" class="itemR">Item E</div>');

} // end addRightItems

function init()  //initialize the game
{
    $('#reset').click(function(){
        location.reload();
    })

} // end init

//only show when drag and drop get starts
function addButton()
{
    $('#footer').before('<div id="buttons"></div>');

    $('#buttons').html('<input type="button" id="score"  class="btn" value="Score"  />');

    $('#buttons').append('<input type="reset" id="reset"  class="btn"  value="Reset" onclick="init()"/>');

    $('.btn').button();

} //end add button


var flag=0; //a global variable
var score=0; //to count the perfect match
var dialogString="";

function Left_rightOp() // move elements from left to right
{

 $('.itemL').draggable({

     cursor:'move',
      revert:'invalid',

      start:function(event,ui){
       ui.helper.css('transform','rotate(5deg) scale(1.5)');
      },

      stop:function(event,ui){
       ui.helper.css('transform','rotate(0deg) scale(1)');
      },

      zIndex:100

    }); // end draggable

 $('.itemR').droppable({

     drop:function(event,ui){

         flag+=1;
       var mainHeight= $('#main').css("height");
       $('#main').css("minHeight",mainHeight);

       if(flag==1){

         addButton();
         toDoList();

         } // end if

         createItem(event,ui);

         ui.helper.hide('explode');
         $("#"+event.target.id).hide();

         Score();
     } // end drop event
 }); // end droppable

} // end Left_right op


function Right_leftOp() //moves elements from right to left
{
    $('.itemR').draggable({

        cursor:'move',
        revert:'invalid',
        //helper:'clone',

        start:function(event, ui){
            ui.helper.css('transform','rotate(5deg) scale(1.5)');
        },

        stop:function(event, ui){
            ui.helper.css('transform','rotate(0deg) scale(1)');
        },

        zIndex:100

    }); //end draggable

    $('.itemL').droppable({

        drop:function(event,ui){
         flag+=1;

         var mainHeight= $('#main').css("height");
         $('#main').css("minHeight",mainHeight);

            if(flag==1){
             addButton();
             toDoList();
             }

            createItem(event,ui);

            ui.draggable.hide('explode');
            $("#"+event.target.id).hide();

            Score();
        }
    }); //end droppable
} //end Right_Leftop

var addID="";
// create a new item to be dropped into box


function createItem(event,ui){

     var sourceID= ui.draggable.attr('id'); //extract the id of source
     var lastID=event.target.id; //extract the id of target

      addID=sourceID+"_"+lastID;
   //alert(addID);
     var valS= $('#'+sourceID).html(); //extract the text of the source
     var valLast=$('#'+lastID).html(); // extract the text of target
     var newItem= valS+" <> "+valLast; // make a new item  to be added
    if(score==0){Score();}
    if(sourceID.charAt(sourceID.length-1 )== lastID.charAt(lastID.length-1)){score+=1;}

     $('#box').append('<div id= '+addID+' class="boxcls">'+ newItem + '</div>');

     //Score();
    //back_original_Pos();

} // end createItem


function toDoList() {
    $('#buttons').before('<div id="box"></div>');

}//show toList


function Score(){

    dialogString="You have "+score+" perfect match";

    if(score==0)
    {

        $('#box').prepend('<h2 id ="dialog" title="Score">'+dialogString+'</h2>');

        $('#dialog').dialog({
            autoOpen:false,
            modal:true,
            resizabble:false,
            draggable:false

        }); // end dialog

        $('#score').click(function(evt){

            evt.preventDefault();
            $('#dialog').dialog('open');

        }); //end click
    } //end if

    else{
        $('#dialog').text(dialogString);
    }

} // end score


//handling double click event on box's item
function back_original_Pos()
{

    $('.boxcls').on('dblclick',function(event){

        var xid= event.target.id;
        var sp=xid.split("_");
         $('#'+xid).remove();

        var rid=0,lid=0;
        if(xid.charAt(0)=='l'){
            lid= sp[0];
            rid=sp[1];
        }

        else if(xid.charAt(0)=='r'){
            lid=sp[1];
            rid=sp[0];
        }

        if(xid.charAt(0)=='l'){ //element dropped at right
           $('#'+rid).show();

             var item=$('#'+lid).html();
            $('#'+lid).hide();


            $('#leftCol').append('<div   id='+lid+' class="itemL">'+item+'</div>');
        }

        else if(xid.charAt(0)=='r'){
            $('#'+lid).show();


            var item=$('#'+rid).html();
            $('#'+rid).hide();


            $('#rightCol').append('<div  id= '+rid+' class="itemR" >'+item+'</div>');
        }

       Left_rightOp();
        Right_leftOp();
    }); // end doubleclick

}  // end back_original_pos
