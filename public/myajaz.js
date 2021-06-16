function myAjax(options){
    let {url,type="get",timeout,data,dataType="json",success,error,beforeSend,complete}=options
    if(!url) return
    
    const xhr =new XMLHttpRequest()

    xhr.timeout=timeout

    let params =obj2String(data)
    // if(type ==="get"){
    //     xhr.open(type,url+"?"+params)
    // }else{
    //     xhr.open(type,url)
    // }
    if(type==="type"){
        url +="?"+params
        params=null
    }
    xhr.open(type,url)

    if(type==="post"){
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
    }

    // if(type==="get"){
    //     xhr.send()
    // }else{
    //     xhr.send(params)
    // }
    
    let result = beforeSend && beforeSend()
    if(result===false) return
    xhr.send(params)

    xhr.onreadystatechange =function(){
        if(xhr.readyState===4){
            complete && complete()
            if(xhr.status===200){
                let value
                if(dataType==="text"){
                    value =xhr.responseText
                }
                if(dataType==="json"){
                    value =JSON.parse(xhr.responseText)
                }
                success && success(value)
               
            }else{
                error && error(xhr)
            }
        }
    }
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