/**
 * Created by Administrator on 2017/5/24.
 */
function $(selector){
    return new aa(selector)
}

function aa(selector){
    if(typeof selector=='string'){
        let eles=document.querySelectorAll(selector);
        this.length=eles.length;
        for(let i=0;i<this.length;i++){
              this[i]=eles[i];
              console.log(this[i]);
        }
    }
    else if(typeof selector=='function'){
        window.addEventListener('load',selector,false);
    }
}


aa.prototype={
    each:function(callback){
        for(let i=0;i<this.length;i++){
            callback(i,this[i]);
        }
    },
    css:function(attrobj){
        // {width:'200px',height:'300px',background:'red'}
        this.each(function(i,obj){
            for(let j in attrobj){
                obj.style[j]=attrobj[j];
            }
        })
        return this;
    },
    html:function(inner){
        this.each(function(i,obj){
           obj.innerHTML=inner;
        })
        return this;
    }
    /*click:function(attrobj){
     this.each(function(i,obj){
     for(let j in attrobj){
     obj.style[j]=attrobj[j];
     }
     })
     return this;
     },*/
}
