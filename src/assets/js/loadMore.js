export default function loadMore(res){
    const messages = [];

    const count = res.length > 3 ? 3 : res.length;

    for(let i=0; i < count; i++){
        res[i].main = true;
        messages.push(res[i])
    }
    
    return messages;
}