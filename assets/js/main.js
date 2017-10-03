;(function($) {

   'use strict'

	var tabs = function() {
		$('.tabs').each(function() {

			$(this).find('.tab-nav li').first().addClass('active');
			$(this).children('.tab-content').first().addClass('active').show();

			//
			$(this).find('.tab-nav li').on('click',function() {
				
				var tabNavIndex = $(this).index();
				var conIndex = $(this).parents('.tabs').children('.tab-content').eq(tabNavIndex);

				$(this).addClass('active').siblings().removeClass('active');
				conIndex.addClass('active').siblings('.tab-content').removeClass('active');
			});

		});
	};

	// 
	$(function($) {
		tabs();
	});


})(jQuery); 