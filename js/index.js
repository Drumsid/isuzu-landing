// function initYandexMapWaitOnHover() {
//     function loadScript(url, callback) {
//         var script = document.createElement("script");

//         if (script.readyState) { // IE
//             script.onreadystatechange = function () {
//                 if (script.readyState == "loaded" ||
//                     script.readyState == "complete") {
//                     script.onreadystatechange = null;
//                     callback();
//                 }
//             };
//         } else { // Другие браузеры
//             script.onload = function () {
//                 callback();
//             };
//         }

//         script.src = url;
//         document.getElementsByTagName("head")[0].appendChild(script);
//     }

//     var check_if_load = 0;

//     function __load_yandex() {
//         if (check_if_load == 0) {
//             /*var instance = $.fancybox.open(
//             {
//             	animationDuration:0,
//             	afterShow: function( instance, current )
//             	{
//             		//console.info( instance );
//             		$(".fancybox-content").remove();
//             		instance.showLoading();
//             	}

//             });*/
//             check_if_load = 1;
//             //animationDuration
//             loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function () {
//                 /*instance.hideLoading();
//                 instance.close();*/
//                 ymaps.load(initYandexMap);
//             });
//         }
//     } //end_ func


//     $('#map1').on("touchstart", function () {
//         __load_yandex();
//     });
//     $('#map1').mouseenter(function () {
//         __load_yandex();
//     });
//     $('#map1').click(function () {
//         __load_yandex();
//     });
// } //end_ func

// function initYandexMap() {
//     ymaps.ready(function () {
//         /*if ($('html').hasClass('mobile'))
//         {
//         	var _ball_bg = 'img/m.map.balloon.png';
//         	var _ball_Offset = [-300,-150];
//         	var _ball_Size = [600,150];
        	
//         }
//         else*/
//         /*		{
//         			var _ball_bg = 'img/map.balloon.png';
//         			var _ball_Offset = [-10,-85];
//         			var _ball_Size = [148,92];
//         		}*/

//         var _ball_bg = 'img/map.balloon.png';
//         var _ball_Offset = [-20, -59];
//         var _ball_Size = [30, 46];


//         var myMap1 = new ymaps.Map('map1', {
//             center: [55.853466, 37.679071],
//             zoom: 16,
//             controls: ['zoomControl']
//         }, {
//             searchControlProvider: 'yandex#search'
//         });

//         //baloon 1
//         var myPlacemark1 = new ymaps.Placemark([55.853466, 37.679071], {
//             balloonContent: "Москва, Ярославское шоссе, д. 7",
//             hintContent: "Москва, Ярославское шоссе, д. 7"
//         }, {
//             //	balloonLayout: "default#imageWithContent",
//             //	balloonImageHref: _ball_bg,
//             //	balloonImageOffset: _ball_Offset,
//             //	balloonImageSize: _ball_Size,
//             iconLayout: 'default#image',
//             // Своё изображение иконки метки.
//             iconImageHref: _ball_bg,
//             // Размеры метки.
//             iconImageSize: _ball_Size,
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: _ball_Offset
//         });
//         myMap1.geoObjects.add(myPlacemark1);
//         //myPlacemark1.balloon.open();
//     }); //end_ ready
// } //end_ func


