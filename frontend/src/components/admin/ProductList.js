import Product from './Product';
import products from '../../json/products.json';

function ProductList() {

    function editProduct() {
        alert('Produto editado');
    }

    function removeProduct() {
        alert('Produto removido');
    }

    return (
        <>
            {products.map((p, key) => {
                return (
                    <Product key={key}
                        id={p.id}
                        name={p.name}
                        stock={p.qnt}
                        price={p.price}
                        sold={p.sold}
                        edit={editProduct}
                        remove={removeProduct}
                        style={key}
                    />
                )
            })}
        </>
    )
}

export default ProductList