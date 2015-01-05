formatCardNumber = function(e) {
                var $target, value, re, digit;
                digit = String.fromCharCode(e.which);
                re = /(?:^|\s)(\d{4})$/;
                $target = $(e.currentTarget);
                value = $target.val();
                
                if (value.length < 19) {    //即使刪除最後一格字元也無法再輸入更多數字，讓卡號維持在16碼    
               
                    setTimeout(function() {
                        if (!/^\d+$/.test(digit)) {
                            value = value.replace(/(?!\s)\D/g, '');
                            return $target.val(value);
                        }

                        if (re.test(value)) {
                            e.preventDefault();
                            return setTimeout(function() {
                                return $target.val(value + ' ' + digit);
                            });
                        } else if (re.test(value + digit)) {
                            e.preventDefault();
                            return setTimeout(function() {
                                return $target.val(value + digit + ' ');
                            });
                        }
                    });
                }

            };

            (function() {
                'use strict';

                $("#ccnumber").on("keypress", formatCardNumber);

            }).call(this);
