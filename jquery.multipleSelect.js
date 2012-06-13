(function($) {

    $.fn.multipleSelect = function(options){
	
        //Configurações padrão
        var defaults = {
            // options of layout
            width: '300px',
            height: '100px',
            overflow: 'auto',
            border: '1px solid black',
            color_odd: '#F3F3F3',
            color_even: '#FFFFFF',
            more_style: '',
			
            // general options
            hide_original_element: true,
            select_all: true,
            select_all_label: 'Selecionar Todos',
            check_selected: true,
	    invalid_element: 'Ops... Só é permitido aplicar o plugin multipleSelect em elementos\nSELECT.',
			
            // callbacks and debug
            callback: null,
            debug : false
        };
        // merge of parametters
        var options = $.extend(defaults, options);
        
        // IF debug than print on console
        if(options.debug == true && !$.browser.msie && window.console && window.console.firebug)
            console.info(options);
		
        // vars
        var value;
        var name;
        var id_val;
        var content;
        var name_field;
        var id_field;
        var selected;
        var qtd_results = 0;
			
        $(this).each(function(){
		
            if($(this).get(0).tagName == 'SELECT'){
		
		// get the ID
                id_val   = $(this).attr('id');
		id_field = 'multiple_'+id_val;
		
                var html_result = '<div id="div_'+id_field+'" name="div_'+id_field+'" class="selectMultiplo" style="width: '+options.width+'; height:'+options.height+' ; overflow:'+options.overflow+' ; border:'+options.border+' ; '+options.more_style+' ">';
                html_result += '<table>';
                html_result += '<tbody id="'+id_field+'">';		
				
                if(options.select_all == true){
					
                    html_result += "<tr style=''>\
                                            <td width='1%'>\
                                                    <input type='checkbox' class='selecionar_todos' id='"+id_field+"'>\
                                            </td>\
                                            <th>\
                                                    <label for='"+id_field+"'>"+options.select_all_label+"</label>\
                                            </th>\
                                    </tr>";
                }
			
                name = $(this).attr('name');
			
                $(this).children().each(function(){
				
                    value    = $(this).attr('value');
                    content  = $(this).html();
                    selected = $(this).attr('selected');
					
                    if(content != ''){
                        html_result += "<tr style=''>\
                                                 <td width='1%'>\
                                                        <input type='checkbox' "+(options.check_selected==true&&selected==true ? 'checked=checked' : '')+" value='"+value+"' name='"+name+"[]' id='"+name+"_"+value+"'>\
                                                 </td>\
                                                <td>\
                                                        <label for='"+name+"_"+value+"'>"+content+"</label>\
                                                </td>\
                                        </tr>";
                        qtd_results++;
                    }
					
                });
				
                html_result += '</tbody>	</table></div>';
				
                // hide the principal element if option is true
                if(options.hide_original_element == true)
                    $(this).hide();
				
                // apply the new element on the html
                if(qtd_results > 0)
                    $(this).after(html_result);
				
                // zebra
                $('#'+id_field).find("tr:odd").css('background-color', options.color_odd);
                $('#'+id_field).find("tr:even").css('background-color', options.color_even);
			
            } else {
                alert(options.invalid_element);
            }
			
        });
		
        // all checkbox
        $(".selecionar_todos").click(function(){
            if($(this).attr("checked") == true){
                $('#div_'+id_val+' :checkbox').attr("checked","checked");
            }else {
                $('#div_'+id_val+' :checkbox').removeAttr("checked");
            }
        });
						
        // There is callback? so execute...
        if(options.callback != null)
            options.callback.call(this);
		
    }
	
})(jQuery);
