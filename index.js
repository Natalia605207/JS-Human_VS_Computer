const input = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random() * 30) + 1;

input.addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
        play();
    }
})

button.addEventListener('click', play);

function play() {
    const userNumber = input.value;
    if (userNumber < 1 || userNumber > 30) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number from 1 to 30!',
        })
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number!',
        })
    }

    else {
        if (userNumber < answer) {
            Swal.fire({
                title: 'Try a higher number!',
                width: 500,
                padding: '3em',
                color: '#ab24dc',
                background: '#fff url(https://img.freepik.com/free-vector/futuristic-networking-technology-background-vector-white-tone_53876-110879.jpg?w=1060&t=st=1683034703~exp=1683035303~hmac=d952846c68bc9b912cfa5f7676a5f3697e7903a2c9eee4ef3eb05d4e4e9e771c)',
            })
        }

        else if (userNumber > answer) {
            Swal.fire({
                title: 'Try a lower number!',
                width: 500,
                padding: '3em',
                color: '#ab24dc',
                background: '#fff url(https://img.freepik.com/free-vector/futuristic-networking-technology-background-vector-white-tone_53876-110879.jpg?w=1060&t=st=1683034703~exp=1683035303~hmac=d952846c68bc9b912cfa5f7676a5f3697e7903a2c9eee4ef3eb05d4e4e9e771c)',
            })
        }

        else {
            Swal.fire({
                title: `You win!`,
                imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-great-job-lettering_23-2148925573.jpg?size=626&ext=jpg&uid=R86882888&ga=GA1.2.748415115.1670098303&semt=robertav1_2_sidr',
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: 'Victory!',
            })
        }
    }
}
