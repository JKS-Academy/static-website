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

function closeToast() {
    let toast = document.getElementById("toast");
    toast.style.transform = "translateX(-35rem)";
}

document.addEventListener('DOMContentLoaded', () => {
    let x;
    let toast = document.getElementById("toast");
    function showToast() {
        // clearTimeout(x);
        toast.style.transform = "translateX(0)";
        // x = setTimeout(() => {
        //     toast.style.transform = "translateX(400px)"
        // }, 4000);
    }
    showToast();
});