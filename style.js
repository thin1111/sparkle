let navhide = () => {
    nav.classList.toggle('d-none');
    icon.classList.toggle('bx-x');
    icon1.classList.toggle('d-none');
}
let search = () => {
    searchicon.classList.toggle('d-none');
    icon1.classList.toggle('bx-x');

}
/---for filter/
// let models = [{ "brand": "rolex" }, { "brand": "cartier" }, { "brand": "iwc" }, { "brand": "timex" }, { "brand": "omega" }, { "brand": "mido" }, { "brand": "g-Shock" }, { "brand": "oris" }, { "brand": "seiko" }];

let arr = [{ "img": "rolexm1.avif", "view": "rolex", "model": "luxuary m1", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "rolexm2.avif", "view": "rolex", "model": "luxuary m2", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "rolexm3.avif", "view": "rolex", "model": "dress m3", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "rolexm4.avif", "view": "rolex", "model": "dress m4", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "rolexm5.avif", "view": "rolex", "model": "chronograph m5", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "rolexm6.avif", "view": "rolex", "model": "chronograph m6", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "rolexm7.avif", "view": "rolex", "model": "automatic m7", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "rolexm8.avif", "view": "rolex", "model": "automatic m8", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "cam2.avif", "view": "cartier", "model": "luxuary m9", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "cam3.avif", "view": "cartier", "model": "luxuary m10", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "cam4.avif", "view": "cartier", "model": "dress m11", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "cam5.avif", "view": "cartier", "model": "dress m12", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "cam6.avif", "view": "cartier", "model": "chronograph m13", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "cam7.avif", "view": "cartier", "model": "chronograph m14", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "cam8.avif", "view": "cartier", "model": "automatic m15", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "cam9.avif", "view": "cartier", "model": "automatic m16", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "iwcm1.avif", "view": "iwc", "model": "luxuary m17", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "iwcm2.avif", "view": "iwc", "model": "luxuary m18", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "iwcm3.avif", "view": "iwc", "model": "dress m19", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "iwcm4.avif", "view": "iwc", "model": "dress m20", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "iwcm5.avif", "view": "iwc", "model": "chronograph m21", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "iwcm6.avif", "view": "iwc", "model": "chronograph m22", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "iwcm7.avif", "view": "iwc", "model": "automatic m23", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "iwcm8.avif", "view": "iwc", "model": "automatic m24", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "TIMEXM1.avif", "view": "timex", "model": "luxuary m25", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "TIMEXM2.avif", "view": "timex", "model": "luxuary m26", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "TIMEX3.avif", "view": "timex", "model": "dress m27", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "TIMEXM4.avif", "view": "timex", "model": "dress m28", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "TIMEXM5.avif", "view": "timex", "model": "chronograph m29", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "TIMEXM6.avif", "view": "timex", "model": "chronograph m30", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "TIMEXM7.avif", "view": "timex", "model": "automatic m31", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "TIMEXM8.avif", "view": "timex", "model": "automatic m32", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "omegam1.avif", "view": "omega", "model": "luxuary m33", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "omegam2.avif", "view": "omega", "model": "luxuary m34", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "omegam3.avif", "view": "omega", "model": "dress m35", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "omegam4.avif", "view": "omega", "model": "dress m36", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "omegam5.avif", "view": "omega", "model": "chronograph m37", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "omegam6.avif", "view": "omega", "model": "chronograph m38", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "omegam7.avif", "view": "omega", "model": "automatic m39", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "omegam8.avif", "view": "omega", "model": "automatic m40", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "midom1.avif", "view": "mido", "model": "luxuary m41", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "midom2.avif", "view": "mido", "model": "luxuary m42", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "midom3.avif", "view": "mido", "model": "dress m43", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "midom4.avif", "view": "mido", "model": "dress m44", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "midom5.avif", "view": "mido", "model": "chronograph m45", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "midom6.avif", "view": "mido", "model": "chronograph m46", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "midom7.avif", "view": "mido", "model": "automatic m47", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "midom8.avif", "view": "mido", "model": "automatic m48", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "gm1.avif", "view": "g-shock", "model": "luxuary m49", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "gm2.avif", "view": "g-shock", "model": "luxuary m50", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "gm3.avif", "view": "g-shock", "model": "dress m51", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "gm4.avif", "view": "g-shock", "model": "dress m52", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "gm5.avif", "view": "g-shock", "model": "chronograph m53", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "gm6.avif", "view": "g-shock", "model": "chronograph m54", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "gm7.avif", "view": "g-shock", "model": "automatic m55", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "gm8.avif", "view": "g-shock", "model": "automatic m56", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "oricm1.avif", "view": "oris", "model": "luxuary m57", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "oricm2.avif", "view": "oris", "model": "luxuary m58", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "oricm3.avif", "view": "oris", "model": "dress m59", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "oricm4.avif", "view": "oris", "model": "dress m60", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "oricm5.avif", "view": "oris", "model": "chronograph m61", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "oricm6.avif", "view": "oris", "model": "chronograph m62", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "oricm7.avif", "view": "oris", "model": "automatic m63", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "oricm8.avif", "view": "oris", "model": "automatic m64", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "seikom1.avif", "view": "seiko", "model": "luxuary m65", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "seikom2.avif", "view": "seiko", "model": "luxuary m66", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "seikom3.avif", "view": "seiko", "model": "dress m67", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "seikom4.avif", "view": "seiko", "model": "dress m68", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "seikom5.avif", "view": "seiko", "model": "chronograph m69", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "seikom6.avif", "view": "seiko", "model": "chronograph m70", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "seikom7.avif", "view": "seiko", "model": "automatic m71", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "seikom8.avif", "view": "seiko", "model": "automatic m72", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" }

];




let watch1 = arr;
// let watchcount = watch1.length / 9;
// let c = 1;


let show = () => {

    for (r = 0; r < watch1.length; r++) {
        // alert(("arr" + i).length);
        let cold = document.createElement("div");
        cold.classList.add("col-lg-3", "col-md-4", "col-6", "text-center", "my-3");

        let d = document.createElement("div");
        d.classList.add("new-product");

        let image = document.createElement("img");
        image.src = "imagesForWatch/" + watch1[r].img;
        image.classList.add("img-fluid", "mt-3")

        let btnview = document.createElement("button");
        btnview.innerHTML = watch1[r].view;
        btnview.classList.add("fs-quick");

        let h6 = document.createElement("h6");
        h6.innerHTML = watch1[r].model;
        h6.classList.add("text-uppercase");


        let spans = document.createElement("span");
        spans.innerHTML = watch1[r].sale;
        spans.classList.add("fs-sale");

        let br = document.createElement("br");

        let spanl = document.createElement("span");
        spanl.innerHTML = watch1[r].list;
        spanl.classList.add("fs-list");

        let spanlp = document.createElement("span");
        spanlp.innerHTML = watch1[r].lp;
        spanlp.classList.add("text-decoration-line-through", "fs-list");

        let btn = document.createElement("div");
        btn.innerHTML = "<button onclick='addtocart(this);' class='foodbtn fs-btn btn btn-sm'>add to cart</button>";
        // btn.classList.add("fs-btn", "btn", "btn-sm");

        d.appendChild(image);
        d.appendChild(btnview);
        d.appendChild(h6);
        d.appendChild(spans);
        d.appendChild(br);
        d.appendChild(spanl);
        d.appendChild(spanlp);
        d.appendChild(btn);

        cold.appendChild(d);
        mynew.appendChild(cold);

        // rowd.appendChild(cold);


    }



}



/----for women----/


let arrW = [{ "img": "rolexw1.avif", "view": "rolex", "model": "luxuary w1", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "rolexw2.avif", "view": "rolex", "model": "luxuary w2", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "rolexw3.avif", "view": "rolex", "model": "dress w3", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "rolexw4.avif", "view": "rolex", "model": "dress w4", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "rolexw5.avif", "view": "rolex", "model": "chronograph w5", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "rolexw6.avif", "view": "rolex", "model": "chronograph w6", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "rolexw7.avif", "view": "rolex", "model": "automatic w7", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "rolexw8.avif", "view": "rolex", "model": "automatic w8", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "carw1.avif", "view": "cartier", "model": "luxuary w9", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "carw2.avif", "view": "cartier", "model": "luxuary w10", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "carw3.avif", "view": "cartier", "model": "dress w11", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "carw4.avif", "view": "cartier", "model": "dress w12", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "carw5.avif", "view": "cartier", "model": "chronograph w13", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "carw6.avif", "view": "cartier", "model": "chronograph w14", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "carw7.avif", "view": "cartier", "model": "automatic w15", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "carw8.avif", "view": "cartier", "model": "automatic w16", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "iwcw1.avif", "view": "iwc", "model": "luxuary w17", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "iwcw2.avif", "view": "iwc", "model": "luxuary w18", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "iwcw3.avif", "view": "iwc", "model": "dress w19", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "iwcw4.avif", "view": "iwc", "model": "dress w20", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "iwcw5.avif", "view": "iwc", "model": "chronograph w21", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "iwcw6.avif", "view": "iwc", "model": "chronograph w22", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "iwcw7.avif", "view": "iwc", "model": "automatic w23", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "iwcw8.avif", "view": "iwc", "model": "automatic w24", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "timexw1.avif", "view": "timex", "model": "luxuary w25", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "timexw2.avif", "view": "timex", "model": "luxuary w26", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "timexw3.avif", "view": "timex", "model": "dress w27", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "timexw4.avif", "view": "timex", "model": "dress w28", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "timexw5.avif", "view": "timex", "model": "chronograph w29", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "timexw6.avif", "view": "timex", "model": "chronograph w30", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "timexw7.avif", "view": "timex", "model": "automatic w31", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "timexw8.avif", "view": "timex", "model": "automatic w32", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "omegaw1.avif", "view": "omega", "model": "luxuary w33", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "omegaw2.avif", "view": "omega", "model": "luxuary w34", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "omegaw3.avif", "view": "omega", "model": "dress w35", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "omegaw4.avif", "view": "omega", "model": "dress w36", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "omegaw5.avif", "view": "omega", "model": "chronograph w37", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "omegaw6.avif", "view": "omega", "model": "chronograph w38", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "omegaw7.avif", "view": "omega", "model": "automatic w39", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "omegaw8.avif", "view": "omega", "model": "automatic w40", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "midow1.avif", "view": "mido", "model": "luxuary w41", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "midow2.avif", "view": "mido", "model": "luxuary w42", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "midow3.avif", "view": "mido", "model": "dress w43", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "midow4.avif", "view": "mido", "model": "dress w44", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "midow5.avif", "view": "mido", "model": "chronograph w45", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "midow6.avif", "view": "mido", "model": "chronograph w46", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "midow7.avif", "view": "mido", "model": "automatic w47", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "midow8.avif", "view": "mido", "model": "automatic w48", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "gw1.avif", "view": "g-shock", "model": "luxuary w49", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "gw2.avif", "view": "g-shock", "model": "luxuary w50", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "gw3.avif", "view": "g-shock", "model": "dress w51", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "gw4.avif", "view": "g-shock", "model": "dress w52", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "gw5.avif", "view": "g-shock", "model": "chronograph w53", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "gw6.avif", "view": "g-shock", "model": "chronograph w54", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "gw7.avif", "view": "g-shock", "model": "automatic mw5", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "gw8.avif", "view": "g-shock", "model": "automatic w56", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "oricw1.avif", "view": "oris", "model": "luxuary w57", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "oricw2.avif", "view": "oris", "model": "luxuary w58", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "oricw3.avif", "view": "oris", "model": "dress w59", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "oricw4.avif", "view": "oris", "model": "dress w60", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "oricw5.avif", "view": "oris", "model": "chronograph w61", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "oricw6.avif", "view": "oris", "model": "chronograph w62", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "oricw7.avif", "view": "oris", "model": "automatic w63", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "oricw8.avif", "view": "oris", "model": "automatic w64", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "seikow1.avif", "view": "seiko", "model": "luxuary w65", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "seikow2.avif", "view": "seiko", "model": "luxuary w66", "sale": "sale price : 70000", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "seikow3.avif", "view": "seiko", "model": "dress w67", "sale": "sale price : 80000", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "seikow4.avif", "view": "seiko", "model": "dress w68", "sale": "sale price : 100000", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "seikow5.avif", "view": "seiko", "model": "chronograph w69", "sale": "sale price : 60000", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "seikow6.avif", "view": "seiko", "model": "chronograph w70", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "seikow7.avif", "view": "seiko", "model": "automatic w71", "sale": "sale price : 50000", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "seikow8.avif", "view": "seiko", "model": "automatic w72", "sale": "sale price : 40000", "list": "list price :", "lp": 55000, "cart": "add to cart" }

];




let watch2 = arrW;
// let watchcount = watch1.length / 9;
// let c = 1;


let showW = () => {

    for (r = 0; r < watch2.length; r++) {
        // alert(("arr" + i).length);
        let cold = document.createElement("div");
        cold.classList.add("col-lg-3", "col-md-4", "col-6", "text-center", "my-3");

        let d = document.createElement("div");
        d.classList.add("new-product");

        let image = document.createElement("img");
        image.src = "imagesForWatch/" + watch2[r].img;
        image.classList.add("img-fluid", "mt-3")

        let btnview = document.createElement("button");
        btnview.innerHTML = watch2[r].view;
        btnview.classList.add("fs-quick");

        let h6 = document.createElement("h6");
        h6.innerHTML = watch2[r].model;
        h6.classList.add("text-uppercase");


        let spans = document.createElement("span");
        spans.innerHTML = watch2[r].sale;
        spans.classList.add("fs-sale");

        let br = document.createElement("br");

        let spanl = document.createElement("span");
        spanl.innerHTML = watch2[r].list;
        spanl.classList.add("fs-list");

        let spanlp = document.createElement("span");
        spanlp.innerHTML = watch2[r].lp;
        spanlp.classList.add("text-decoration-line-through", "fs-list");

        let btn = document.createElement("div");
        btn.innerHTML = "<button onclick='addtocart(this);' class='foodbtn fs-btn btn btn-sm'>add to cart</button>";
        // btn.classList.add("fs-btn", "btn", "btn-sm");

        d.appendChild(image);
        d.appendChild(btnview);
        d.appendChild(h6);
        d.appendChild(spans);
        d.appendChild(br);
        d.appendChild(spanl);
        d.appendChild(spanlp);
        d.appendChild(btn);

        cold.appendChild(d);
        mynew.appendChild(cold);

        // rowd.appendChild(cold);


    }



}

let watchfilter1 = (e) => {
    let txt = e.value;
    watch2 = arr.filter((item, index, array) => {
        if (item.model.includes(txt) || item.view.includes(txt))
            return true;
    });
    mynew.innerHTML = "";
    showW();

}




let watchfilter = (e) => {
    let txt = e.value;
    watch1 = arr.filter((item, index, array) => {
        if (item.model.includes(txt) || item.view.includes(txt))
            return true;
    });
    mynew.innerHTML = "";
    show();

}


/---for new pages/



let arrN = [{ "img": "rolex1.avif", "view": "rolex", "model": "luxuary n1", "sale": "sale price : 50000", "par": "new", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "rolex2.avif", "view": "rolex", "model": "luxuary n2", "sale": "sale price : 70000", "par": "new", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "rolex9.avif", "view": "rolex", "model": "dress n3", "sale": "sale price : 80000", "par": "new", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "rolex5.avif", "view": "rolex", "model": "dress n4", "sale": "sale price : 100000", "par": "new", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "carw5.avif", "view": "cartier", "model": "chronograph n5", "sale": "sale price : 60000", "par": "new", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "cam5.avif", "view": "cartier", "model": "chronograph n6", "sale": "sale price : 50000", "par": "new", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "cam3.avif", "view": "cartier", "model": "automatic n7", "sale": "sale price : 50000", "par": "new", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "carw1.avif", "view": "cartier", "model": "automatic n8", "sale": "sale price : 40000", "par": "new", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "iwcm1.avif", "view": "iwc", "model": "luxuary n9", "sale": "sale price : 50000", "par": "new", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "iwcm2.avif", "view": "iwc", "model": "luxuary n10", "sale": "sale price : 70000", "par": "new", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "iwcw3.avif", "view": "iwc", "model": "dress n11", "sale": "sale price : 80000", "par": "new", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "iwcw4.avif", "view": "iwc", "model": "dress n12", "sale": "sale price : 100000", "par": "new", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "timexw1.avif", "view": "timex", "model": "chronograph n13", "sale": "sale price : 60000", "par": "new", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "timexw2.avif", "view": "timex", "model": "chronograph n4", "sale": "sale price : 50000", "par": "new", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "timexw3.avif", "view": "timex", "model": "automatic n15", "sale": "sale price : 50000", "par": "new", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "timexw4.avif", "view": "timex", "model": "automatic n16", "sale": "sale price : 40000", "par": "new", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "omegam1.avif", "view": "omega", "model": "luxuary n17", "sale": "sale price : 50000", "par": "new", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "omegam2.avif", "view": "omega", "model": "luxuary n18", "sale": "sale price : 70000", "par": "new", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "omegam5.avif", "view": "omega", "model": "dress n19", "sale": "sale price : 80000", "par": "new", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "midow4.avif", "view": "mido", "model": "dress n20", "sale": "sale price : 100000", "par": "new", "list": "list price :", "lp": 150000, "cart": "add to cart" },
    { "img": "midow5.avif", "view": "mido", "model": "chronograph n21", "sale": "sale price : 60000", "par": "new", "list": "list price :", "lp": 65000, "cart": "add to cart" },
    { "img": "midow6.avif", "view": "mido", "model": "chronograph n22", "sale": "sale price : 50000", "par": "new", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "gw7.avif", "view": "g-shock", "model": "automatic n23", "sale": "sale price : 50000", "par": "new", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "gw8.avif", "view": "g-shock", "model": "automatic n24", "sale": "sale price : 40000", "par": "new", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "oricm7.avif", "view": "oris", "model": "luxuary n25", "sale": "sale price : 50000", "par": "new", "list": "list price :", "lp": 55000, "cart": "add to cart" },
    { "img": "seikow2.avif", "view": "seiko", "model": "luxuary n26", "sale": "sale price : 70000", "par": "new", "list": "list price :", "lp": 75000, "cart": "add to cart" },
    { "img": "seikow3.avif", "view": "seiko", "model": "dress n27", "sale": "sale price : 80000", "par": "new", "list": "list price :", "lp": 85000, "cart": "add to cart" },
    { "img": "seikow4.avif", "view": "seiko", "model": "dress n28", "sale": "sale price : 100000", "par": "new", "list": "list price :", "lp": 150000, "cart": "add to cart" },


];




let watch3 = arrN;
// let watchcount = watch1.length / 9;
// let c = 1;


let showN = () => {

    for (r = 0; r < watch3.length; r++) {
        // alert(("arr" + i).length);
        let cold = document.createElement("div");
        cold.classList.add("col-lg-3", "col-md-4", "col-6", "text-center", "my-3");

        let d = document.createElement("div");
        d.classList.add("new-product", "position-relative");

        let image = document.createElement("img");
        image.src = "imagesForWatch/" + watch3[r].img;
        image.classList.add("img-fluid", "mt-3")

        let btnview = document.createElement("button");
        btnview.innerHTML = watch3[r].view;
        btnview.classList.add("fs-quick");

        let h6 = document.createElement("h6");
        h6.innerHTML = watch3[r].model;
        h6.classList.add("text-uppercase");


        let spans = document.createElement("span");
        spans.innerHTML = watch3[r].sale;
        spans.classList.add("fs-sale");

        let pn = document.createElement("p");
        pn.innerHTML = watch3[r].par;
        pn.classList.add("position-absolute", "top-0", "end-0", "fs-new", "mx-3", "mt-2", "me-1");

        let br = document.createElement("br");

        let spanl = document.createElement("span");
        spanl.innerHTML = watch3[r].list;
        spanl.classList.add("fs-list");

        let spanlp = document.createElement("span");
        spanlp.innerHTML = watch3[r].lp;
        spanlp.classList.add("text-decoration-line-through", "fs-list");

        let btn = document.createElement("div");
        btn.innerHTML = "<button onclick='addtocart(this);' class='foodbtn fs-btn btn btn-sm'>add to cart</button>";
        // btn.classList.add("fs-btn", "btn", "btn-sm");

        d.appendChild(image);
        d.appendChild(btnview);
        d.appendChild(h6);
        d.appendChild(spans);
        d.appendChild(pn);
        d.appendChild(br);
        d.appendChild(spanl);
        d.appendChild(spanlp);
        d.appendChild(btn);

        cold.appendChild(d);
        mynew.appendChild(cold);

        // rowd.appendChild(cold);


    }



}

let watchfilter2 = (e) => {
    let txt = e.value;
    watch2 = arr.filter((item, index, array) => {
        if (item.model.includes(txt) || item.view.includes(txt))
            return true;
    });
    mynew.innerHTML = "";
    showW();

}




let addtocart = (e) => {
    let setparent = e.parentNode.parentNode;
    let carr = setparent.children;
    // alert(carr.length);

    let img = carr[0].src;
    let name = carr[2].innerHTML;
    let price = carr[3].innerHTML;
    // let qty = 1;
    // let qty = "";
    price = price.replace("sale price :", "");

    let item = { iimage: img, iname: name, iprice: price, qty: 1 };
    // alert(item.iimage + ":" + item.iname + ":" + item.iprice);

    if (sessionStorage.getItem("items") == null) {
        let arr = [item];
        let str = JSON.stringify(arr);
        sessionStorage.setItem("items", str);
        hideshow();
        count.innerHTML = 1;
    } else {
        let str = sessionStorage.getItem("items");
        let arr = JSON.parse(str);
        arr[arr.length] = item;
        hideshow();
        count.innerHTML = arr.length;
        str = JSON.stringify(arr);
        sessionStorage.setItem("items", str);
    }

}


let hideshow = () => {
    if (count.classList.contains("hide"))
        count.classList.remove("hide");
    if (!count.classList.contains("show"))
        count.classList.add("show");
}