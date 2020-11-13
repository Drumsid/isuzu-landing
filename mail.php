<?php



// echo "<pre>";
// print_r($_POST);
// echo "</pre>";


$mailSpam = htmlspecialchars(trim($_POST["mail"]));

$title = htmlspecialchars($_POST["title"]);
$phone = htmlspecialchars($_POST["phone"]);
$agree = htmlspecialchars($_POST["agree"]);
// if( isset($_POST["g-recaptcha-response"]) && strlen(trim($_POST["g-recaptcha-response"]))> 0 ) {
    
//     $captcha_Secret = '6LcR-9IZAAAAABqAF07RZM11zPH69gNGg7ynGThE';
//     $recaptcha_Response = trim($_POST["g-recaptcha-response"]);

//     $ch = curl_init();
// 	$google_fields = array(
// 		'secret'   => $captcha_Secret,
// 		'response' => $recaptcha_Response,
// 		'remoteip' => $_SERVER["REMOTE_ADDR"]
// 	);
    
// 	//set the url, number of POST vars, POST data
// 	curl_setopt($ch, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
// 	curl_setopt($ch, CURLOPT_POST, true);
// 	curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($google_fields));
// 	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// 	//execute post
// 	$post_result = curl_exec($ch);
// 	$google_response = json_decode($post_result, true);
// 	curl_close($ch);

//     if ( $google_response["success"] == 1 ) {        
    
        if ( isset($_POST["mail"] )  && strlen(trim($_POST["mail"])) == 0 ) {
            // $to = "traffic@alliance-trucks.ru";
            // $to = "den-sidnay@yandex.ru";
            $to = "i.tulyakova@alliance-trucks.ru";
            $subject = "Новая заявка с сайта Hyundai Landing " . $title;
            $message =
            "
            Клиент заполнил форму <strong>\"" . $title . "\"</strong> и оставил номер телефона: $phone;<br>
            Надо перезвонить!!!
            ";


            $headers =
            'From: Новая заявка с сайта Hyundai Landing ' . "\r\n" .
            'Reply-To: Hyundai@hyundai.ru' . "\r\n" .
            'Content-Type: text/html; charset=utf-8' . "\r\n" .
            'Content-Transfer-Encoding: 8bit' . "\r\n";

            $result = mail($to, $subject, $message, $headers);

            if ($result) {
                echo 1;
            } else {
                echo 3;
            }
        } else {
            echo 0;
            die(0);  
        }
//     } else {
//         echo 2;
//     }
// }
