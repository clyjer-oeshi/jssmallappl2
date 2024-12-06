//UI

const getprogressbar = document.getElementById("progress-bar");

window.onscroll=function(){
    // console.log("hayy");

    scrollpoint();

}


function scrollpoint(){

    let getscrolltop = document.documentElement.scrollTop;
    // console.log(getscrolltop);//2967

    let getclientheight = document.documentElement.clientHeight;
    // console.log(getclientheight);//449

    let getscrollheight = document.documentElement.scrollHeight;
    // console.log(getscrollheight);//3417

    let calheight = getscrollheight - getclientheight;
    // console.log(calheight);//3008

    let getfinal = Math.floor((getscrolltop/calheight)*100);
    // console.log(getfinal);

    getprogressbar.style.width = `${getfinal}%`;

    

}



function printme(){
    window.print();
}





