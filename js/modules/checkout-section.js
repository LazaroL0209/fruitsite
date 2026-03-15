// Owns checkout state, renders the summary, and handles the checkout form.
export class CheckoutSection {
    constructor(root, bagCountElement) {
        this.root = root;
        this.bagCountElement = bagCountElement;
        this.items = [];
        this.shippingFee = 18;

        this.itemsContainer = root?.querySelector('[data-checkout-items]') ?? null;
        this.subtotalElement = root?.querySelector('[data-checkout-subtotal]') ?? null;
        this.shippingElement = root?.querySelector('[data-checkout-shipping]') ?? null;
        this.totalElement = root?.querySelector('[data-checkout-total]') ?? null;
        this.statusElement = root?.querySelector('[data-checkout-status]') ?? null;
        this.formElement = root?.querySelector('[data-checkout-form]') ?? null;
    }

    init() {
        this.render();

        if (!this.formElement) {
            return;
        }

        this.formElement.addEventListener('submit', (event) => {
            event.preventDefault();

            if (this.items.length === 0) {
                this.setStatus('Add at least one product before placing the order.');
                return;
            }

            this.setStatus('Order placed for preview. Replace this with your real checkout logic when you connect a backend.');
            this.formElement.reset();
        });
    }

    addItem(product) {
        this.items.push(product);
        this.setStatus(product.name + ' added to your bag.');
        this.render();
    }

    getSubtotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }

    getShipping() {
        return this.items.length > 0 ? this.shippingFee : 0;
    }

    getTotal() {
        return this.getSubtotal() + this.getShipping();
    }

    formatPrice(value) {
        return '$' + value.toFixed(0);
    }

    renderItems() {
        if (!this.itemsContainer) {
            return;
        }

        if (this.items.length === 0) {
            this.itemsContainer.innerHTML = '<p class="checkout-empty">Your bag is empty. Add a product above to preview the checkout flow.</p>';
            return;
        }

        this.itemsContainer.innerHTML = this.items.map((item, index) => `
            <div class="checkout-item">
                <div>
                    <strong>${index + 1}. ${item.name}</strong>
                    <p>Fruitopia Girls selection</p>
                </div>
                <strong>${this.formatPrice(item.price)}</strong>
            </div>
        `).join('');
    }

    renderTotals() {
        if (this.subtotalElement) {
            this.subtotalElement.textContent = this.formatPrice(this.getSubtotal());
        }

        if (this.shippingElement) {
            this.shippingElement.textContent = this.formatPrice(this.getShipping());
        }

        if (this.totalElement) {
            this.totalElement.textContent = this.formatPrice(this.getTotal());
        }

        if (this.bagCountElement) {
            this.bagCountElement.textContent = `Bag (${this.items.length})`;
        }
    }

    setStatus(message) {
        if (this.statusElement) {
            this.statusElement.textContent = message;
        }
    }

    render() {
        this.renderItems();
        this.renderTotals();
    }
}