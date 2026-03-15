// Manages the footer year so the template does not need manual updates.
export class FooterYear {
    constructor(element) {
        this.element = element;
    }

    render() {
        if (this.element) {
            this.element.textContent = new Date().getFullYear();
        }
    }
}