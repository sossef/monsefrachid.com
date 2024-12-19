document.addEventListener('alpine:init', () => {
    window.contactForm = () => ({
        formData: {
            name: '',
            company: '',
            email: '',
            message: ''
        },
        form: '',
        formSuccess: false,
        formErrors: false,
        errorMessage: '',

        submitData() {
            fetch('http://127.0.0.1:5000/submit', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'X-API-KEY': 'd6db71633355ede61e493e4ebe1738cb2c785d7d1a6d5432945800424bb6b6d8' 
                },
                body: JSON.stringify(this.formData)
            })
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    return response.json();
                } else {
                    return null;
                }
            })
            .then(validationErrors => {
                if (validationErrors) {
                    this.formErrors = true;
                    for (const errorType in validationErrors.errors) {
                        validationErrors.errors[errorType].forEach(error => {
                            this.errorMessage += error + '<br />';
                        });
                    }
                } else {
                    this.formData = {};
                    this.formSuccess = true;
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    });
});