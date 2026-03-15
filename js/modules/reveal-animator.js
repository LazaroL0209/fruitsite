// Handles reveal-on-scroll behavior for sections marked with the reveal class.
export class RevealAnimator {
    constructor(elements) {
        this.elements = elements;
        this.observer = null;
    }

    init() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.18,
        });

        this.elements.forEach((element) => this.observer.observe(element));
    }
}