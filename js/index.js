// let l_err;
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


function initForm() {


    $("body").on("submit", "form", function (e) {
        e.preventDefault();
        var l_form_object = $(this);
        console.log(l_form_object);

        _form_title = $("input[name='title']", this).val();
        _form_comment = $("input[name='comment']", this).val();
        _form_name = $("input[name='form_name']", this).val();
        _form_type_model_name = $("input[name='form_type_model_name']", this).val();
        _form_diler = $("input[name='form_diler']", this).val();

        _email = $("input[name='email']", this).val();
        let inputPhone = $("input[name='phone']", this);
        console.log(inputPhone);

        $("input[name='form_name']", this).val(_form_title);




        l_form_title = _form_title;

        var l_phone = $.trim($(this).find("input[name=phone]").val());
        console.log(l_phone);
        let patternp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;
        let resInput = patternp.test(l_phone);


        
        $("input,textarea,select", this).closest(".form-group").removeClass("has-danger");
        l_err = false;
        $(".nacc", this).each(function () {
            if ($(this)[0].tagName == "SELECT" || $(this)[0].tagName == "INPUT") {
               
                // let inputVal = $.trim($(this).val());
                 
                if (! resInput) {                   
                    l_err = true;
                        let errMsg = document.querySelectorAll('.error-ms');
                        // console.log(errMsg);
                        if (errMsg.length) {
                            for (let i = 0; i < errMsg.length; i++) {
                                const element = errMsg[i];
                                element.style.display = 'block';
                                inputPhone.focus();
                                setTimeout(function(){
                                   element.style.display = 'none';
                                }, 2000);
                                
                            }
                        }
                        
                        
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
    initFancy();
    initForm();
    initAlert();
});