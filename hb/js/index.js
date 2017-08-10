/**
 * Created by Administrator on 2017/5/18.
 */

function Palette(obj,ctx,zz){
    // obj=canvas  ctx=环境
    this.obj=obj;
    this.ctx=ctx;
    this.zz=zz;
    this.width=obj.width;
    this.height=obj.height;
    this.lineWidth=5;
    this.ctx.lineCap='butt';
    this.fillStyle='#000';
    this.strokeStyle='#000';

    // 选择是描边还是填充
    this.type='stroke';
    this.history=[];
    // 设置字体样式
    this.font='20px sans-serif';
    this.textAlign='center';
    this.textBaseline='middle';



}

Palette.prototype={

    // 初始化样式
    init:function(){
       this.ctx.lineWidth=this.lineWidth;
       this.ctx.strokeStyle=this.strokeStyle;
       this.ctx.fillStyle=this.fillStyle;
       this.ctx.lineCap=this.lineCap;
       this.ctx.setLineDash([]);
    },

    // 画线
    line:function(){
        let self=this;
        self.zz.onmousedown=function(e){
           let ox=e.offsetX,oy=e.offsetY;
            self.zz.onmousemove=function(e){

                let ax=e.offsetX,ay=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }
                self.init();
                self.ctx.beginPath();
                self.ctx.moveTo(ox,oy);
                self.ctx.lineTo(ax,ay);
                self.ctx[self.type]();
           }
           self.zz.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.zz.onmouseup=null;
                self.zz.onmousemove=null;
           }

       }
       document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                if(self.history.length==0){
                    self.ctx.clearRect(0,0,self.width,self.height);
                    return;
                }
                    let last = self.history.pop();
                    self.ctx.putImageData(last, 0, 0);

            }
        }
    },

    // 铅笔
    qibi:function(){
        let self1=this;
        self1.zz.onmousedown=function(e){
            let oa=e.offsetX,ob=e.offsetY;
            self1.init();
            self1.ctx.clearRect(0,0,self1.width,self1.height);
            self1.ctx.beginPath();
            self1.ctx.moveTo(oa,ob);
            if(self1.history.length>0){
                self1.ctx.putImageData(self1.history[self1.history.length-1],0,0);
            }
            self1.zz.onmousemove=function(e){
                let aa=e.offsetX,ab=e.offsetY;
                self1.ctx.lineTo(aa,ab);
                self1.ctx[self1.type]();
            }
            self1.zz.onmouseup=function(){
                self1.history.push(self1.ctx.getImageData(0,0,self1.width,self1.height));
                self1.zz.onmouseup=null;
                self1.zz.onmousemove=null;
            }
        }
        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                if(self1.history.length==0){
                    self1.ctx.clearRect(0,0,self1.width,self1.height);
                    return;
                }
                    let last = self1.history.pop();
                    self1.ctx.putImageData(last, 0, 0);

            }
        }

    },

    // 多边形
    dbx:function(n){
        let self2=this;
            self2.zz.onmousedown=function(e){
                self2.init();
                let m=e.offsetX;
                let h=e.offsetY;
                self2.zz.onmousemove=function(e){
                    let a=e.offsetX;
                    let b=e.offsetY;
                    self2.ctx.clearRect(0,0,self2.width,self2.height);
                    if(self2.history.length>0){
                        self2.ctx.putImageData(self2.history[self2.history.length-1],0,0);
                    }
                    let banj=Math.sqrt((a-m)*(a-m)+(b-h)*(b-h));
                    self2.ctx.beginPath();
                    self2.ctx.moveTo(m+banj,h);
                    for(let j=0;j<n;j++){
                        let x=m+Math.cos(360/n*Math.PI/180*j)*banj;
                        let y=h+Math.sin(360/n*Math.PI/180*j)*banj;
                        self2.ctx.lineTo(x,y);
                    }
                    self2.ctx.closePath();
                    self2.ctx[self2.type]();
                }
                self2.zz.onmouseup=function(){
                    self2.history.push(self2.ctx.getImageData(0,0,self2.width,self2.height));
                    self2.zz.onmousemove=null;
                    self2.zz.onmouseup=null;
                }
            }
        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                if(self.history.length==0){
                    self.ctx.clearRect(0,0,self.width,self.height);
                    return;
                }
                let last = self.history.pop();
                self.ctx.putImageData(last, 0, 0);

            }
        }
        },

    // 矩形
    jx:function(){
        let self=this;
        self.zz.onmousedown=function(e){
            self.init();
            let s=e.offsetX;
            let d=e.offsetY;
            self.zz.onmousemove=function(e){
                let t=e.offsetX;
                let i=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0);
                }

                self.ctx.beginPath();
                self.ctx.rect(s,d,t-s,i-d);
                self.ctx.closePath();
                self.ctx[self.type]();
            }
            self.zz.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.zz.onmouseup=null;
                self.zz.onmousemove=null;
            }
        }
        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                if(self.history.length==0){
                    self.ctx.clearRect(0,0,self.width,self.height);
                    return;
                }
                    let last3=self.history.pop();
                    self.ctx.putImageData(last3,0,0);


            }
        }
    },


    // 圆形
    yuan:function() {
        let self4 = this;
        self4.zz.onmousedown = function (e) {
            self4.init();
            let p = e.offsetX;
            let o = e.offsetY;
            self4.zz.onmousemove = function (e) {
                let l = e.offsetX;
                let k = e.offsetY;
                self4.ctx.clearRect(0, 0, self4.width, self4.height);
                if (self4.history.length > 0) {
                    self4.ctx.putImageData(self4.history[self4.history.length-1], 0, 0);
                }
                self4.ctx.beginPath();
                self4.ctx.arc(p, o, Math.sqrt((l - p) * (l - p) + (k - o) * (k - o)), 0, Math.PI * 2, false);
                self4.ctx.closePath();
                self4.ctx[self4.type]();
            }
            self4.zz.onmouseup = function () {
                self4.history.push(self4.ctx.getImageData(0, 0, self4.width, self4.height));
                self4.zz.onmousemove = null;
                self4.zz.onmouseup = null;
            }
        }

        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                if(self4.history.length==0){
                    self4.ctx.clearRect(0,0,self4.width,self4.height);
                    return;
                }
                    let last4=self4.history.pop();
                    self4.ctx.putImageData(last4,0,0);

            }
        }

       },

    // 圆角矩形

    yjjx:function(r){
        let self5=this;
        self5.zz.onmousedown=function(e){
            self5.init();
            let ox=e.offsetX;
            let oy=e.offsetY;
            self5.zz.onmousemove=function(e){
                let cx=e.offsetX;
                let cy=e.offsetY;
                self5.ctx.clearRect(0,0,self5.width,self5.height);

                if(self5.history.length>0){
                   self5.ctx.putImageData(self5.history[self5.history.length-1],0,0);

                }
                let w=cx-ox;
                let h=cy-oy;
                self5.ctx.beginPath();
                self5.ctx.moveTo(ox-w+r,oy-h);
                self5.ctx.lineTo(cx-r,oy-h);
                self5.ctx.quadraticCurveTo(cx,oy-h,cx,oy-h+r);
                self5.ctx.lineTo(cx,cy-r);
                self5.ctx.quadraticCurveTo(cx,cy,cx-r,cy);
                self5.ctx.lineTo(ox-w+r,cy);
                self5.ctx.quadraticCurveTo(ox-w,cy,ox-w,cy-r);
                self5.ctx.lineTo(ox-w,oy-h+r);
                self5.ctx.quadraticCurveTo(ox-w,oy-h,ox-w+r+r,oy-h);
                self5.ctx.closePath();
                self5.ctx[self5.type]();
            }
            self5.zz.onmouseup=function(){
                self5.history.push(self5.ctx.getImageData(0,0,self5.width,self5.height));
                self5.zz.onmousemove=null;
                self5.zz.onmouseup=null;
            }
        }

        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                if(self5.history.length==0){
                    self5.ctx.clearRect(0,0,self5.width,self5.height);
                    return;
                }
                    let last5=self5.history.pop();
                    self5.ctx.putImageData(last5,0,0);
            }
        }

    },

    // 多角星
  wjx:function(n){
      let self=this;
      self.zz.onmousedown=function(e){
          self.init();
          let m=e.offsetX;
          let h=e.offsetY;
          self.zz.onmousemove=function(e){
              let a=e.offsetX;
              let b=e.offsetY;
              self.ctx.clearRect(0,0,self.width,self.height);
              if(self.history.length>0){
                  self.ctx.putImageData(self.history[self.history.length-1],0,0);
              }
              let banj=Math.sqrt((a-m)*(a-m)+(b-h)*(b-h));
              let banjj=banj/3;
              self.init();
              self.ctx.beginPath();
              for(let j=0;j<n*2;j++){
                  if(j%2==0){
                      let x=m+Math.cos(360/n*Math.PI/180*j/2)*banj;
                      let y=h+Math.sin(360/n*Math.PI/180*j/2)*banj;
                      self.ctx.lineTo(x,y);
                  }
                  else{
                      let x=m+Math.cos(360/n*Math.PI/180*j/2)*banjj;
                      let y=h+Math.sin(360/n*Math.PI/180*j/2)*banjj;
                      self.ctx.lineTo(x,y);
                  }
              }
              self.ctx.closePath();
              self.ctx[self.type]();
          }
          self.zz.onmouseup=function(){
              self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
              self.zz.onmousemove=null;
              self.zz.onmouseup=null;
          }
      }
      document.body.onkeydown=function(e){
          if(e.ctrlKey&&e.keyCode==90){
              if(self.history.length==0){
                  self.ctx.clearRect(0,0,self.width,self.height);
                  return;
              }
              let last = self.history.pop();
              self.ctx.putImageData(last, 0, 0);

          }
      }
  },

    // 虚线
