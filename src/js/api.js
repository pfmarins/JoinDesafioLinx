// function getProdutos() {
fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')

    .then(res => res.json())
    .then(res => {
        // document.getElementById('#card').innerHTML = res[0]
        return console.log(res.products)

        // exemplo{
        let products = res.products.map((product, index) => {
            return document.createElement(<div class="card">product.name + index)</div>);
        });


    })
    .catch(error('Error: ', error));
// }

function MoreListe(number) {
    fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=2')

        .then(res => res.json())
        .then(res => {
            // document.getElementById('#card').innerHTML = res[0]
            return console.log(res.products)



        })
        .catch(error('Error: ', error));
}



// https://www.origamid.com/projetos/css-grid-layout-guia-completo/