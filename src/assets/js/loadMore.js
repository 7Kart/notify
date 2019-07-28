export default function loadNext(count, messages){
    //последнее сообщение в отсортированном массиве с отметкой main=true
    var startInd = messages.map(mes=>mes.main).lastIndexOf(true)+1;
    
    for(var i=count; i > 0; i--){
        if(startInd < messages.length) {
            messages[startInd].main = true;
            startInd++;
        }else{
            break;
        }
    }  
}