function initFancy() {

    $(".fancybox-gallery").fancybox({
        theme: 'light',
        helpers: {
            thumbs: true
        },
        openEffect: 'fade',
        closeEffect: 'fade',
        nextEffect: 'fade',
        prevEffect: 'fade',
        'showNavArrows': true
    });

    $(".popup").click(function () {
        var _form_id = $(this).attr('href');

        var _form_title = $(this).data('title');
        var _form_comment = $(this).data('comment');
        var _form_name = $(this).data('form_name');
        var _form_type_model_name = $(this).data('form_type_model_name');
        var _form_diler = $(this).data('form_diler');

        var _form_sumbit_text = $(this).data('form_sumbit_text');

        // console.log(_form_sumbit_text);

        var _select_val = $(this).attr('_select_val');
        $(".popup_container .form_title").html(_form_title);

        // $.fancybox({
            $.fancybox.open( $(_form_id).html(),
            {
            // padding: 0,
            // content: $(_form_id).html(),
            // modal: true,
            // scrolling: "no",
            // margin: 5,
            // /*closeBtn: false,*/
            // afterShow: function () {
                padding: 0,
                content: $(_form_id).html(),
                // modal: true,
                scrolling: "no",
                margin: 5,
                // closeBtn: true,
                afterShow: function()
                {
                    $('.policy-soglas').on('click', function (e) {
                        e.preventDefault();
                        $.fancybox.open({
                            src: '#security-modal-body',
                            type: 'inline'
                        });
                    });

                $(".popup_container input[name='title']").val(_form_title);
                $(".popup_container input[name='comment']").val(_form_comment);
                $(".popup_container input[name='form_name']").val(_form_name);
                $(".popup_container input[name='form_type_model_name']").val(_form_type_model_name);
                $(".popup_container input[name='form_diler']").val(_form_diler);

                if (_form_sumbit_text !== undefined) $(".fancybox-wrap .popup_container button[type='submit']").text(_form_sumbit_text);

                $("input[name=phone]").inputmask("+7(999) 999-99-99");
                var scr = window.scrollY;
                $("input[name=phone]").focus();
                window.scrollTo(0, scr);
                if (typeof (_select_val) != "undefined") $('.popup_container select').val(_select_val);
            }
        });
        return false;
    });
    $(".popup2").click(function () {
        var _name = _id = $(this).attr('_name');
        var _form_title = $(this).attr('_title');
        var _form_comment = $(this).attr('_comment');
        $(".form_popup2 form").attr('name', _name);
        $(".form_popup2 form").attr('id', _id);
        $(".form_popup2 form").attr('data-callkeeper_name', _form_title);
        //	$(".form_popup2 .form_title").text(_form_title);
        $(".form_popup2 form").data('title', _form_title);




        var _select_val = $(this).attr('_select_val');

        $.fancybox({
            padding: 0,
            content: $(".form_popup2").html(),
            modal: true,
            scrolling: "no",
            margin: 5,
            /*closeBtn: false,*/
            afterShow: function () {
                $(".popup_container input[name=comment]").val(_form_comment);

                // $("input[name=phone]").inputmask("+7(999) 999-99-99");
                _init_inputmask();
                if (typeof (_select_val) != "undefined") $('.popup_container select').val(_select_val);
            }
        });
        $(".form_popup2 form").attr('name', '');
        $(".form_popup2 form").attr('id', '');
        $(".form_popup2 form input[name=comment]").val("");
        return false;
    });
} //end_ func

function _init_inputmask()
{
	// $("input[name=phone]").inputmask("+7(999) 999-99-99-99",_option);
	// return;
	var _option = 
	{
			onKeyValidation: function (key, result) {
				var _text = $(this).val();
				var _first_char = _text.substr(0,1);
				var _two_chars = _text.substr(0,2);
				var _five_chars = _text.substr(0,5);
				var _four_chars = _text.substr(0,4);
				// console.log(_five_chars);
				switch (_first_char)
				{
					case "0":
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":					
					case "9":
						$(this).inputmask("+7(999) 999-99-99",_option);
					break;
				}

				switch (_two_chars)
				{
					case "+8":
						$(this).inputmask("+7(999) 999-99-99",_option);
					break;
					// case "+7":
					// 	$(this).inputmask("+7(999) 999-99-99",_option);
					// 	console.log("_two_chars+7");
					// break;
				}

				switch (_four_chars)
				{
					case "+7(9":
						$(this).inputmask("+7(999) 999-99-99",_option);			
					break;
				}

				switch (_five_chars)
				{
					
					case "+7(7_":
						$(this).inputmask("+7(999) 99999999",_option);	
					break;
					// case "+7(9":
					// 	$(this).inputmask("+7(999) 999-99-99",_option);			
					// break;
					case "+7(89":
						$(this).inputmask("+7(999) 99999999",_option);	
					break;
				}

				
				switch (key)
				{
					case 43:
					case 229:
						if (_text == "")
						{
							 $(this).inputmask("+7(999) 999-99-99",_option);
							return;
						}
					break;
				
				}
			}
	}

	// _option.onKeyDown = _option.onKeyValidation;

	$("input[name=phone]").inputmask("+7(999) 999-99-99",_option);

}


