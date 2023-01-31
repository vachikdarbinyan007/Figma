let productsincart = 0;
let lowprice = 3;
let highprice = 999;
rrr.value = lowprice
let nowprice = rrr.value

lowestprice.innerHTML = lowprice + "&euro;"
highestprice.innerHTML = highprice + "&euro;"
nowestprice.innerHTML = nowprice + "%"



function changeprice() {
    from.value = rrr.value
    highprice = to.value
    lowestprice.innerHTML = lowprice + "&euro;"
    highestprice.innerHTML = highprice + "&euro;"
    nowestprice.innerHTML = nowprice + "%"
}

let popularwine = [
    {
        nam: "“Armenia” white dry wine",
        pic: "https://s3-alpha-sig.figma.com/img/b031/17ac/1c24e2215e023b5cc35470005e82e2a4?Expires=1674432000&Signature=Cw~x08fjjh6t4lCEkOPpuuY162bUiZO7EKMf4zrFOE6bwhFuiTSAOjAUmOaXsNBCmGfwPUGzcJ0MnYHQ6RgYf4rrN-KneTzajER0UWRhgxYni7KYSrAaHoBiFivFB2PRfBjHJBUYydSk-SUJRG0YsYaySz0tbYuVebpEACFZr-XLylnWAhVunCpxQ9XiDxkTIWL9-NIvXwHvOJlaysXkZuVQgT9hRBE7iOAyr9xhe~qK2dF-dTS78IxA04Iq7-v~Q2a-oUjb~cinRBvKdPilytk9j9ByIzTefU2OrEAjyyattME~ADAoP1zcrEvpZSBjo5iThzdWJtcm4Gad4fiP1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 5.59,
        to: 3.39,
        type: "dry",
        article: "000123",
        country: "Armenia",
        region: "Areni",
        manufacturer: "Koor Ltd",
        color: "Red",
        volume: "750ml",
        alc: "55%",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.  "

    },
    {
        nam: "“Armenia” rose sweet wine",
        pic: "https://s3-alpha-sig.figma.com/img/5594/6a77/e47dc3ea91765665d1eb27b52fb563a8?Expires=1674432000&Signature=PUcSX08nwyEG~ipPoCsXNc2d0OOjjLmcMU~~ijICVlQFftDWJIOoYoPYvSJlW~oYFvYH4F6A7b4g8IWzvN-aWFEDUYsNTwurBv3AgX82Fa-CnqCv0VnzfI-26J3olIJR-6ASkwl8K4IzNKcWjxu9FdEBOd9S3naAjFCC2WARm7R2g89F9eNpup82nlGGg5fKlxB2NyBONYhLoFWZOQK0QGYFHmTRIP4TkfCzab0DmHLgT7YEitCD0cXcAcHCtgVB1Cs~KjK-2kPf-z8qlSszH~JTZbpMFTUW22PVzSM~Y8qZ7yQGfL6AbMjC9wsCB~DxdlDTq9yVnkbGG662GpVrkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 0,
        from: 6.75,
        to: 6.75,
        type: "dry",
        brand: "Koor",
        article: "000123",
        country: "Armenia",
        region: "Areni",
        manufacturer: "XYX Ltd",
        color: "Red",
        volume: "750ml",
        alc: "55%",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.  "

    },
    {
        nam: "“Koor” red sweet wine",
        pic: "https://s3-alpha-sig.figma.com/img/219e/39a5/d3d2886d2d3a720f0d7db13733acb7e7?Expires=1674432000&Signature=Nq4vsN4OeeScQeHWjcckjp7b7wXwzJlZ8B~kCmLWP2Vl1cLavfymS5p5WGTLXxLr-NeFm0wlSaPGg7NiFHiSaby1XL1r5AD6IpUZC26w4wgnL4IZmx1xmQsGWV2LZfF-UsoM9ts33OQ~LyVIEBN2gsV2z2wtAEsOWEawBpUMZXED4Vw3fmYID~PQXXSZN1Mbz~mbSFIodyVIBymKmUJugPdUuAws5JyReIgoSYe1k9l~4Ngn8SziSOlLSzMiMgRW~0dVPa~FyyuVbrPjl0Ky5CpZ2XzLSWhIN0NAo2mx4r8T2rDvMxU1jC~8bBTQnyMrAjzdpRYPsoAIOBPk9JbG6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 9.50,
        to: 7.50,
        type: "sweet",
        brand: "Areni",
        article: "000123",
        country: "Armenia",
        region: "Areni",
        manufacturer: "Koor Ltd",
        color: "Red",
        volume: "750ml",
        alc: "55%",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.  "

    },
    {
        nam: "“Armenia” pomegrante",
        pic: "https://s3-alpha-sig.figma.com/img/17ac/697b/c8372ca9b873dbb81b030a9b4622691f?Expires=1674432000&Signature=VP0P-E7EoLL6YGSXI4A2wXkLZZm~I7Krs3bPGFXAg04DNHVgigzyUwMKYR6ZC5FMzLgw3eRlRx0ZP7B4pksp0Shy3QvSjvFxeEc8KXUqiiYZJyvFe40KjSJlgETcWwE7HTtia6WVZtInLsd2SGHl18dnUjuO88pV3DAFwJxKgaEY7vnNXDk73iFzB1nDI~Fe~JxomAoAv4axDpPLh8QQa-rdG2jsE80QiaV50SoOYEEVP-LikhJsDum8FOdaZcjMp1cRN7FfSYSpUTkcvNJDZLPgNhQCbwOxT98RNEktO5PrFyg-x1UJghNf2sqcNujYu-46YJGP~k0jrnCEaFy7uQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 5.99,
        to: 3.59,
        type: "semi_sweet",
        brand: "Tushpa",
        article: "000123",
        country: "Armenia",
        region: "Areni",
        manufacturer: "Koor Ltd",
        color: "Red",
        volume: "750ml",
        alc: "55%",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.  "

    },
    {
        nam: "“Karas” red wine",
        pic: "https://s3-alpha-sig.figma.com/img/ea8d/464a/b7ec84e3bac02db2254a5b0273703d39?Expires=1674432000&Signature=QEWYojNkpFKSftYSwDWwjbSsDtl3s0MzA0zbWMgtxrtLggQJHYmsbb4fptAmL80jiDkhlfgmVa4P6pTpPPqvHtotb-fcsWKZn6U95nx1TLKfL2oJbpspxYvN56zJj-VX4OFDfgMzsk1FUSJ-iI15zARZAfgWoDZnuOg0NuMjsWCAHzGzDfs-vaJ68Fvb9zsKPyc7GbBVlIVfy9XgnnPOvmb39IBwaBk211RZUmUEoor0Sgpc6NzSo-uv930yImoheTSIna7OhpmyYgoASiiQxUX3NZ34Wwq88TbLqi5Ki7w9cFooiDt5YVF6hOLq5gJBminw~yH7KYBk1~sG~tmXsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 5.59,
        to: 3.39,
        type: "fruit",
        brand: "Armenia_wines",
        article: "000123",
        country: "Armenia",
        region: "Areni",
        manufacturer: "Koor Ltd",
        color: "Red",
        volume: "750ml",
        alc: "55%",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.  "

    },
    {
        nam: "“Zorah” white dry wine",
        pic: "https://www.figma.com/file/uJ4WsRCjKbEiurexRsnfhp/image/140e2057a0ecc1a69e2626edd2086ffbc9adfac7",
        sale: 0,
        from: 6.75,
        to: 6.75,
        type: "dry",
        brand: "Zorah",
        article: "000123",
        country: "Armenia",
        region: "Areni",
        manufacturer: "Koor Ltd",
        color: "Red",
        volume: "750ml",
        alc: "55%",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.  "

    },
    {
        nam: "“Tushpa” white wine",
        pic: "https://s3-alpha-sig.figma.com/img/5420/db0e/45209d8085be0442e5a29c2961881052?Expires=1674432000&Signature=Rq19KVOEKUyk7hWouSSHyO0uBSsMWtMcnRR6CZyJ1jmDte7TWDLhpHfgYSi6vhpevBQ7JQp2cWpKbgftec5hh8QP~5MP-2Rh97Df5bJ4oSFVvCA1-DSZu9D6r0n7hNbbKt6hQyLugaxim-hkLhc6pIKHIhTl9LddNwDEU2GsOoZFYxIeFUcn36x-bKVRC3on5DYfu7TkZAh9EGIPOERP2SQdmclYEHnQziyOn8wZuKLc~Mef1ByyAepL2lZQynLLkDJ~jIWz69hNe6ri4xLDpALvIsX98K~DxZCAah8EenuVIZG7Ue489KaMGucQrAlYBNDM6y58uIilHTJFy5IpSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 9.50,
        to: 7.50,
        type: "sweet",
        brand: "Karas",
        article: "000123",
        country: "Armenia",
        region: "Areni",
        manufacturer: "Koor Ltd",
        color: "Red",
        volume: "750ml",
        alc: "55%",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.  "

    },
    {
        nam: "“Areni” Qoto red wine",
        pic: "https://s3-alpha-sig.figma.com/img/a629/810c/af000de832a516f802032e1cf25ea9e5?Expires=1674432000&Signature=SrHPBfd8Rcj2WzTk37hdCgbdBXkOGGLMW-XQwJFM-hp2wDQwm68fHn3-MT5zn3bGniyQjU~b-hPf9DOugqLR1hhFKjSJ5UMtyL2COm-YwClGPkPQEfmsoc~UNQwfS5jWpO4ayUQzk02DjEu0kcU7W9VubxscYHSqF~WD--ON-5RCdbnOIH-y3vv-gGdrN13JfJQ0y9WAcLzFpSjRk58XuuADuN7YtsR4K3fy8~8iwTFG0OK-YBr47Tp8fg7W2g6Q8EdEc8Z1asBT~K6iFD3j1aFR3ujJgO5n11lEm0PiEwn6tOBQvuphbpGzT3dZIKBA4ncwdJOR5fmSVNZvUGrZsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 5.99,
        to: 3.59,
        type: "semi_sweet",
        brand: "vedi_alco",
        article: "000123",
        country: "Armenia",
        region: "Areni",
        manufacturer: "Koor Ltd",
        color: "Red",
        volume: "750ml",
        alc: "55%",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.  "

    },
    {
        nam: "“XY” Qoto red wine",
        pic: "https://s3-alpha-sig.figma.com/img/a629/810c/af000de832a516f802032e1cf25ea9e5?Expires=1674432000&Signature=SrHPBfd8Rcj2WzTk37hdCgbdBXkOGGLMW-XQwJFM-hp2wDQwm68fHn3-MT5zn3bGniyQjU~b-hPf9DOugqLR1hhFKjSJ5UMtyL2COm-YwClGPkPQEfmsoc~UNQwfS5jWpO4ayUQzk02DjEu0kcU7W9VubxscYHSqF~WD--ON-5RCdbnOIH-y3vv-gGdrN13JfJQ0y9WAcLzFpSjRk58XuuADuN7YtsR4K3fy8~8iwTFG0OK-YBr47Tp8fg7W2g6Q8EdEc8Z1asBT~K6iFD3j1aFR3ujJgO5n11lEm0PiEwn6tOBQvuphbpGzT3dZIKBA4ncwdJOR5fmSVNZvUGrZsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 5.99,
        to: 3.59,
        type: "semi_sweet",
        brand: "vedi_alco",
        article: "000123",
        country: "Armenia",
        region: "Areni",
        manufacturer: "Koor Ltd",
        color: "Red",
        volume: "750ml",
        alc: "55%",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam varius. Etiam eu placerat libero.  "
    }
]

