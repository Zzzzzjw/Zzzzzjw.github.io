var url=["a.html","b.html","c.html","d.html"];
var text=["任务A","任务B","任务C","任务D"];
var now = 0;
function RotateLeft() {
    now = (now+3)%4;
    change();
}
function RotateRight() {
    now = (now+1)%4;
    change();
}
function change() {
    $("#image").attr('src',url[now]);
    var str='<a href=\"'+url[now]+'\" target=\"_blank\">'+text[now]+'</a>'
    $("#text").html(str);
}