function initForm() {
    // $("input[name=phone]").inputmask("+7(999) 999-99-99");
    _init_inputmask();


    $("body").on("submit", "form", function () {

        var l_form_object = $(this);

        _form_title = $("input[name='title']", this).val();
        _form_comment = $("input[name='comment']", this).val();
        _form_name = $("input[name='form_name']", this).val();
        _form_type_model_name = $("input[name='form_type_model_name']", this).val();
        _form_diler = $("input[name='form_diler']", this).val();

        _email = $("input[name='email']", this).val();


        $("input[name='form_name']", this).val(_form_title);



        //Прямая отправка Коллкипер
        l_form_title = _form_title;
        // var l_hash = "6a0fe4bc3020f054729aebc64378b84c";
        // var l_host = "http://promo-mazda.ru/";
        var l_phone = $(this).find("input[name=phone]").val();

        if (("-=" + l_phone).indexOf("_") > 0) {
            alert("Заполните поле Телефон");
            return false;
        }

        console.log(l_phone);

		var l_phone_mod = "+"+l_phone.replace(/[\D]+/g,"");
		if ( l_phone_mod.length==13 )
		{
		l_phone_mod = l_phone_mod.replace("+77","+7");
		}
		if ( l_phone_mod.length==13 )
		{
		l_phone_mod = l_phone_mod.replace("+78","+7");
		}

		// if(l_phone_mod.substr(0, 3) != "+79") {
		// 	alert("В одном или нескольких полях введены неверные данные");
		// 	return false;
		//   }

		var l_phone_mod2 = l_phone_mod.substr(0, 2) + 
			"(" + l_phone_mod.substr(2, 3) +
			")" +
			" " +
			l_phone_mod.substr(5, 3) +
			"-" +
			l_phone_mod.substr(8, 2) +
			"-" +
			l_phone_mod.substr(10, 2); 

		l_phone_mod2 = l_phone_mod2.replace("_","");

		l_phone = l_phone_mod2;

		$(this).find("input[name=phone]").val(l_phone);

        console.log(l_phone_mod);
        
        $("input,textarea,select", this).closest(".form-group").removeClass("has-danger");
        var l_err = false;
        $(".nacc", this).each(function () {
            if ($(this)[0].tagName == "SELECT" || $(this)[0].tagName == "INPUT") {
                if (($.trim($(this).val())) == "" || (l_phone_mod.length < 12) || (l_phone_mod.substr(0, 3) != "+79")) {
                    l_err = true;
                    $(this).closest(".form-group").addClass("has-danger");
                } //end_ if
            } //end_ if
        });

        if (l_err == true) {
            // alert("В одном или нескольких полях введены неверные данные");
            return false;
        } //end_ if

		// if ( l_phone_mod.length < 12)
		// {
		// 	alert("В одном или нескольких полях введены неверные данные");
		// 	return false;
		// }



        // if (typeof (CallKeeper) != "undefined") {
        //     var l_callkeeper_url = '//api.callkeeper.ru/formReceiver?isSend&widgetHash=' + l_hash + '&phone=' + l_phone + '&backUrl=' + l_host + '&cookiesBasket=' + CallKeeper.f.justCookies();
        //     $.post(l_callkeeper_url, $(this).serialize() + "&form=" + this.id + "&form_title=" + _form_title, function (data) {
               
        //     });
        //     console.log("[callkeeper working]");
        //     console.log(l_callkeeper_url);
        // } else {
        //     //var cookiesBasket = '&cookiesBasket=current:::typ=utm|||src=actioncall|||mdm=cpc|||cmp=lpnoscript|||cnt=(none)|||trm=(none)^#^#.';
        //     var cookiesBasket = '&cookiesBasket=' + encodeURIComponent('current:::typ=utm|||src=actioncall|||mdm=cpc|||cmp=campaign|||cnt=content|||trm=term^#^#session:::cpg=' + l_host + '^#^#');
        //     var l_callkeeper_url = '//api.callkeeper.ru/formReceiver?isSend&widgetHash=' + l_hash + '&phone=' + l_phone + '&backUrl=' + l_host + cookiesBasket;
        //     $.post(l_callkeeper_url, $(this).serialize() + "&form=" + this.id + "&form_title=" + _form_title, function (data) {
                
        //     });
        //     _form_title = _form_title + " [callkeeper default utm]";
        //     console.log("[callkeeper static utm]");
        //     console.log(l_callkeeper_url);
        // } //end_ if

        // if ( typeof(window.ym)!="undefined" ) {
        //     ym(50438128,'reachGoal','lead');
        //     console.log( "[ym ok]" );
        // }

       /* if ( typeof(window.yaCounter50438128)!="undefined" ) {
            yaCounter50438128.reachGoal('lead');
            console.log( "[yaCounter ok]" );
        } */



        // if (typeof (window.dataLayer) != "undefined" && typeof (window.dataLayer.push) != "undefined") {
        //     window.dataLayer.push({
        //         event: 'callkeeper-call_order-ckaction',
        //         eventCategory: 'callkeeper',
        //         eventAction: 'call_order',
        //         eventLabel: 'ckaction'
        //     });
        //     console.log("[ckaction event]");
        // }





        $.post("mail.php", $(this).serialize(), function (data) {

            console.log('form_site :' + window.location.href);
            console.log('form_name :' + _form_name);
            console.log('form_type_model_name :' + _form_type_model_name);
            console.log('form_diler :' + _form_diler);
            console.log('form_action :' + 'send_form');
            console.log('event :' + 'event_ok');

            //			dataLayer.push({
            //				'form_site': window.location.href, // динамически подставлять URL страницы и домен сайта
            //				'form_name': _form_name,
            //				'form_type_model_name': _form_type_model_name,
            //				'form_diler': _form_diler,
            //				'form_action': 'send_form',
            //				'event': 'event_ok'
            //			});




            //ckForms.send( '#'+l_form_object.attr("name") );
            $('form').trigger('reset');
            
        });

        var messsage_ok = "<div style='font-size:28px;text-align:center;font-weight: 600;'>Спасибо!</div><div style='font-size:16px;text-align:center;font-weight: 500;padding-top: 10px;'><br/>Ваше сообщение отправлено.<br/>В ближайшее время мы свяжемся с вами.</div>";
        alert(messsage_ok);
            // $.fancybox.close();

        return false;
    });
} //end_ func




