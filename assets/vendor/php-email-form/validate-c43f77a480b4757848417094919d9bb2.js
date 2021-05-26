jQuery(document).ready((function(e){"use strict"
e("form.php-email-form").submit((function(){var t=e(this).find(".form-group"),a=!1,i=/^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i
if(t.children("input").each((function(){var t=e(this),s=t.attr("data-rule")
if(void 0!==s){var n=!1,r=s.indexOf(":",0)
if(r>=0){var d=s.substr(r+1,s.length)
s=s.substr(0,r)}else s=s.substr(r+1,s.length)
switch(s){case"required":""===t.val()&&(a=n=!0)
break
case"minlen":t.val().length<parseInt(d)&&(a=n=!0)
break
case"email":i.test(t.val())||(a=n=!0)
break
case"checked":t.is(":checked")||(a=n=!0)
break
case"regexp":(d=new RegExp(d)).test(t.val())||(a=n=!0)}t.next(".validate").html(n?void 0!==t.attr("data-msg")?t.attr("data-msg"):"wrong Input":"").show("blind")}})),t.children("textarea").each((function(){var t=e(this),i=t.attr("data-rule")
if(void 0!==i){var s=!1,n=i.indexOf(":",0)
if(n>=0){var r=i.substr(n+1,i.length)
i=i.substr(0,n)}else i=i.substr(n+1,i.length)
switch(i){case"required":""===t.val()&&(a=s=!0)
break
case"minlen":t.val().length<parseInt(r)&&(a=s=!0)}t.next(".validate").html(s?null!=t.attr("data-msg")?t.attr("data-msg"):"wrong Input":"").show("blind")}})),a)return!1
var s=e(this).serialize(),n=e(this),r=e(this).attr("action")
return r?(n.find(".sent-message").slideUp(),n.find(".error-message").slideUp(),n.find(".loading").slideDown(),e.ajax({type:"POST",url:r,data:s,success:function(e){"OK"==e?(n.find(".loading").slideUp(),n.find(".sent-message").slideDown(),n.find("input:not(input[type=submit]), textarea").val("")):(n.find(".loading").slideUp(),n.find(".error-message").slideDown().html(e))}}),!1):(n.find(".loading").slideUp(),n.find(".error-message").slideDown().html("The form action property is not set!"),!1)}))}))