let xc = document.createElement("div")
maindiv.appendChild(xc)
xc.style.width = "100%"
xc.style.display = "none"

let mecdiv = document.createElement("div")
mecdiv.setAttribute("class", "mecdiv")
xc.appendChild(mecdiv)

let nkardiv = document.createElement("div")
nkardiv.setAttribute("class", "nkardiv")
mecdiv.appendChild(nkardiv)

let img = document.createElement("img")
img.style.height = "70%"
nkardiv.appendChild(img)

let infodiv = document.createElement("div")
infodiv.setAttribute("class", "infodiv")
mecdiv.appendChild(infodiv)

let ver = document.createElement("h2")
ver.style.color = "#A40D30"
infodiv.appendChild(ver)

let flexdiv = document.createElement("div")
flexdiv.setAttribute("class", "flexdiv")
infodiv.appendChild(flexdiv)

let infoul = document.createElement("ul")
infoul.setAttribute("class", "infoul")
flexdiv.appendChild(infoul)

let infoul2 = document.createElement("ul")
infoul2.setAttribute("class", "infoul")
flexdiv.appendChild(infoul2)

let articleli = document.createElement("li")
infoul.appendChild(articleli)

let countryli = document.createElement("li")
infoul.appendChild(countryli)

let regionli = document.createElement("li")
infoul.appendChild(regionli)