function initPlus() {
    $(".plus").click(function () {
        $(this).toggleClass("open");
        var l_desc = $(this).closest(".col-xl-4").find(".desc");
        if ($(this).hasClass("open")) {
            /*l_desc.slideDown();*/
            l_desc.show();
        } else {
            /*l_desc.slideUp();*/
            l_desc.hide();
        }
    });
} //end_ func


function init_topmenu() {
    //$('.top_menu').height($('.top_menu ul:visible').height());
    //$('.top_menu a > span').click(function(){
    $('.top_menu span').click(function () {
        var _li = $(this).closest('li');
        var _ul = $(this).closest('ul');
        $(' > ul', _li).addClass('show');
        $('.top_menu').height($('> ul', _li).height());
        return false;
    });

    $('.top_menu ul > li ul > li > span').click(function () {
        var _parent = $(this).closest('ul').parents('ul');
        $(this).closest('ul').removeClass('show');
        $('.top_menu').height($(_parent).height());
        return false;
    });

    $('.btn_topmenu').click(function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.topmenu_container').removeClass('open');
            $('.top_menu ul').removeClass('show');
        } else {
            $(this).addClass('open');
            $('.topmenu_container').addClass('open');
            $('.top_menu').height($('.top_menu > ul').height());
        }
    });
    $(document).mousedown(function (event) {
        if ($(event.target).closest('.topmenu_container').length == 0 && !$(event.target).hasClass('btn_topmenu')) {
            $('.btn_topmenu').removeClass('open');
            $('.topmenu_container').removeClass('open');
            $('.top_menu ul').removeClass('show');
        }
    });
}

