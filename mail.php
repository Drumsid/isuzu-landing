<?php

$mailSpam = htmlspecialchars(trim($_POST["mail"]));

$title = htmlspecialchars($_POST["title"]);
$phone = htmlspecialchars($_POST["phone"]);
$agree = htmlspecialchars($_POST["agree"]);
    
        if ( isset($_POST["mail"] )  && strlen(trim($_POST["mail"])) == 0 ) {
            $to = "traffic@alliance-trucks.ru";
            $subject = "Новая заявка с сайта http://at-isuzu.ru ISUZU Landing " . $title;
            $message =
            "Клиент заполнил форму <strong>\"" . $title . "\"</strong> и оставил номер телефона: $phone;<br>
            Надо перезвонить!!!";

            $headers =
            'From: info@at-test.ru' . "\r\n" .
            'Reply-To: info@at-test.ru' . "\r\n" .
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
