'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const results = ["大吉", "中吉", "吉", "凶"];
        const n = Math.floor(Math.random() * results.length);
        btn.textContent = results[n];

        if (n === 3) {
            btn.style.background ='black';
        } else {
            btn.style.background ='#ef454a';
        }
    });
}