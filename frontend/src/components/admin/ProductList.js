import Product from './Product';
import products from '../../json/products.json';

//componente que rederiza todos os produtos para edição no dashboard do admin
//milestone2: funções so produzem alertas
function ProductList() {

    function editProduct() {
        alert('Produto editado');
    }

    function removeProduct() {
        alert('Produto removido');
    }

    function uploadFile() {
        alert('Arquivo enviado');
    }

    return (
        <>
            {products.map((p, key) => {
                return (
                    <Product 
                        key={key}
                        id={p.id}
                        name={p.name}
                        desc={p.description}
                        stock={p.qnt}
                        price={p.price}
                        sold={p.sold}
                        edit={editProduct}
                        upload={uploadFile}
                        remove={removeProduct}
                        style={key}
                    />
                )
            })}
        </>
    )
}

export default ProductList