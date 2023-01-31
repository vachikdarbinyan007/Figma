let productsincart = 0
cart.innerHTML = productsincart
let popularwine = [
    {
        nam: "“Armenia” white dry wine",
        pic: "https://s3-alpha-sig.figma.com/img/b031/17ac/1c24e2215e023b5cc35470005e82e2a4?Expires=1674432000&Signature=Cw~x08fjjh6t4lCEkOPpuuY162bUiZO7EKMf4zrFOE6bwhFuiTSAOjAUmOaXsNBCmGfwPUGzcJ0MnYHQ6RgYf4rrN-KneTzajER0UWRhgxYni7KYSrAaHoBiFivFB2PRfBjHJBUYydSk-SUJRG0YsYaySz0tbYuVebpEACFZr-XLylnWAhVunCpxQ9XiDxkTIWL9-NIvXwHvOJlaysXkZuVQgT9hRBE7iOAyr9xhe~qK2dF-dTS78IxA04Iq7-v~Q2a-oUjb~cinRBvKdPilytk9j9ByIzTefU2OrEAjyyattME~ADAoP1zcrEvpZSBjo5iThzdWJtcm4Gad4fiP1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 5.59,
        to: 3.39,
    },
    {
        nam: "“Armenia” rose sweet wine",
        pic: "https://s3-alpha-sig.figma.com/img/5594/6a77/e47dc3ea91765665d1eb27b52fb563a8?Expires=1674432000&Signature=PUcSX08nwyEG~ipPoCsXNc2d0OOjjLmcMU~~ijICVlQFftDWJIOoYoPYvSJlW~oYFvYH4F6A7b4g8IWzvN-aWFEDUYsNTwurBv3AgX82Fa-CnqCv0VnzfI-26J3olIJR-6ASkwl8K4IzNKcWjxu9FdEBOd9S3naAjFCC2WARm7R2g89F9eNpup82nlGGg5fKlxB2NyBONYhLoFWZOQK0QGYFHmTRIP4TkfCzab0DmHLgT7YEitCD0cXcAcHCtgVB1Cs~KjK-2kPf-z8qlSszH~JTZbpMFTUW22PVzSM~Y8qZ7yQGfL6AbMjC9wsCB~DxdlDTq9yVnkbGG662GpVrkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 0,
        from: 6.75,
        to: 6.75,
    },
    {
        nam: "“Koor” red sweet wine",
        pic: "https://s3-alpha-sig.figma.com/img/219e/39a5/d3d2886d2d3a720f0d7db13733acb7e7?Expires=1674432000&Signature=Nq4vsN4OeeScQeHWjcckjp7b7wXwzJlZ8B~kCmLWP2Vl1cLavfymS5p5WGTLXxLr-NeFm0wlSaPGg7NiFHiSaby1XL1r5AD6IpUZC26w4wgnL4IZmx1xmQsGWV2LZfF-UsoM9ts33OQ~LyVIEBN2gsV2z2wtAEsOWEawBpUMZXED4Vw3fmYID~PQXXSZN1Mbz~mbSFIodyVIBymKmUJugPdUuAws5JyReIgoSYe1k9l~4Ngn8SziSOlLSzMiMgRW~0dVPa~FyyuVbrPjl0Ky5CpZ2XzLSWhIN0NAo2mx4r8T2rDvMxU1jC~8bBTQnyMrAjzdpRYPsoAIOBPk9JbG6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 9.50,
        to: 7.50,
    },
    {
        nam: "“Armenia” pomegrante",
        pic: "https://s3-alpha-sig.figma.com/img/17ac/697b/c8372ca9b873dbb81b030a9b4622691f?Expires=1674432000&Signature=VP0P-E7EoLL6YGSXI4A2wXkLZZm~I7Krs3bPGFXAg04DNHVgigzyUwMKYR6ZC5FMzLgw3eRlRx0ZP7B4pksp0Shy3QvSjvFxeEc8KXUqiiYZJyvFe40KjSJlgETcWwE7HTtia6WVZtInLsd2SGHl18dnUjuO88pV3DAFwJxKgaEY7vnNXDk73iFzB1nDI~Fe~JxomAoAv4axDpPLh8QQa-rdG2jsE80QiaV50SoOYEEVP-LikhJsDum8FOdaZcjMp1cRN7FfSYSpUTkcvNJDZLPgNhQCbwOxT98RNEktO5PrFyg-x1UJghNf2sqcNujYu-46YJGP~k0jrnCEaFy7uQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 5.99,
        to: 3.59,
    },
    {
        nam: "“Karas” red wine",
        pic: "https://s3-alpha-sig.figma.com/img/ea8d/464a/b7ec84e3bac02db2254a5b0273703d39?Expires=1674432000&Signature=QEWYojNkpFKSftYSwDWwjbSsDtl3s0MzA0zbWMgtxrtLggQJHYmsbb4fptAmL80jiDkhlfgmVa4P6pTpPPqvHtotb-fcsWKZn6U95nx1TLKfL2oJbpspxYvN56zJj-VX4OFDfgMzsk1FUSJ-iI15zARZAfgWoDZnuOg0NuMjsWCAHzGzDfs-vaJ68Fvb9zsKPyc7GbBVlIVfy9XgnnPOvmb39IBwaBk211RZUmUEoor0Sgpc6NzSo-uv930yImoheTSIna7OhpmyYgoASiiQxUX3NZ34Wwq88TbLqi5Ki7w9cFooiDt5YVF6hOLq5gJBminw~yH7KYBk1~sG~tmXsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 5.59,
        to: 3.39,
    },
    {
        nam: "“Zorah” white dry wine",
        pic: "https://www.figma.com/file/uJ4WsRCjKbEiurexRsnfhp/image/140e2057a0ecc1a69e2626edd2086ffbc9adfac7",
        sale: 0,
        from: 6.75,
        to: 6.75,
    },
    {
        nam: "“Tushpa” white wine",
        pic: "https://s3-alpha-sig.figma.com/img/5420/db0e/45209d8085be0442e5a29c2961881052?Expires=1674432000&Signature=Rq19KVOEKUyk7hWouSSHyO0uBSsMWtMcnRR6CZyJ1jmDte7TWDLhpHfgYSi6vhpevBQ7JQp2cWpKbgftec5hh8QP~5MP-2Rh97Df5bJ4oSFVvCA1-DSZu9D6r0n7hNbbKt6hQyLugaxim-hkLhc6pIKHIhTl9LddNwDEU2GsOoZFYxIeFUcn36x-bKVRC3on5DYfu7TkZAh9EGIPOERP2SQdmclYEHnQziyOn8wZuKLc~Mef1ByyAepL2lZQynLLkDJ~jIWz69hNe6ri4xLDpALvIsX98K~DxZCAah8EenuVIZG7Ue489KaMGucQrAlYBNDM6y58uIilHTJFy5IpSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 9.50,
        to: 7.50,
    },
    {
        nam: "“Areni” Qoto red wine",
        pic: "https://s3-alpha-sig.figma.com/img/a629/810c/af000de832a516f802032e1cf25ea9e5?Expires=1674432000&Signature=SrHPBfd8Rcj2WzTk37hdCgbdBXkOGGLMW-XQwJFM-hp2wDQwm68fHn3-MT5zn3bGniyQjU~b-hPf9DOugqLR1hhFKjSJ5UMtyL2COm-YwClGPkPQEfmsoc~UNQwfS5jWpO4ayUQzk02DjEu0kcU7W9VubxscYHSqF~WD--ON-5RCdbnOIH-y3vv-gGdrN13JfJQ0y9WAcLzFpSjRk58XuuADuN7YtsR4K3fy8~8iwTFG0OK-YBr47Tp8fg7W2g6Q8EdEc8Z1asBT~K6iFD3j1aFR3ujJgO5n11lEm0PiEwn6tOBQvuphbpGzT3dZIKBA4ncwdJOR5fmSVNZvUGrZsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 5.99,
        to: 3.59,
    }
]





