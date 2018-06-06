var onClickCheckBox=0;

function setCubeVolume() {
    scroll=document.getElementById("cubeVolume");
    CubeVolume=scroll.value*100;//未确定具体比例 scroll取值为1-100
    console.log("cubeVolume"+CubeVolume);
}

function setParticles() {
    scroll=document.getElementById("particles");
    Particles=scroll.value*1000;//未确定具体比例 scroll取值为1-100
    console.log("particles"+Particles);
}

function setColor() {
    scroll=document.getElementById("color");
    ColorValue=hex2Rgb(scroll.value);//格式为rgb(0,0,0)
    console.log(ColorValue);
}

function setAutoRotation() {
    onClickCheckBox++;
    scroll=document.getElementById("checkbox-ar");
    if(onClickCheckBox%2==0){
        AutoRotation=true;
        // scroll.value=1;
    }
    else {
        AutoRotation=false;
        // scroll.value=0;
    }
    console.log("checkbox-ar"+AutoRotation);
}

function setRotateX() {
    scroll=document.getElementById("rotateX");
    RotateX=scroll.value*0.01;//未确定具体比例 scroll取值为1-100
    console.log("rotateX"+RotateX);
}

function setRotateY() {
    scroll=document.getElementById("rotateY");
    RotateY=scroll.value*0.01;//未确定具体比例 scroll取值为1-100
    console.log("rotateY"+RotateY);
}

function hex2Rgb(hex) { //十六进制转为RGB
    var rgb = []; // 定义rgb数组
    if (/^\#[0-9A-F]{3}$/i.test(hex)) { //判断传入是否为#三位十六进制数
        let sixHex = '#';
        hex.replace(/[0-9A-F]/ig, function(kw) {
            sixHex += kw + kw; //把三位16进制数转化为六位
        });
        hex = sixHex; //保存回hex
    }
    if (/^#[0-9A-F]{6}$/i.test(hex)) { //判断传入是否为#六位十六进制数
        hex.replace(/[0-9A-F]{2}/ig, function(kw) {
            rgb.push(eval('0x' + kw)); //十六进制转化为十进制并存如数组
        });
        return `rgb(${rgb.join(',')})`; //输出RGB格式颜色
    } else {
        console.log(`Input ${hex} is wrong!`);
        return 'rgb(0,0,0)';
    }
}