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

let form = document.getElementById('form-wrp')

form.addEventListener('submit', function(event){
    event.preventDefault()

    let number1 = document.getElementById('number1').value
    console.log(number1)

    let number2 = document.getElementById('number2').value
    console.log(number2)

    let sum = number1 + number2;

    let hasil = fizzBuzz(sum);

    console.log(hasil);

    document.getElementById("hasil").innerHTML = hasil;
})