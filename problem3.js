// 3. Supermarket Analytics
// You have been provided with data representing the inventory and sales of a supermarket. The data structure is as follows:

const supermarketData = [{
    supermarketName: "SuperMart",
    location: "Cityville",
    products: {
        electronicsSection: {
            inventory: {
                laptop: { available: 20, price: 800 },
                smartphone: { available: 30, price: 500 },
                tablet: { available: 15, price: 300 },
            },
            sales: [
                { id: 1, items: ["laptop", "tablet"], total: 1100 },
                { id: 2, items: ["smartphone", "tablet"], total: 800 },
                { id: 3, items: ["laptop", "smartphone"], total: 1300 },
            ],
        },
        clothingSection: {
            inventory: {
                shirt: { available: 50, price: 25 },
                jeans: { available: 40, price: 40 },
                dress: { available: 30, price: 60 },
            },
            sales: [
                { id: 1, items: ["shirt", "jeans"], total: 60 },
                { id: 2, items: ["dress", "shirt"], total: 85 },
                { id: 3, items: ["jeans", "dress"], total: 100 },
            ],
        },
    },
    sectionNames: ["electronicsSection", "clothingSection"],
}];

for (let i = 0; i < supermarketData.length; i++) {
    console.log(supermarketData[i]);
    for (let j = 0; supermarketData[i].products.length; j++) {
        for (let k = 0; supermarketData[i].products[j].electronicsSection.length; k++) {
            for (let l = 0; l < supermarketData[i].products[j].electronicsSection[k].inventory.length; l++) {
                for (let m = 0; m < supermarketData[i].products[j].electronicsSection[k].inventory[l].laptop.length; m++) {
                    for (let n = 0; n < supermarketData[i].products[j].electronicsSection[k].inventory[l].laptop[m].available.length; n++) {
                        console.log(supermarketData[i].products[j].electronicsSection[k].inventory[l].laptop[m].available[n]);

                    }
                }
            }
        }
    }
}