let manufacturerli = document.createElement("li")
infoul.appendChild(manufacturerli)

let colorli = document.createElement("li")
infoul2.appendChild(colorli)

let typeli = document.createElement("li")
infoul2.appendChild(typeli)

let volumeli = document.createElement("li")
infoul2.appendChild(volumeli)

let alcli = document.createElement("li")
infoul2.appendChild(alcli)

let gindiv = document.createElement("div")
gindiv.setAttribute("class", "gindiv")
infodiv.appendChild(gindiv)

let zeghjdiv = document.createElement("div")
zeghjdiv.setAttribute("class", "zeghjdiv")
gindiv.appendChild(zeghjdiv)

let normdiv = document.createElement("div")
normdiv.setAttribute("class", "zeghjdiv")
gindiv.appendChild(normdiv)

let ic = document.createElement("div")
normdiv.appendChild(ic)
ic.style.margin = "0px"
ic.style.fontFamily = "'Courier New'"
ic.style.fontSize = "1.5em"
ic.style.fontWeight = "bold"

let ci = document.createElement("div")
zeghjdiv.appendChild(ci)
ci.style.textDecoration = "line-through 1px #DA3D4E"
ci.style.margin = "0px"
ci.style.fontFamily = "'Courier New'"
ci.style.fontSize = "1.5em"
ci.style.fontWeight = "bold"