let costumer_favorites = [
    {
        nam: "“Karas” red wine",
        pic: "https://s3-alpha-sig.figma.com/img/ea8d/464a/b7ec84e3bac02db2254a5b0273703d39?Expires=1674432000&Signature=QEWYojNkpFKSftYSwDWwjbSsDtl3s0MzA0zbWMgtxrtLggQJHYmsbb4fptAmL80jiDkhlfgmVa4P6pTpPPqvHtotb-fcsWKZn6U95nx1TLKfL2oJbpspxYvN56zJj-VX4OFDfgMzsk1FUSJ-iI15zARZAfgWoDZnuOg0NuMjsWCAHzGzDfs-vaJ68Fvb9zsKPyc7GbBVlIVfy9XgnnPOvmb39IBwaBk211RZUmUEoor0Sgpc6NzSo-uv930yImoheTSIna7OhpmyYgoASiiQxUX3NZ34Wwq88TbLqi5Ki7w9cFooiDt5YVF6hOLq5gJBminw~yH7KYBk1~sG~tmXsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 5.59,
        to: 3.39,
    },
    {
        nam: "“Zorah” white dry wine",
        pic: "https://www.figma.com/file/uJ4WsRCjKbEiurexRsnfhp/image/140e2057a0ecc1a69e2626edd2086ffbc9adfac7",
        sale: 0,
        from: 6.75,
        to: 6.75,
    },
    {
        nam: "“Tushpa” white wine",
        pic: "https://s3-alpha-sig.figma.com/img/5420/db0e/45209d8085be0442e5a29c2961881052?Expires=1674432000&Signature=Rq19KVOEKUyk7hWouSSHyO0uBSsMWtMcnRR6CZyJ1jmDte7TWDLhpHfgYSi6vhpevBQ7JQp2cWpKbgftec5hh8QP~5MP-2Rh97Df5bJ4oSFVvCA1-DSZu9D6r0n7hNbbKt6hQyLugaxim-hkLhc6pIKHIhTl9LddNwDEU2GsOoZFYxIeFUcn36x-bKVRC3on5DYfu7TkZAh9EGIPOERP2SQdmclYEHnQziyOn8wZuKLc~Mef1ByyAepL2lZQynLLkDJ~jIWz69hNe6ri4xLDpALvIsX98K~DxZCAah8EenuVIZG7Ue489KaMGucQrAlYBNDM6y58uIilHTJFy5IpSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 9.50,
        to: 7.50,
    },
    {
        nam: "“Areni” Qoto red wine",
        pic: "https://s3-alpha-sig.figma.com/img/a629/810c/af000de832a516f802032e1cf25ea9e5?Expires=1674432000&Signature=SrHPBfd8Rcj2WzTk37hdCgbdBXkOGGLMW-XQwJFM-hp2wDQwm68fHn3-MT5zn3bGniyQjU~b-hPf9DOugqLR1hhFKjSJ5UMtyL2COm-YwClGPkPQEfmsoc~UNQwfS5jWpO4ayUQzk02DjEu0kcU7W9VubxscYHSqF~WD--ON-5RCdbnOIH-y3vv-gGdrN13JfJQ0y9WAcLzFpSjRk58XuuADuN7YtsR4K3fy8~8iwTFG0OK-YBr47Tp8fg7W2g6Q8EdEc8Z1asBT~K6iFD3j1aFR3ujJgO5n11lEm0PiEwn6tOBQvuphbpGzT3dZIKBA4ncwdJOR5fmSVNZvUGrZsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 5.99,
        to: 3.59,
    },
    {
        nam: "“Armenia” white dry wine",
        pic: "https://s3-alpha-sig.figma.com/img/b031/17ac/1c24e2215e023b5cc35470005e82e2a4?Expires=1674432000&Signature=Cw~x08fjjh6t4lCEkOPpuuY162bUiZO7EKMf4zrFOE6bwhFuiTSAOjAUmOaXsNBCmGfwPUGzcJ0MnYHQ6RgYf4rrN-KneTzajER0UWRhgxYni7KYSrAaHoBiFivFB2PRfBjHJBUYydSk-SUJRG0YsYaySz0tbYuVebpEACFZr-XLylnWAhVunCpxQ9XiDxkTIWL9-NIvXwHvOJlaysXkZuVQgT9hRBE7iOAyr9xhe~qK2dF-dTS78IxA04Iq7-v~Q2a-oUjb~cinRBvKdPilytk9j9ByIzTefU2OrEAjyyattME~ADAoP1zcrEvpZSBjo5iThzdWJtcm4Gad4fiP1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 5.59,
        to: 3.39,
    },
    {
        nam: "“Armenia” rose sweet wine",
        pic: "https://s3-alpha-sig.figma.com/img/5594/6a77/e47dc3ea91765665d1eb27b52fb563a8?Expires=1674432000&Signature=PUcSX08nwyEG~ipPoCsXNc2d0OOjjLmcMU~~ijICVlQFftDWJIOoYoPYvSJlW~oYFvYH4F6A7b4g8IWzvN-aWFEDUYsNTwurBv3AgX82Fa-CnqCv0VnzfI-26J3olIJR-6ASkwl8K4IzNKcWjxu9FdEBOd9S3naAjFCC2WARm7R2g89F9eNpup82nlGGg5fKlxB2NyBONYhLoFWZOQK0QGYFHmTRIP4TkfCzab0DmHLgT7YEitCD0cXcAcHCtgVB1Cs~KjK-2kPf-z8qlSszH~JTZbpMFTUW22PVzSM~Y8qZ7yQGfL6AbMjC9wsCB~DxdlDTq9yVnkbGG662GpVrkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 0,
        from: 6.75,
        to: 6.75,
    },
    {
        nam: "“Koor” red sweet wine",
        pic: "https://s3-alpha-sig.figma.com/img/219e/39a5/d3d2886d2d3a720f0d7db13733acb7e7?Expires=1674432000&Signature=Nq4vsN4OeeScQeHWjcckjp7b7wXwzJlZ8B~kCmLWP2Vl1cLavfymS5p5WGTLXxLr-NeFm0wlSaPGg7NiFHiSaby1XL1r5AD6IpUZC26w4wgnL4IZmx1xmQsGWV2LZfF-UsoM9ts33OQ~LyVIEBN2gsV2z2wtAEsOWEawBpUMZXED4Vw3fmYID~PQXXSZN1Mbz~mbSFIodyVIBymKmUJugPdUuAws5JyReIgoSYe1k9l~4Ngn8SziSOlLSzMiMgRW~0dVPa~FyyuVbrPjl0Ky5CpZ2XzLSWhIN0NAo2mx4r8T2rDvMxU1jC~8bBTQnyMrAjzdpRYPsoAIOBPk9JbG6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 9.50,
        to: 7.50,
    },
    {
        nam: "“Armenia” pomegrante",
        pic: "https://s3-alpha-sig.figma.com/img/17ac/697b/c8372ca9b873dbb81b030a9b4622691f?Expires=1674432000&Signature=VP0P-E7EoLL6YGSXI4A2wXkLZZm~I7Krs3bPGFXAg04DNHVgigzyUwMKYR6ZC5FMzLgw3eRlRx0ZP7B4pksp0Shy3QvSjvFxeEc8KXUqiiYZJyvFe40KjSJlgETcWwE7HTtia6WVZtInLsd2SGHl18dnUjuO88pV3DAFwJxKgaEY7vnNXDk73iFzB1nDI~Fe~JxomAoAv4axDpPLh8QQa-rdG2jsE80QiaV50SoOYEEVP-LikhJsDum8FOdaZcjMp1cRN7FfSYSpUTkcvNJDZLPgNhQCbwOxT98RNEktO5PrFyg-x1UJghNf2sqcNujYu-46YJGP~k0jrnCEaFy7uQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        sale: 10,
        from: 5.99,
        to: 3.59,
    }
]

