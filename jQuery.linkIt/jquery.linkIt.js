/*
* name: LinkIt
* author: Nemanja Pilipovic
* version: 0.1.0
* license: MIT
*/

(function($){ 
    $.fn.linkIt = function(options){
       // Deafult Setting
        var setting = $.extend({
            href: null,
            text: null,
            target: '_self'
        }, options);
        
        // Validation
        if(setting.href == null){
           console.log('You need an href option for linkIt to work')
            return this;
           }
        
        return this.each(function(){
            var object = $(this);
            
            if(setting.text == null){
               setting.text = object.text();
               }
            
            object.wrap('<a target="'+setting.target+'" href="'+setting.href+'"></a>').text(setting.text);
        });
        
        
    }
 }(jQuery));