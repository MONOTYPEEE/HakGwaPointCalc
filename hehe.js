const tinS = document.querySelectorAll(".gtdd");
const hkji = document.querySelectorAll(".hkji");
const text = document.querySelector(".onlyG");
const textC = document.querySelector(".chong");
let chong=0;
let hkjiPT=0;

function abcde(ab){
    switch(ab){
        case 'a': return 5;
        case 'b': return 4;
        case 'c': return 3;
        case 'd': return 2;
        case 'e': return 1;
        case '': return 0;
    }
} 
function paps(){
    if(hkji[6].value==1) return 50;
    else if(hkji[6].value==2) return 40;
    else if(hkji[6].value==3) return 30;
    else return 0;
    
}
function mountain(){
    if(hkji[7].checked){
        if(hkji[8].checked){
            return 50;
        }
        else{
            return 20;
        }
    }
    else{
        return 0;
    }
}
function isOver50(nm){
    if(nm<50) return nm;
    else if(nm>=50) return 50;
}
function toeikT(){
    const gt=hkji[3].value;
    if(gt>=900) return 70;
    else if(gt>=800) return 65;
    else if(gt>=700) return 60;
    else if(gt>=600) return 55;
    else if(gt>=540) return 50;
    else if(gt>=480) return 45;
    else if(gt>=420) return 40;
    else if(gt>=360) return 35;
    else if(gt>=280) return 30;
    else return 0;
}
function numberOrZero(num){
    if(isNaN(num)) return 0;
    else if(num<0) return 0;
    else return num;
}
function toeikSpkT(){
    if(hkji[5].value>=6) return 70;
    else if(hkji[5].value==5) return 60;
    else if(hkji[5].value>=4) return 50;
    else if(hkji[5].value>=3) return 40;
    else return 0;
}

function summer(){
    chong = 
    abcde(tinS[0].value)*2+//1학기
    abcde(tinS[1].value)*3+
    abcde(tinS[2].value)*3+
    abcde(tinS[3].value)*3+
    abcde(tinS[4].value)*3+
    abcde(tinS[5].value)*7+
    abcde(tinS[6].value)*4+
    abcde(tinS[7].value)*2+
    abcde(tinS[8].value)*3+

    abcde(tinS[9].value)*2+//2학기
    abcde(tinS[10].value)*3+
    abcde(tinS[11].value)*3+
    abcde(tinS[12].value)*3+
    abcde(tinS[13].value)*3+
    abcde(tinS[14].value)*4+
    abcde(tinS[15].value)*7+
    abcde(tinS[16].value)*2+
    abcde(tinS[17].value)*3;

    text.innerHTML = `총합 ${chong}/300점`;
    textC.innerHTML = `총 ${parseFloat((chong*0.7).toFixed(2))}점`
}
function summerGT(){
    console.log(
    (`${numberOrZero(hkji[0].value * 10)}  
${numberOrZero(isOver50((hkji[1].value-4) * 5))}  
${numberOrZero(isOver50((hkji[2].value-10) * 5))}
${numberOrZero(toeikT())}
${numberOrZero(toeikSpkT(hkji[5]))}
${numberOrZero(paps())}
${numberOrZero(mountain())}
${numberOrZero(hkji[9].value*20)}
${numberOrZero(hkji[10].value*30)}
${numberOrZero(hkji[11].value*50)}
${numberOrZero(hkji[12].value*30)}`)
    );
    hkjiPT = 
    (numberOrZero(hkji[0].value * 10)
    + numberOrZero(isOver50((hkji[1].value-4) * 5))
    + numberOrZero(isOver50((hkji[2].value-10) * 5))
    + numberOrZero(toeikT())
    + numberOrZero(toeikSpkT(hkji[5]))
    + numberOrZero(paps())
    + numberOrZero(mountain())
    + numberOrZero(hkji[9].value*20)
    + numberOrZero(hkji[10].value*30)
    + numberOrZero(hkji[11].value*50)
    + numberOrZero(hkji[12].value*30));

    document.querySelector("#fas").innerText = `${hkjiPT}점`
}

hkji.forEach(function(el){
    el.addEventListener('change',summerGT);
});
tinS.forEach(function(el){
    el.addEventListener('change',summer);
});