let s = document.getElementById("s1")
let s2 = document.getElementById("s2")

for (let i = 0; i < popularwine.length; i++) {
    // a
    let a = document.createElement("a")
    a.href="products.html"
    s.appendChild(a)
    a.setAttribute("class", "swiper-slide")

    //create div
    let slidediv = document.createElement("div")
    slidediv.setAttribute("class","slidediv")
    slidediv.style.height = "25em"
    slidediv.style.background = "white"
    slidediv.style.display = "flex"
    slidediv.style.flexDirection = "column"
    slidediv.style.alignItems = "center"
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
         nomprice.style.flexDirection="column"
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
        to.style.fontWeight="bold"
        to.innerHTML = popularwine[i].to + "$"
        nomprice.appendChild(to)

        let cartdiv=document.createElement("div")
        cartdiv.style.width = "50%"
        cartdiv.style.height = "100%"
        cartdiv.style.display = "flex"
        cartdiv.style.justifyContent = "right"
        cartdiv.style.alignItems="center"
        pricediv.appendChild(cartdiv)

        let carticon=document.createElement("i")
        carticon.style.color="#A40D30"
        carticon.style.fontSize="2em"
        carticon.setAttribute("class","fa fa-shopping-cart")
        cartdiv.appendChild(carticon)
        cartdiv.onclick=function(){
            productsincart++
           cart.innerHTML = productsincart
       }
    }
    else{
        pricediv.style.display = "flex"
        pricediv.style.justifyContent = "space-between"
        pricediv.style.alignItems = "center"
        let nomprice = document.createElement("div")
        nomprice.style.width = "50%"
        nomprice.style.height = "100%"
        nomprice.style.display = "flex"
         nomprice.style.flexDirection="column"
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
        to.style.fontWeight="bold"
        to.innerHTML = popularwine[i].to + "$"
        nomprice.appendChild(to)

        let cartdiv=document.createElement("div")
        cartdiv.style.width = "50%"
        cartdiv.style.height = "100%"
        cartdiv.style.display = "flex"
        cartdiv.style.justifyContent = "right"
        cartdiv.style.alignItems="center"
        pricediv.appendChild(cartdiv)

        let carticon=document.createElement("i")
        carticon.style.color="#A40D30"
        carticon.style.fontSize="2em"
        carticon.setAttribute("class","fa fa-shopping-cart")
        cartdiv.appendChild(carticon)
        cartdiv.onclick=function(){
            productsincart++
           cart.innerHTML = productsincart
       }
    }
}

