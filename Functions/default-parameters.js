const bookings = [];
const createBooking = function (
  flightNum,
  numPassengeres = 1,
  price = 1999 * numPassengeres
) {
  const booking = {
    flightNum,
    numPassengeres,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", undefined, 2000);
