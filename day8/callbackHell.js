const orderCoffee = () => {
    setTimeout(() => {
        console.log("Make some order");
        setTimeout(() => {
            console.log("brewing coffee");
            setTimeout(() => {
                console.log("serving coffee");
                setTimeout(() => {
                    console.log("Thank you for your visiting");
                }, 1000);
            }, 3000);
        }, 4000);
    }, 5000);
};


