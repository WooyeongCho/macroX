var xlogo = `                                                            _/      _/   
   _/_/_/  _/_/      _/_/_/    _/_/_/  _/  _/_/    _/_/      _/  _/      
  _/    _/    _/  _/    _/  _/        _/_/      _/    _/      _/         
 _/    _/    _/  _/    _/  _/        _/        _/    _/    _/  _/        
_/    _/    _/    _/_/_/    _/_/_/  _/          _/_/    _/      _/`
var macroX = {
temp : null,
time : 10000,

upload() {try{$(".btn_workspace_save").get(0).click();
$(".item__a65d5").get(0).click();} catch (e) {} console.log("macroX : 작품 업데이트 됨")},

run() {this.temp = setInterval(() => {this.upload()}, this.time)},
stop() {{if(this.temp != null) {clearInterval(this.temp);}}},

init() {
console.log(`%c ${xlogo} `, `color: #2bedc0`)
alert("macroX를 이용해주셔서 감사합니다 😘");
this.time = prompt("몇 초 간격으로 매크로를 사용하시겠습니까?")*1000;
alert("macroX 사용 중지하려면 새로고침하세요 😎");
this.upload();
this.upload();
this.upload();
this.upload();
this.run()
}
}
macroX.init()
