let input=document.querySelector("#input1");
        let ac=document.querySelector("#ac");
        let del=document.querySelector("#del");
        let mod=document.querySelector("#mod");
        let floor=document.querySelector("#floor");
        let a=document.querySelector("#no0");
        let b=document.querySelector("#no1");
        let c=document.querySelector("#no2");
        let d=document.querySelector("#no3");
        let e=document.querySelector("#no4");
        let f=document.querySelector("#no5");
        let g=document.querySelector("#no6");
        let h=document.querySelector("#no7");
        let i=document.querySelector("#no8");
        let j=document.querySelector("#no9");
        let div=document.querySelector("#div");
        let mul=document.querySelector("#mul");
        let plus=document.querySelector("#plus");
        let min=document.querySelector("#min");
        let dot=document.querySelector("#dot");
        let eq=document.querySelector("#eq");
        a.addEventListener("click",()=>{ input.value+="0" });
        b.addEventListener("click",()=>{ input.value+="1" });
        c.addEventListener("click",()=>{ input.value+="2" });
        d.addEventListener("click",()=>{ input.value+="3" });
        e.addEventListener("click",()=>{ input.value+="4" });
        f.addEventListener("click",()=>{ input.value+="5" });
        g.addEventListener("click",()=>{ input.value+="6" });
        h.addEventListener("click",()=>{ input.value+="7" });
        i.addEventListener("click",()=>{ input.value+="8" });
        j.addEventListener("click",()=>{ input.value+="9" });
        div.addEventListener("click",()=>{ input.value+="/" });
        mul.addEventListener("click",()=>{ input.value+="*" });
        plus.addEventListener("click",()=>{ input.value+="+" });
        min.addEventListener("click",()=>{ input.value+="-" });
        dot.addEventListener("click",()=>{ input.value+="." });
        mod.addEventListener("click",()=>{ input.value+="%"});
        floor.addEventListener("click",()=>{ input.value+="/"});
        ac.addEventListener("click",()=>{ input.value=" "});
        del.addEventListener("click",()=>{ input.value=input.value.substr(0,input.value.length-1)});
        eq.addEventListener("click",()=>{input.value=eval(input.value)});