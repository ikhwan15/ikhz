function removeHtmlTag(strx,chop){
if(strx.indexOf("<")!=-1)
{
var s = strx.split("<");
for(var i=0;i<s.length;i++){
if(s[i].indexOf(">")!=-1){
s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
}
}
strx = s.join("");
}
chop = (chop < strx.length-1) ? chop : strx.length-2;
while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;
strx = strx.substring(0,chop-1);
return strx+'...';
}
function createSummaryAndThumb(pID){
var div = document.getElementById(pID);
var imgtag = "";
var img = div.getElementsByTagName("img");
var summ = posts_no_thumb_sum;
if(img.length>=1) {
imgtag = '<span class="posts-thumb" style="float:left; margin: 0 10px 10px 0;"><img src="'+img[0].src+'" width="150px" height="113px"/></span>';
summ = posts_thumb_sum;
}
var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>';
div.innerHTML = summary;
}

window.onload = function() {
    var e = document.getElementById("copyright");
    if (e == null) {
        window.location.href = "http://www.seo-blog.id"
    }
    e.setAttribute("href", "http://www.seo-blog.id");
    e.setAttribute("rel", "nofollow");
    e.innerHTML = "SEOBlogid"
}