for (let i = 0; i < costumer_favorites.length; i++) {
    // a
    let a = document.createElement("a")
    a.href="products.html"
    s2.appendChild(a)
    a.setAttribute("class", "swiper-slide")

    //create div
    let slidediv = document.createElement("div")

    slidediv.style.height = "25em"
    slidediv.style.background = "white"
    slidediv.style.display = "flex"
    slidediv.style.flexDirection = "column"
    slidediv.style.alignItems = "center"
    slidediv.setAttribute("class","slidediv")

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
    imgg.setAttribute("id", "cimg" + i)

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

    let pricediv = document.createElement("div")
    pricediv.style.width = "80%"
    pricediv.style.height = "20%"
    pricediv.style.marginTop = "0.469em"
    pricediv.style.borderTop = "1px solid  #CCCCCC "
    slidediv.appendChild(pricediv)


    if (costumer_favorites[i].sale > 0) {
        pricediv.style.display = "flex"
        pricediv.style.justifyContent = "space-between"
        pricediv.style.alignItems = "center"
        let nomprice = document.createElement("div")
        nomprice.style.width = "50%"
        nomprice.style.height = "100%"
        nomprice.style.display = "flex"
         nomprice.style.flexDirection="column"
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
        from.innerHTML = costumer_favorites[i].from + "$"
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
        prozentdiv.innerHTML = costumer_favorites[i].sale + "%"
        salediv.appendChild(prozentdiv)

        let to = document.createElement("div")
        to.style.margin = "0px"
        to.style.fontFamily = "'Courier New'"
        to.style.fontSize = "2em"
        to.style.fontWeight="bold"
        to.innerHTML = costumer_favorites[i].to + "$"
        nomprice.appendChild(to)

        let cartdiv=document.createElement("div")
        cartdiv.style.width = "50%"
        cartdiv.style.height = "100%"
        cartdiv.style.display = "flex"
        cartdiv.style.justifyContent = "right"
        cartdiv.style.alignItems="center"
        pricediv.appendChild(cartdiv)

        let carticon=document.createElement("i")
        carticon.style.color="#A40D30"
        carticon.style.fontSize="2em"
        carticon.setAttribute("class","fa fa-shopping-cart")
        cartdiv.appendChild(carticon)
        cartdiv.onclick=function(){
            productsincart++
           cart.innerHTML = productsincart
       }
    }
    else{
        pricediv.style.display = "flex"
        pricediv.style.justifyContent = "space-between"
        pricediv.style.alignItems = "center"
        let nomprice = document.createElement("div")
        nomprice.style.width = "50%"
        nomprice.style.height = "100%"
        nomprice.style.display = "flex"
         nomprice.style.flexDirection="column"
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
        to.style.fontWeight="bold"
        to.innerHTML = costumer_favorites[i].to + "$"
        nomprice.appendChild(to)

        let cartdiv=document.createElement("div")
        cartdiv.style.width = "50%"
        cartdiv.style.height = "100%"
        cartdiv.style.display = "flex"
        cartdiv.style.justifyContent = "right"
        cartdiv.style.alignItems="center"
        pricediv.appendChild(cartdiv)

        let carticon=document.createElement("i")
        carticon.style.color="#A40D30"
        carticon.style.fontSize="2em"
        carticon.style.cursor="pointer"
        carticon.setAttribute("class","fa fa-shopping-cart")
        cartdiv.appendChild(carticon)
        cartdiv.onclick=function(){
             productsincart++
            cart.innerHTML = productsincart
        }
    }


}

