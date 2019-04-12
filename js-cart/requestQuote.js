var cartCount = 0,
	 buy = $('.btn'),
	 span = $('.number'),
	 cart = $('.cart'),
	 quickview = $('.quickviewContainer'),
	 quickViewBtn = $('.quickview'),
	 close = $('.quickviewContainer .close'),
	 minicart = [],
	 totalPrice = [],
	 miniCartPrice;

buy.on('click', addToCart);
quickViewBtn.on('click', quickView);
cart.on('click', showMiniCart);
close.on('click', function(){
	quickview.removeClass('active');
});

function quickView() {
	var description = $(this).parent().find('.description').text(),
		 header = $(this).parent().find('.header').text(),
		 price = $(this).find('.price'),
		 quickViewHeader = $('.quickviewContainer .headline'),
		 quickViewDescription = $('.quickviewContainer .description');
	clearTimeout(timeQuick);
		if(quickview.hasClass('active')){
			quickview.removeClass('active');
			var timeQuick = setTimeout(function(){
				quickview.addClass('active');
			}, 300);
		} else{
			quickview.addClass('active');
		}
	
	quickViewHeader.text(header);
	quickViewDescription.text(description);
}

function showMiniCart() {
	$('.mini').toggleClass('visible');
}

function addToCart() {
	var self = $(this),
		 productName = $(this).parent().find('.header').text(),
		 miniCartNames = $('.products'),
		 names = $('.names'),
		 price = $(this).parent().find('.price').text(),
		 priceInt = parseInt(price);
    
    if(isNaN(priceInt)){
       

     }else{
               
            totalPrice.push(priceInt);
            miniCartPrice = totalPrice.reduce(function(a,b){  return a+b });
            $('.miniprice').text('Total amount: ' + miniCartPrice + ",-");
            minicart.push(productName);
            lastProduct = minicart[minicart.length - 1];
            miniCartNames.text('Your cart lines: ');
            names.append('<p>' + lastProduct + '</p>');

            cartCount++;
            span.text(cartCount);
            clearTimeout(time);
            if(span.hasClass('update')){
                span.removeClass('update');
                span.addClass('updateQuantity');
                var time = setTimeout(function(){
                    span.removeClass('updateQuantity');
                    span.addClass('update');
                }, 700);
            } else{
                span.addClass('update');
            }
            if (cartCount == 1){
                cart.toggleClass('icon-basket icon-basket-loaded');
            }

            $(this).addClass('ok');
            var timeOk = setTimeout(function(){
                self.removeClass('ok');
            }, 1000);
	 }
}

/*function popup(){
		$(document).ready(function() {

		$('.open-form').click(function() {
			$('.form-popup').show();
		});
		$('.close-form').click(function() {
			$('.form-popup').hide();
		});

		$('.reset-form').click(function() {
			$('.success-message').show();
		 $('#my-form').trigger( 'reset' );

		 setTimeout(function() {
			 $('.success-message').hide()
		 }, 1500);
		});

		$(document).mouseup(function(e) {
			var container = $(".form-wrapper");
			var form = $(".form-popup");

			if (!container.is(e.target) && container.has(e.target).length === 0) {
				form.hide();
			}
		});
			
	});
	
}*/

function post(){
	 $.ajax({
		type:'POST',
		url:"sendQuote.php",
		data:minicart, //Pass your varibale in data
		data:totalPrice, //Pass your varibale in data
		data:cart, //Pass your varibale in data
		
		success:function(getreturn){
		alert(getreturn); //you get return value in this varibale, us it anywhere
			window.alert(minicart, totalPrice);
		}
	})
}

	