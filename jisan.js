//  1 .  seerToMon  Convert




function seerToMon(Number) {

    Multi = Number / 40;

    return Multi;


}

const result = seerToMon(80);
console.log('Here your mon  : ' + result);



//  2.  totalSales convert 


function totalSales(Number1, Number2, Number3) {

    const Tshart = Number1 * 100;
    const pent = Number2 * 200;
    const Shoes = Number3 * 500;

    Sum = Tshart + pent + Shoes;
    return Sum;
}

const totalSalesValu = totalSales(10, 20, 15);
console.log('Total Market is : ' + totalSalesValu + 'tk');



//   3.   deliveryCost convert 


function deliveryCost(Tshirtprice) {
    const FirstDeliveryCost = 100;
    const SecondDeliveryCost = 80;
    const ThirdDeliveryCost = 50;

    if (Tshirtprice < 0) {
        console.log(' Enter The correct number  :')
    }


    else if (Tshirtprice <= 100) {
        const Delivery = Tshirtprice * FirstDeliveryCost;
        return Delivery;
    }
    else if (Tshirtprice <= 200) {
        const FirstShirtPrice = 100 * FirstDeliveryCost;
        const SecondShirtPriceNumber = Tshirtprice - 100;
        const secondShirtPrice = SecondShirtPriceNumber * SecondDeliveryCost;
        const totalCost = FirstShirtPrice + secondShirtPrice;
        return totalCost;
    }
    else {
        const FirstShirtPrice = 100 * FirstDeliveryCost;
        const secondShirtPrice = 100 * SecondDeliveryCost;
        const SecondShirtPriceNumber = Tshirtprice - 200;
        const RestDenseShirt = SecondShirtPriceNumber * ThirdDeliveryCost;
        const totalCost = FirstShirtPrice + secondShirtPrice + RestDenseShirt;
        return totalCost;
    }


}
const totalShirtDeliveryCost = deliveryCost(45);
console.log(totalShirtDeliveryCost);



//  4 .   perfectFriend

function perfectFriend(name) {
    for (let i = 0; i <= name.length; i++) {
        names = name[i];
        if (names.length == 5) {
            return names
        }
    }

}

var friendName = ['jim', 'king', 'jisan', 'Adi', 'Alim'];

var LargerName = perfectFriend(friendName);
console.log(LargerName);