let tokos = document.createElement("div")
tokos.style.width = "1.625em"
tokos.style.height = "1em"
tokos.style.color = "white"
tokos.style.display = "flex"
tokos.style.textDecoration = "none"
tokos.style.justifyContent = "center"
tokos.style.alignItems = "center"
tokos.style.background = "#DA3D4E"
zeghjdiv.appendChild(tokos)

let button = document.createElement("button")
button.setAttribute("class", "btn")
button.innerHTML = "Add to cart"
button.onclick = function () {
    productsincart++
    cart.innerHTML = productsincart
}
infodiv.appendChild(button)

let descdiv = document.createElement("div")
descdiv.setAttribute("class", "descdiv")
infodiv.appendChild(descdiv)

let verdesc = document.createElement("h3")
verdesc.innerHTML = "Description"
descdiv.appendChild(verdesc)

let artdesc = document.createElement("article")
descdiv.appendChild(artdesc)

for (let i = 0; i < popularwine.length; i++) {


    //create div
    let slidediv = document.createElement("div")
    slidediv.setAttribute("class", "slidediv")
    slidediv.setAttribute("id", "pop" + i)
    slidediv.style.height = "22em"
    slidediv.style.background = "white"
    slidediv.style.display = "flex"
    slidediv.style.flexDirection = "column"
    slidediv.style.alignItems = "center"

    slidediv.onclick = function () {
        img.src = popularwine[i].pic
        ver.innerHTML = popularwine[i].nam
        grund.style.marginTop = "6rem"
        xc.style.display = "block"
        swipe.style.display = "block"
        aside.style.display = "none"
        maindiv.style.flexDirection = "column-reverse"
        maindiv.style.alignItems = "center"

        // article no.
        articleli.innerHTML = "Article:" + popularwine[i].article

        // country
        countryli.innerHTML = "Country:" + popularwine[i].country

        // Region
        regionli.innerHTML = "Region:" + popularwine[i].region

        // Manufacteurer
        manufacturerli.innerHTML = "Manufacturer:" + popularwine[i].manufacturer

        //colorli
        colorli.innerHTML = "Color:" + popularwine[i].color

        // typeli
        typeli.innerHTML = "Type:" + popularwine[i].type

        //volumeli
        volumeli.innerHTML = "Volume:" + popularwine[i].volume

        //alcli
        alcli.innerHTML = "Alcohol:" + popularwine[i].alc
        //to
        ic.innerHTML = popularwine[i].to + "$"

        // artdesc
        artdesc.innerHTML = popularwine[i].desc

        if (popularwine[i].sale > 0) {
            //tokos 
            tokos.innerHTML = popularwine[i].sale + "%"
            //from
            ci.innerHTML = popularwine[i].from + "$"
        } else {
            tokos.style.display = "none"
        }


    }
    grund.appendChild(slidediv)
    //create header
    let caption = document.createElement("h2")
    caption.innerHTML = popularwine[i].nam
    caption.style.color = "#A40D30"
    caption.style.fontSize = "16px"
    caption.fontWeight = "bold"
    slidediv.appendChild(caption)

    //create Alk. and ml span
    let span = document.createElement("span")
    span.innerHTML = "Alc 55%   0.75l"
    span.style.fontSize = "1.5vw"
    span.style.fontFamily = "'Courier New'"
    slidediv.appendChild(span)

    // img
    let imgg = document.createElement("img")
    imgg.src = popularwine[i].pic
    imgg.style.height = "12.063em"
    slidediv.appendChild(imgg)
    imgg.setAttribute("id", "pimg" + i)

    // create stars_div
    let starsdiv = document.createElement("div")
    starsdiv.style.width = "100%"
    starsdiv.style.display = "flex"
    starsdiv.style.justifyContent = "center"
    slidediv.appendChild(starsdiv)

    // create 5 stars
    for (let i = 0; i < 5; i++) {
        let star = document.createElement("i")
        star.style.color = "#A40D30"
        star.style.margin = "0px .3vw"
        star.setAttribute("class", "fa fa-star")
        starsdiv.appendChild(star)
    }

    //create price div
    let pricediv = document.createElement("div")
    pricediv.style.width = "80%"
    pricediv.style.height = "20%"
    pricediv.style.marginTop = "0.469em"
    pricediv.style.borderTop = "1px solid  #CCCCCC "
    slidediv.appendChild(pricediv)

    //create sale
    if (popularwine[i].sale > 0) {
        pricediv.style.display = "flex"
        pricediv.style.justifyContent = "space-between"
        pricediv.style.alignItems = "center"
        let nomprice = document.createElement("div")
        nomprice.style.width = "50%"
        nomprice.style.height = "100%"
        nomprice.style.display = "flex"
        nomprice.style.flexDirection = "column"
        nomprice.style.justifyContent = "center"
        pricediv.appendChild(nomprice)


        let salediv = document.createElement("div")
        salediv.style.width = "100%"
        salediv.style.height = "25%"
        salediv.style.display = "flex"
        nomprice.appendChild(salediv)

        let from = document.createElement("div")
        from.style.margin = "0px"
        from.style.textDecoration = "line-through 1px #DA3D4E"
        from.style.fontFamily = "'Courier New'"
        from.style.fontSize = "1.25em"
        from.innerHTML = popularwine[i].from + "$"
        salediv.appendChild(from)

        let prozentdiv = document.createElement("div")
        prozentdiv.style.width = "1.625em"
        prozentdiv.style.height = "1em"
        prozentdiv.style.color = "white"
        prozentdiv.style.display = "flex"
        prozentdiv.style.textDecoration = "none"
        prozentdiv.style.justifyContent = "center"
        prozentdiv.style.alignItems = "center"
        prozentdiv.style.background = "#DA3D4E"
        prozentdiv.innerHTML = popularwine[i].sale + "%"
        salediv.appendChild(prozentdiv)

        let to = document.createElement("div")
        to.style.margin = "0px"
        to.style.fontFamily = "'Courier New'"
        to.style.fontSize = "2em"
        to.style.fontWeight = "bold"
        to.innerHTML = popularwine[i].to + "$"
        nomprice.appendChild(to)

        let cartdiv = document.createElement("div")
        cartdiv.style.width = "50%"
        cartdiv.style.height = "100%"
        cartdiv.style.display = "flex"
        cartdiv.style.justifyContent = "right"
        cartdiv.style.alignItems = "center"
        pricediv.appendChild(cartdiv)

        let carticon = document.createElement("i")
        carticon.style.color = "#A40D30"
        carticon.style.fontSize = "2em"
        carticon.setAttribute("class", "fa fa-shopping-cart")
        cartdiv.appendChild(carticon)
        cartdiv.onclick = function () {
            productsincart++
            cart.innerHTML = productsincart
        }
    }
    else {
        pricediv.style.display = "flex"
        pricediv.style.justifyContent = "space-between"
        pricediv.style.alignItems = "center"
        let nomprice = document.createElement("div")
        nomprice.style.width = "50%"
        nomprice.style.height = "100%"
        nomprice.style.display = "flex"
        nomprice.style.flexDirection = "column"
        nomprice.style.justifyContent = "center"
        pricediv.appendChild(nomprice)


        let salediv = document.createElement("div")
        salediv.style.width = "100%"
        salediv.style.height = "25%"
        salediv.style.display = "flex"
        nomprice.appendChild(salediv)

        let to = document.createElement("div")
        to.style.margin = "0px"
        to.style.fontFamily = "'Courier New'"
        to.style.fontSize = "2em"
        to.style.fontWeight = "bold"
        to.innerHTML = popularwine[i].to + "$"
        nomprice.appendChild(to)

        let cartdiv = document.createElement("div")
        cartdiv.style.width = "50%"
        cartdiv.style.height = "100%"
        cartdiv.style.display = "flex"
        cartdiv.style.justifyContent = "right"
        cartdiv.style.alignItems = "center"
        pricediv.appendChild(cartdiv)

        let carticon = document.createElement("i")
        carticon.style.color = "#A40D30"
        carticon.style.fontSize = "2em"
        carticon.setAttribute("class", "fa fa-shopping-cart")
        cartdiv.appendChild(carticon)
        cartdiv.onclick = function () {
            productsincart++
            cart.innerHTML = productsincart
        }
    }
}


