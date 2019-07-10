window.onload=function(){
    var str="你好";
    var Visib="hidden";
    new Vue({
        el:".header",
        data:{
        },
        methods:{
            bnt(){
                if(title.isVisib=="hidden"){
                Visib="visible";
                }else{
                    Visib="hidden";
                }
                title.isVisib=Visib;
            }
        }
    });
    var title=new Vue({
        el:".selection",
        data:{
            isVisib:Visib
        }
    })
}