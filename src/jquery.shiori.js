/* * * ****************************************************
**
**   Plugin Name: jquery.shiori.js
**   Version: 0.0.1
**   Author: Kuroneko
**   Copyright (c) 2014 Kuroneko
**   Licensed under the MIT License:
**   http://www.opensource.org/licenses/mit-license.php
**
**
***************************************************** * * */

(function($) {
	$.fn.shiori = function(options){
		var defaults = {
			'PAGENAME' : 'title',
			'FOLDER'   : '/',
			'ANNOUNCE' : '#announce',
			'NOTICE'   : 'notice',
			'YEAR'     : 1
		}
		var setting = $.extend( defaults, options );
		
		return this.each(function(i){
		
			var KEEP = new Date();
			KEEP.setFullYear(KEEP.getFullYear() + setting.YEAR);	
					  
			var KEY = $.cookie();
	
			if($.cookie("shiori_location")){
				$(setting.ANNOUNCE).html('<a href="' + $.cookie("shiori_location") + '">' + $.cookie("shiori_title") + '</a>にしおりをはさんでいます。<br><p align="right"><a href="javascript:void(0)" id="shiori_delete">しおりを削除する</a></p>')
			} else {
				$(setting.ANNOUNCE).each(function(){
					$(this).remove();
				});
			}
			
			$('#shiori_create').click(function(){
				var PAGENAME_TEXT = $(setting.PAGENAME).text();
				$.cookie('shiori_location',location.href, {
					path: setting.FOLDER,
					expires: KEEP
				});
				$.cookie("shiori_title",PAGENAME_TEXT, {
					path: setting.FOLDER,
					expires: KEEP
				});
				$('<div id="'+ setting.NOTICE +'">'+PAGENAME_TEXT+'にしおりをはさみました</div>').hide().appendTo("body").fadeIn().delay(3000).fadeOut();
			});
	
			$('#shiori_delete').click(function(){
				$.removeCookie('shiori_location', {
					path: setting.FOLDER,
				});
				$.removeCookie('shiori_title', {
					path: setting.FOLDER,
				});
				$('<div id="'+ setting.NOTICE +'">しおりを削除しました</div>').hide().appendTo("body").fadeIn().delay(3000).fadeOut();
				$(setting.ANNOUNCE).remove();
			});
		});

	return this;
	};
})(jQuery);