function x(){
    for (let i = 0; i < popularwine.length; i++) {
        // a
        let a = document.createElement("a")
        s.appendChild(a)
        a.setAttribute("class", "swiper-slide")
    
        //create div
        let slidediv = document.createElement("div")
        slidediv.setAttribute("class", "slidediv")
        slidediv.style.height = "25em"
        slidediv.style.background = "white"
        slidediv.style.display = "flex"
        slidediv.style.flexDirection = "column"
        slidediv.style.alignItems = "center"
    
    
        slidediv.onclick = function () {
            img.src = popularwine[i].pic
            ver.innerHTML = popularwine[i].nam
            grund.style.marginTop = "6rem"
            xc.style.display = "block"
            swipe.style.display = "block"
            aside.style.display = "none"
            maindiv.style.flexDirection = "column-reverse"
            maindiv.style.alignItems = "center"
    
            // article no.
            articleli.innerHTML = "Article:" + popularwine[i].article
    
            // country
            countryli.innerHTML = "Country:" + popularwine[i].country
    
            // Region
            regionli.innerHTML = "Region:" + popularwine[i].region
    
            // Manufacteurer
            manufacturerli.innerHTML = "Manufacturer:" + popularwine[i].manufacturer
    
            //colorli
            colorli.innerHTML = "Color:" + popularwine[i].color
    
            // typeli
            typeli.innerHTML = "Type:" + popularwine[i].type
    
            //volumeli
            volumeli.innerHTML = "Volume:" + popularwine[i].volume
    
            //alcli
            alcli.innerHTML = "Alcohol:" + popularwine[i].alc
            //to
            ic.innerHTML = popularwine[i].to + "$"
    
            // artdesc
            artdesc.innerHTML = popularwine[i].desc
    
            if (popularwine[i].sale > 0) {
                //tokos 
                tokos.innerHTML = popularwine[i].sale + "%"
                //from
                ci.innerHTML = popularwine[i].from + "$"
            } else {
                tokos.style.display = "none"
            }
    
    
        }
    
        a.appendChild(slidediv)
        //create header
        let caption = document.createElement("h2")
        caption.innerHTML = popularwine[i].nam
        caption.style.color = "#A40D30"
        slidediv.appendChild(caption)
    
        //create Alk. and ml span
        let span = document.createElement("span")
        span.innerHTML = "Alc 55%   0.75l"
        span.style.fontSize = "1.5vw"
        span.style.fontFamily = "'Courier New'"
        slidediv.appendChild(span)
    
        // img
        let imgg = document.createElement("img")
        imgg.src = popularwine[i].pic
        imgg.style.height = "12.063em"
        slidediv.appendChild(imgg)
        imgg.setAttribute("id", "pimg" + i)
    
        // create stars_div
        let starsdiv = document.createElement("div")
        starsdiv.style.width = "100%"
        starsdiv.style.display = "flex"
        starsdiv.style.justifyContent = "center"
        slidediv.appendChild(starsdiv)
    
        // create 5 stars
        for (let i = 0; i < 5; i++) {
            let star = document.createElement("i")
            star.style.color = "#A40D30"
            star.style.margin = "0px .3vw"
            star.setAttribute("class", "fa fa-star")
            starsdiv.appendChild(star)
        }
    
        //create price div
        let pricediv = document.createElement("div")
        pricediv.style.width = "80%"
        pricediv.style.height = "20%"
        pricediv.style.marginTop = "0.469em"
        pricediv.style.borderTop = "1px solid  #CCCCCC "
        slidediv.appendChild(pricediv)
    
        //create sale
        if (popularwine[i].sale > 0) {
            pricediv.style.display = "flex"
            pricediv.style.justifyContent = "space-between"
            pricediv.style.alignItems = "center"
            let nomprice = document.createElement("div")
            nomprice.style.width = "50%"
            nomprice.style.height = "100%"
            nomprice.style.display = "flex"
            nomprice.style.flexDirection = "column"
            nomprice.style.justifyContent = "center"
            pricediv.appendChild(nomprice)
    
    
            let salediv = document.createElement("div")
            salediv.style.width = "100%"
            salediv.style.height = "25%"
            salediv.style.display = "flex"
            nomprice.appendChild(salediv)
    
            let from = document.createElement("div")
            from.style.margin = "0px"
            from.style.textDecoration = "line-through 1px #DA3D4E"
            from.style.fontFamily = "'Courier New'"
            from.style.fontSize = "1.25em"
            from.innerHTML = popularwine[i].from + "$"
            salediv.appendChild(from)
    
            let prozentdiv = document.createElement("div")
            prozentdiv.style.width = "1.625em"
            prozentdiv.style.height = "1em"
            prozentdiv.style.color = "white"
            prozentdiv.style.display = "flex"
            prozentdiv.style.textDecoration = "none"
            prozentdiv.style.justifyContent = "center"
            prozentdiv.style.alignItems = "center"
            prozentdiv.style.background = "#DA3D4E"
            prozentdiv.innerHTML = popularwine[i].sale + "%"
            salediv.appendChild(prozentdiv)
    
            let to = document.createElement("div")
            to.style.margin = "0px"
            to.style.fontFamily = "'Courier New'"
            to.style.fontSize = "2em"
            to.style.fontWeight = "bold"
            to.innerHTML = popularwine[i].to + "$"
            nomprice.appendChild(to)
    
            let cartdiv = document.createElement("div")
            cartdiv.style.width = "50%"
            cartdiv.style.height = "100%"
            cartdiv.style.display = "flex"
            cartdiv.style.justifyContent = "right"
            cartdiv.style.alignItems = "center"
            pricediv.appendChild(cartdiv)
    
            let carticon = document.createElement("i")
            carticon.style.color = "#A40D30"
            carticon.style.fontSize = "2em"
            carticon.setAttribute("class", "fa fa-shopping-cart")
            cartdiv.appendChild(carticon)
            cartdiv.onclick = function () {
                productsincart++
                cart.innerHTML = productsincart
            }
        }
        else {
            pricediv.style.display = "flex"
            pricediv.style.justifyContent = "space-between"
            pricediv.style.alignItems = "center"
            let nomprice = document.createElement("div")
            nomprice.style.width = "50%"
            nomprice.style.height = "100%"
            nomprice.style.display = "flex"
            nomprice.style.flexDirection = "column"
            nomprice.style.justifyContent = "center"
            pricediv.appendChild(nomprice)
    
    
            let salediv = document.createElement("div")
            salediv.style.width = "100%"
            salediv.style.height = "25%"
            salediv.style.display = "flex"
            nomprice.appendChild(salediv)
    
            let to = document.createElement("div")
            to.style.margin = "0px"
            to.style.fontFamily = "'Courier New'"
            to.style.fontSize = "2em"
            to.style.fontWeight = "bold"
            to.innerHTML = popularwine[i].to + "$"
            nomprice.appendChild(to)
    
            let cartdiv = document.createElement("div")
            cartdiv.style.width = "50%"
            cartdiv.style.height = "100%"
            cartdiv.style.display = "flex"
            cartdiv.style.justifyContent = "right"
            cartdiv.style.alignItems = "center"
            pricediv.appendChild(cartdiv)
    
            let carticon = document.createElement("i")
            carticon.style.color = "#A40D30"
            carticon.style.fontSize = "2em"
            carticon.setAttribute("class", "fa fa-shopping-cart")
            cartdiv.appendChild(carticon)
            cartdiv.onclick = function () {
                productsincart++
                cart.innerHTML = productsincart
            }
        }
    }    
}
x()
// Filter 

