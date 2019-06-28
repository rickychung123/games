!function(){"use strict";function t(e){var t=$("#navbar > ul");t.find("li").removeClass("active"),t.each(function(){$(this).find('a[data-nav-section="'+e+'"]').closest("li").addClass("active")})}function n(){$(".js-counter").countTo({formatter:function(e,t){return e.toFixed(t.decimals)}})}var e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}};$(function(){e.any()||$(window).stellar(),e.any()||($(".js-fullheight").css("height",$(window).height()),$(window).resize(function(){$(".js-fullheight").css("height",$(window).height())})),$('#navbar a:not([class="external"])').click(function(e){var t=$(this).data("nav-section"),n=$("#navbar");return $('[data-section="'+t+'"]').length&&$("html, body").animate({scrollTop:$('[data-section="'+t+'"]').offset().top-0},500),n.is(":visible")&&(n.removeClass("in"),n.attr("aria-expanded","false"),$(".js-fh5co-nav-toggle").removeClass("active")),e.preventDefault(),!1}),$(window).scroll(function(e){var t=$("#fh5co-header"),n=$(this).scrollTop();500<n&&n<=2e3?t.addClass("navbar-fixed-top fh5co-animated slideInDown"):n<=500&&t.hasClass("navbar-fixed-top")&&(t.addClass("navbar-fixed-top fh5co-animated slideOutUp"),setTimeout(function(){t.removeClass("navbar-fixed-top fh5co-animated slideInDown slideOutUp")},100))}),function(){var e=$("section[data-section]");e.waypoint(function(e){"down"===e&&t($(this.element).data("section"))},{offset:"150px"}),e.waypoint(function(e){"up"===e&&t($(this.element).data("section"))},{offset:function(){return 155-$(this.element).height()}})}(),0<$("#fh5co-home").length&&$("#fh5co-home").waypoint(function(e){"down"!==e||$(this.element).hasClass("animated")||(setTimeout(function(){$("#fh5co-home .to-animate").each(function(e){var t=$(this);setTimeout(function(){t.addClass("fadeInUp animated")},200*e,"easeInOutExpo")})},200),$(this.element).addClass("animated"))},{offset:"80%"}),function(){var t=$("#fh5co-explore");0<t.length&&t.waypoint(function(e){"down"!==e||$(this.element).hasClass("animated")||(setTimeout(function(){t.find(".to-animate").each(function(e){var t=$(this);setTimeout(function(){t.addClass("fadeInUp animated")},200*e,"easeInOutExpo")})},200),setTimeout(function(){t.find(".to-animate-2").each(function(e){var t=$(this);setTimeout(function(){t.addClass("bounceIn animated")},200*e,"easeInOutExpo")})},700),setTimeout(function(){t.find(".to-animate-3").each(function(e){var t=$(this);setTimeout(function(){t.addClass("fadeInRight animated")},200*e,"easeInOutExpo")})},1e3),$(this.element).addClass("animated"))},{offset:"80%"})}(),function(){var t=$(".getting-started-1");0<t.length&&t.waypoint(function(e){"down"!==e||$(this.element).hasClass("animated")||(setTimeout(function(){t.find(".to-animate").each(function(e){var t=$(this);setTimeout(function(){t.addClass("fadeInUp animated")},200*e,"easeInOutExpo")})},200),setTimeout(function(){t.find(".to-animate-2").each(function(e){var t=$(this);setTimeout(function(){t.addClass("fadeInRight animated")},200*e,"easeInOutExpo")})},200),$(this.element).addClass("animated"))},{offset:"80%"})}(),function(){var t=$("#fh5co-pricing");0<t.length&&t.waypoint(function(e){"down"!==e||$(this.element).hasClass("animated")||(setTimeout(function(){t.find(".to-animate").each(function(e){var t=$(this);setTimeout(function(){t.addClass("fadeIn animated")},200*e,"easeInOutExpo")})},200),setTimeout(function(){t.find(".to-animate-2").each(function(e){var t=$(this);setTimeout(function(){t.addClass("fadeInUp animated")},200*e,"easeInOutExpo")})},200),$(this.element).addClass("animated"))},{offset:"80%"})}(),function(){var n=$("#fh5co-services");0<n.length&&n.waypoint(function(e){if("down"===e&&!$(this.element).hasClass("animated")){var t=n.find(".to-animate").length;t=parseInt(200*t+400);setTimeout(function(){n.find(".to-animate").each(function(e){var t=$(this);setTimeout(function(){t.addClass("fadeInUp animated")},200*e,"easeInOutExpo")})},200),setTimeout(function(){n.find(".to-animate-2").each(function(e){var t=$(this);setTimeout(function(){t.addClass("bounceIn animated")},200*e,"easeInOutExpo")})},t),$(this.element).addClass("animated")}},{offset:"80%"})}(),function(){var n=$("#fh5co-team");0<n.length&&n.waypoint(function(e){if("down"===e&&!$(this.element).hasClass("animated")){var t=n.find(".to-animate").length;t=parseInt(200*t+400);setTimeout(function(){n.find(".to-animate").each(function(e){var t=$(this);setTimeout(function(){t.addClass("fadeIn animated")},200*e,"easeInOutExpo")})},200),setTimeout(function(){n.find(".to-animate-2").each(function(e){var t=$(this);setTimeout(function(){t.addClass("fadeInUp animated")},200*e,"easeInOutExpo")})},t),$(this.element).addClass("animated")}},{offset:"80%"})}(),function(){var t=$("#fh5co-footer");0<t.length&&t.waypoint(function(e){"down"!==e||$(this.element).hasClass("animated")||(setTimeout(function(){t.find(".to-animate").each(function(e){var t=$(this);setTimeout(function(){t.addClass("fadeIn animated")},200*e,"easeInOutExpo")})},200),$(this.element).addClass("animated"))},{offset:"80%"})}(),n(),0<$("#fh5co-counter-section").length&&$("#fh5co-counter-section").waypoint(function(e){"down"!==e||$(this.element).hasClass("animated")||(setTimeout(n,400),$(this.element).addClass("animated"))},{offset:"90%"})})}();var show=[],totalSec=0;function typeIn(){var e=document.getElementById("submitTxt").value;if(""==e){var t=localStorage.getItem("trial");switch(null==t?localStorage.setItem("trial",1):localStorage.setItem("trial",Number(t)+1),Number(t)){case 1:alert("Try to type something");break;case 3:alert("There is no relationship between the first puzzle and the PGP content below.");break;case 10:alert("You look so confused?");break;case 11:alert("I won't give you an answer.");break;case 15:alert("I m pretty sure that you can find the answer.");break;case 19:case 20:alert("..........");break;case 21:alert("Hey....that's enough.");break;case 22:alert("Fine........"),alert("Try out using different cases of letter and symbol.Read the message from right to left?");break;default:t<22?alert(""):alert("Try it with different cases of letter and symbol.Read the message from right to left?")}}else if("riGHT"==e){var n=document.getElementById("pgpPrivateKey"),a=document.getElementById("pgpEncryptedMess");n.innerHTML="lQOsBFzzilYBCACPJdqQGv35/JMB1h+723EsEMNJxhT1l5ads0xSyVCnpBMdKsD6<br>I6GkWutuMMkP/eMNGDxodiXocq/iLDm3kC5oU+s+/JgWXgrWoZS7nDZeI8HxUZ7A<br>QqwABYNWkIO430BZkrgpzfXUJZPAmubc+WQ2yanMZCQ/PsVVUjyiix5xqiMXjOEv<br>+pSdYoahz975PLtmwT1Ai6+L4I6uPWBBdNboXniUqvJ0oRUT1awcsd1lwVWhD3qU<br>LUKVXV4l9MS/YnYXim21VWeffAb4M1pq+XDblhwb+g5gVWrVnB9HY4WHQDOt+8sE<br>rLDJ3LVyXXfNIOVEDW3P1xpM1qPtLLTkrwezABEBAAH/AwMCkY0FKc52NBtgI9Uo<br>fbozqfTJpCZIXIrCtqfFV8MasHWYDVlcPXS8NveYyqhy/DQW067/X44T3am3NHRe<br>opnB46VqbBoeM2wvY5NPeCxuCvZ19XyuCYf60Tcee24AGDCnfRwzLBkGX6JiBnvx<br>PwstcUMVMpaacrMrwzWcWSM3N0LBZ3Rf1iyiHsCpOsnNaFfXzP+fGUY63b2O5twC<br>G0td9Mhnb36qbN++m+DsK875OfGL4+TYlMlwO81YFtAZT/ggCJNgkN9L7xDBbSZT<br>YUCUpdk/p68t9UYbBYhvndjIC1tqL2/N9wNu0S307gzvY/4ob4XbxNOJhzHnJWgM<br>LDwSWSVjSPRDH3k3YGHDTuucia95HzseLTE47PFHu+si7psb2JMS3Jo/akFIt3+z<br>iY6U5Pth1wEMufHRqaVY+kaK5LZGYpO4Gx4fhlYWLw5OcJI1o8lX8LwZLgAcJzaz<br>VXrAK2DNIJODo5GKl+nxhVeVgir6HL/KaAwH8IwzLLjj/fjvyMtw5PpiV61Gw4F0<br>0eVOJcODcjpWHj0TsbT9qbveNQ5+PgGpE53n2h3OIlyMyUofg3H3dNpN2A34TMSC<br>RsVRwOSL716fmCwKDfwTr9NK0yas/eFAvjFNvdW7m1URDzQsKcrXg1A6GuPk5bdC<br>SmsvbtMmVit11AlaWnfljf+jeE8ISpJ6lLcfR1oVLzJxLd7SOn3Tq2zDY427IZkD<br>1OkJaXfDMe0tsfymS4axnzgpnMoEK/7CMGqGQ8/gCRUKoXgRqNqk0D7rswiIII0F<br>tL7dcaZN9Xmx1n92sGt1DCTEvBpSB7d3S4Nmjsw17HDQuDjsjizOhsMir78iELWM<br>xqKHW+7MN66vT9Bp1lLce8OXsiO89cQmacwBdZ//obQAiQEcBBABAgAGBQJc84pW<br>AAoJEBxb8GAN/JiKak0H/1/RrlKsn57/G8kusTPXtnHANOo9v8Exza/zWlPc1jPu<br>fBl0U2V5pV5hj+KCYAhG9wJrNFfvvSKFjCwX8q4YNyVaB2Lecx2Ez5/2RVVxNPPa<br>eUPuh5BbWT0NsX2C1HhWcZTY65fhgXF8h9C2B16XPAnjemAhlwmxJdOZTzARXG38<br>HpAW6cQaXG1XEAJE+q8c3bnGlVNkzg1V/xiXLDBzvxrrI2K8HOFi0JZzi5b41vs7<br>7KAM44/Fx2adidWDD1IeDeqyCwgAlGEHg+F6y5KXpmzhknopcphq0YCwIJAJ/JPx<br>+fWzIIvZ9R5UNBX8MehUF4zvFssX3lgLjf9vQQs5VUc=<br>=SAv9",a.innerHTML="hQEMAxxb8GAN/JiKAQf/Sn7JKseMdMSOPrwatOQR2DmfSwutqbKAV2yXPi6jymZc<br>9QH644RtsYKZy2eeUX2zLNwBdQTh98j52ETwTOhQNM0RcDD5ciOc5K/syVSnmKeK<br>uC2hzpf+CpXbTNJkFENwnCBXZPZf9tRQsIqtzTg9jHjXQ1lUxrbDUumOY4ZeUdo6<br>jgJf3zLuO5cJv2TnmvEJAwrm2Ji35iPz6V6LwRUoKSJR5sZrQSbSg66Mmo7jSgl4<br>3edk/U47zHUgpsVfNXCKhnZI7fbCMBkDKqOoIfzFVkaB+GO0GVJ8WOotPn8ft3j/<br>iLPN1v9niFDfqyOFN0iaJhiH+obQUYZDrlX48J2B5MkhrR47zczvaJbyVbJA5FnP<br>GmNn7Zi1PT+lWRv5Qn6aR2Ho<br>=P58U",(l=document.getElementById("quest")).innerHTML="kUuxkt0bZP4=v?hctaw ?gnihtemos ees ot ekil uoy dluoW .trams os era uoY !spoO",document.getElementById("submitTxt").placeholder="Type [A][b][c]...ekil uoy revetahW",document.getElementById("submitTxt").value=""}else if("AES"==e){console.log("OMG Why are you here?=.="),console.log("Super Big Hint:"),console.log("%c ","padding:100px 200px;background:url('https://github.com/rickychung123/games/blob/master/images/hint.png?raw=true') no-repeat;");var o=document.getElementById("pgpImage"),s=document.getElementById("place"),i=document.createElement("a");i.href="https://raw.githubusercontent.com/rickychung123/games/master/images/startgame.jpg",i.target="_blank",s.insertBefore(i,s.childNodes[0]),i.appendChild(o),(l=document.getElementById("quest")).innerHTML=".ylluferac etisbew ni SGNIHT EHT LLA kcehC";var r=document.getElementById("aesEncryptedMess");n=document.getElementById("pgpPrivateKey"),a=document.getElementById("pgpEncryptedMess");n.innerHTML="lQOsBFzzilYBCAC<span style='color:GreenYellow'>P</span>JdqQGv35/JMB1h+723EsEMNJxhT1l5<span style='color:GreenYellow'>a</span>d<span style='color:GreenYellow'>s</span>0xSyVCnpBMdK<span style='color:GreenYellow'>s</span>D6<br>I6Gk<span style='color:Magenta'>Wut</span>uMMkP/eMNGDxodiXocq/iLDm3kC5oU+s+/JgWXgrWoZS7nDZeI8HxUZ7A<br>Qq<span style='color:GreenYellow'>w</span>AB<span style='color:Magenta'>YNW</span>kIO430BZkrgpzfXUJZPAmubc+WQ2yanMZCQ/PsVVUjyiix5xqiMXjOEv<br>+pSdY<span style='color:GreenYellow'>o</span><span style='color:Magenta'>ahz</span>975PLtmwT1Ai6+L4I6uPWBBdNboXniUqvJ0oRUT1awcsd1lwVWhD3qU<br>LUKVXV4<span style='color:Magenta'>l9M</span>S/YnYXim21VWeffAb4M1pq+XDblhwb+g5gVW<span style='color:GreenYellow'>r</span>VnB9HY4WHQDOt+8sE<br>rLDJ3LVy<span style='color:Magenta'>XXf</span>NIOVEDW3P1xpM1qPtLLTkrwezABEBAAH/AwMCkY0FKc52NBtgI9Uo<br>fbozqfTJpCZIXIrCtqfFV8MasHWYDVlcPXS8NveYyqhy/DQW<span style='color:cyan'>067</span>/X44T3am3NHRe<br>opnB46VqbBoeM2wvY5NPeCxuCvZ19XyuCYf60Tcee24<span style='color:cyan'>AGD</span>CnfRwzLBkGX6JiBnvx<br>PwstcUMVMpaacrMrwzWcWSM3N0LBZ3Rf1iyiHsCpOsnNaFfXzP+fG<span style='color:cyan'>UY6</span>3b2O5twC<br>G0t<span style='color:GreenYellow'>d</span>9Mhnb36qbN++m+DsK875OfGL4+TYlMlwO81YFtAZT/gg<span style='color:cyan'>CJN</span>gkN9L7xDBbSZT<br>YUCUpdk/p68t9UYbBYhvndjIC1tqL2/N9wNu0S307gzvY/4ob4XbxNOJhz<span style='color:cyan'>HnJ</span>WgM<br>LDwSWSVjSPRDH3k3YGHDTuucia95HzseLTE47PFHu+si7psb2JMS3Jo/akFIt3+z<br>iY6U5Pth1wEMufHRqaVY+kaK5LZGYpO4Gx4fhlYWLw5OcJI1o8lX8LwZLgAcJzaz<br>VXrAK2DNIJODo5GKl+nxhVeVgir6HL/KaAwH8IwzLLjj/fjvyMtw5PpiV61Gw4F0<br>0eVOJcODcjpWHj0TsbT9qbveNQ5+PgGpE53n2h3OIlyMyUofg3H3dNpN2A34TMSC<br>RsVRwOSL716fmCwKDfwTr9NK0yas/eFAvjFNvdW7m1URDzQsKcrXg1A6GuPk5bdC<br>SmsvbtMmVit11AlaWnfljf+jeE8ISpJ6lLcfR1oVLzJxLd7SOn3Tq2zDY427IZkD<br>1OkJaXfDMe0tsfymS4axnzgpnMoEK/7CMGqGQ8/gCRUKoXgRqNqk0D7rswiIII0F<br>tL7dcaZN9Xmx1n92sGt1DCTEvBpSB7d3S4Nmjsw17HDQuDjsjizOhsMir78iELWM<br>xqKHW+7MN66vT9Bp1lLce8OXsiO89cQmacwBdZ//obQAiQEcBBABAgAGBQJc84pW<br>AAoJEBxb8GAN/JiKak0H/1/RrlKsn57/G8kusTPXtnHANOo9v8Exza/zWlPc1jPu<br>fBl0U2V5pV5hj+KCYAhG9wJrNFfvvSKFjCwX8q4YNyVaB2Lecx2Ez5/2RVVxNPPa<br>eUPuh5BbWT0NsX2C1HhWcZTY65fhgXF8h9C2B16XPAnjemAhlwmxJdOZTzARXG38<br>HpAW6cQaXG1XEAJE+q8c3bnGlVNkzg1V/xiXLDBzvxrrI2K8HOFi0JZzi5b41vs7<br>7KAM44/Fx2adidWDD1IeDeqyCwgAlGEHg+F6y5KXpmzhknopcphq0YCwIJAJ/JPx<br>+fWzIIvZ9R5UNBX8MehUF4zvFssX3lgLjf9vQQs5VUc=<br><span style='color:GreenYellow'>=</span>SAv9",a.innerHTML="hQEMAxxb8GAN/JiKAQf/Sn7JKseMdMSOP<span style='color:GreenYellow'>r</span>watOQR2DmfSwutqbKAV2yXPi6jymZc<br>9QH644RtsYKZy2<span style='color:GreenYellow'>e</span>eUX2zLNwB<span style='color:GreenYellow'>d</span>QTh98j52ETwTOhQNM0RcDD5ciOc5K/syVSnmKeK<br>uC2hzpf<span style='color:GreenYellow'>+</span>CpX<span style='color:GreenYellow'>b</span>TNJkFENwnCBXZPZf9tRQsIqtzTg9jHjXQ1<span style='color:GreenYellow'>l</span>UxrbDU<span style='color:GreenYellow'>u</span>mOY4Z<span style='color:GreenYellow'>e</span>Udo6<br>jgJf<span style='color:GreenYellow'>3</span>zLuO5cJv2TnmvEJAwrm2Ji35iPz6V6LwRUoKSJR5sZrQSbSg66Mmo7jSgl4<br>3edk/U47zHUgpsVfNXCKhnZI7fbCMBkDKqOoIfzFVkaB<span style='color:GreenYellow'>+</span>GO0GVJ8WOotPn8ft<span style='color:GreenYellow'>3</span>j/<br>iLPN1v9niFDfqyOFN0iaJhiH+obQUYZDrlX48J2B5MkhrR47zczvaJbyVbJA5FnP<br>GmNn7Zi1PT+lWRv5Qn6aR2Ho<br>=P58U",r.innerHTML="U2FsdGVkX1+sVRabpF9QNqTmkw/daY9OoNk/Q7x2QjfTzg0cC6Un3VFzdJ+vnPhYXjIZNv6PRIjs/MZll8pd02DyZekBJodQ6hF1VbmKBvtaiAPwtsR+WheJrh34ryw+t40moqrWR2jzFk3vfXWpcCKNvehd950Co+Ogh7IOo3Xr+uN6lLsaBP/V2FocACQinRJyAqAVDBhTX3jA06CQTXTzmwCkIbS1PAVRUMBwgamOuNNi0B9rVgWMozupRIr7LqP7vzqICnlF3C1WANMzc5FcNhVWbyrvyic4YIzYiWLW6e91+yrOVGmotGhDa48h1eV4JIV9rI2aj0mLq6lZ+njGurhoosrC/LQ9Gvmt6/27buWr2C0GDnnrK7zI6vZ9Dm+l2M56eeSucqmFZhYMoL89PzUG5uzpjqvlOKHf+n9BO+h6iiNcPKeoeILpFwR8LLYKBEKcwCfMJrfv3649xjbhVTLH9w+ZKZ7LZDmAUqtL/8xLOJ0PP+8by8wqwWvMCOpvNl8lxhYirdByLWgpkDNHUT2DC1hN21vsgLyNUZL9XqprzWqQwkOo/Jx3BAp+sxiHShPSdNQ/i46qCzZpvx87fDCRQr5wMs7V+MJNZ9M=",document.getElementById("submitTxt").value="",document.getElementById("submitTxt").placeholder="ygbnju 8ujko9 hb__mj 5rfgy6"}else if("finish"==e){var l=document.getElementById("quest"),c=totalSec/60,d=totalSec%60;l.innerHTML="End game<br>"+Math.floor(c)+" minutes: "+d+" seconds"}else if("hint"==e)alert("Um...That is the hint about the AES puzzle...\n1. Download the picture...if you really dont know what secret is it. Change the file type .jpg->.rar or directly open with WinRAR, release it and see the readme.doc.\n2. Google translate and excel can help you to solve the readme.doc. Remarks: Find out the pattern of the letters.");else if("cheat"==e)alert("Type F12 and enter 'console' Tag");else{l=document.getElementById("quest");for(var u="have you t[r][i]ed out all the characters? IT'S STILL NOT ENOU[G][H] YE[T].",f=0;f<u.length;f++)e==u.charAt(f)&&(show[f]=u.charAt(f));if("watch?v=4PZb0tkxuUk"!=l.innerHTML){var h=show.join("");l.innerHTML=h}document.getElementById("submitTxt").value=""}}function setupStorage(){setInterval(setTime,1e3),localStorage.removeItem("trial"),alert("WARNING: You are about to enter a website that may contain some encrypted content. This page cannot be exited unless all the saving will be eliminated.")}functifon setTime(){++totalSec}