function anchor_click() {
    $('.anchor[href^="#"]').click(function () {
        //$('.control_section').click(function(){
        var el = $(this).attr('href');
        var _pos = $(el).offset().top - 104;
        $("html, body").animate({
            scrollTop: _pos
        }, 500);
        return false;
    });   
}




function initPopup() {
    $('.cars_items2 .popup2').click(function () {
        var _parent = $(this).closest('.car_item');
        var _text = $('.title', _parent).text();
        $('select', _parent).each(function () {
            if ($(this).val() != "") _text += ", " + $(this).val();
        });
        $('.popup2', _parent).attr('_comment', _text);
    });

} //end_ func



function init_complects() {
    $('.compl_btn').click(function () {
        var _parent = $(this).closest('.car_item');
        var _text = $('.title', _parent).text();
        $('select', _parent).each(function () {
            if ($(this).val() != "") _text += ", " + $('option:selected', this).text();
        });

        $(this).attr('data-comment', _text);
    });


    $('.s_complect').each(function () {
        $('option:not(:first)', this).remove();
        var _model = $(this).data('car');

        if (typeof car_array[_model] == 'undefined') return false;
        var _data = car_array[_model]["source"];
        for (i in _data)
            $(this).append("<option value='" + i + "'>" + _data[i]["name"] + "</option");
    });
    $('.s_complect').change(function () {
        var _parent = $(this).closest('.car_item');
        $('.s_engine option:not(:first)', _parent).remove();

        var _model = $(this).data('car');
        var _complect = $(this).val();
        if (typeof car_array[_model]["source"][_complect] == 'undefined') return false;
        var _data = car_array[_model]["source"][_complect]["source"];
        for (i in _data)
            $('.s_engine', _parent).append("<option value='" + i + "'>" + _data[i]["name"] + "</option");
    });

} //end_ func


function initSliderSlick() {
    $('.slider.single-item').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
}

function initCarMenu() 
{
	// window.first_scroll = 1;
    $('.cars_menu_item').click(function () {

        var index = $(this).index();

        $(this).addClass('active').siblings().removeClass('active');
        $('.car_item').removeClass("active").eq(index).addClass('active');
        // $('.car_item_bottom').hide().eq(index).show();

        $(".car_item:eq(" + index + ") .compl_btn:eq(0)").click();


        // var car_name = $(this).attr("data-title");


        // if ((index == 3) || (index == 4)) {
        //     $(".cars_items_bg").addClass("widthstrike");
        // } else $(".cars_items_bg").removeClass("widthstrike");

        // if ((index == 0) && ($(window).width() >= 1024)) {
        //     $(".car_item_bottom .item:first").addClass("active");
        //     $(".car_item_bottom .item:eq(1)").addClass("active");
        // } else $(".car_item_bottom .item div").removeClass("active");


	// if ( window.first_scroll!=1 )
	// {
	// 	//animate scroll
	//         var _pos = $('#cars_items_bg').offset().top - 80;
	//         $("html, body").animate(
	// 	{
	//             scrollTop: _pos
	//         }, 500);
	// }
	// window.first_scroll = 0;

    });

    $('.cars_menu_item').click();

    // $(".car_item .compl_btn:first").click();


    // $('.cars_menu_item:eq(0)').click();
    // $('.car_item_bottom').hide();
    // $('.car_item_bottom:first').show();


}