let drychek = document.getElementById("drycheck")
function looktypedry() {
    if (drychek.checked) {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].type != "dry") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "none"
            }
        }
    } else {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].type != "dry") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "flex"
                g.style.flexDirection = "column"
            }
        }
    }
}



function looktypefruit() {
    if (fruitcheck.checked) {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].type != "fruit") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "none"
            }
        }
    } else {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].type != "fruit") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "flex"
            }
        }
    }

}


function looktypesemisweet() {
    if (semisweetcheck.checked) {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].type != "semi_sweet") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "none"
            }
        }
    } else {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].type != "semi_sweet") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "flex"
            }
        }
    }
}



function looktypesweet() {
    if (sweetcheck.checked) {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].type != "sweet") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "none"
            }
        }
    } else {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].type != "sweet") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "flex"
            }
        }
    }
}

// Filter 2.0
function lookvedi() {
    if (vedi.checked) {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].brand != "vedi_alco") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "none"
            }
        }
    } else {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].brand != "vedi_alco") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "flex"
            }
        }
    }
}


function lookkaras() {
    if (karas.checked) {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].brand != "Karas") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "none"
            }
        }
    } else {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].brand != "Karas") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "flex"
            }
        }
    }
}
function lookzorah() {
    if (zorah.checked) {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].brand != "Zorah") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "none"
            }
        }
    } else {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].brand != "Zorah") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "flex"
            }
        }
    }
}
function lookarmwin() {
    if (armwin.checked) {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].brand != "Armenia_wines") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "none"
            }
        }
    } else {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].brand != "Armenia_wines") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "flex"
            }
        }
    }
}

