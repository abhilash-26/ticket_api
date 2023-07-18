exports.createTicket = (numberOfTicket) => {
  try {
    const ticket = [];

    function doPlaceCalculation(place) {
      if (place.length >= 5) return;
      let randomPlace = Math.floor(Math.random() * 10);
      if (!place.includes(randomPlace)) {
        place.push(randomPlace);
      } else {
        doPlaceCalculation(place);
      }
      return;
    }

    // Generate 15 unique random numbers for each row
    let uniqueNo = [];
    for(let i =0 ; i<numberOfTicket;i++){
      let innerTicket = []
    for (let row = 0; row < 3; row++) {
      let numbers = [];
      let numbersNew = [];
      let place = [];

      while (numbers.length < 5) {
        doPlaceCalculation(place);
        place.sort((a, b) => a - b);
        const randomNum = Math.floor(Math.random() * 90) + 1;

        if (!numbers.includes(randomNum) && !uniqueNo.includes(randomNum)) {
          numbers.push(randomNum);
          uniqueNo.push(randomNum)
        }
      }
      let trackFlag = 0;
      place.forEach((item) => {
        while (numbersNew.length < item) {
          numbersNew.push(0);
        }
        numbersNew.push(numbers[trackFlag]);
        trackFlag++;
      });
      numbers.sort((a, b) => a - b); // Sort numbers in ascending order
     
      innerTicket.push(numbersNew);
    }
    let text = `ticket${i+1}`
    ticket.push({[text]:innerTicket})
  }
    return ticket;
  } catch (error) {
    return error;
  }
};
