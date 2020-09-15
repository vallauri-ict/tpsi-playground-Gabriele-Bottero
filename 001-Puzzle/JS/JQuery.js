$(document).ready(function () {
    creaImg();

});

function creaImg() {
    const DIM=15;
    let wrapper=$("#wrapper");
    for(let i=0;i<DIM;i++)
    {
        let name="<img src="+"IMG/img"+(i+1)+".png"+">";
        let img=$(name);
        img.prop("id","t"+(i+1));
        img.css({
            "position":"absolute",
            "top":random(0,(600-175))+"px",
            "left":random(0,(1100-175))+"px"
        });
        img.draggable();
        wrapper.append(img);
    }
    wrapper.children("img").draggable({
        "start":function () {
            $(this).draggable("option","revert","invalid");
        }
    });
    wrapper.children("img").on("dblclick",function () {
       $(this).draggable("enable");
    });
    wrapper.droppable();
    $("table td").droppable({
       "drop":function (event,args) {
           let idPezzo=args.draggable.prop("id").substr(1);
           let idSlot=$(this).prop("id").substr(1);
           if(idPezzo==idSlot){
               args.draggable.draggable("disable");
           }
           else
           {
               args.draggable.draggable("option","revert",true);
           }
       }
    });
}

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}