function initMenu(){
    $.when($.get('./Data/header.json')).then(function(data, textStatus, jqXHR){
        if('success'===textStatus){
            $('#platformchange>span>a').text(data[0].name);  //默认页面
            $('#platformchange>span>a').attr( 'id',data[0].id);
            $('#platformchange>span>a').attr( 'href',data[0].href);
            var platformchangehtml=''
            $.each(data,function (key,value) {
                if(key!=0){   //去掉默认的
                    platformchangehtml+='<li><a id="'+value.id+'" href="'+value.url+'">'+value.name+'</a></li>';
                }
            })

            $('#platformchange>ul').append(platformchangehtml);
            var seclevelhtml='';
            if(data[0].children.length>=5){
                $.each(data[0].children,function (key,value) {
                    if(key<=2){
                        seclevelhtml+='<li><a id="'+value.id+'" href="'+value.url+'">'+value.name+'</a>'+
                            '<ul class="treeLevelMenu">';
                        var thrlevel=value.children;
                        $.each(thrlevel,function (key,value) {
                            seclevelhtml+='<li><a id="'+value.id+'" href="'+value.url+'">'+value.name+'</a></li>'
                        })
                        seclevelhtml+= '</ul></li>'
                    }
                })
                seclevelhtml+='<li><a href="#">更多</a><ul class="moreul">';
                for(var i=3;i<data[0].children.length;i++){
                    seclevelhtml+='<li><a id="'+data[0].children[i].id+'" href="'+data[0].children[i].url+'">'+data[0].children[i].name+'</a>'+'<ul class="moretreeLevelMenu">';
                    var threelevelmenu=data[0].children[i].children;
                    $.each(threelevelmenu,function(key,value){
                        seclevelhtml+='<li><a id="'+value.id+'" href="'+value.url+'">'+value.name+'</a></li>'
                    })
                    seclevelhtml+='</ul></li>'
                }
                seclevelhtml+='</ul></li>'
            }else{
                $.each(data[0].children,function (key,value) {
                    seclevelhtml+='<li><a id="'+data[0].children[key].id+'" href="'+data[0].children[key].url+'">'+data[0].children[key].name+'</a>'+
                        '<ul class="treeLevelMenu">';
                    var thrlevel=value.children;
                    $.each(thrlevel,function (key,value) {
                        seclevelhtml+='<li><a id="'+value.id+'" href="'+value.url+'">'+value.name+'</a></li>'
                    })
                    seclevelhtml+= '</ul></li>'
                })
            }
            $('#seclevelmenu').append(seclevelhtml);
        }else {
            alert('请求失败');
        }
    });
}
$(document).ready(function() {
    initMenu();
    $('#platformchange>span').on('click',function(event){
        // $('#platformchange>ul').toggle('slow');
        if ($('#platformchange>ul').is(':hidden')) {
            $('#platformchange>ul').fadeIn("slow");
        } else {
            $('#platformchange>ul').hide();
        }
    });
});