xx:function(){
    let self=this;
    self.zz.onmousedown=function (e) {
        let ox=e.offsetX,oy=e.offsetY;
        self.zz.onmousemove=function (e) {
            let mx=e.offsetX,my=e.offsetY;
            self.init();
            self.ctx.clearRect(0,0,self.width,self.height);
            if(self.history.length>0){
                self.ctx.putImageData(self.history[self.history.length-1],0,0);
            }
            self.ctx.beginPath();
            self.ctx.moveTo(ox,oy);
            self.ctx.lineTo(mx,my);
            self.ctx.setLineDash([10,20]);
            self.ctx.closePath();
            self.ctx[self.type]();
        }
        self.zz.onmouseup=function () {
            self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
            self.zz.onmouseup=null;
            self.zz.onmousemove=null;

        }
        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                if(self.history.length==0){
                    self.ctx.clearRect(0,0,self.width,self.height);
                    return;
                }
                let last = self.history.pop();
                self.ctx.putImageData(last, 0, 0);

            }
        }
    }
},


    // 保存
   bc:function(){
        let self6=this;
        let data=self6.obj.toDataURL('image/png').replace('data:image/png','data:stream/octet');
       location.href=data;
   },

   // 撤销
  cx:function(){
      this.history.pop();
       if(this.history.length==0){
            // this.ctx.clearRect(0,0,this.width,this.height);
           return;
       }
       this.ctx.putImageData(this.history[this.history.length-1],0,0);
   },

    // 新建
    xj:function(canvas){
            let self=this;
            let flag=confirm("是否保存");
            if(flag){
                let data=canvas.toDataURL('image/png').replace('data:image/png','data:stream/octet');
                location.href=data;
            }
            self.history=[];
            self.ctx.clearRect(0,0,self.width,self.height);
        },

    // 文字
    wz:function(){
       let self=this;
       self.zz.onmousedown=function(e){
           let ox=e.offsetX,oy=e.offsetY;
           let div=document.createElement('div');
           div.style.cssText=`
           width:100px;min-height:50px;position:absolute;
           left:${ox}px;top:${oy}px;background:white;
           border:1px dashed black;                                            
           `;
           div.contentEditable=true;
           self.zz.appendChild(div);
           self.zz.onmousedown=null;
           self.divs=div;
           if(self.history.length>0){
               self.ctx.putImageData(self.history[self.history.length-1],0,0);
           }
           self.divs.onmousedown=function(e){
               let ox=e.clientX-this.offsetLeft;
               let oy=e.clientY-this.offsetTop;
               self.zz.onmousemove=function(e){
                   // self.ctx.clearRect(0,0,self.width,self.height);

                   let cx=e.clientX;
                   let cy=e.clientY;
                   let lefts=cx-ox;
                   let tops=cy-oy;
                   self.divs.style.left=lefts+'px';
                   self.divs.style.top=tops+'px';

               }
               self.divs.onmouseup=function(){
                   self.zz.onmousemove=null;
                   self.divs.onmouseup=null;
               }
           }
           self.divs.onblur=function(){
               self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
               self.ctx.font=self.text;
               self.ctx.textAlign=self.textAlign;
               self.ctx.textBaseline=self.textBaseline;
               self.ctx.fillText(this.innerText,this.offsetLeft,this.offsetTop);
               this.parentNode.removeChild(this);
               self.divs=null;
           }
       }
    },

