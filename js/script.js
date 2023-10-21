var submitted = false;
var subscribed = false;
const contactUs = () => {
    if (submitted) {
        const ok = Swal.fire({
            title: 'Email Sent Successfully',
            text: 'We will get back to you through email and mobile soon, Thank You.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location = '/';
        });
    }
}

const newsLetter = () => {
    if (subscribed) {
        const ok = Swal.fire({
            title: 'Subscribed Successfully',
            text: 'Thank you for subscribing to our newsletter.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location = '/';
        });
    }
}