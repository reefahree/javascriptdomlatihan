function fizzBuzz(angka){
        if(angka % 3 === 0 && angka % 5 === 0)
            return "FizzBuzz";
        else if(angka % 5 === 0)
            return "Buzz";
        else if(angka % 3 === 0)
            return "Fizz";
        else
            return angka;
}

function erroralert(){
    let x1 = document.getElementById('number1').value;
    let x2 = document.getElementById('number2').value;
    let x3 = number1 + number2;
    if (isNaN(x3)){       
        alert("data yang Anda masukkan bukan angka");
        return false;
    }
}

let form = document.getElementById('form-wrp')

form.addEventListener('submit', function(event){
    event.preventDefault()

    let number1 = document.getElementById('number1').value
    console.log(number1, typeof number1)

    let number2 = document.getElementById('number2').value
    console.log(number2, typeof number2)

    let sum = Number(number1) + Number(number2);

    let hasil = fizzBuzz(sum);

    console.log(hasil);

    document.getElementById("hasil").innerHTML = hasil;
    
})