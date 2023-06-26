const start_btn = document.getElementById("generator_btn");

// Eventlistener
start_btn.addEventListener('click', function(){
    console.log('clicked');

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Leere die gen_numbers-Array bei jedem Klick auf "Start"
    const gen_numbers = [];
    console.log(gen_numbers);

    // Generiere für jedes Output-Feld eine Kombination von 4 zufälligen Zeichen
    for (let i = 0; i < 16; i++) {
        const rand = Math.floor(Math.random() * chars.length);
        gen_numbers.push(rand);
    }
    
    // Weise die generierten Zeichen den entsprechenden Output-Feldern zu
    const output1 = document.getElementById("output_one");
    output1.innerHTML = chars[gen_numbers[0]] + chars[gen_numbers[1]] + chars[gen_numbers[2]] + chars[gen_numbers[3]];

    const output2 = document.getElementById("output_two");
    output2.innerHTML = chars[gen_numbers[4]] + chars[gen_numbers[5]] + chars[gen_numbers[6]] + chars[gen_numbers[7]];

    const output3 = document.getElementById("output_three");
    output3.innerHTML = chars[gen_numbers[8]] + chars[gen_numbers[9]] + chars[gen_numbers[10]] + chars[gen_numbers[11]];

    const output4 = document.getElementById("output_four");
    output4.innerHTML = chars[gen_numbers[12]] + chars[gen_numbers[13]] + chars[gen_numbers[14]] + chars[gen_numbers[15]];

    console.log(chars[gen_numbers[0]], chars[gen_numbers[1]], chars[gen_numbers[2]], chars[gen_numbers[3]]);
});








// const start_btn = document.getElementById("generator_btn");

// // übergabe char an output im html
// const output = document.getElementById("output_one").innerHTML = chars[rand];


// // Eventlistener

// start_btn.addEventListener('click', function(){
//     console.log('clicked');


    

//     const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     const rand = Math.floor(Math.random() * chars.length);
//     console.log(chars[rand]);
//     return chars[rand];


    
// });