pimg4.style.width = "28%"
pimg2.style.width = "28%"
pimg1.style.width = "28%"
pimg5.style.width = "28%"
pimg6.style.width = "28%"

cimg4.style.width = "28%"
cimg2.style.width = "28%"
cimg1.style.width = "28%"
cimg5.style.width = "28%"
cimg6.style.width = "28%"





function a2(){
   if(a.style.display=="none"){
    a1.innerHTML="Less..."
    a.style.display="block"
   }else{
    a1.innerHTML="More..."
    a.style.display="none"
   }
}

function b2(){
    if(b.style.display=="none"){
     b1.innerHTML="Less..."
     b.style.display="block"
    }else{
     b1.innerHTML="More..."
     b.style.display="none"
    }
 }

 function c2(){
    if(c.style.display=="none"){
     c1.innerHTML="Less..."
     c.style.display="block"
    }else{
     c1.innerHTML="More..."
     c.style.display="none"
    }
 }

 function d2(){
    if(d.style.display=="none"){
     d1.innerHTML="Less..."
     d.style.display="block"
    }else{
     d1.innerHTML="More..."
     d.style.display="none"
    }
 }

 let cos=["https://s3-alpha-sig.figma.com/img/5c8a/1ce7/ec8aab310b6be9d8eedc1f68e6bc3830?Expires=1675641600&Signature=cDJGtS~qb2wJclIoANfapyLq6YQPpR1gFAMMAfxt9bW-WCr3cmyPcTxvpp85dDg9mbHDmQeocJ~rs5L9nkHW~CZVQlspBx0-WkekT-AMN1mYpzrJg8jdFkMD8IvCShAB88i9mICm4Lzv-TWbsDyCqM6lyfsgZX30mvdQXeRRQCLBXrY510q7XkpOgtBOmNWaiGFRaNEwaVU6nUG55I-TcldatGFHVdEdD8vE0MaWmejN8bZYIHVDT3kBBQlR44TwH4TnMS3R0hMy21xA4ITiO4SwCO-SgQIYQdn0dFMgJ37tbufMmRBrsDI1Wbt-u0IAXEqLpyX4AL-D2fCCHoaieg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
 "https://s3-alpha-sig.figma.com/img/135f/2d41/181e5cbaf2a83e15cb92a06599af7154?Expires=1675641600&Signature=fG2KOiZlKuTudZUrt1G97g-eUMWJsbQGU34gA7sHy9aO82OQIzgLmgoH3SSc-1LsztnJEPAKvqHM-RiKbYfWnZohYPLr2g79gMgNhF9mLy3rnKINvyIsL-afbC8fxgX8qKPb9OW~2ZtEbeoTpdZQcZ76Mm5dWybje83WQmZjYFw6hwCuA09HNgBnZuMUCUHg~G~HB0rK3nWYLkxjtEn7EP134mOe5F6QXKOQpM6Gx8puxb6UQSbHtzDQ-B6-RrT-OJ4rBlhtdRbnbJbVHHsPr4H-aXAWhsftwV4EcbQZhZ04moc9AkBnTfcsoYaidtzP3p8Yj~e3hj~kBcI3CrXTMg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
 "https://s3-alpha-sig.figma.com/img/74ba/7ee1/7753bc4da7413f0f14a01ef5d319c7f6?Expires=1675641600&Signature=ZmSnLI0f63AJ0kiS5LLBAx~~2oKPZ7vbZ4IbTHRpfNwI3AIvw57OWQuMK-Y2wW~R1-aSJ7ZWPa-ukiC9vwyRsKEwIC64sfeRFKdNP4fgpfF4XYkgP3BAmq-X3MJx4cPFvmkx~oWQQ3up3PfxB9CvmfTkaWSNRY~FXAQhzGKx-aJWqMP6YElYM-jAe1RXUOHewsLwFtdKAjCWh4fQnBkTiVbkR52IPPT2R2X5KaSJnOE7vlReyAJ1I1s5feNFYLm307mfQ~BGnLto8Ini1MyaS2VxfN4NTQ-4SU2rsKjUjnNp5KHyI8aYY5IAWOGLv5SHqZCfS3im7TQdfu~DE925xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
 "https://s3-alpha-sig.figma.com/img/9e55/7d90/601da9df65c84d7ce2024a3c49a75060?Expires=1675641600&Signature=dfq0Rgsns9xStNCn034WaWclVYB1RRWLJHq8o8KE3rnQJFLwlKFhMNnqcVbM829kD9KuZP0WU9Mlqebx-iJYPSEBsd~IKkAXMbWVN-LWO6GqgUpmo4~OD~yPjpYonYffVCKVbfgDaA-sg~rcrxMznt~ZfcQuFcRsIp3jVuMdtW3bQLdXfzGH59y3J1s2DuynQ1-THb0ObkgXMusDwudq8zsGGCIxT5uqYmi1fZFuKFuMkf3sj17JUNFFYlecb9ZY2sRyZTO9zLP4frUZj7YbFc~88neO4Wp~FgHA5MEBzEli1to9VkEyjysOR1gT-TpiHQ7htcSpwxzPBPmH96o0uQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
 "https://s3-alpha-sig.figma.com/img/8257/076a/69412d51e22efdec44637fb585ee31d3?Expires=1675641600&Signature=Aaay~klaF7py9LY4WgCiZAgc0LClcdAIQaE9-DL1~DJo8wdUwfZczhvSEjsrLavRW5PFFpwkElFlE-OmJsBGqlBpthiKuSB9ifwXjb7-MYmpfDt45h-qHvlApy4hdo8vbyL-SbdrZgBz99cCxF2bHEggpsCQX8TVAq7yzCr88QIe8hf6nIkDmjzn3sR0HGdPauy5Ou4MVbBDtddvPp6LlW6FTOqfuVIauXGY9p6oBWsoORy5zQNUcpGB44UqKFwO6xiCmSwJywCnVUMuL7ZVwTtoNngvLLjAG0VeVoDOsxRz4P56~RR~cz2bCLNa9f7-6Yecu73681OAFMwNhd-AEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
 "https://s3-alpha-sig.figma.com/img/9c75/f94c/31b4d56c01f706ba7d77200ca4795170?Expires=1675641600&Signature=iWOWiSX6d~A~B4X-Upfmpig9EUVpYBu2cvk8S2sgF4geLZBPsFNOVQA3L5ZCv9k~itGzx53UV0AYgP~3FeNgaKjq2YsBqRZkjAha3f7UoXSRioCjkH9N6Mz-JsRKFOOuk3TDm15aqnGAr1tHyS5mUDaT~CU2lSqZ7J3laiOGV7L16VwvRY5WD~rW-VA99GIdRxdKQH18e0Oz8imSqKQCWeNlLRWgLHcX-wxo2-6S1lfcDYm5V110Iv8dzzL103f10IM10mEAMamN1NGqoZc0Hmw-Hy~nZm5WTQYx60yy1Y9UURmjElQUJA6gkgVTNghcZb1yWv7~Yi~M44laweVtHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
 ]

    for(let i=0;i<cos.length;i++){
       let li =document.createElement("li")
       li.style.display="flex"
       li.style.alignItems="center"
       li.style.justifyContent="center"
       let h=document.createElement("img")
       h.style.width="70%"
       h.src=cos[i]
       arj.appendChild(li)
       li.appendChild(h)
    }
    for(let i=0;i<cos.length;i++){
        let li =document.createElement("li")
        li.style.display="flex"
        li.style.alignItems="center"
        li.style.justifyContent="center"
        let h=document.createElement("img")
        h.style.width="70%"
        h.src=cos[i]
        vagr.appendChild(li)
        li.appendChild(h)
     }
    
     for(let i=0;i<cos.length;i++){
        let li =document.createElement("li")
        li.style.width="20%"
        li.style.display="flex"
       li.style.alignItems="center"
       li.style.justifyContent="center"
        let h=document.createElement("img")
        h.src=cos[i]
        h.style.width="70%"
        dzi.appendChild(li)
        li.appendChild(h)
     }
    
