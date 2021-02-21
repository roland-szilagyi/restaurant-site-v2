window.onload = () => {
    const $forms = document.querySelectorAll('.needs-validation');
    for (let form of $forms) {
        form.addEventListener('submit', event => {
            if (!event.target.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            event.target.classList.add('was-validated');
        });
    }
}