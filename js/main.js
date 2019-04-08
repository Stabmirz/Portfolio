window.onscroll = function (e) {
    console.log(this.document.body.scrollTop);
    let div = document.getElementById("crazy_boy");

    if (this.document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
        div.style.backgroundPosition = '0px 0px';
        div.style.top = '-80px';
    }
    if (this.document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        div.style.backgroundPosition = '0px 0px';
        div.style.top = '0%';
    }
    if (this.document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400) {
        div.style.backgroundPosition = '0px 0px';
        div.style.top = '50%';
    }
    if (this.document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600) {
        div.style.backgroundPosition = '-72px 0px';
        div.style.top = '50%';
    }
    if (this.document.body.scrollTop >= 1100 || document.documentElement.scrollTop >= 1100) {
        div.style.backgroundPosition = '-144px 0px';
        div.style.top = '50%';
    }
    if (this.document.body.scrollTop >= 1500 || document.documentElement.scrollTop >= 1500) {
        div.style.backgroundPosition = '0px -80px';
        div.style.top = '50%';
    }
    if (this.document.body.scrollTop >= 2000 || document.documentElement.scrollTop >= 2000) {
        div.style.backgroundPosition = '-72px -80px';
        div.style.top = '50%';
    }
    if (this.document.body.scrollTop >= 2500 || document.documentElement.scrollTop >= 2500) {
        div.style.backgroundPosition = '-144px -80px';
        div.style.top = '50%';
    }
    if (this.document.body.scrollTop >= 3000 || document.documentElement.scrollTop >= 3000) {
        div.style.backgroundPosition = '0px -160px';
        div.style.top = '50%';
    }
    if (this.document.body.scrollTop >= 3500 || document.documentElement.scrollTop >= 3500) {
        div.style.backgroundPosition = '0px 0px';
        div.style.top = '80%';
    }
}