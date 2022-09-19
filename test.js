$(function(){
var defaults = {
aovValue: 0,
scalefeesValue: 0,
impactfeesValue: 0,
impactsetupValue: 0,
partnerCpaValue: 0,
scaleCostValue: 0,
conversionRateValue: 0,
actionsValueM1: 0,
actionsValueM2: 0,
actionsValueM3: 0,
tenancyValueM1: 0,
tenancyValueM2: 0,
tenancyValueM3: 0,
};
var uiStorage = {
aovOutput: $("#aov-output"),
scalefeesOutput: $("#scale-fees-output"),
impactfeesOutput: $("#impact-fees-output"),
impactsetupOutput: $("#impact-setup-output"),
actionsOutputM1: $("#actions-output"),
actionsOutputM2: $("#actions-output"),
actionsOutputM3: $("#actions-output"),
partnerCpaOutput: $("#partner-cpa-output"),
scaleCostOutput: $("#scale-cost-output"),
conversionRateOutput: $("#conversion-rate-output"),
partnerCommissionM1: $("#partner-commission-M1"),
partnerCommissionM2: $("#partner-commission-M2"),
partnerCommissionM3: $("#partner-commission-M3"),
impactSetupM1: $("#impact-setup-M1"),
impactSetupM2: $("#impact-setup-M2"),
impactSetupM3: $("#impact-setup-M3"),
impactFeeM1: $("#impact-fee-M1"),
impactFeeM2: $("#impact-fee-M2"),
impactFeeM3: $("#impact-fee-M3"),
scaleFeeM1: $("#scale-fee-M1"),
scaleFeeM2: $("#scale-fee-M2"),
scaleFeeM3: $("#scale-fee-M3"),
scaleOverrideM1: $("#scale-override-M1"),
scaleOverrideM2: $("#scale-override-M2"),
scaleOverrideM3: $("#scale-override-M3"),
channelCostM1: $("#channel-cost-M1"),
channelCostM2: $("#channel-cost-M2"),
channelCostM3: $("#channel-cost-M3"),
salesRevenueM1: $("#sales-revenue-M1"),
salesRevenueM2: $("#sales-revenue-M2"),
salesRevenueM3: $("#sales-revenue-M3"),
roasM1: $("#roas-M1"),
roasM2: $("#roas-M2"),
roasM3: $("#roas-M3"),
cpoM1: $("#cpo-M1"),
cpoM2: $("#cpo-M2"),
cpoM3: $("#cpo-M3"),
tenancyOutputM1: $("#tenancy-output-M1"),
tenancyOutputM2: $("#tenancy-output-M2"),
tenancyOutputM3: $("#tenancy-output-M3"),
};
var calculate = function() {
var valueAov = (Number.parseFloat(uiStorage.aovOutput.html().replace(/,/g, '')));
var valueScalefees = (Number.parseFloat(uiStorage.scalefeesOutput.html().replace(/,/g, '')));
var valueImpactfees = (Number.parseFloat(uiStorage.impactfeesOutput.html().replace(/,/g, '')));
var valueImpactsetup = (Number.parseFloat(uiStorage.impactsetupOutput.html().replace(/,/g, '')));
var valueActionsM1 = (Number.parseFloat(uiStorage.actionsOutputM1.html().replace(/,/g, '')));
var valueActionsM2 = (Number.parseFloat(uiStorage.actionsOutputM2.html().replace(/,/g, '')));
var valueActionsM3 = (Number.parseFloat(uiStorage.actionsOutputM3.html().replace(/,/g, '')));
var valueTenancyM1 = (Number.parseFloat(uiStorage.tenancyOutputM1.html().replace(/,/g, '')));
var valueTenancyM2 = (Number.parseFloat(uiStorage.tenancyOutputM2.html().replace(/,/g, '')));
var valueTenancyM3 = (Number.parseFloat(uiStorage.tenancyOutputM3.html().replace(/,/g, '')));
var valuePartnerCPA = (Number.parseInt(uiStorage.partnerCpaOutput.html()));
var valueScaleCost = (Number.parseInt(uiStorage.scaleCostOutput.html()));
var valueConversionRate = (Number.parseInt(uiStorage.conversionRateOutput.html()))/100;
var salesRevenueM1 = valueActionsM1 * valueAov;
var salesRevenueM2 = valueActionsM2 * valueAov;
var salesRevenueM3 = valueActionsM3 * valueAov;
var partnerCommissionM1 = (salesRevenueM1 * valuePartnerCPA) / 100;
var partnerCommissionM2 = (salesRevenueM2 * valuePartnerCPA) / 100;
var partnerCommissionM3 = (salesRevenueM3 * valuePartnerCPA) / 100;
var impactSetupM1 = valueImpactsetup;
var impactSetupM2 = valueImpactsetup;
var impactSetupM3 = valueImpactsetup;
var impactFeeM1 = valueImpactfees;
var impactFeeM2 = valueImpactfees;
var impactFeeM3 = valueImpactfees;
var scaleFeeM1 = valueScalefees;
var scaleFeeM2 = valueScalefees;
var scaleFeeM3 = valueScalefees;
var scaleOverrideM1 = (partnerCommissionM1 * valueScaleCost) / 100;
var scaleOverrideM2 = (partnerCommissionM2 * valueScaleCost) / 100;
var scaleOverrideM3 = (partnerCommissionM3 * valueScaleCost) / 100;
var channelCostM1 = partnerCommissionM1 + impactSetupM1 + valueTenancyM1 + impactFeeM1 + scaleFeeM1 + scaleOverrideM1;
var channelCostM2 = partnerCommissionM2 + impactSetupM2 + valueTenancyM2 + impactFeeM2 + scaleFeeM2 + scaleOverrideM2;
var channelCostM3 = partnerCommissionM3 + impactSetupM3 + valueTenancyM3 + impactFeeM3 + scaleFeeM3 + scaleOverrideM3;
var roasM1 = salesRevenueM1 / channelCostM1;
var roasM2 = salesRevenueM2 / channelCostM2;
var roasM3 = salesRevenueM3 / channelCostM3;
var cpoM1 = channelCostM1 / valueActionsM1;
var cpoM2 = channelCostM2 / valueActionsM2;
var cpoM3 = channelCostM3 / valueActionsM3;
uiStorage.partnerCommissionM1.html("£" + Number.parseFloat(partnerCommissionM1).toFixed(2));
uiStorage.partnerCommissionM2.html("£" + Number.parseFloat(partnerCommissionM2).toFixed(2));
uiStorage.partnerCommissionM3.html("£" + Number.parseFloat(partnerCommissionM3).toFixed(2));
uiStorage.impactSetupM1.html("£" + Number.parseFloat(impactSetupM1).toFixed(2));
uiStorage.impactSetupM2.html("£" + Number.parseFloat(impactSetupM2).toFixed(2));
uiStorage.impactSetupM3.html("£" + Number.parseFloat(impactSetupM3).toFixed(2));
uiStorage.impactFeeM1.html("£" + Number.parseFloat(impactFeeM1).toFixed(2));
uiStorage.impactFeeM2.html("£" + Number.parseFloat(impactFeeM2).toFixed(2));
uiStorage.impactFeeM3.html("£" + Number.parseFloat(impactFeeM3).toFixed(2));
uiStorage.scaleFeeM1.html("£" + Number.parseFloat(scaleFeeM1).toFixed(2));
uiStorage.scaleFeeM2.html("£" + Number.parseFloat(scaleFeeM2).toFixed(2));
uiStorage.scaleFeeM3.html("£" + Number.parseFloat(scaleFeeM3).toFixed(2));
uiStorage.scaleOverrideM1.html("£" + Number.parseFloat(scaleOverrideM1).toFixed(2));
uiStorage.scaleOverrideM2.html("£" + Number.parseFloat(scaleOverrideM2).toFixed(2));
uiStorage.scaleOverrideM3.html("£" + Number.parseFloat(scaleOverrideM3).toFixed(2));
uiStorage.channelCostM1.html("£" + Number.parseFloat(channelCostM1).toFixed(2));
uiStorage.channelCostM2.html("£" + Number.parseFloat(channelCostM2).toFixed(2));
uiStorage.channelCostM3.html("£" + Number.parseFloat(channelCostM3).toFixed(2));
uiStorage.salesRevenueM1.html("£" + Number.parseFloat(salesRevenueM1).toFixed(2));
uiStorage.salesRevenueM2.html("£" + Number.parseFloat(salesRevenueM2).toFixed(2));
uiStorage.salesRevenueM3.html("£" + Number.parseFloat(salesRevenueM3).toFixed(2));
uiStorage.roasM1.html("£" + Number.parseFloat(roasM1).toFixed(2));
uiStorage.roasM2.html("£" + Number.parseFloat(roasM2).toFixed(2));
uiStorage.roasM3.html("£" + Number.parseFloat(roasM3).toFixed(2));
uiStorage.cpoM1.html("£" + Number.parseFloat(cpoM1).toFixed(2));
uiStorage.cpoM2.html("£" + Number.parseFloat(cpoM2).toFixed(2));
uiStorage.cpoM3.html("£" + Number.parseFloat(cpoM3).toFixed(2));
};
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