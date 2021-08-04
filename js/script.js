const porownujePola = (bok, promien) => {
    
    let poleKwadratu = bok * bok;
    let poleKola = Math.PI * promien * promien;

    if (poleKwadratu > poleKola) {

        console.log('Większe jest pole kwadratu');

    } else {

        console.log('Większe jest pole koła"');
    }
}

porownujePola(4, 1);