$(function(){
document.querySelector('#download').addEventListener('click', function() {
html2canvas(document.querySelector('#content'), {
onrendered: function(canvas) {
return Canvas2Image.saveAsPNG(canvas);
}
});
});
uiStorage.aovOutput.html(Number.parseInt(defaults.aovValue.toLocaleString()));
uiStorage.scalefeesOutput.html(Number.parseInt(defaults.scalefeesValue.toLocaleString()));
uiStorage.impactfeesOutput.html(Number.parseInt(defaults.impactfeesValue.toLocaleString()));
uiStorage.impactsetupOutput.html(Number.parseInt(defaults.impactsetupValue.toLocaleString()));
uiStorage.tenancyOutputM1.html(Number.parseInt(defaults.tenancyValueM1.toLocaleString()));
uiStorage.tenancyOutputM2.html(Number.parseInt(defaults.tenancyValueM2.toLocaleString()));
uiStorage.tenancyOutputM3.html(Number.parseInt(defaults.tenancyValueM3.toLocaleString()));
uiStorage.actionsOutputM1.html(Number.parseInt(defaults.actionsValueM1.toLocaleString()));
uiStorage.actionsOutputM2.html(Number.parseInt(defaults.actionsValueM2.toLocaleString()));
uiStorage.actionsOutputM3.html(Number.parseInt(defaults.actionsValueM3.toLocaleString()));
uiStorage.partnerCpaOutput.html(defaults.partnerCpaValue);
uiStorage.scaleCostOutput.html(defaults.scaleCostValue);
uiStorage.conversionRateOutput.html(defaults.conversionRateValue); 
var setProgress = function(obj, relation) {
var percent = relation * 100;
$(obj).css({background:"linear-gradient(to right, #e65800 0%, #ffaa00 " + percent + "%, #e5e5e5 " + percent + "%, #e5e5e5 100%)"});
};
setProgress($("#partner-cpa-slider")[0], defaults.partnerCpaValue / 100);
setProgress($("#scale-cost-slider")[0], defaults.scaleCostValue / 100);
setProgress($("#conversion-rate-slider")[0], defaults.conversionRateValue / 100);
$("#aov-input").on("input", function(){
uiStorage.aovOutput.html(Number.parseInt($(this).val()).toLocaleString());
calculate();
	});
$("#scale-fees-input").on("input", function(){
uiStorage.scalefeesOutput.html(Number.parseInt($(this).val()).toLocaleString());
calculate();
	});
$("#impact-fees-input").on("input", function(){
uiStorage.impactfeesOutput.html(Number.parseInt($(this).val()).toLocaleString());
calculate();
	});
$("#impact-setup-input").on("input", function(){
uiStorage.impactsetupOutput.html(Number.parseInt($(this).val()).toLocaleString());
calculate();
	});
$("#tenancy-input-M1").on("input", function(){
uiStorage.tenancyOutputM1.html(Number.parseInt($(this).val()).toLocaleString());
calculate();
	});
$("#tenancy-input-M2").on("input", function(){
uiStorage.tenancyOutputM2.html(Number.parseInt($(this).val()).toLocaleString());
calculate();
	});
$("#tenancy-input-M3").on("input", function(){
uiStorage.tenancyOutputM3.html(Number.parseInt($(this).val()).toLocaleString());
calculate();
	});
$("#actions-input-M1").on("input", function(){
uiStorage.actionsOutputM1.html(Number.parseInt($(this).val()).toLocaleString());
calculate();
	});
$("#actions-input-M2").on("input", function(){
uiStorage.actionsOutputM2.html(Number.parseInt($(this).val()).toLocaleString());
calculate();
	});
$("#actions-input-M3").on("input", function(){
uiStorage.actionsOutputM3.html(Number.parseInt($(this).val()).toLocaleString());
calculate();
	});
$("#partner-cpa-slider").slider({
min: 0,
max: 100,
value: defaults.partnerCpaValue,
slide: function (event, ui) {
uiStorage.partnerCpaOutput.html(ui.value);
setProgress(this, (ui.value) / 100);
calculate();
}
});
$("#scale-cost-slider").slider({
min: 0,
max: 100,
value: defaults.scaleCostValue,
slide: function (event, ui) {
uiStorage.scaleCostOutput.html(ui.value);
setProgress(this, (ui.value) / 100);
calculate();
}
});
$("#conversion-rate-slider").slider({
min: 0,
max: 100,
step: 0.5,
value: defaults.conversionRateValue,
slide: function (event, ui) {
uiStorage.conversionRateOutput.html(ui.value);
setProgress(this, (ui.value) / 100);
calculate();
}
});
calculate();
});
