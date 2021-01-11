

export function show_category(){
    let buttons_category=document.getElementById("category")
    let nav_bar=document.getElementById('nav_bar')
    if (nav_bar.className==="nav_bar_on"){
        change_class(buttons_category,"category_off","category_on")
    }
};
export function hide_category(){
    let buttons_category=document.getElementById("category")
    change_class(buttons_category,"category_on","category_off")
};
export function change_class(iten,old_class,new_class){
    iten.classList.remove(old_class);
    iten.classList.add(new_class);
    return console.log(`class chenged in ${iten}`)
};
export function header_full(){
    let nav_bar=document.getElementById('nav_bar')
    let header=document.getElementById("div-header")
    let search_bar=document.getElementById("search_bar")
    change_class(header,"header_off","header_full")
    change_class(nav_bar,"nav_bar_off","nav_bar_on")
    change_class(search_bar,"search_bar_off","search_bar_full")


}
export function header_off(){
    let nav_bar=document.getElementById('nav_bar')
    let header=document.getElementById("div-header")
    let search_bar=document.getElementById("search_bar")
    change_class(header,"header_full","header_off")
    change_class(nav_bar,"nav_bar_on","nav_bar_off")
    change_class(search_bar,"search_bar_full","search_bar_off")
}
export function show_header(){
    if(this.pageYOffset===0 & this.innerWidth>1220){
        console.log("full")  
    };
}
export function hide_header(){
    let header=document.getElementById("header")
    if(this.pageYOffset>125 & header.className==="header_full"){
        console.log('off')
    }
}
window.onresize=function(){
    if (window.innerWidth<1220){
        header_off()
    }
    if(this.pageYOffset==0 & this.innerWidth>1220){
        header_full()
    };
};
window.onload=function(){
    if (this.innerWidth<1220){
        header_off()
    }else{
        header_full()
    }
    
};
