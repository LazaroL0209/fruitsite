import { CheckoutSection } from './checkout-section.js';
import { FooterYear } from './footer-year.js';
import { ProductCatalog } from './product-catalog.js';
import { RevealAnimator } from './reveal-animator.js';

// Coordinates the different page modules so the behavior stays organized.
export class FruitopiaGirlsApp {
    constructor(documentRef) {
        this.documentRef = documentRef;
        this.revealAnimator = new RevealAnimator(documentRef.querySelectorAll('.reveal'));
        this.footerYear = new FooterYear(documentRef.querySelector('#year'));
        this.checkoutSection = new CheckoutSection(
            documentRef.querySelector('#checkout'),
            documentRef.querySelector('#bag-count')
        );
        this.productCatalog = new ProductCatalog(
            documentRef.querySelector('#collections'),
            (product) => this.checkoutSection.addItem(product)
        );
    }

    init() {
        this.footerYear.render();
        this.revealAnimator.init();
        this.checkoutSection.init();
        this.productCatalog.init();
    }
}