function calculateCharge()
{
   var numBook = prompt("How many books did you rent?");
   numBook = parseInt(numBook);

   var numDVD = prompt("How many DVD did you rent?");
   numDVD = parseInt(numDVD);

   var lateDay= prompt("How many days are you late?");
   lateDay = parseInt(lateDay);

   var totalChargeOfBook = numBook * lateDay * 0.25;
   var totalChargeOfDVD = numDVD * lateDay * 0.5;

   var totalCharge = totalChargeOfBook + totalChargeOfDVD;

   alert(`Your total charges of late fee will be $ ${totalCharge.toFixed(2)}.`);


}

// prompt for amount of books rented
// convert to number
// prompt for amount of DVD rented
// convert to number
// prompt for how many days got delayed
// convert to number

// calculate late fee

// alert total charge(by adding late fee for books and DVDs)