function initComplectChoose() {

    $("select[data-compl]").change(function () {

        var _parent = $(this).closest(".car_item"),
            _compl_btn = $('.compl_btn.active', _parent),
            l_car_compl = $(_compl_btn).attr("data-compl"),
            l_car_engine = $(this).val();


        /* price */

        $(".car_complects_price", _parent).hide();

        price_object = $(".car_complects_price[data-compl='" + l_car_compl + "'][data-engine='" + l_car_engine + "']", _parent);

        price_object.show();

        startNumber1 = 1000000;

        animateNumber($(".price_count", price_object), startNumber1, price_object.attr("data-price"));

        /* profit */

        $(".profit a", _parent).hide();

        profit_object = $(".profit a[data-compl='" + l_car_compl + "'][data-engine='" + l_car_engine + "']", _parent);

        profit_object.show();

        startNumber = 100000;

        animateNumber($(".profit_count", profit_object), startNumber, profit_object.attr("data-profit"));

        /* credit */

        $(".credit a.all_car", _parent).hide();
        $(".credit a.cx9", _parent).hide();

        credit_object_all_car = $(".credit a.all_car[data-compl='" + l_car_compl + "'][data-engine='" + l_car_engine + "']", _parent);
        credit_object_cx9 = $(".credit a.cx9[data-compl='" + l_car_compl + "'][data-engine='" + l_car_engine + "']", _parent);

        if ($(".cars_menu_item").attr("data-title") == "mazda_cx_9") {
            credit_object_cx9.show();
            startNumber = 10000;
            animateNumber($(".credit_count", credit_object_cx9), startNumber, credit_object_cx9.attr("data-credit"));
        } else {
            credit_object_all_car.show();
            animateNumber($(".credit_count", credit_object_all_car), startNumber, credit_object_all_car.attr("data-credit"));
        }



    });



    $(".compl_btn").click(function () {

        var _parent = $(this).closest(".car_item"),
            l_car_compl = $(this).attr("data-compl");

        $(this).addClass("active").siblings().removeClass('active');

        $("select[data-compl]", _parent).hide();

        $("select[data-compl='" + l_car_compl + "']", _parent).show().change();

        return false;

    });




}

function animateNumber(elem1, startNumber, endNumber) {
    $({
        numberValue: startNumber
    }).animate({
        numberValue: endNumber
    }, {
        duration: 600,
        step: function (val) {
            val = parseInt(val);
            elem1.html((val).toLocaleString('ru'));
        }
    });
}

function initCarAnchor (){
    // if ( document.location.href.indexOf("#")>0 ) {
    //     var temp = document.location.href.split("#");
    //     var car_url = "#"+temp[1];
    //     $(".cars_menu_item[href='"+car_url+"']").click();
    // }
    $(".cars_menu_item").click(function(){
        
    });

}

function initAlert()
{
	window.alert = function( e_msg, e_time )
	{
		$("body").append("<style>.alert{ font-size: 20px; }</style>");

		if ( typeof(e_time)!="undefined" )
		{
			setTimeout( function(){ $.fancybox.close(); }, e_time );
		}

		e_msg = '<div class="alert">'+e_msg+'</div>';

		var instance = $.fancybox.getInstance();
		if ( typeof(instance)=="undefined" || instance==false )
		{
			$.fancybox.open(e_msg);
			return;
		}
		instance.current.$slide.trigger("onReset");
		instance.setContent( instance.current, e_msg );
	}//end_ func
}//end_ func

$(function () {
    initPopup();
    init_complects();
    anchor_click();
    init_topmenu();
    // initYandexMap();
    // initYandexMapWaitOnHover();
    initFancy();
    initForm();
    initPlus();
    initSliderSlick();
    initComplectChoose();
    initCarMenu();
    initAlert();
    // initCarAnchor();
    /*
	init_fix_menu();
	initForm();
	initFancy()*/
});