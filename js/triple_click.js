//custom tripleclick event
(function($){
    //var elems=$([]),
      //  clicks= 0,
       // last=0;
    $.tripleclickThreshold=500;

    $.event.special.tripleclick={
        setup: function(data){
            console.log('inside setup')
           // elems=elems.add(this);
            $(this)
                .data('tripleclick',{clicks:0,last:0,threshold:data})
                .bind('click',click_handler);
            /*if(elems.length === 1){
                $(document).bind('click',click_handler);
            }*/
        },
        teardown: function(){
            $(this)
                .removeData('tripleclick')
                .unbind('click',click_handler);
            /*elems= elems.not(this);
            if(elems.length === 0){
                $(document).unbind('click',click_handler);
            }*/
        }
    };

    function click_handler(event){
        console.log('event happen---')
        var elem= $(this),
            data= elem.data('tripleclick'),
            threshold = data.threshold || $.tripleclickThreshold;
        if( event.timeStamp - data.last > threshold){
            data.clicks=0;
        }

        data.last= event.timeStamp;

        if(++data.clicks === 3){
            elem.triggerHandler('tripleclick');
            data.cliks=0;
        }
        /*var elem= $(event.target);
        if(event.timeStamp - last > $.tripleclickThreshold){
            clicks=0;
        }
        last=event.timeStamp;

        if(++clicks===3){
            elem.trigger('tripleclick');
            clicks=0;
        }*/

    };
})(jQuery);

//custom click event

(function($){



// Special event definition.

    $.event.special.click = {

            setup: function() {

// This is only done the first time a "click" event handler is bound,

// per-element.

        $(this).css( 'cursor', 'pointer' );



// Bind the "click" event normally.

        return false;

    },

    teardown: function() {

// This is only done the last time a "click" event handler is unbound,
// per-element.

        $(this).css( 'cursor', '' );


// Unbind the "click" event normally.

        return false;

    }

};



})(jQuery);