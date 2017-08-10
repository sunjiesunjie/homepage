/**
 * Created by Administrator on 2017/5/18.
 */

window.onload=function(){

    let canvas=document.querySelector('canvas');
    let ctx=canvas.getContext('2d');
    let zz=document.querySelector('.zz');
    // console.log(zz);

    let line=document.querySelector('.icon-line');
    let qibi=document.querySelector('.icon-qianbi');
    let dbx=document.querySelector('.icon-duobianxing');
    let yy=document.querySelector('.icon-yuan');
    let jx=document.querySelector('.icon-juxing');
    let yjjx=document.querySelector('.icon-yuanjiaojuxing');
    let bc=document.querySelector('.icon-baocun');
    let cx=document.querySelector('.icon-iocnchexiao');
    let xj=document.querySelector('.icon-iconfontxinjian');
    let wz=document.querySelector('.icon-wenzi');
    let xpc=document.querySelector('.icon-xiangpi');
    let cj=document.querySelector('.icon-caijian');
    let wjx=document.querySelector('.icon-wujiaoxing');
    let mb=document.querySelector('.icon-miaobian');
    let tc=document.querySelector('.icon-tianchong');
    let xx=document.querySelector('.icon-xuxian');
    let qp=document.querySelector('.icon-quanping');
    let dr=document.querySelector('.icon-daoru');
    let input=document.querySelectorAll('input')[0];
    let input1=document.querySelectorAll('input')[1];
    let es=document.querySelector('.es');
    let cai=document.querySelector('.cai');
    let input2=document.querySelectorAll('input')[2];
    let img=document.querySelector('img');

    console.log(input2);
    let palette=new Palette(canvas,ctx,zz);



    yy.onclick=function(){
        palette.yuan();
    }


    line.onclick=function(){
        palette.line();
    }

    qibi.onclick=function(){
             palette.qibi();
    }


    dbx.onclick=function(){
        palette.n=prompt('请输入边数',5);
        palette.dbx(palette.n);
    }


    jx.onclick=function(){
          palette.jx();
    }

   xx.onclick=function(){
          palette.xx();
    }

    yjjx.onclick=function(){
        palette.yjjx(10);
    }

    bc.onclick=function(){
        palette.bc();
    }

    cx.onclick=function(){
         palette.cx();
    }

    xj.onclick=function(){
        palette.xj(canvas);
    }


    wz.onclick=function(){
        palette.wz();
    }


  /*  xpc.onclick=function(){
        palette.xpc();
    }
*/
    xpc.onclick=function(){
       let w=prompt('请输入橡皮擦尺寸','20');
       let h=w;
        palette.es(w,h,es);
    }


    qp.onclick=function(){
        if(document.documentElement.RequestFullscreen){
            consle.log(0);
        }
        else if(document.documentElement.webkitRequestFullscreen){
            canvas.webkitRequestFullscreen();
        }
    }


    cj.onclick=function(){
         palette.cj(cai);
     }

    wjx.onclick=function(){
        palette.n=prompt('请输入角数',5);
        palette.wjx(palette.n);
    }





    input.onchange=function(){
        palette.strokeStyle=this.value;
    }

    input1.onchange=function(){
        palette.fillStyle=this.value;
    }


    tc.onclick=function(){
        palette.type='fill';
    }

    mb.onclick=function(){
        palette.type='stroke';
    }


    input2.onchange=function() {
        let files=this.files[0];
        let reader=new FileReader();
        reader.readAsDataURL(files);
        reader.onload=function(){
            img.src=this.result;
            img.onload=function(){
                ctx.drawImage(img,10,10,500,400);
            }
        }
    }




}