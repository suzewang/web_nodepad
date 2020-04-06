$("textarea").css({
    "width":document.body.clientWidth
})

$(".typeface_frame_background").css({
    "width":document.body.clientWidth+6,
    "height":document.body.clientHeight
})

$(".file_button").click(function(){
    $(".edit_button_menu").css({"display":"none"});
    $(".format_button_menu").css({"display":"none"});
    $(".see_button_menu").css({"display":"none"});
    $(".help_button_menu").css({"display":"none"});
    if($(".file_button_menu").css("display")=="none"){
        $(".file_button_menu").css({"display":"block"});
    }else{
        $(".file_button_menu").css({"display":"none"});
    }
})

$("textarea").click(function(){
    $(".file_button_menu").css({"display":"none"});
    $(".edit_button_menu").css({"display":"none"});
    $(".format_button_menu").css({"display":"none"});
    $(".see_button_menu").css({"display":"none"});
    $(".help_button_menu").css({"display":"none"});
})

$(".edit_button").click(function(){
    $(".file_button_menu").css({"display":"none"});
    $(".format_button_menu").css({"display":"none"});
    $(".see_button_menu").css({"display":"none"});
    $(".help_button_menu").css({"display":"none"});
    if($(".edit_button_menu").css("display")=="none"){
        $(".edit_button_menu").css({"display":"block"});
    }else{
        $(".edit_button_menu").css({"display":"none"});
    }
})

$(".format_button").click(function(){
    $(".file_button_menu").css({"display":"none"});
    $(".edit_button_menu").css({"display":"none"});
    $(".see_button_menu").css({"display":"none"});
    $(".help_button_menu").css({"display":"none"});
    if($(".format_button_menu").css("display")=="none"){
        $(".format_button_menu").css({"display":"block"});
    }else{
        $(".format_button_menu").css({"display":"none"});
    }
})

$(".see_button").click(function(){
    $(".file_button_menu").css({"display":"none"});
    $(".edit_button_menu").css({"display":"none"});
    $(".format_button_menu").css({"display":"none"});
    $(".help_button_menu").css({"display":"none"});
    if($(".see_button_menu").css("display")=="none"){
        $(".see_button_menu").css({"display":"block"});
    }else{
        $(".see_button_menu").css({"display":"none"});
    }
})

$(".help_button").click(function(){
    $(".file_button_menu").css({"display":"none"});
    $(".edit_button_menu").css({"display":"none"});
    $(".format_button_menu").css({"display":"none"});
    $(".see_button_menu").css({"display":"none"});
    if($(".help_button_menu").css("display")=="none"){
        $(".help_button_menu").css({"display":"block"});
    }else{
        $(".help_button_menu").css({"display":"none"});
    }
})

$(".typeface").click(function(){
    $(".format_button_menu").css({"display":"none"});
    $(".typeface_frame_background").css({"display":"block"});
})

$(".close").click(function(){
    $(".typeface_frame_background").css({"display":"none"});
})

$(".typeface_select>button").click(function(){
    $(".typeface_select>button").css({"background-color":"white"});
    $(this).css({"background-color":"rgb(80, 128, 231)"});
    $(".typeface_input").val($(this).html());
    $(".example_typeface").css({
        "font-family":$(".typeface_input").val()
    });
})

for(var i=0;i<$(".typeface_select>button").length;i++){
    $(".typeface_select>button").eq(i).css({"font-family":$(".typeface_select>button").eq(i).html()});
}

$(".typeface_pattern_select>button").click(function(){
    $(".typeface_pattern_select>button").css({"background-color":"white"});
    $(this).css({"background-color":"rgb(80, 128, 231)"});
    $(".typeface_pattern_input").val($(this).html());
    if($(".typeface_pattern_input").val()=="常规"){
        $(".example_typeface").css({
            "font-style":"",
            "font-weight":""
        });
    }
    if($(".typeface_pattern_input").val()=="斜体"){
        $(".example_typeface").css({
            "font-style":"italic",
            "font-weight":""
        });
    }
    if($(".typeface_pattern_input").val()=="粗体"){
        $(".example_typeface").css({
            "font-weight":"bold",
            "font-style":""
        });
    }
    if($(".typeface_pattern_input").val()=="粗偏斜体"){
        $(".example_typeface").css({
            "font-weight":"bold",
            "font-style":"italic"
        });
    }
})

$(".typeface_size_select>button").click(function(){
    $(".typeface_size_select>button").css({"background-color":"white"});
    $(this).css({"background-color":"rgb(80, 128, 231)"});
    $(".typeface_size_input").val($(this).html());
    $(".example_typeface").css({
        "font-size":$(".typeface_size_input").val()+"px"
    });
})

$(".determine").click(function(){
    $("textarea").css({
        "font-family":$(".typeface_input").val(),
        "font-size":$(".typeface_size_input").val()+"px"
    })
    if($(".typeface_pattern_input").val()=="常规"){
        $("textarea").css({
            "font-style":"",
            "font-weight":""
        });
    }
    if($(".typeface_pattern_input").val()=="斜体"){
        $("textarea").css({
            "font-style":"italic",
            "font-weight":""
        });
    }
    if($(".typeface_pattern_input").val()=="粗体"){
        $("textarea").css({
            "font-weight":"bold",
            "font-style":""
        });
    }
    if($(".typeface_pattern_input").val()=="粗偏斜体"){
        $("textarea").css({
            "font-weight":"bold",
            "font-style":"italic"
        });
    }
    $(".typeface_frame_background").css({"display":"none"});
})

$(".cancel").click(function(){
    $(".typeface_frame_background").css({"display":"none"});
})

$(".typeface_frame").bind("mousedown",function(e){
    var page_x=e.pageX;
    var page_y=e.pageY;
    var typeface_frame_x=$(".typeface_frame").offset().left;
    var typeface_frame_y=$(".typeface_frame").offset().top;
    var mousein_x=page_x-typeface_frame_x;
    var mousein_y=page_y-typeface_frame_y;
    document.onmousemove=function(e){
        page_x=e.pageX;
        page_y=e.pageY;
        var typeface_frame_left=page_x-mousein_x;
        var typeface_frame_top=page_y-mousein_y;
        $(".typeface_frame").css({
            "margin-top":"0",
            "position":"absolute",
            "left":typeface_frame_left-8+"px",
            "top":typeface_frame_top-8+"px"
        })
    }
})

$(".typeface_frame").mouseup(function(){
    document.onmousemove=null;
})