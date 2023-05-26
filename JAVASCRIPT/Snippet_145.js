const app = document.getElementById("app");
const root = document.querySelector(':root');
const token = `gAAAAABkcBF8JJBB9yVd5sL6fxvkRI5GRhRcv0GDslTDHfKS_kdcoVcEQOIXTSBKt4rPqZLeEzUYOhSDCpHa2KX4FLwby9jskQ%3D%3D`;
const url = `https://thenounproject.com/api/private/icons/`;
const prams = `edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=${token}`
const Order = {
    orderNumber: "W15683548",
    orderName: "Apple iPhone 16 Plus Ultra",
    expectedArival: "02/23/2026",
    shipperName: "FedEx",
    trackingNumber: "4894365435486546",
    orderProgress: [
        {
            progress: "Processed",
            progressStaus: true
        },
        {
            progress: "Shipped",
            progressStaus: true         
        },
        {
            progress: "Enroute",
            progressStaus: false         
        },
        {
            progress: "Arived",
            progressStaus: false         
        }
    ] 
};
let lists = '';
const isActive = Order.orderProgress.map((list) => lists += list.progressStaus ? '<li class="active"></li>' : '<li></li>')
    /* 0%, 27%, 53%, 80% */
    /* 0,   1,   2,   3 */
const setLine = (prog) => {
    let count = 0;
    let order = Order.orderProgress;
    order.forEach(o => {
        if (o.progressStaus) {
            count++;
        }
    })
    switch (count) {
        case 1:
            return "0%";
        case 2:
            return "27%";
        case 3:
            return "53%";
        case 4:
            return "80%";
        default:
            return "0%";
    }
};
const line = root.style.setProperty('--progress' ,  setLine());
const ShippingTracker = (`
    <div class="container">
        <div class="details">
            <div class="order" title="${Order.orderName}">
                <h1>Order <span>${Order.orderNumber}</span></h1>
            </div>
            <div class="date">
                <p>Expected Arival ${Order.expectedArival}</p>
                <p>${Order.shipperName}: <strong>${Order.trackingNumber}</strong></p>
            </div>
        </div>
        <div class="track">
            <ul id="progress" class="text-center">
                ${lists}
            </ul>
        </div>
        <div class="lists">
            <div class="list">
                <img src="${url}1914669/${prams}" alt="${Order.orderProgress[0].progress}">
                <p>Order <br> ${Order.orderProgress[0].progress}</p>
            </div>
            <div class="list">
                <img src="${url}79208/${prams}" alt="${Order.orderProgress[1].progress}">
                <p>Order <br> ${Order.orderProgress[1].progress}</p>
            </div>
            <div class="list">
                <img src="${url}849035/${prams}" alt="${Order.orderProgress[2].progress}">
                <p>Order <br> ${Order.orderProgress[2].progress}</p>
            </div>
            <div class="list">
                <img src="${url}4109249/${prams}" alt="${Order.orderProgress[3].progress}">
                <p>Order <br> ${Order.orderProgress[3].progress}</p>
            </div>
        </div>
    </div>
`);
app.innerHTML = ShippingTracker;

// ${Order.orderProgress[0].progress}


// <li class="active"></li>
// <li class="active"></li>
// <li></li>
// <li></li>