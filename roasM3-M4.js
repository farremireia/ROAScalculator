<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
<script src="https://superal.github.io/canvas2image/canvas2image.js"></script>

$(function(){
    var defaults = {
    aovValue: 0,
    scalefeesValue: 0,
    impactfeesValue: 0,
    impactsetupValue: 0,
    partnerCpaValue: 0,
    scaleCostValue: 0,
    conversionRateValue: 0,
    actionsValueM3: 0,
    actionsValueM4: 0,
    tenancyValueM3: 0,
    tenancyValueM4: 0,
    };
    var uiStorage = {
    aovOutput: $("#aov-output"),
    scalefeesOutput: $("#scale-fees-output"),
    impactfeesOutput: $("#impact-fees-output"),
    impactsetupOutput: $("#impact-setup-output"),
    partnerCpaOutput: $("#partner-cpa-output"),
    scaleCostOutput: $("#scale-cost-output"),
    conversionRateOutput: $("#conversion-rate-output"),
    partnerCommissionM3: $("#partner-commission-M3"),
    partnerCommissionM4: $("#partner-commission-M4"),
    impactSetupM3: $("#impact-setup-M3"),
    impactSetupM4: $("#impact-setup-M4"),
    impactFeeM3: $("#impact-fee-M3"),
    impactFeeM4: $("#impact-fee-M4"),
    scaleFeeM3: $("#scale-fee-M3"),
    scaleFeeM4: $("#scale-fee-M4"),
    scaleOverrideM3: $("#scale-override-M3"),
    scaleOverrideM4: $("#scale-override-M4"),
    channelCostM3: $("#channel-cost-M3"),
    channelCostM4: $("#channel-cost-M4"),
    salesRevenueM3: $("#sales-revenue-M3"),
    salesRevenueM4: $("#sales-revenue-M4"),
    roasM3: $("#roas-M3"),
    roasM4: $("#roas-M4"),
    cpoM3: $("#cpo-M3"),
    cpoM4: $("#cpo-M4"),
    actionsOutputM3: $("#actions-output-M3"),
    actionsOutputM4: $("#actions-output-M4"),
    tenancyOutputM3: $("#tenancy-output-M3"),
    tenancyOutputM4: $("#tenancy-output-M4"),
    };
    var calculate = function() {
    var valueAov = (Number.parseFloat(uiStorage.aovOutput.html().replace(/,/g, '')));
    var valueScalefees = (Number.parseFloat(uiStorage.scalefeesOutput.html().replace(/,/g, '')));
    var valueImpactfees = (Number.parseFloat(uiStorage.impactfeesOutput.html().replace(/,/g, '')));
    var valueImpactsetup = (Number.parseFloat(uiStorage.impactsetupOutput.html().replace(/,/g, '')));
    var valueActionsM3 = (Number.parseFloat(uiStorage.actionsOutputM3.html().replace(/,/g, '')));
    var valueActionsM4 = (Number.parseFloat(uiStorage.actionsOutputM4.html().replace(/,/g, '')));
    var valueTenancyM3 = (Number.parseFloat(uiStorage.tenancyOutputM3.html().replace(/,/g, '')));
    var valueTenancyM4 = (Number.parseFloat(uiStorage.tenancyOutputM4.html().replace(/,/g, '')));
    var valuePartnerCPA = (Number.parseInt(uiStorage.partnerCpaOutput.html()));
    var valueScaleCost = (Number.parseInt(uiStorage.scaleCostOutput.html()));
    var valueConversionRate = (Number.parseInt(uiStorage.conversionRateOutput.html()))/100;
    var salesRevenueM3 = valueActionsM3 * valueAov;
    var salesRevenueM4 = valueActionsM4 * valueAov;
    var partnerCommissionM3 = (salesRevenueM3 * valuePartnerCPA) / 100;
    var partnerCommissionM4 = (salesRevenueM4 * valuePartnerCPA) / 100;
    var impactSetupM3 = valueImpactsetup;
    var impactSetupM4 = valueImpactsetup;
    var impactFeeM3 = valueImpactfees;
    var impactFeeM4 = valueImpactfees;
    var scaleFeeM3 = valueScalefees;
    var scaleFeeM4 = valueScalefees;
    var scaleOverrideM3 = (partnerCommissionM3 * valueScaleCost) / 100;
    var scaleOverrideM4 = (partnerCommissionM4 * valueScaleCost) / 100;
    var channelCostM3 = partnerCommissionM3 + impactSetupM3 + valueTenancyM3 + impactFeeM3 + scaleFeeM3 + scaleOverrideM3;
    var channelCostM4 = partnerCommissionM4 + impactSetupM4 + valueTenancyM4 + impactFeeM4 + scaleFeeM4 + scaleOverrideM4;
    var roasM3 = salesRevenueM3 / channelCostM3;
    var roasM4 = salesRevenueM4 / channelCostM4;
    var cpoM3 = channelCostM3 / valueActionsM3;
    var cpoM4 = channelCostM4 / valueActionsM4;
    uiStorage.partnerCommissionM3.html("£" + Number.parseFloat(partnerCommissionM3).toFixed(2));
    uiStorage.partnerCommissionM4.html("£" + Number.parseFloat(partnerCommissionM4).toFixed(2));
    uiStorage.impactSetupM3.html("£" + Number.parseFloat(impactSetupM3).toFixed(2));
    uiStorage.impactSetupM4.html("£" + Number.parseFloat(impactSetupM4).toFixed(2));
    uiStorage.impactFeeM3.html("£" + Number.parseFloat(impactFeeM3).toFixed(2));
    uiStorage.impactFeeM4.html("£" + Number.parseFloat(impactFeeM4).toFixed(2));
    uiStorage.scaleFeeM3.html("£" + Number.parseFloat(scaleFeeM3).toFixed(2));
    uiStorage.scaleFeeM4.html("£" + Number.parseFloat(scaleFeeM4).toFixed(2));
    uiStorage.scaleOverrideM3.html("£" + Number.parseFloat(scaleOverrideM3).toFixed(2));
    uiStorage.scaleOverrideM4.html("£" + Number.parseFloat(scaleOverrideM4).toFixed(2));
    uiStorage.channelCostM3.html("£" + Number.parseFloat(channelCostM3).toFixed(2));
    uiStorage.channelCostM4.html("£" + Number.parseFloat(channelCostM4).toFixed(2));
    uiStorage.salesRevenueM3.html("£" + Number.parseFloat(salesRevenueM3).toFixed(2));
    uiStorage.salesRevenueM4.html("£" + Number.parseFloat(salesRevenueM4).toFixed(2));
    uiStorage.roasM3.html("£" + Number.parseFloat(roasM3).toFixed(2));
    uiStorage.roasM4.html("£" + Number.parseFloat(roasM4).toFixed(2));
    uiStorage.cpoM3.html("£" + Number.parseFloat(cpoM3).toFixed(2));
    uiStorage.cpoM4.html("£" + Number.parseFloat(cpoM4).toFixed(2));
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
    uiStorage.tenancyOutputM3.html(Number.parseInt(defaults.tenancyValueM3.toLocaleString()));
    uiStorage.tenancyOutputM4.html(Number.parseInt(defaults.tenancyValueM4.toLocaleString()));
    uiStorage.actionsOutputM3.html(Number.parseInt(defaults.actionsValueM3.toLocaleString()));
    uiStorage.actionsOutputM4.html(Number.parseInt(defaults.actionsValueM4.toLocaleString()));
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
    $("#tenancy-input-M3").on("input", function(){
        uiStorage.tenancyOutputM3.html(Number.parseInt($(this).val()).toLocaleString());
        calculate();
        });
    $("#tenancy-input-M4").on("input", function(){
        uiStorage.tenancyOutputM4.html(Number.parseInt($(this).val()).toLocaleString());
        calculate();
        });
    $("#actions-input-M3").on("input", function(){
        uiStorage.actionsOutputM3.html(Number.parseInt($(this).val()).toLocaleString());
        calculate();
        });
    $("#actions-input-M4").on("input", function(){
        uiStorage.actionsOutputM4.html(Number.parseInt($(this).val()).toLocaleString());
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