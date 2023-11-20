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
    let wrapper = document.getElementById("wrapper");
    setTimeout(() => {
        wrapper.style.zIndex = "1";
    }, 1000);
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

    let statCounters = document.querySelectorAll(".stat-count-number");
    let interval = 2500;

    statCounters.forEach((counter) => {
        let startValue = 0;
        let endValue = parseInt(counter.innerText);
        let duration = Math.floor(interval / endValue);
        let counting = setInterval(() => {
            startValue++;
            counter.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counting);
            }
        }, duration);
    })
});