


// 判断传入的
function $(selector,ranger=document){
    let type=typeof selector;
    if(type=='string'){
    	let select=selector.trim();
    	// 去空
    	let first=select.charAt(0);
    	// 获取首字符
        if(first=='.'){
            return ranger.getElementsByClassName(select.substring(1));
                                                        // 截取
        }
        else if(first=='#'){
            return document.getElementById(select.substring(1));
        }
        else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
          // 正则对象 判断一个字符串是否是一个标签 
          return ranger.getElementsByTagName(select);
        }  
        else if(/^<[a-zA-Z][a-zA-Z1-6]{0,8}>$/.test(select)){
          // 判断是否是一个标签 是就创建 然后把<>截去
        return document.createElement(select.slice(1,-1));
  }     	
    }
    else if(type=='function'){
    	window.onload=function(){
    		selector();
    	}
      // addEvent(window,"lond",selector);
    }
}


// 不同浏览器访问样式
/*function getStyle(obj,attr){
	// 把方法当做一个属性来访问，如果属性不存在 就会得到一个undefined
	// 如果访问方法时加括号 就是访问方法的内容 如果方法不存在 就会报错 如果不加括号 就是相当于访问属性
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}
	else{
		return obj.currentStyle[attr];
	}
}*/



// 设置获取某一个元素的内容
// html(obj[,content])
// obj 指定的对象
// [content]设置的内容 若没有 表示在获取Obj的内容 如果有 表示在设置

/*function html(obj,content){
      if(content){
      	return obj.innerHTML=content;
      }
      else{
      	return obj.innerHTML;
      }
}*/


// 获取指定元素所有的子节点 并且子节点是元素节点
// 1.先获取所有子节点 
// 2.筛选元素节点
 
 function getChild(obj){
  let childs=obj.childNodes;
  let arr=[];
  childs.forEach(function(value){
      if(value.nodeType==1){
        arr.push(value);
      }

  })
  return arr;
 }

// 获取指定元素节点
function getNum(obj,num){
     let child=getChild(obj);
     return child[num];
}



// 获取下一个兄弟节点 并且是元素节点 getNext
// 1.找到下一个兄弟节点
// 2.判断这个节点是不是元素节点
// 3.是 直接找到 不是 就找当前节点的下一个
function getNext(obj){
  let a=obj.nextSibling;
  if(a===null){
    return false;
  }
  while(a.nodeType!=1){
    a=a.nextSibling;
    if(a===null){
    return false;
    }
  }
  return a;
}