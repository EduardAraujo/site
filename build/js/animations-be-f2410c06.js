function set_single_animation(e,t){if(!(t>images.length)){console.log("ANIMATING:",e);var i=e[0],l=e[1],a=e[2],n=e[3],r=new Image;r.onload=function(){var e=new Animator,i=document.getElementById(a);i&&i.getContext?e.animate(r,l,i):e.animate_fallback(r,l,document.getElementById(n)),$("#"+a).show().parent().next("img").hide(),set_single_animation(images[t],t+1)},r.src=i}}var delay_scale=.7,Animator=function(){var e=null,t=function(t,i,l){for(var a=0,n=0,r=0;r<i.length-1;++r)n+=i[r].delay;var o=function(){var n=a++%i.length,d=i[n].delay*delay_scale,s=i[n].blit,c=l.getContext("2d");for(r=0;r<s.length;++r){var y=s[r],b=y[0],u=y[1],f=y[2],p=y[3],h=y[4],g=y[5];c.drawImage(t,b,u,f,p,h,g,f,p)}e=window.setTimeout(o,d)};e&&window.clearTimeout(e),o()},i=function(t,i,l){for(var a=0,n=0,r=0;r<i.length-1;++r)n+=i[r].delay;var o=function(){if(0==a%i.length)for(;l.hasChildNodes();)l.removeChild(l.lastChild);var n=a++%i.length,d=i[n].delay*delay_scale,s=i[n].blit;for(r=0;r<s.length;++r){var c=s[r],y=c[0],b=c[1],u=c[2],f=c[3],p=c[4],h=c[5],g=document.createElement("div");g.style.position="absolute",g.style.left=p+"px",g.style.top=h+"px",g.style.width=u+"px",g.style.height=f+"px",g.style.backgroundImage="url('"+t.src+"')",g.style.backgroundPosition="-"+y+"px -"+b+"px",l.appendChild(g)}e=window.setTimeout(o,d)};e&&window.clearTimeout(e),o()};this.animate=t,this.animate_fallback=i},terminal_timeline=[{delay:250,blit:[[0,1440,856,480,0,0]]},{delay:250,blit:[[572,11,16,2,128,13],[718,4199,40,12,376,60],[784,3996,8,6,104,72],[836,3683,8,12,224,112],[724,2844,4,4,448,116],[776,3996,8,8,376,120],[828,3680,8,16,120,128],[830,2870,12,8,384,152],[766,3914,16,8,144,164],[767,4183,56,14,20,189]]},{delay:250,blit:[]},{delay:250,blit:[]},{delay:250,blit:[[800,3065,16,2,128,13],[680,3154,99,39,512,44],[376,1500,40,12,376,60],[104,1512,8,6,104,72],[224,1552,8,12,224,112],[448,1556,4,4,448,116],[376,1560,8,8,376,120],[120,1568,8,16,120,128],[384,1592,12,8,384,152],[144,1604,16,8,144,164],[20,1629,56,14,20,189]]},{delay:250,blit:[[572,11,16,2,128,13],[744,2936,99,39,512,44],[718,4199,40,12,376,60],[784,3996,8,6,104,72],[0,5529,640,48,184,96],[844,2664,4,67,156,105],[808,3672,28,24,100,120],[811,3154,12,12,80,144],[830,2870,12,8,384,152],[766,3914,4,4,144,164],[767,4183,56,14,20,189],[288,5735,288,16,0,464]]},{delay:250,blit:[[680,4084,80,16,520,56],[736,3850,16,8,208,64],[0,5623,288,44,152,98],[680,3850,56,12,524,112],[850,2879,5,8,792,112],[0,5735,288,16,0,464]]},{delay:250,blit:[[768,3257,24,8,528,56],[761,4072,80,16,32,464],[844,2739,4,1,0,467],[792,3216,64,8,160,472]]},{delay:250,blit:[[779,3154,32,24,0,0],[784,3974,8,8,264,0],[800,2813,16,2,128,14],[768,4213,46,16,752,16],[0,5767,624,4,128,26],[680,4068,81,16,520,56],[376,1500,40,12,376,60],[208,1504,16,8,208,64],[728,2372,96,128,32,72],[0,5279,680,76,144,96],[840,3663,7,20,156,172],[20,1639,8,4,20,199],[288,5719,288,16,0,464]]},{delay:250,blit:[[0,960,856,480,0,0]]},{delay:250,blit:[[830,3946,26,38,342,240],[680,4012,86,16,392,256],[718,4228,44,16,532,256],[0,5719,288,16,0,464]]},{delay:250,blit:[[780,4135,32,32,336,240],[852,2840,4,4,440,268]]},{delay:250,blit:[[0,480,856,480,0,0]]},{delay:250,blit:[[838,3800,16,8,336,16],[184,28,8,4,184,28],[304,528,16,8,288,48],[24,224,4,4,24,224],[140,302,4,2,140,302],[852,2816,2,8,48,464]]},{delay:250,blit:[[820,3648,16,4,144,10],[0,3768,680,416,176,48],[810,3856,8,6,104,202],[830,2854,10,16,130,304]]},{delay:250,blit:[[482,5044,296,64,216,48],[672,3712,175,16,544,56],[852,2764,3,8,556,72],[598,5226,201,24,264,112],[800,2975,40,64,216,144],[842,2494,6,4,832,154],[672,3652,168,20,248,208],[598,5250,240,16,512,208],[724,2840,4,4,460,216],[680,2880,64,100,240,228],[839,4172,16,32,208,240],[766,3293,16,10,312,302],[804,3257,48,44,176,304],[728,2700,72,116,240,336],[824,2372,16,98,208,362],[814,4214,32,16,352,432]]},{delay:250,blit:[[0,0,32,32,0,0],[680,3898,86,24,152,8],[176,2832,224,8,352,8],[0,4784,656,132,184,16],[728,2580,72,120,0,48],[798,3966,32,44,64,48],[736,3858,8,4,848,52],[848,2372,8,368,176,96],[80,144,16,8,80,144],[102,4336,600,24,240,152],[672,3304,184,304,208,176],[48,2084,30,16,48,192],[96,2084,32,16,96,192],[829,2580,1,208,187,192],[0,5687,384,16,392,208],[48,216,48,96,48,216],[852,2836,4,4,24,224],[0,2646,32,26,128,302],[841,4120,14,52,96,416],[48,944,2,8,48,464],[830,3984,24,16,184,464],[680,3293,86,10,770,468],[830,3632,8,8,112,472]]},{delay:250,blit:[[792,3878,64,26,304,2],[840,2372,8,8,424,8],[184,28,8,4,184,28],[749,3816,8,8,616,64],[72,1972,8,8,72,80],[844,2731,4,8,464,120],[840,3608,8,55,216,144],[846,4204,8,50,256,194],[24,224,4,4,24,224],[40,2188,8,4,40,296],[140,302,4,2,140,302],[808,3946,8,8,248,360],[40,2188,8,4,40,376],[855,2848,1,2,272,408],[800,3946,8,8,240,424],[40,2188,8,4,40,456],[288,5703,288,16,0,464]]},{delay:250,blit:[[792,3184,64,32,304,0],[852,2740,3,16,241,56],[800,2580,2,1,464,127],[0,5703,288,16,0,464]]},{delay:250,blit:[[266,4916,216,251,296,8],[838,4042,16,16,240,56],[767,4197,48,16,56,464],[784,3966,8,8,280,464]]},{delay:250,blit:[[0,4916,266,259,286,0],[184,508,8,4,184,28],[680,2824,44,56,240,56],[844,2740,8,135,216,64],[503,5577,278,46,554,64],[680,4100,48,24,72,72],[64,144,16,8,64,144],[720,3322,8,50,256,194],[724,2836,4,4,24,224],[32,292,16,12,32,292],[824,3094,28,90,128,302],[712,3488,8,8,248,360],[32,368,48,16,32,368],[727,2848,1,2,272,408],[704,3552,8,8,240,424],[680,3193,112,32,0,448],[680,3966,104,16,184,464]]},{delay:250,blit:[[424,8,8,8,424,8],[184,28,8,4,184,28],[598,5200,208,26,304,32],[846,3808,8,6,504,58],[787,3178,23,4,337,60],[749,3816,8,8,616,64],[819,4230,8,48,303,72],[72,1972,8,8,72,80],[840,2431,8,55,216,144],[816,3946,8,8,384,152],[846,4204,8,50,256,194],[24,224,4,4,24,224],[140,302,4,2,140,302],[808,3946,8,8,248,360],[855,2846,1,2,272,408],[800,3946,8,8,240,424],[718,4213,50,15,0,464]]},{delay:250,blit:[[680,4135,68,16,312,32],[736,4044,56,24,448,32],[855,2755,1,1,356,63]]},{delay:250,blit:[[838,3784,16,16,336,32]]},{delay:250,blit:[[138,4924,8,8,424,8],[184,508,8,4,184,28],[680,3068,158,26,304,32],[672,3608,78,44,462,32],[51,4976,23,4,337,60],[478,4248,8,8,616,64],[17,4988,8,48,303,72],[806,3998,8,8,72,80],[844,2820,8,55,216,144],[98,5068,8,8,384,152],[720,3322,8,50,256,194],[852,2832,4,4,24,224],[140,782,4,2,140,302],[712,3488,8,8,248,360],[855,2844,1,2,272,408],[704,3552,8,8,240,424],[680,3209,50,15,0,464]]},{delay:250,blit:[[0,0,856,480,0,0]]},{delay:250,blit:[[752,4167,60,16,324,8],[792,3946,8,8,444,16],[672,3728,108,24,272,28],[842,2875,14,4,402,40],[718,4258,40,7,184,49],[840,2975,16,64,176,288],[384,5687,288,16,0,464]]},{delay:250,blit:[[704,3748,16,4,288,48],[0,5667,288,16,0,464]]},{delay:250,blit:[[0,2824,680,480,176,0],[144,488,32,16,144,8],[758,3814,52,48,68,48],[0,600,8,8,0,120],[48,624,48,8,48,144],[48,672,30,16,48,192],[724,2832,4,4,24,224],[32,772,64,20,32,292],[128,782,32,26,128,302],[32,848,48,16,32,368],[128,864,28,8,128,384],[750,3608,88,32,32,448]]},{delay:250,blit:[[840,2372,8,59,424,8],[820,3648,16,4,144,10],[184,28,8,4,184,28],[368,3352,1,4,552,64],[72,1972,8,8,72,80],[482,5108,273,52,180,84],[440,3376,8,8,624,88],[24,224,4,4,24,224],[140,302,4,2,140,302],[852,2816,2,8,48,464]]},{delay:250,blit:[[672,3672,136,24,184,112],[680,3982,118,14,328,118]]},{delay:250,blit:[[680,3265,124,28,336,48],[680,3938,112,16,340,80],[680,4124,46,8,288,120],[824,2486,18,12,430,124],[830,2854,10,16,130,304]]},{delay:250,blit:[[80,5355,40,24,152,8],[192,5175,8,8,424,8],[392,5355,392,120,72,16],[112,2408,16,8,240,64],[424,2408,1,4,552,64],[560,2408,8,8,688,64],[496,2432,8,8,624,88],[0,120,8,8,0,120],[48,2036,48,8,48,144],[852,2828,4,4,24,224],[48,2188,48,16,48,296],[0,2646,32,26,128,302],[841,4160,8,12,96,456],[48,944,2,8,48,464]]},{delay:250,blit:[[840,2372,8,8,424,8],[728,2500,120,80,336,16],[184,28,8,4,184,28],[368,3352,1,4,552,64],[72,1972,8,8,72,80],[96,3372,24,36,280,84],[440,3376,8,8,624,88],[248,3407,8,7,432,119],[136,3416,8,3,320,128],[24,224,4,4,24,224],[140,302,4,2,140,302],[852,2816,2,8,48,464]]},{delay:250,blit:[[680,2980,120,48,336,48],[252,3396,13,16,440,114]]},{delay:250,blit:[[680,3996,96,16,352,56],[724,2848,3,4,409,88]]},{delay:250,blit:[[0,5355,392,128,72,8],[256,5363,66,80,328,16],[184,508,8,4,184,28],[424,2408,1,4,552,64],[496,2432,8,8,624,88],[0,600,8,8,0,120],[724,2828,4,4,24,224],[128,782,32,26,128,302],[48,944,2,8,48,464]]},{delay:250,blit:[[840,2372,8,59,424,8],[728,2500,16,8,336,16],[184,28,8,4,184,28],[368,3352,1,4,552,64],[72,1972,8,8,72,80],[96,3372,24,36,280,84],[440,3376,8,8,624,88],[248,3407,8,7,432,119],[136,3416,8,3,320,128],[24,224,4,4,24,224],[140,302,4,2,140,302],[852,2816,2,8,48,464]]},{delay:250,blit:[]},{delay:250,blit:[]},{delay:250,blit:[[352,5355,8,59,424,8],[656,5355,16,8,336,16],[184,508,8,4,184,28],[424,2408,1,4,552,64],[806,3998,8,8,72,80],[152,2428,24,36,280,84],[496,2432,8,8,624,88],[304,2463,8,7,432,119],[248,5475,8,3,320,128],[852,2824,4,4,24,224],[140,782,4,2,140,302],[48,944,2,8,48,464]]},{delay:250,blit:[[766,3898,24,16,408,8],[48,3304,120,8,232,16],[0,3304,672,464,184,16],[644,3304,4,4,828,16],[72,1972,8,8,72,80],[24,224,4,4,24,224],[830,2852,14,18,130,302],[852,2816,2,8,48,464]]},{delay:250,blit:[[824,2813,4,2,188,128],[848,3608,8,176,184,304]]},{delay:250,blit:[]},{delay:250,blit:[[288,5663,376,24,184,8],[598,5266,220,10,152,16],[406,4200,22,8,544,16],[791,4230,28,16,828,16],[0,2372,728,452,128,28],[70,28,64,2,752,28],[802,3966,12,40,68,48],[192,2408,108,8,320,64],[424,2408,1,4,552,64],[152,2428,24,36,280,84],[496,2432,48,8,624,88],[304,2463,8,7,432,119],[0,120,8,8,0,120],[248,5475,8,3,320,128],[48,2084,30,16,48,192],[724,2824,4,4,24,224],[720,2594,8,36,848,250],[48,944,2,8,48,464]]},{delay:250,blit:[[840,2372,8,8,424,8],[820,3640,16,8,336,16],[368,3352,1,4,552,64],[72,1972,8,8,72,80],[96,3372,24,36,280,84],[440,3376,8,8,624,88],[248,3407,8,7,432,119],[136,3416,8,3,320,128],[24,224,4,4,24,224],[140,302,4,2,140,302],[852,2816,2,8,48,464]]},{delay:250,blit:[[565,5639,288,16,0,464]]},{delay:250,blit:[[565,5623,288,16,0,464]]},{delay:250,blit:[[192,5175,8,8,424,8],[656,5355,16,8,336,16],[424,2408,1,4,552,64],[806,3998,8,8,72,80],[152,2428,24,36,280,84],[496,2432,8,8,624,88],[680,3225,88,40,352,96],[248,5475,8,3,320,128],[852,2812,4,4,24,224],[140,782,4,2,140,302],[680,3922,112,16,0,464],[672,3696,176,16,112,464]]},{delay:250,blit:[[840,2372,8,8,424,8],[820,3640,16,8,336,16],[368,3352,1,4,552,64],[72,1972,8,8,72,80],[96,3372,24,36,280,84],[440,3376,8,8,624,88],[768,3225,88,32,352,96],[136,3416,8,3,320,128],[680,3784,78,32,330,184],[24,224,4,4,24,224],[40,2188,8,4,40,296],[140,302,4,2,140,302],[40,2188,8,4,40,376],[778,4112,50,23,0,456]]},{delay:250,blit:[[680,3752,80,32,352,96],[760,3782,78,32,330,184],[760,3752,84,30,316,234]]},{delay:250,blit:[[816,2813,8,2,384,234],[0,5483,672,46,184,238],[840,2498,8,2,848,284]]},{delay:250,blit:[[192,5175,8,8,424,8],[656,5355,16,8,336,16],[424,2408,1,4,552,64],[806,3998,8,8,72,80],[152,2428,24,36,280,84],[496,2432,8,8,624,88],[224,2440,88,40,352,96],[248,5475,8,3,320,128],[852,2808,4,4,24,224],[598,5160,216,40,184,248],[843,2952,8,20,848,262],[40,336,8,4,40,296],[140,782,4,2,140,302],[40,336,8,4,40,376],[728,4112,50,23,0,456]]},{delay:250,blit:[[840,2372,8,8,424,8],[820,3640,16,8,336,16],[368,3352,1,4,552,64],[72,1972,8,8,72,80],[96,3372,24,36,280,84],[440,3376,8,8,624,88],[248,3407,8,7,432,119],[136,3416,8,3,320,128],[24,224,4,4,24,224],[606,5160,88,28,312,248],[140,302,4,2,140,302],[778,4120,50,15,0,464]]},{delay:250,blit:[[782,3914,8,8,80,8],[456,41,16,12,304,16],[728,4100,32,12,408,16],[824,2498,16,2,352,26],[0,1920,856,452,0,28]]},{delay:250,blit:[[680,3878,112,20,272,32],[0,5577,503,46,216,54],[656,4780,193,24,272,112],[0,4544,544,240,176,120],[830,2580,14,272,182,128],[842,2494,6,4,832,154],[482,4916,248,128,504,208],[272,4634,16,6,448,210],[838,3065,16,16,752,240],[0,5751,286,16,0,464]]},{delay:250,blit:[[680,3126,144,28,32,0],[0,4184,718,360,138,0],[680,3028,120,40,8,72],[680,3094,128,32,0,120],[680,4167,72,14,64,194],[792,4044,46,28,24,216],[838,3081,16,12,24,256],[744,2880,106,56,32,292],[544,4544,286,120,0,360],[854,2776,2,8,338,360]]},{delay:250,blit:[[840,2372,8,8,424,8],[782,3293,16,8,336,16],[749,3816,8,8,616,64],[743,4245,40,8,72,80],[852,2756,4,8,26,96],[844,2731,4,8,464,120],[852,2788,4,4,384,128],[840,2431,8,55,216,144],[846,4204,8,6,256,194],[838,3808,8,6,72,202],[24,224,4,4,24,224],[616,4664,2,4,248,268],[552,4676,8,8,184,280],[792,3257,8,8,664,288],[744,2975,56,5,88,302],[266,5167,238,2,304,320],[854,2816,2,4,678,324],[834,3904,8,10,464,326],[812,4135,8,8,536,326],[664,4724,88,8,296,328],[855,2822,1,2,224,356],[852,2784,4,4,56,388],[852,2776,2,8,48,464]]},{delay:250,blit:[[800,2580,2,1,464,127],[852,2844,1,13,477,359]]},{delay:250,blit:[]},{delay:250,blit:[[192,5175,8,8,424,8],[198,4200,16,8,336,16],[478,4248,8,8,616,64],[744,3036,40,8,72,80],[728,2816,4,8,26,96],[824,3954,4,8,464,120],[744,3962,4,4,384,128],[844,2820,8,55,216,144],[720,3322,8,6,256,194],[688,4175,8,6,72,202],[852,2804,4,4,24,224],[110,4452,2,4,248,268],[46,4464,8,8,184,280],[736,4028,8,8,664,288],[743,4253,56,5,88,302],[166,4504,238,2,304,320],[540,4508,2,4,678,324],[808,4010,8,10,464,326],[720,3816,8,8,536,326],[158,4512,88,8,296,328],[854,2822,1,2,224,356],[854,2844,1,12,477,360],[848,3814,4,4,56,388],[592,4648,2,8,48,464]]},{delay:250,blit:[[840,2372,8,8,424,8],[782,3293,16,8,336,16],[749,3816,8,8,616,64],[743,4245,40,8,72,80],[852,2756,4,8,26,96],[844,2731,4,8,464,120],[852,2788,4,4,384,128],[840,2431,8,55,216,144],[846,4204,8,6,256,194],[838,3808,8,6,72,202],[24,224,4,4,24,224],[616,4664,2,4,248,268],[552,4676,8,8,184,280],[792,3257,8,8,664,288],[744,2975,56,5,88,302],[266,5167,238,2,304,320],[854,2816,2,4,678,324],[834,3904,8,10,464,326],[812,4135,8,8,536,326],[664,4724,88,8,296,328],[855,2820,1,2,224,356],[829,2801,1,13,477,359],[852,2784,4,4,56,388],[852,2776,2,8,48,464]]},{delay:250,blit:[[800,2580,2,1,464,127]]},{delay:250,blit:[[829,2788,1,13,477,359]]},{delay:250,blit:[[192,5175,8,8,424,8],[198,4200,16,8,336,16],[478,4248,8,8,616,64],[744,3036,40,8,72,80],[728,2816,4,8,26,96],[824,3954,4,8,464,120],[744,3962,4,4,384,128],[844,2820,8,55,216,144],[720,3322,8,6,256,194],[688,4175,8,6,72,202],[852,2800,4,4,24,224],[110,4452,2,4,248,268],[46,4464,8,8,184,280],[736,4028,8,8,664,288],[743,4253,56,5,88,302],[166,4504,238,2,304,320],[540,4508,2,4,678,324],[776,4010,40,34,432,326],[720,3816,8,8,536,326],[158,4512,88,8,296,328],[854,2820,1,2,224,356],[853,2844,1,12,477,360],[848,3814,4,4,56,388],[592,4648,2,8,48,464]]},{delay:250,blit:[[840,2372,8,8,424,8],[782,3293,16,8,336,16],[749,3816,8,8,616,64],[743,4245,40,8,72,80],[852,2756,4,8,26,96],[844,2731,4,8,464,120],[852,2788,4,4,384,128],[840,2431,8,55,216,144],[846,4204,8,6,256,194],[838,3808,8,6,72,202],[24,224,4,4,24,224],[616,4664,2,4,248,268],[552,4676,8,8,184,280],[792,3257,8,8,664,288],[744,2975,56,5,88,302],[266,5167,238,2,304,320],[854,2816,2,4,678,324],[826,3904,29,42,456,326],[812,4135,8,8,536,326],[664,4724,88,8,296,328],[855,2770,1,2,224,356],[852,2784,4,4,56,388],[852,2776,2,8,48,464]]},{delay:250,blit:[[800,2580,29,233,464,127],[810,3848,8,8,168,368]]},{delay:250,blit:[[842,2486,6,8,474,344],[749,3840,8,8,168,368]]},{delay:250,blit:[[184,5175,16,16,416,8],[198,4200,16,8,336,16],[264,5183,48,8,496,16],[779,3178,8,12,56,36],[478,4248,8,8,616,64],[744,3036,40,8,72,80],[728,2816,4,8,26,96],[824,3954,4,8,464,120],[744,3962,4,4,384,128],[844,2820,8,55,216,144],[720,3322,8,6,256,194],[688,4175,8,6,72,202],[843,2936,12,16,392,208],[823,4169,16,45,768,209],[852,2796,4,4,24,224],[110,4452,2,4,248,268],[46,4464,8,8,184,280],[736,4028,32,16,664,288],[750,3640,70,12,88,296],[166,4504,238,2,304,320],[540,4508,2,4,678,324],[792,3904,34,42,448,326],[720,3816,8,8,536,326],[158,4512,88,8,296,328],[688,4740,24,14,320,344],[718,4244,25,14,484,346],[855,2768,1,2,224,356],[680,4028,56,24,56,368],[824,2470,16,16,160,368],[592,4648,2,8,48,464]]},{delay:250,blit:[[840,2372,8,8,424,8],[782,3293,16,8,336,16],[749,3816,8,8,616,64],[743,4245,40,8,72,80],[852,2756,4,8,26,96],[844,2731,4,8,464,120],[852,2788,4,4,384,128],[840,2431,8,55,216,144],[846,4204,8,6,256,194],[838,3808,8,6,72,202],[24,224,4,4,24,224],[616,4664,2,4,248,268],[552,4676,8,8,184,280],[792,3257,8,8,664,288],[744,2978,4,2,88,305],[266,5167,238,2,304,320],[854,2816,2,4,678,324],[834,3904,8,10,464,326],[812,4135,8,8,536,326],[664,4724,88,8,296,328],[762,4229,29,16,496,344],[855,2766,1,2,224,356],[852,2784,4,4,56,388],[852,2776,2,8,48,464]]},{delay:250,blit:[[828,2814,2,1,464,127],[718,4183,49,16,500,344]]},{delay:250,blit:[[760,4088,53,24,512,336]]},{delay:250,blit:[[192,5175,8,8,424,8],[198,4200,16,8,336,16],[478,4248,8,8,616,64],[744,3036,40,8,72,80],[728,2816,4,8,26,96],[824,3954,4,8,464,120],[744,3962,4,4,384,128],[844,2820,8,55,216,144],[720,3322,8,6,256,194],[688,4175,8,6,72,202],[852,2792,4,4,24,224],[110,4452,2,4,248,268],[46,4464,8,8,184,280],[736,4028,8,8,664,288],[750,3649,4,2,88,305],[166,4504,238,2,304,320],[540,4508,2,4,678,324],[808,4010,8,10,464,326],[680,3816,69,34,496,326],[158,4512,88,8,296,328],[855,2764,1,2,224,356],[848,3814,4,4,56,388],[592,4648,2,8,48,464]]},{delay:250,blit:[[840,2372,8,8,424,8],[749,3832,8,8,824,8],[782,3293,16,8,336,16],[749,3824,8,8,256,64],[749,3816,8,8,616,64],[743,4245,40,8,72,80],[852,2756,4,8,26,96],[844,2731,4,8,464,120],[852,2788,4,4,384,128],[840,2431,8,55,216,144],[846,4204,8,6,256,194],[838,3808,8,6,72,202],[24,224,4,4,24,224],[672,3752,8,16,48,256],[544,4664,277,116,176,268],[552,4676,8,8,184,280],[792,3257,8,8,664,288],[744,2978,4,2,88,305],[266,5167,238,2,304,320],[854,2816,2,4,678,324],[834,3904,8,10,464,326],[812,4135,29,34,536,326],[664,4724,88,8,296,328],[844,2580,4,84,40,344],[855,2740,1,15,477,357],[852,2784,4,4,56,388],[852,2776,2,8,48,464]]},{delay:250,blit:[[800,2580,2,1,464,127],[724,2852,3,2,556,357],[780,3728,64,24,192,360],[680,3862,144,16,288,368]]},{delay:250,blit:[[811,3166,8,16,184,356],[852,2772,4,4,380,378]]},{delay:4e3,blit:[[0,5175,598,104,232,8],[192,5175,8,8,424,8],[680,4151,62,16,786,8],[48,5183,72,15,280,16],[536,5183,18,8,768,16],[744,3036,40,8,72,80],[728,2816,102,64,26,96],[680,3954,148,12,320,120],[816,4010,40,32,216,144],[680,3320,48,8,216,192],[800,3039,56,26,24,202],[680,4052,56,16,320,208],[808,3094,16,32,48,256],[110,4452,2,4,248,268],[46,4464,8,8,184,280],[736,4028,8,8,664,288],[800,2893,4,2,88,305],[166,4504,238,2,304,320],[540,4508,2,4,678,324],[810,3814,14,34,464,326],[828,4088,23,32,536,326],[158,4512,88,8,296,328],[748,4135,32,32,32,336],[288,5623,277,40,176,344],[824,3814,32,60,32,388],[592,4648,2,8,48,464]]}],termrun_timeline=[{delay:250,blit:[[0,0,856,480,0,0]]},{delay:250,blit:[[809,972,1,4,241,36],[814,1627,8,8,184,48],[788,1627,8,8,328,64],[744,1225,8,8,64,72],[680,1585,112,6,664,74],[728,1625,8,8,568,88],[680,1411,80,16,416,96],[848,913,8,14,696,98],[760,1421,8,6,288,112],[803,972,6,4,58,140],[704,1567,46,14,296,170],[844,965,8,7,208,185],[680,1439,142,8,560,210],[846,1606,8,8,400,216],[680,974,6,2,570,222],[680,1501,118,8,216,240],[536,2738,201,1,447,244],[653,2736,203,1,444,247],[780,1375,4,4,648,252],[848,660,8,52,168,280],[804,1577,48,12,368,284],[728,1669,68,4,604,284],[812,1604,8,8,424,304],[823,1659,16,16,624,304],[744,1673,16,14,720,402],[852,1437,4,8,56,440],[776,1375,4,4,316,440]]},{delay:250,blit:[[844,929,12,28,228,52]]},{delay:250,blit:[]},{delay:250,blit:[[228,36,14,44,228,36],[184,48,8,8,184,48],[328,64,8,8,328,64],[64,72,8,8,64,72],[664,74,112,6,664,74],[568,88,8,8,568,88],[416,96,80,16,416,96],[696,98,8,14,696,98],[288,112,8,6,288,112],[58,140,6,4,58,140],[296,170,46,14,296,170],[208,185,8,7,208,185],[560,210,142,8,560,210],[400,216,8,8,400,216],[570,222,6,2,570,222],[680,1641,116,4,216,240],[712,1651,16,23,320,244],[447,244,201,1,447,244],[444,247,203,1,444,247],[648,252,4,4,648,252],[168,280,8,52,168,280],[368,284,48,12,368,284],[604,284,68,4,604,284],[424,304,8,8,424,304],[624,304,16,16,624,304],[720,402,16,14,720,402],[56,440,4,8,56,440],[316,440,4,4,316,440]]},{delay:250,blit:[[809,972,1,4,241,36],[814,1627,8,8,184,48],[788,1627,8,8,328,64],[744,1225,8,8,64,72],[680,1585,112,6,664,74],[728,1625,8,8,568,88],[680,1411,80,16,416,96],[848,913,8,14,696,98],[760,1421,8,6,288,112],[803,972,6,4,58,140],[704,1567,46,14,296,170],[844,965,8,7,208,185],[680,1439,142,8,560,210],[846,1606,8,8,400,216],[838,929,6,2,570,222],[680,1651,16,24,96,232],[680,1501,2,4,216,240],[536,2738,201,1,447,244],[536,2736,320,2,327,247],[846,1589,10,17,326,250],[780,1375,4,4,648,252],[848,660,8,52,168,280],[804,1577,48,12,368,284],[728,1669,68,4,604,284],[812,1604,8,8,424,304],[823,1659,16,16,624,304],[744,1673,16,14,720,402],[852,1437,4,8,56,440],[776,1375,4,4,316,440]]},{delay:250,blit:[[844,929,12,28,228,52],[792,1275,56,32,56,232]]},{delay:250,blit:[[818,1381,30,24,50,240]]},{delay:250,blit:[[228,36,14,44,228,36],[184,48,8,8,184,48],[328,64,8,8,328,64],[64,72,8,8,64,72],[664,74,112,6,664,74],[568,88,8,8,568,88],[416,96,80,16,416,96],[696,98,8,14,696,98],[288,112,8,6,288,112],[58,140,6,4,58,140],[296,170,46,14,296,170],[208,185,8,7,208,185],[560,210,142,8,560,210],[400,216,8,8,400,216],[570,222,6,2,570,222],[680,1137,54,48,50,240],[216,240,118,8,216,240],[447,244,201,1,447,244],[444,247,203,1,444,247],[648,252,4,4,648,252],[168,280,8,52,168,280],[368,284,48,12,368,284],[604,284,68,4,604,284],[424,304,8,8,424,304],[624,304,16,16,624,304],[720,402,16,14,720,402],[56,440,4,8,56,440],[316,440,4,4,316,440]]},{delay:250,blit:[[809,972,1,4,241,36],[814,1627,8,8,184,48],[788,1627,8,8,328,64],[744,1225,8,8,64,72],[680,1585,112,6,664,74],[728,1625,8,8,568,88],[680,1411,80,16,416,96],[848,913,8,14,696,98],[760,1421,8,6,288,112],[803,972,6,4,58,140],[704,1567,46,14,296,170],[844,965,8,7,208,185],[680,1439,142,8,560,210],[846,1606,8,8,400,216],[832,929,6,2,570,222],[824,1589,22,26,80,240],[680,1501,118,8,216,240],[536,2738,201,1,447,244],[653,2736,203,1,444,247],[780,1375,4,4,648,252],[848,660,8,52,168,280],[804,1577,48,12,368,284],[728,1669,68,4,604,284],[812,1604,8,8,424,304],[823,1659,16,16,624,304],[744,1673,16,14,720,402],[852,1437,4,8,56,440],[776,1375,4,4,316,440]]},{delay:250,blit:[[844,929,12,28,228,52],[772,1375,4,4,84,240]]},{delay:250,blit:[[0,1912,672,232,184,24],[786,1315,4,16,176,32],[680,1469,64,16,32,232],[0,2144,656,208,200,256],[760,1405,80,16,32,432],[756,1609,32,16,752,464]]},{delay:250,blit:[[0,2352,728,180,128,0],[588,960,44,26,764,0],[217,2356,231,24,345,4],[680,1068,154,25,0,6],[688,712,128,132,0,36],[688,480,160,232,24,176],[854,1129,2,218,238,182],[680,960,6,14,314,386],[848,927,6,2,232,396],[776,1012,80,56,32,416],[680,1339,104,16,752,464],[0,3408,496,2,256,466]]},{delay:250,blit:[[176,36,4,4,176,32],[790,1275,2,16,848,32],[784,1509,12,24,228,56],[776,1673,16,10,112,80],[760,1375,4,4,32,92],[842,1008,6,4,304,116],[788,1577,8,8,368,136],[848,660,8,8,168,280]]},{delay:250,blit:[[804,1541,16,32,232,48],[776,1645,16,24,188,212],[752,1556,24,24,80,240]]},{delay:250,blit:[[48,1944,8,24,232,56],[839,1659,12,20,268,160],[760,1645,16,24,188,212],[776,1556,12,24,84,240]]},{delay:250,blit:[[144,512,4,4,176,32],[758,1169,2,16,848,32],[100,2400,20,32,228,48],[800,756,16,10,112,80],[720,768,4,4,32,92],[816,1307,32,38,304,114],[760,956,8,8,368,136],[140,2512,12,20,268,160],[740,1609,16,32,80,240],[168,280,8,8,168,280]]},{delay:250,blit:[[176,36,4,4,176,32],[758,1153,2,16,848,32],[784,1509,12,24,228,56],[776,1673,16,10,112,80],[760,1375,4,4,32,92],[810,972,32,40,304,104],[788,1577,8,8,368,136],[848,660,8,8,168,280]]},{delay:250,blit:[[804,1541,16,32,232,48],[728,1535,24,32,304,104]]},{delay:250,blit:[[744,1645,16,24,232,56],[0,3274,632,32,224,96],[830,1635,16,24,232,160],[680,1485,62,16,192,464]]},{delay:250,blit:[[144,512,4,4,176,32],[848,480,8,96,848,32],[822,1505,26,32,228,48],[800,756,16,10,112,80],[720,768,4,4,32,92],[536,2654,296,50,272,96],[807,1659,16,16,224,112],[680,1591,132,5,320,147],[814,1635,16,24,232,160],[168,280,8,8,168,280],[0,3382,568,16,192,464]]},{delay:250,blit:[[176,36,4,4,176,32],[758,1137,2,16,848,32],[776,1673,16,10,112,80],[760,1375,4,4,32,92],[816,881,40,32,336,96],[808,976,2,4,448,108],[848,660,8,8,168,280],[728,1651,16,16,240,464]]},{delay:250,blit:[[800,1235,48,32,336,96],[712,1625,16,16,240,464]]},{delay:250,blit:[[788,1541,16,44,368,100]]},{delay:250,blit:[[144,512,4,4,176,32],[848,32,8,16,848,32],[728,1519,48,16,416,72],[680,1604,28,20,8,76],[800,756,16,10,112,80],[828,1615,24,20,208,96],[656,2240,186,56,336,96],[168,280,8,8,168,280],[708,1609,32,16,240,464]]},{delay:250,blit:[[176,36,4,4,176,32],[776,1673,16,10,112,80],[760,1375,4,4,32,92],[680,976,130,36,320,108],[848,660,8,8,168,280],[696,1233,16,2,256,477]]},{delay:250,blit:[[822,1437,24,40,312,112],[840,1567,8,8,368,136]]},{delay:250,blit:[[810,1477,31,28,296,128]]},{delay:250,blit:[[144,512,4,4,176,32],[800,756,16,10,112,80],[720,768,4,4,32,92],[712,2666,2,4,448,108],[688,932,108,44,296,112],[168,280,8,8,168,280],[680,1233,16,2,256,477]]},{delay:250,blit:[[176,36,4,4,176,32],[776,1673,16,10,112,80],[760,1375,4,4,32,92],[808,976,2,4,448,108],[680,1543,24,28,296,128],[788,1577,8,8,368,136],[848,660,8,8,168,280],[832,1185,16,2,256,477]]},{delay:250,blit:[[0,3210,632,64,224,96],[780,1421,64,16,192,464]]},{delay:250,blit:[[680,1235,104,22,272,96],[680,1447,80,14,416,106],[752,1211,96,24,296,128],[680,1581,80,4,488,128],[680,1379,88,16,424,136],[680,1217,64,16,192,464]]},{delay:250,blit:[[144,512,4,4,176,32],[848,480,8,16,848,32],[0,3126,592,84,264,72],[8,3106,28,20,8,76],[800,756,16,10,112,80],[80,2448,16,20,208,96],[736,1673,8,28,224,132],[852,1429,4,8,268,156],[168,280,8,8,168,280],[680,1395,80,16,192,464]]},{delay:250,blit:[[176,36,4,4,176,32],[854,1068,2,16,848,32],[776,1673,16,10,112,80],[760,1375,4,4,32,92],[842,1008,6,4,304,116],[766,1275,24,24,376,128],[852,969,4,2,500,140],[848,660,8,8,168,280],[816,913,32,16,240,464]]},{delay:250,blit:[[796,1627,18,24,376,128]]},{delay:250,blit:[[796,1651,11,24,440,64],[834,1068,20,24,380,128]]},{delay:250,blit:[[144,512,4,4,176,32],[440,3306,386,24,464,32],[312,2416,11,24,440,64],[800,756,16,10,112,80],[720,768,4,4,32,92],[816,1309,6,4,304,116],[680,1355,64,24,368,128],[196,3018,4,2,500,140],[168,280,8,8,168,280],[776,2704,32,16,240,464]]},{delay:250,blit:[[816,1129,32,56,464,0],[176,36,4,4,176,32],[686,960,2,16,848,32],[776,1673,16,10,112,80],[760,1375,4,4,32,92],[842,1008,6,4,304,116],[852,969,4,2,500,140],[848,660,8,8,168,280],[816,1185,16,2,256,477]]},{delay:250,blit:[[840,1537,8,30,472,2],[752,1187,96,24,304,128]]},{delay:250,blit:[[742,1485,68,14,324,136]]},{delay:250,blit:[[0,2878,546,152,304,0],[144,512,4,4,176,32],[854,33,2,16,854,32],[680,1604,28,20,8,76],[800,756,16,10,112,80],[822,1537,18,40,208,96],[844,1421,4,11,228,133],[168,280,8,8,168,280],[734,1183,16,2,256,477]]},{delay:250,blit:[[744,2148,80,5,488,20],[176,36,4,4,176,32],[852,1421,4,8,400,32],[746,2910,8,8,600,32],[776,1673,16,10,112,80],[760,1375,4,4,32,92],[854,1084,2,4,590,108],[842,1008,6,4,304,116],[852,969,4,2,500,140],[848,660,8,8,168,280],[816,929,16,2,256,477]]},{delay:250,blit:[[680,1509,24,34,464,16]]},{delay:250,blit:[[546,2878,208,112,400,0],[854,1008,2,4,80,12],[796,972,7,4,49,228],[546,2990,288,16,0,464]]},{delay:250,blit:[[536,2532,208,122,400,4],[760,1447,56,14,32,6],[744,1355,48,20,152,16],[352,16,32,8,352,16],[696,2548,31,57,560,20],[800,756,16,10,112,80],[720,768,4,4,32,92],[818,1345,30,36,304,116],[728,1673,8,28,848,128],[788,1615,40,12,464,140],[756,1625,32,8,352,144],[776,1527,8,8,48,224],[168,280,8,8,168,280],[680,1299,112,16,0,464],[0,3398,584,8,176,464],[768,1375,4,4,850,466],[776,1519,8,8,280,472],[680,1060,96,8,752,472]]},{delay:250,blit:[[708,1604,104,5,464,20],[786,1331,4,8,400,32],[746,2910,8,8,600,32],[776,1673,16,10,112,80],[760,1375,4,4,32,92],[700,2236,4,4,444,108],[842,1008,6,4,304,116],[852,969,4,2,500,140],[848,660,8,8,168,280],[744,1375,16,4,288,468]]},{delay:250,blit:[[656,2144,200,96,400,16],[755,2192,93,11,499,64]]},{delay:250,blit:[[734,1137,24,46,460,2],[796,932,48,40,448,72],[848,1008,6,4,417,88],[854,1084,2,4,590,108],[536,2720,288,16,0,464]]},{delay:250,blit:[[680,1012,96,48,400,0],[712,1068,56,14,32,6],[24,2368,48,16,152,16],[224,2368,32,8,352,16],[752,1596,72,8,496,20],[736,2560,8,8,600,32],[96,2942,128,62,400,64],[800,756,16,10,112,80],[720,768,4,4,32,92],[286,2976,10,14,590,98],[0,2994,30,36,304,116],[584,3182,8,28,848,128],[160,3018,40,12,464,140],[48,3022,32,8,352,144],[712,528,8,8,48,224],[168,280,8,8,168,280],[536,2704,288,16,0,464],[0,3406,566,2,288,466],[680,1427,100,12,752,468]]},{delay:250,blit:[[760,1093,96,36,400,4],[708,1604,8,5,560,20],[176,36,4,4,176,32],[746,2910,8,8,600,32],[776,1673,16,10,112,80],[760,1375,4,4,32,92],[854,1084,2,4,590,108],[842,1008,6,4,304,116],[852,969,4,2,500,140],[848,660,8,8,168,280],[840,821,16,2,256,477]]},{delay:250,blit:[[0,960,680,480,176,0]]},{delay:250,blit:[[672,1912,184,48,280,0],[788,1533,10,8,512,24],[764,1375,4,4,256,40],[840,1413,8,8,184,56],[474,5,2,8,190,296]]},{delay:250,blit:[[0,3030,850,96,0,0],[848,1129,4,448,852,32],[704,1519,24,32,0,120],[792,1307,24,72,24,176],[808,1461,12,16,60,200],[800,1267,32,8,64,240],[816,712,24,112,168,272],[840,1405,8,8,96,400],[696,628,15,4,32,464]]},{delay:250,blit:[[0,1440,680,472,176,8],[760,1673,16,10,112,80],[760,1375,4,4,32,92],[844,957,12,8,80,240]]},{delay:250,blit:[[854,1008,2,4,80,12],[0,2750,680,128,176,32],[796,972,7,4,49,228],[848,660,8,8,168,280],[760,1395,8,8,176,336]]},{delay:250,blit:[[704,1509,80,10,16,16],[440,3330,388,2,384,16],[680,1645,64,6,504,18],[0,2532,536,218,184,22],[840,817,16,4,768,22],[790,1315,1,15,855,65],[784,1347,8,8,48,144],[696,1651,16,23,32,217],[680,1571,20,8,72,240],[672,1960,184,16,248,256],[0,3306,440,44,176,276],[680,1275,86,24,618,296],[680,1596,72,8,32,304],[848,576,8,84,32,316],[680,1315,74,24,254,328],[0,3350,536,32,176,360],[784,1339,8,8,136,376],[704,1551,24,14,64,456]]},{delay:250,blit:[[18,0,254,4,18,0],[0,480,688,480,32,0],[764,0,44,26,764,0],[0,4,48,27,0,4],[76,8,68,20,76,8],[816,824,40,57,816,8],[688,844,128,88,0,36],[852,1129,2,292,854,96],[680,1257,120,18,8,136],[798,1505,24,36,24,156],[56,176,16,40,56,176],[680,1185,72,32,24,216]]},{delay:250,blit:[[760,1129,56,58,408,0],[784,1235,16,19,440,58],[744,1225,8,8,64,72],[696,1625,16,16,112,80],[840,712,16,81,256,95],[768,1421,6,5,409,97],[840,793,16,24,192,112],[803,972,6,4,58,140],[680,1624,16,16,208,160],[752,1183,4,4,416,188],[754,1315,32,24,32,224],[832,1267,14,8,226,232],[744,1469,62,16,250,256],[680,1461,128,8,168,280],[852,965,4,4,172,328],[744,1217,8,8,568,360]]},{delay:250,blit:[[768,1379,50,26,414,4],[784,1375,3,4,444,60]]},{delay:250,blit:[[842,972,14,36,448,12]]},{delay:4e3,blit:[[680,1093,80,44,408,4],[752,1535,36,21,432,56],[64,72,8,8,64,72],[80,560,16,16,112,80],[224,575,16,81,256,95],[377,577,6,5,409,97],[160,592,16,24,192,112],[58,140,6,4,58,140],[176,640,16,16,208,160],[384,668,4,4,416,188],[0,704,32,24,32,224],[194,712,14,8,226,232],[218,736,62,16,250,256],[136,760,128,8,168,280],[172,328,4,4,172,328],[536,840,8,8,568,360]]}],images=[["../img/features/animated_pngs/terminal_packed-20f05aa4.png",terminal_timeline,"terminal_target","terminal_target"],["../img/features/animated_pngs/termrun_packed-66b32720.png",termrun_timeline,"termrun_target","termrun_target"]];set_single_animation(images[0],1);