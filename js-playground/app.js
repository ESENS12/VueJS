var config = {
    some_url : "https://localhost.test.com/8888"
};

var changePage = function (pageName){
    console.log('changePage  : ' , pageName);
    if(pageName === 'firstPage'){
        console.log("content body (before)" ,document.getElementsByClassName('content_body'));
        
        //innerHTMl은 child node로 들어감
        // document.getElementsByClassName('content_body')[0].innerHTML = "<div>this is innerHtml test</div>";
        
        //append는 태그가 그냥 plane으로 들어감,
        document.getElementsByClassName('content_body')[0].append("<div>this is innerHtml test</div>");
        console.log("content body (after)" ,document.getElementsByClassName('content_body'));
        // console.log(document.getElementsByClassName('content_body').innerHtml = "<div>this is innerHtml test</div>");
    }else{

    }
}