/*
   xpc:function(){
       let self8=this;
       self8.zz.onmousedown=function(e){

           self8.ctx.clearRect(0,0,self8.width,self8.height);
           if(self8.history.length>0){
               self8.ctx.putImageData(self8.history[self8.history.length-1],0,0);
           }
           self8.zz.onmousemove=function(e){
               let s1=e.offsetX;
               let j1=e.offsetY;
               self8.ctx.clearRect(s1,j1,20,20);
           }
           self8.zz.onmouseup=function(){
               self8.history.push(self8.ctx.getImageData(0,0,self8.width,self8.height));
               self8.zz.onmousemove=null;
               self8.zz.onmouseup=null;
           }
       }
   },
*/
    // 橡皮擦2
    es:function(w,h,es){
         let self=this;
         self.zz.onmousedown=function(){
             es.style.display='block';
             es.style.width=`${w}px`;
             es.style.height=`${h}px`;
             if(self.history.length>0){
                 self.ctx.putImageData(self.history[self.history.length-1],0,0);
             }
         self.zz.onmousemove=function(e) {

             let cx = e.offsetX-w/2 ;
             let cy = e.offsetY-h/2 ;
             if (cx >= self.width - w) {
                 cx = self.width - w;
             }
             if (cx<0) {
                 cx = 0;
             }
             if (cy >= self.height - h) {
                 cy = self.height - h;
             }
             if (cy<0) {
                 cy = 0;
             }
             es.style.left =cx+'px';
             es.style.top =cy+'px';
             self.ctx.clearRect(cx, cy, w, h);
         }
         self.zz.onmouseup=function() {
             es.style.display = 'none';
             self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
             self.zz.onmouseup = null;
             self.zz.onmousemove = null;
         }
             document.body.onkeydown=function(e){
                 if(e.ctrlKey&&e.keyCode==90){
                     if(self.history.length==0){
                         self.ctx.clearRect(0,0,self.width,self.height);
                         return;
                     }
                     let last = self.history.pop();
                     self.ctx.putImageData(last, 0, 0);

                 }
             }
      }
     },




   // 裁剪

     cj:function(cai){
          let self9=this;
          let minx,miny,w,h;
           self9.init();
           self9.cai=cai;
           self9.zz.onmousedown=function(e){
              let s=e.offsetX;
              let d=e.offsetY;
              self9.zz.onmousemove=function(e){
                  let s1=e.offsetX;
                  let d1=e.offsetY;
                  minx=s1>s?s:s1;
                  miny=d1>d?d:d1;
                  w=Math.abs(s1-s);
                  h=Math.abs(d1-d);
                  self9.cai.style.cssText= `
                  width=${w}px;height=${h}px;border:1px dashed black;
                  position:absolute;left:${minx}px;top${miny}px;        
                  `
              }
              self9.zz.onmouseup=function(){
                  self9.zz.onmousemove=null;
                  self9.zz.onmouseup=null;
                  self9.t=self9.ctx.getImageData(minx,miny,w,h);
                  self9.ctx.clearRect(minx,miny,w,h);
                  self9.history.push(self9.ctx.getImageData(0,0,self9.width,self9.height));
                  self9.ctx.putImageData(self9.t,minx,miny);
                  self9.drag(minx,miny,w,h,cai);
              }
          }
     },



    // 裁剪拖拽
        drag: function (x, y, w, h, cai) {
            let self = this;
            self.zz.onmousemove = function (e) {
                let ox = e.offsetX;
                let oy = e.offsetY;
                if (ox > x && ox < w + x && oy > y && oy < h + y) {
                    self.zz.style.cursor = "move";
                } else {
                    self.zz.style.cursor = "default";
                }
            }
            self.zz.onmousedown = function (e) {
                let ox = e.offsetX;
                let oy = e.offsetY;
                //鼠标相对于div左上角的位置
                let cx = ox - x;
                let cy = oy - y;
                if (ox > x && ox < w + x && oy > y && oy < h + y) {
                    self.zz.style.cursor = "move";
                } else {
                    self.zz.style.cursor = "default";
                    return;
                }
                self.zz.onmousemove = function (e) {
                    self.ctx.clearRect(0, 0, self.width, self.height);
                    if (self.history.length > 0) {
                        self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                    }
                    let ex = e.offsetX;
                    let ey = e.offsetY;
                    let left = ex - cx;
                    let top = ey - cy;
                    if(left<0){
                        left=0;
                    }
                    if(left>self.width-w){
                        left=self.width-w
                    }

                    if(top<0){
                        top=0;
                    }
                    if(top>self.height-h){
                        top=self.height-h;
                    }
                    cai.style.left= left+'px';
                    cai.style.top=top+'px';
                    x=left;
                    y=top;
                    self.ctx.putImageData(self.t, left, top);
                }
                self.zz.onmouseup = function () {
                    self.zz.onmouseup = null;
                    self.zz.onmousemove = null;
                    self.drag(x, y, w, h, cai);
                    // self.ctx.clearRect(0,0,self.width,self.height);
                }
            }
    }


}



