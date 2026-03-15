// Reads product data from the catalog cards and forwards add-to-bag events.
export class ProductCatalog {
    constructor(root, onAddProduct) {
        this.root = root;
        this.onAddProduct = onAddProduct;
    }

    init() {
        if (!this.root) {
            return;
        }

        this.root.addEventListener('click', (event) => {
            const button = event.target.closest('[data-add-product]');

            if (!button) {
                return;
            }

            const productCard = button.closest('[data-product-card]');

            if (!productCard) {
                return;
            }

            this.onAddProduct({
                name: productCard.dataset.productName,
                price: Number(productCard.dataset.productPrice),
            });
        });
    }
}