function myAjax(options){
    return new Promise((resolve,reject)=>{
        let {url,type="get",timeout,data,dataType="json"}=options
    if(!url) return
    
    const xhr =new XMLHttpRequest()
    xhr.timeout=timeout
    let params =obj2String(data)
    if(type==="type"){
        url +="?"+params
        params=null
    }
    xhr.open(type,url)

    if(type==="post"){
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
    }


    xhr.send(params)

    xhr.onreadystatechange =function(){
        if(xhr.readyState===4){
            if(xhr.status===200){
                let value
                if(dataType==="text"){
                    value =xhr.responseText
                }
                if(dataType==="json"){
                    value =JSON.parse(xhr.responseText)
                }
                resolve(value)
            }else{
                reject()
            }
        }
    }
    })
}

function obj2String(data){
    if(!data) return
    let arr =[]
    for(let key in data){
        arr.push(key+"="+data[key]) 
    }
    return arr.join("&")
}
// console.log(obj2String({uname:"zs",age:14})) 