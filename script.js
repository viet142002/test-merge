const socketMarket = io("https://ysvnfos.altisss.vn/market");

const btnJoinMarket = document.getElementById("btn-join-market");

btnJoinMarket.addEventListener("click", () => {
    socketMarket.emit(
        "SUB_REQ",
        JSON.stringify({
            ClientSeq: 4,
            TransId: "123-abc",
            topic: ["EXCHANGE_TIME"],
            value: [""],
        })
    );
});

socketMarket.on("connect", socket => {
    console.log("Connected to market server");

    socketMarket.on("onFOSStream", data => {
        console.log(data);
    });

    socketMarket.on("disconnect", () => {
        console.log("Disconnected from market server");
    });
});
