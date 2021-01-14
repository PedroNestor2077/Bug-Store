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