function looktushpa() {
    if (tushpa.checked) {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].brand != "Tushpa") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "none"
            }
        }
    } else {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].brand != "Tushpa") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "flex"
            }
        }
    }
}

function lookareni() {
    if (areni.checked) {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].brand != "Areni") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "none"
            }
        }
    } else {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].brand != "Areni") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "flex"
            }
        }
    }
}

function lookkoor() {
    if (koor.checked) {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].brand != "Koor") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "none"
            }
        }
    } else {
        for (let i = 0; i < popularwine.length; i++) {
            if (popularwine[i].brand != "Koor") {
                let z = "pop" + i
                let g = document.getElementById(z)
                g.style.display = "flex"
            }
        }
    }
}

rrr.oninput=function(){

    from.value = rrr.value
    highprice = to.value
    nowprice = rrr.value
    nowestprice.innerHTML = nowprice + "%"

    for (let i = 0; i < popularwine.length; i++) {
        if (popularwine[i].to < rrr.value) {
            let z = "pop" + i
            let g = document.getElementById(z)
            g.style.display = "none"
        }
    }
    for (let i = 0; i < popularwine.length; i++) {
        if (popularwine[i].to > rrr.value) {
            let z = "pop" + i
            let g = document.getElementById(z)
        g.style.display = "flex"

       }
    }
}
        

        
