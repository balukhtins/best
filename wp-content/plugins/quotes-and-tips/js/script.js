(function($){
	$(document).ready( function() {
		if ( $.fn.wpColorPicker ) {
			$( '.qtsndtps_color_field' ).wpColorPicker();
		};

		if( $( '.qtsndtps_background_image:checked' ).val() != 'custom' ) {
			$( '#qtsndtps_custom_image' ).hide();
		}

		function qtsndtps_background_image() {
			if ( $( 'input[name="qtsndtps_background_image"]:checked' ).val() == 'custom' ) {
				if ($('.qtsndtps_custom_image img' ).attr('src') === '') {
					$( '#qtsndtps_custom_file, .qtsndtps_hidden' ).show();
					$( '.qtsndtps_default_image, .qtsndtps_current_image, .qtsndtps_custom_image' ).hide(); }
				else {
					$('#qtsndtps_custom_file, .qtsndtps_hidden, .qtsndtps_current_image, .qtsndtps_custom_image').show();
					$('.qtsndtps_default_image').hide();
				};
			} else if ( $( 'input[name="qtsndtps_background_image"]:checked' ).val() == 'none' ) {
				$( '#qtsndtps_custom_file, .qtsndtps_hidden, .qtsndtps_current_image, .qtsndtps_custom_image' ).hide();
			} else {				
				$( '#qtsndtps_custom_file, .qtsndtps_custom_image' ).hide();
				$( '.qtsndtps_hidden, .qtsndtps_default_image, .qtsndtps_current_image' ).show();
			}
		};
		if ( $( 'input[name="qtsndtps_background_image"]' ).length ) {
			qtsndtps_background_image();
			$( 'input[name="qtsndtps_background_image"]' ).change( function() { qtsndtps_background_image() });
		}

		if( $( '#qtsndtps_additional_options' ).is( ':checked' ) ) {
			$( '#qtsndtps-text-color-example, #qtsndtps-link-color-example' ).hide();
		}

		if( 0 < $( '#qtsndtps_slider' ).length ) {
			$( '#qtsndtps_slider' ).slider({
				range: 'min',
				min: 0.1,
				max: 1,
				step: 0.1,
				value: $( '#qtsndtps_widget_background_opacity' ).val(),
				slide: function( event, ui ) {
					$( '#qtsndtps_widget_background_opacity' ).val( ui.value );
				}
			});
		}

		if ( $( '.qtsndtps_title_post:checked' ).val() == '1' ) {
			$( '.qtsndtps_title_post_fields' ).hide();
		}

		$( '.qtsndtps_title_post' ).change( function() {
			if ( $( this ).is( ':checked' ) && $( this ).val() == '1' ) {
				$( '.qtsndtps_title_post_fields' ).hide();
			} else if ( $( this ).is( ':checked' ) && $( this ).val() == '0' ) {
				$( '.qtsndtps_title_post_fields' ).show();
			}
		});

		$( '#qtsndtps-link-color-example, #qtsndtps-text-color-example' ).on( "click", function() {
			if ( typeof bws_show_settings_notice == 'function' ) {
				bws_show_settings_notice();
			}
		});
	});
})(jQuery);