
var currTime;
const FastClickUtils={
    isFastClick(){
        var time= new Date().getTime();
        if (time - currTime < 400) {
            currTime = time;
            return true;
        } else {
            currTime = time;
            return false;
        }

    }
}


module.exports=FastClickUtils