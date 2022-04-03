const mp = new MercadoPago('TEST-a324251b-bd2e-4c0f-9507-c8ec807b6145', {
    locale: 'pt-BR'
});

function pagar() {
    fetch("http://localhost:3001/pagar",
    {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: document.querySelector("#nome").value,
            preco: document.querySelector("#preco").value
        })
    }).then(res => res.json()).then(items => {
        mp.checkout({
            preference: {
                id: `${items.id}`
            },
            autoOpen: true,
        });
    })
}