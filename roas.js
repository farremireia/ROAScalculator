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
        actionsValueM4: 0,
        actionsValueM5: 0,
        actionsValueM6: 0,
        actionsValueM7: 0,
        actionsValueM8: 0,
        actionsValueM9: 0,
        actionsValueM10: 0,
        actionsValueM11: 0,
        actionsValueM12: 0,


        tenancyValueM1: 0,
        tenancyValueM2: 0,
        tenancyValueM3: 0,
        tenancyValueM4: 0,
        tenancyValueM5: 0,
        tenancyValueM6: 0,
        tenancyValueM7: 0,
        tenancyValueM8: 0,
        tenancyValueM9: 0,
        tenancyValueM10: 0,
        tenancyValueM11: 0,
        tenancyValueM12: 0,
	};
	var uiStorage = {
		aovOutput: $("#aov-output"),
        scalefeesOutput: $("#scale-fees-output"),
        impactfeesOutput: $("#impact-fees-output"),
        impactsetupOutput: $("#impact-setup-output"),

        actionsOutputM1: $("#actions-output"),
        actionsOutputM2: $("#actions-output"),
        actionsOutputM3: $("#actions-output"),
        actionsOutputM4: $("#actions-output"),
        actionsOutputM5: $("#actions-output"),
        actionsOutputM6: $("#actions-output"),
        actionsOutputM7: $("#actions-output"),
        actionsOutputM8: $("#actions-output"),
        actionsOutputM9: $("#actions-output"),
        actionsOutputM10: $("#actions-output"),
        actionsOutputM11: $("#actions-output"),
        actionsOutputM12: $("#actions-output"),


        partnerCpaOutput: $("#partner-cpa-output"),
        scaleCostOutput: $("#scale-cost-output"),
        conversionRateOutput: $("#conversion-rate-output"),

        partnerCommissionM1: $("#partner-commission-M1"),
        partnerCommissionM2: $("#partner-commission-M2"),
        partnerCommissionM3: $("#partner-commission-M3"),
        partnerCommissionM4: $("#partner-commission-M4"),
        partnerCommissionM5: $("#partner-commission-M5"),
        partnerCommissionM6: $("#partner-commission-M6"),
        partnerCommissionM7: $("#partner-commission-M7"),
        partnerCommissionM8: $("#partner-commission-M8"),
        partnerCommissionM9: $("#partner-commission-M9"),
        partnerCommissionM10: $("#partner-commission-M10"),
        partnerCommissionM11: $("#partner-commission-M11"),
        partnerCommissionM12: $("#partner-commission-M12"),

        impactSetupM1: $("#impact-setup-M1"),
        impactSetupM2: $("#impact-setup-M2"),
        impactSetupM3: $("#impact-setup-M3"),
        impactSetupM4: $("#impact-setup-M4"),
        impactSetupM5: $("#impact-setup-M5"),
        impactSetupM6: $("#impact-setup-M6"),
        impactSetupM7: $("#impact-setup-M7"),
        impactSetupM8: $("#impact-setup-M8"),
        impactSetupM9: $("#impact-setup-M9"),
        impactSetupM10: $("#impact-setup-M10"),
        impactSetupM11: $("#impact-setup-M11"),
        impactSetupM12: $("#impact-setup-M12"),

        impactFeeM1: $("#impact-fee-M1"),
        impactFeeM2: $("#impact-fee-M2"),
        impactFeeM3: $("#impact-fee-M3"),
        impactFeeM4: $("#impact-fee-M4"),
        impactFeeM5: $("#impact-fee-M5"),
        impactFeeM6: $("#impact-fee-M6"),
        impactFeeM7: $("#impact-fee-M7"),
        impactFeeM8: $("#impact-fee-M8"),
        impactFeeM9: $("#impact-fee-M9"),
        impactFeeM10: $("#impact-fee-M10"),
        impactFeeM11: $("#impact-fee-M11"),
        impactFeeM12: $("#impact-fee-M12"),


        scaleFeeM1: $("#scale-fee-M1"),
        scaleFeeM2: $("#scale-fee-M2"),
        scaleFeeM3: $("#scale-fee-M3"),
        scaleFeeM4: $("#scale-fee-M4"),
        scaleFeeM5: $("#scale-fee-M5"),
        scaleFeeM6: $("#scale-fee-M6"),
        scaleFeeM7: $("#scale-fee-M7"),
        scaleFeeM8: $("#scale-fee-M8"),
        scaleFeeM9: $("#scale-fee-M9"),
        scaleFeeM10: $("#scale-fee-M10"),
        scaleFeeM11: $("#scale-fee-M11"),
        scaleFeeM12: $("#scale-fee-M12"),

        scaleOverrideM1: $("#scale-override-M1"),
        scaleOverrideM2: $("#scale-override-M2"),
        scaleOverrideM3: $("#scale-override-M3"),
        scaleOverrideM4: $("#scale-override-M4"),
        scaleOverrideM5: $("#scale-override-M5"),
        scaleOverrideM6: $("#scale-override-M6"),
        scaleOverrideM7: $("#scale-override-M7"),
        scaleOverrideM8: $("#scale-override-M8"),
        scaleOverrideM9: $("#scale-override-M9"),
        scaleOverrideM10: $("#scale-override-M10"),
        scaleOverrideM11: $("#scale-override-M11"),
        scaleOverrideM12: $("#scale-override-M12"),

        channelCostM1: $("#channel-cost-M1"),
        channelCostM2: $("#channel-cost-M2"),
        channelCostM3: $("#channel-cost-M3"),
        channelCostM4: $("#channel-cost-M4"),
        channelCostM5: $("#channel-cost-M5"),
        channelCostM6: $("#channel-cost-M6"),
        channelCostM7: $("#channel-cost-M7"),
        channelCostM8: $("#channel-cost-M8"),
        channelCostM9: $("#channel-cost-M9"),
        channelCostM10: $("#channel-cost-M10"),
        channelCostM11: $("#channel-cost-M11"),
        channelCostM12: $("#channel-cost-M12"),

        salesRevenueM1: $("#sales-revenue-M1"),
        salesRevenueM2: $("#sales-revenue-M2"),
        salesRevenueM3: $("#sales-revenue-M3"),
        salesRevenueM4: $("#sales-revenue-M4"),
        salesRevenueM5: $("#sales-revenue-M5"),
        salesRevenueM6: $("#sales-revenue-M6"),
        salesRevenueM7: $("#sales-revenue-M7"),
        salesRevenueM8: $("#sales-revenue-M8"),
        salesRevenueM9: $("#sales-revenue-M9"),
        salesRevenueM10: $("#sales-revenue-M10"),
        salesRevenueM11: $("#sales-revenue-M11"),
        salesRevenueM12: $("#sales-revenue-M12"),

        roasM1: $("#roas-M1"),
        roasM2: $("#roas-M2"),
        roasM3: $("#roas-M3"),
        roasM4: $("#roas-M4"),
        roasM5: $("#roas-M5"),
        roasM6: $("#roas-M6"),
        roasM7: $("#roas-M7"),
        roasM8: $("#roas-M8"),
        roasM9: $("#roas-M9"),
        roasM10: $("#roas-M10"),
        roasM11: $("#roas-M11"),
        roasM12: $("#roas-M12"),

        cpoM1: $("#cpo-M1"),
        cpoM2: $("#cpo-M2"),
        cpoM3: $("#cpo-M3"),
        cpoM4: $("#cpo-M4"),
        cpoM5: $("#cpo-M5"),
        cpoM6: $("#cpo-M6"),
        cpoM7: $("#cpo-M7"),
        cpoM8: $("#cpo-M8"),
        cpoM9: $("#cpo-M9"),
        cpoM10: $("#cpo-M10"),
        cpoM11: $("#cpo-M11"),
        cpoM12: $("#cpo-M12"),

        tenancyOutputM1: $("#tenancy-output-M1"),
        tenancyOutputM2: $("#tenancy-output-M2"),
        tenancyOutputM3: $("#tenancy-output-M3"),
        tenancyOutputM4: $("#tenancy-output-M4"),
        tenancyOutputM5: $("#tenancy-output-M5"),
        tenancyOutputM6: $("#tenancy-output-M6"),
        tenancyOutputM7: $("#tenancy-output-M7"),
        tenancyOutputM8: $("#tenancy-output-M8"),
        tenancyOutputM9: $("#tenancy-output-M9"),
        tenancyOutputM10: $("#tenancy-output-M10"),
        tenancyOutputM11: $("#tenancy-output-M11"),
        tenancyOutputM12: $("#tenancy-output-M12"),

    };
	var calculate = function() {
		var valueAov = (Number.parseFloat(uiStorage.aovOutput.html().replace(/,/g, '')));
        var valueScalefees = (Number.parseFloat(uiStorage.scalefeesOutput.html().replace(/,/g, '')));
        var valueImpactfees = (Number.parseFloat(uiStorage.impactfeesOutput.html().replace(/,/g, '')));
        var valueImpactsetup = (Number.parseFloat(uiStorage.impactsetupOutput.html().replace(/,/g, '')));
		
        var valueActionsM1 = (Number.parseFloat(uiStorage.actionsOutputM1.html().replace(/,/g, '')));
        var valueActionsM2 = (Number.parseFloat(uiStorage.actionsOutputM2.html().replace(/,/g, '')));
        var valueActionsM3 = (Number.parseFloat(uiStorage.actionsOutputM3.html().replace(/,/g, '')));
        var valueActionsM4 = (Number.parseFloat(uiStorage.actionsOutputM4.html().replace(/,/g, '')));
        var valueActionsM5 = (Number.parseFloat(uiStorage.actionsOutputM5.html().replace(/,/g, '')));
        var valueActionsM6 = (Number.parseFloat(uiStorage.actionsOutputM6.html().replace(/,/g, '')));
        var valueActionsM7 = (Number.parseFloat(uiStorage.actionsOutputM7.html().replace(/,/g, '')));
        var valueActionsM8 = (Number.parseFloat(uiStorage.actionsOutputM8.html().replace(/,/g, '')));
        var valueActionsM9 = (Number.parseFloat(uiStorage.actionsOutputM9.html().replace(/,/g, '')));
        var valueActionsM10 = (Number.parseFloat(uiStorage.actionsOutputM10.html().replace(/,/g, '')));
        var valueActionsM11 = (Number.parseFloat(uiStorage.actionsOutputM11.html().replace(/,/g, '')));
        var valueActionsM12 = (Number.parseFloat(uiStorage.actionsOutputM12.html().replace(/,/g, '')));

        var valueTenancyM1 = (Number.parseFloat(uiStorage.tenancyOutputM1.html().replace(/,/g, '')));
        var valueTenancyM2 = (Number.parseFloat(uiStorage.tenancyOutputM2.html().replace(/,/g, '')));
        var valueTenancyM3 = (Number.parseFloat(uiStorage.tenancyOutputM3.html().replace(/,/g, '')));
        var valueTenancyM4 = (Number.parseFloat(uiStorage.tenancyOutputM4.html().replace(/,/g, '')));
        var valueTenancyM5 = (Number.parseFloat(uiStorage.tenancyOutputM5.html().replace(/,/g, '')));
        var valueTenancyM6 = (Number.parseFloat(uiStorage.tenancyOutputM6.html().replace(/,/g, '')));
        var valueTenancyM7 = (Number.parseFloat(uiStorage.tenancyOutputM7.html().replace(/,/g, '')));
        var valueTenancyM8 = (Number.parseFloat(uiStorage.tenancyOutputM8.html().replace(/,/g, '')));
        var valueTenancyM9 = (Number.parseFloat(uiStorage.tenancyOutputM9.html().replace(/,/g, '')));
        var valueTenancyM10 = (Number.parseFloat(uiStorage.tenancyOutputM10.html().replace(/,/g, '')));
        var valueTenancyM11 = (Number.parseFloat(uiStorage.tenancyOutputM11.html().replace(/,/g, '')));
        var valueTenancyM12 = (Number.parseFloat(uiStorage.tenancyOutputM12.html().replace(/,/g, '')));

        var valuePartnerCPA = (Number.parseInt(uiStorage.partnerCpaOutput.html()));
		var valueScaleCost = (Number.parseInt(uiStorage.scaleCostOutput.html()));
		var valueConversionRate = (Number.parseInt(uiStorage.conversionRateOutput.html()))/100;

        var salesRevenueM1 = valueActionsM1 * valueAov;
        var salesRevenueM2 = valueActionsM2 * valueAov;
        var salesRevenueM3 = valueActionsM3 * valueAov;
        var salesRevenueM4 = valueActionsM4 * valueAov;
        var salesRevenueM5 = valueActionsM5 * valueAov;
        var salesRevenueM6 = valueActionsM6 * valueAov;
        var salesRevenueM7 = valueActionsM7 * valueAov;
        var salesRevenueM8 = valueActionsM8 * valueAov;
        var salesRevenueM9 = valueActionsM9 * valueAov;
        var salesRevenueM10 = valueActionsM10 * valueAov;
        var salesRevenueM11 = valueActionsM11 * valueAov;
        var salesRevenueM12 = valueActionsM12 * valueAov;

        var partnerCommissionM1 = (salesRevenueM1 * valuePartnerCPA) / 100;
        var partnerCommissionM2 = (salesRevenueM2 * valuePartnerCPA) / 100;
        var partnerCommissionM3 = (salesRevenueM3 * valuePartnerCPA) / 100;
        var partnerCommissionM4 = (salesRevenueM4 * valuePartnerCPA) / 100;
        var partnerCommissionM5 = (salesRevenueM5 * valuePartnerCPA) / 100;
        var partnerCommissionM6 = (salesRevenueM6 * valuePartnerCPA) / 100;
        var partnerCommissionM7 = (salesRevenueM7 * valuePartnerCPA) / 100;
        var partnerCommissionM8 = (salesRevenueM8 * valuePartnerCPA) / 100;
        var partnerCommissionM9 = (salesRevenueM9 * valuePartnerCPA) / 100;
        var partnerCommissionM10 = (salesRevenueM10 * valuePartnerCPA) / 100;
        var partnerCommissionM11 = (salesRevenueM11 * valuePartnerCPA) / 100;
        var partnerCommissionM12 = (salesRevenueM12 * valuePartnerCPA) / 100;

        var impactSetupM1 = valueImpactsetup;
        var impactSetupM2 = valueImpactsetup;
        var impactSetupM3 = valueImpactsetup;
        var impactSetupM4 = valueImpactsetup;
        var impactSetupM5 = valueImpactsetup;
        var impactSetupM6 = valueImpactsetup;
        var impactSetupM7 = valueImpactsetup;
        var impactSetupM8 = valueImpactsetup;
        var impactSetupM9 = valueImpactsetup;
        var impactSetupM10 = valueImpactsetup;
        var impactSetupM11 = valueImpactsetup;
        var impactSetupM12 = valueImpactsetup;

        var impactFeeM1 = valueImpactfees;
        var impactFeeM2 = valueImpactfees;
        var impactFeeM3 = valueImpactfees;
        var impactFeeM4 = valueImpactfees;
        var impactFeeM5 = valueImpactfees;
        var impactFeeM6 = valueImpactfees;
        var impactFeeM7 = valueImpactfees;
        var impactFeeM8 = valueImpactfees;
        var impactFeeM9 = valueImpactfees;
        var impactFeeM10 = valueImpactfees;
        var impactFeeM11 = valueImpactfees;
        var impactFeeM12 = valueImpactfees;

        var scaleFeeM1 = valueScalefees;
        var scaleFeeM2 = valueScalefees;
        var scaleFeeM3 = valueScalefees;
        var scaleFeeM4 = valueScalefees;
        var scaleFeeM5 = valueScalefees;
        var scaleFeeM6 = valueScalefees;
        var scaleFeeM7 = valueScalefees;
        var scaleFeeM8 = valueScalefees;
        var scaleFeeM9 = valueScalefees;
        var scaleFeeM10 = valueScalefees;
        var scaleFeeM11 = valueScalefees;
        var scaleFeeM12 = valueScalefees;

        var scaleOverrideM1 = (partnerCommissionM1 * valueScaleCost) / 100;
        var scaleOverrideM2 = (partnerCommissionM2 * valueScaleCost) / 100;
        var scaleOverrideM3 = (partnerCommissionM3 * valueScaleCost) / 100;
        var scaleOverrideM4 = (partnerCommissionM4 * valueScaleCost) / 100;
        var scaleOverrideM5 = (partnerCommissionM5 * valueScaleCost) / 100;
        var scaleOverrideM6 = (partnerCommissionM6 * valueScaleCost) / 100;
        var scaleOverrideM7 = (partnerCommissionM7 * valueScaleCost) / 100;
        var scaleOverrideM8 = (partnerCommissionM8 * valueScaleCost) / 100;
        var scaleOverrideM9 = (partnerCommissionM9 * valueScaleCost) / 100;
        var scaleOverrideM10 = (partnerCommissionM10 * valueScaleCost) / 100;
        var scaleOverrideM11 = (partnerCommissionM11 * valueScaleCost) / 100;
        var scaleOverrideM12 = (partnerCommissionM12 * valueScaleCost) / 100;

        var channelCostM1 = partnerCommissionM1 + impactSetupM1 + valueTenancyM1 + impactFeeM1 + scaleFeeM1 + scaleOverrideM1;
        var channelCostM2 = partnerCommissionM2 + impactSetupM2 + valueTenancyM2 + impactFeeM2 + scaleFeeM2 + scaleOverrideM2;
        var channelCostM3 = partnerCommissionM3 + impactSetupM3 + valueTenancyM3 + impactFeeM3 + scaleFeeM3 + scaleOverrideM3;
        var channelCostM4 = partnerCommissionM4 + impactSetupM4 + valueTenancyM4 + impactFeeM4 + scaleFeeM4 + scaleOverrideM4;
        var channelCostM5 = partnerCommissionM5 + impactSetupM5 + valueTenancyM5 + impactFeeM5 + scaleFeeM5 + scaleOverrideM5;
        var channelCostM6 = partnerCommissionM6 + impactSetupM6 + valueTenancyM6 + impactFeeM6 + scaleFeeM6 + scaleOverrideM6;
        var channelCostM7 = partnerCommissionM7 + impactSetupM7 + valueTenancyM7 + impactFeeM7 + scaleFeeM7 + scaleOverrideM7;
        var channelCostM8 = partnerCommissionM8 + impactSetupM8 + valueTenancyM8 + impactFeeM8 + scaleFeeM8 + scaleOverrideM8;
        var channelCostM9 = partnerCommissionM9 + impactSetupM9 + valueTenancyM9 + impactFeeM9 + scaleFeeM9 + scaleOverrideM9;
        var channelCostM10 = partnerCommissionM10 + impactSetupM10 + valueTenancyM10 + impactFeeM10 + scaleFeeM10 + scaleOverrideM10;
        var channelCostM11 = partnerCommissionM11 + impactSetupM11 + valueTenancyM11 + impactFeeM11 + scaleFeeM11 + scaleOverrideM11;
        var channelCostM12 = partnerCommissionM12 + impactSetupM12 + valueTenancyM12 + impactFeeM12 + scaleFeeM12 + scaleOverrideM12;

        var roasM1 = salesRevenueM1 / channelCostM1;
        var roasM2 = salesRevenueM2 / channelCostM2;
        var roasM3 = salesRevenueM3 / channelCostM3;
        var roasM4 = salesRevenueM4 / channelCostM4;
        var roasM5 = salesRevenueM5 / channelCostM5;
        var roasM6 = salesRevenueM6 / channelCostM6;
        var roasM7 = salesRevenueM7 / channelCostM7;
        var roasM8 = salesRevenueM8 / channelCostM8;
        var roasM9 = salesRevenueM9 / channelCostM9;
        var roasM10 = salesRevenueM10 / channelCostM10;
        var roasM11 = salesRevenueM11 / channelCostM11;
        var roasM12 = salesRevenueM12 / channelCostM12;

        var cpoM1 = channelCostM1 / valueActionsM1;
        var cpoM2 = channelCostM2 / valueActionsM2;
        var cpoM3 = channelCostM3 / valueActionsM3;
        var cpoM4 = channelCostM4 / valueActionsM4;
        var cpoM5 = channelCostM5 / valueActionsM5;
        var cpoM6 = channelCostM6 / valueActionsM6;
        var cpoM7 = channelCostM7 / valueActionsM7;
        var cpoM8 = channelCostM8 / valueActionsM8;
        var cpoM9 = channelCostM9 / valueActionsM9;
        var cpoM10 = channelCostM10 / valueActionsM10;
        var cpoM11 = channelCostM11 / valueActionsM11;
        var cpoM12 = channelCostM12 / valueActionsM12;

uiStorage.partnerCommissionM1.html("£" + Number.parseFloat(partnerCommissionM1).toFixed(2));
uiStorage.partnerCommissionM2.html("£" + Number.parseFloat(partnerCommissionM2).toFixed(2));
uiStorage.partnerCommissionM3.html("£" + Number.parseFloat(partnerCommissionM3).toFixed(2));
uiStorage.partnerCommissionM4.html("£" + Number.parseFloat(partnerCommissionM4).toFixed(2));
uiStorage.partnerCommissionM5.html("£" + Number.parseFloat(partnerCommissionM5).toFixed(2));
uiStorage.partnerCommissionM6.html("£" + Number.parseFloat(partnerCommissionM6).toFixed(2));
uiStorage.partnerCommissionM7.html("£" + Number.parseFloat(partnerCommissionM7).toFixed(2));
uiStorage.partnerCommissionM8.html("£" + Number.parseFloat(partnerCommissionM8).toFixed(2));
uiStorage.partnerCommissionM9.html("£" + Number.parseFloat(partnerCommissionM9).toFixed(2));
uiStorage.partnerCommissionM10.html("£" + Number.parseFloat(partnerCommissionM10).toFixed(2));
uiStorage.partnerCommissionM11.html("£" + Number.parseFloat(partnerCommissionM11).toFixed(2));
uiStorage.partnerCommissionM12.html("£" + Number.parseFloat(partnerCommissionM12).toFixed(2));

uiStorage.impactSetupM1.html("£" + Number.parseFloat(impactSetupM1).toFixed(2));
uiStorage.impactSetupM2.html("£" + Number.parseFloat(impactSetupM2).toFixed(2));
uiStorage.impactSetupM3.html("£" + Number.parseFloat(impactSetupM3).toFixed(2));
uiStorage.impactSetupM4.html("£" + Number.parseFloat(impactSetupM4).toFixed(2));
uiStorage.impactSetupM5.html("£" + Number.parseFloat(impactSetupM5).toFixed(2));
uiStorage.impactSetupM6.html("£" + Number.parseFloat(impactSetupM6).toFixed(2));
uiStorage.impactSetupM7.html("£" + Number.parseFloat(impactSetupM7).toFixed(2));
uiStorage.impactSetupM8.html("£" + Number.parseFloat(impactSetupM8).toFixed(2));
uiStorage.impactSetupM9.html("£" + Number.parseFloat(impactSetupM9).toFixed(2));
uiStorage.impactSetupM10.html("£" + Number.parseFloat(impactSetupM10).toFixed(2));
uiStorage.impactSetupM11.html("£" + Number.parseFloat(impactSetupM11).toFixed(2));
uiStorage.impactSetupM12.html("£" + Number.parseFloat(impactSetupM12).toFixed(2));

uiStorage.impactFeeM1.html("£" + Number.parseFloat(impactFeeM1).toFixed(2));
uiStorage.impactFeeM2.html("£" + Number.parseFloat(impactFeeM2).toFixed(2));
uiStorage.impactFeeM3.html("£" + Number.parseFloat(impactFeeM3).toFixed(2));
uiStorage.impactFeeM4.html("£" + Number.parseFloat(impactFeeM4).toFixed(2));
uiStorage.impactFeeM5.html("£" + Number.parseFloat(impactFeeM5).toFixed(2));
uiStorage.impactFeeM6.html("£" + Number.parseFloat(impactFeeM6).toFixed(2));
uiStorage.impactFeeM7.html("£" + Number.parseFloat(impactFeeM7).toFixed(2));
uiStorage.impactFeeM8.html("£" + Number.parseFloat(impactFeeM8).toFixed(2));
uiStorage.impactFeeM9.html("£" + Number.parseFloat(impactFeeM9).toFixed(2));
uiStorage.impactFeeM10.html("£" + Number.parseFloat(impactFeeM10).toFixed(2));
uiStorage.impactFeeM11.html("£" + Number.parseFloat(impactFeeM11).toFixed(2));
uiStorage.impactFeeM12.html("£" + Number.parseFloat(impactFeeM12).toFixed(2));

uiStorage.scaleFeeM1.html("£" + Number.parseFloat(scaleFeeM1).toFixed(2));
uiStorage.scaleFeeM2.html("£" + Number.parseFloat(scaleFeeM2).toFixed(2));
uiStorage.scaleFeeM3.html("£" + Number.parseFloat(scaleFeeM3).toFixed(2));
uiStorage.scaleFeeM4.html("£" + Number.parseFloat(scaleFeeM4).toFixed(2));
uiStorage.scaleFeeM5.html("£" + Number.parseFloat(scaleFeeM5).toFixed(2));
uiStorage.scaleFeeM6.html("£" + Number.parseFloat(scaleFeeM6).toFixed(2));
uiStorage.scaleFeeM7.html("£" + Number.parseFloat(scaleFeeM7).toFixed(2));
uiStorage.scaleFeeM8.html("£" + Number.parseFloat(scaleFeeM8).toFixed(2));
uiStorage.scaleFeeM9.html("£" + Number.parseFloat(scaleFeeM9).toFixed(2));
uiStorage.scaleFeeM10.html("£" + Number.parseFloat(scaleFeeM10).toFixed(2));
uiStorage.scaleFeeM11.html("£" + Number.parseFloat(scaleFeeM11).toFixed(2));
uiStorage.scaleFeeM12.html("£" + Number.parseFloat(scaleFeeM12).toFixed(2));

uiStorage.scaleOverrideM1.html("£" + Number.parseFloat(scaleOverrideM1).toFixed(2));
uiStorage.scaleOverrideM2.html("£" + Number.parseFloat(scaleOverrideM2).toFixed(2));
uiStorage.scaleOverrideM3.html("£" + Number.parseFloat(scaleOverrideM3).toFixed(2));
uiStorage.scaleOverrideM4.html("£" + Number.parseFloat(scaleOverrideM4).toFixed(2));
uiStorage.scaleOverrideM5.html("£" + Number.parseFloat(scaleOverrideM5).toFixed(2));
uiStorage.scaleOverrideM6.html("£" + Number.parseFloat(scaleOverrideM6).toFixed(2));
uiStorage.scaleOverrideM7.html("£" + Number.parseFloat(scaleOverrideM7).toFixed(2));
uiStorage.scaleOverrideM8.html("£" + Number.parseFloat(scaleOverrideM8).toFixed(2));
uiStorage.scaleOverrideM9.html("£" + Number.parseFloat(scaleOverrideM9).toFixed(2));
uiStorage.scaleOverrideM10.html("£" + Number.parseFloat(scaleOverrideM10).toFixed(2));
uiStorage.scaleOverrideM11.html("£" + Number.parseFloat(scaleOverrideM11).toFixed(2));
uiStorage.scaleOverrideM12.html("£" + Number.parseFloat(scaleOverrideM12).toFixed(2));

uiStorage.channelCostM1.html("£" + Number.parseFloat(channelCostM1).toFixed(2));
uiStorage.channelCostM2.html("£" + Number.parseFloat(channelCostM2).toFixed(2));
uiStorage.channelCostM3.html("£" + Number.parseFloat(channelCostM3).toFixed(2));
uiStorage.channelCostM4.html("£" + Number.parseFloat(channelCostM4).toFixed(2));
uiStorage.channelCostM5.html("£" + Number.parseFloat(channelCostM5).toFixed(2));
uiStorage.channelCostM6.html("£" + Number.parseFloat(channelCostM6).toFixed(2));
uiStorage.channelCostM7.html("£" + Number.parseFloat(channelCostM7).toFixed(2));
uiStorage.channelCostM8.html("£" + Number.parseFloat(channelCostM8).toFixed(2));
uiStorage.channelCostM9.html("£" + Number.parseFloat(channelCostM9).toFixed(2));
uiStorage.channelCostM10.html("£" + Number.parseFloat(channelCostM10).toFixed(2));
uiStorage.channelCostM11.html("£" + Number.parseFloat(channelCostM11).toFixed(2));
uiStorage.channelCostM12.html("£" + Number.parseFloat(channelCostM12).toFixed(2));

uiStorage.salesRevenueM1.html("£" + Number.parseFloat(salesRevenueM1).toFixed(2));
uiStorage.salesRevenueM2.html("£" + Number.parseFloat(salesRevenueM2).toFixed(2));
uiStorage.salesRevenueM3.html("£" + Number.parseFloat(salesRevenueM3).toFixed(2));
uiStorage.salesRevenueM4.html("£" + Number.parseFloat(salesRevenueM4).toFixed(2));
uiStorage.salesRevenueM5.html("£" + Number.parseFloat(salesRevenueM5).toFixed(2));
uiStorage.salesRevenueM6.html("£" + Number.parseFloat(salesRevenueM6).toFixed(2));
uiStorage.salesRevenueM7.html("£" + Number.parseFloat(salesRevenueM7).toFixed(2));
uiStorage.salesRevenueM8.html("£" + Number.parseFloat(salesRevenueM8).toFixed(2));
uiStorage.salesRevenueM9.html("£" + Number.parseFloat(salesRevenueM9).toFixed(2));
uiStorage.salesRevenueM10.html("£" + Number.parseFloat(salesRevenueM10).toFixed(2));
uiStorage.salesRevenueM11.html("£" + Number.parseFloat(salesRevenueM11).toFixed(2));
uiStorage.salesRevenueM12.html("£" + Number.parseFloat(salesRevenueM12).toFixed(2));

uiStorage.roasM1.html("£" + Number.parseFloat(roasM1).toFixed(2));
uiStorage.roasM2.html("£" + Number.parseFloat(roasM2).toFixed(2));
uiStorage.roasM3.html("£" + Number.parseFloat(roasM3).toFixed(2));
uiStorage.roasM4.html("£" + Number.parseFloat(roasM4).toFixed(2));
uiStorage.roasM5.html("£" + Number.parseFloat(roasM5).toFixed(2));
uiStorage.roasM6.html("£" + Number.parseFloat(roasM6).toFixed(2));
uiStorage.roasM7.html("£" + Number.parseFloat(roasM7).toFixed(2));
uiStorage.roasM8.html("£" + Number.parseFloat(roasM8).toFixed(2));
uiStorage.roasM9.html("£" + Number.parseFloat(roasM9).toFixed(2));
uiStorage.roasM10.html("£" + Number.parseFloat(roasM10).toFixed(2));
uiStorage.roasM11.html("£" + Number.parseFloat(roasM11).toFixed(2));
uiStorage.roasM12.html("£" + Number.parseFloat(roasM12).toFixed(2));

uiStorage.cpoM1.html("£" + Number.parseFloat(cpoM1).toFixed(2));
uiStorage.cpoM2.html("£" + Number.parseFloat(cpoM2).toFixed(2));
uiStorage.cpoM3.html("£" + Number.parseFloat(cpoM3).toFixed(2));
uiStorage.cpoM4.html("£" + Number.parseFloat(cpoM4).toFixed(2));
uiStorage.cpoM5.html("£" + Number.parseFloat(cpoM5).toFixed(2));
uiStorage.cpoM6.html("£" + Number.parseFloat(cpoM6).toFixed(2));
uiStorage.cpoM7.html("£" + Number.parseFloat(cpoM7).toFixed(2));
uiStorage.cpoM8.html("£" + Number.parseFloat(cpoM8).toFixed(2));
uiStorage.cpoM9.html("£" + Number.parseFloat(cpoM9).toFixed(2));
uiStorage.cpoM10.html("£" + Number.parseFloat(cpoM10).toFixed(2));
uiStorage.cpoM11.html("£" + Number.parseFloat(cpoM11).toFixed(2));
uiStorage.cpoM12.html("£" + Number.parseFloat(cpoM12).toFixed(2));

    };
  
    document.querySelector('#download').addEventListener('click', function() {
    html2canvas(document.querySelector('#content'), {
      onrendered: function(canvas) {
      // document.body.appendChild(canvas);
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
        uiStorage.tenancyOutputM4.html(Number.parseInt(defaults.tenancyValueM4.toLocaleString()));
        uiStorage.tenancyOutputM5.html(Number.parseInt(defaults.tenancyValueM5.toLocaleString()));
        uiStorage.tenancyOutputM6.html(Number.parseInt(defaults.tenancyValueM6.toLocaleString()));
        uiStorage.tenancyOutputM7.html(Number.parseInt(defaults.tenancyValueM7.toLocaleString()));
        uiStorage.tenancyOutputM8.html(Number.parseInt(defaults.tenancyValueM8.toLocaleString()));
        uiStorage.tenancyOutputM9.html(Number.parseInt(defaults.tenancyValueM9.toLocaleString()));
        uiStorage.tenancyOutputM10.html(Number.parseInt(defaults.tenancyValueM10.toLocaleString()));
        uiStorage.tenancyOutputM11.html(Number.parseInt(defaults.tenancyValueM11.toLocaleString()));
        uiStorage.tenancyOutputM12.html(Number.parseInt(defaults.tenancyValueM12.toLocaleString()));

        uiStorage.actionsOutputM1.html(Number.parseInt(defaults.actionsValueM1.toLocaleString()));
        uiStorage.actionsOutputM2.html(Number.parseInt(defaults.actionsValueM2.toLocaleString()));
        uiStorage.actionsOutputM3.html(Number.parseInt(defaults.actionsValueM3.toLocaleString()));
        uiStorage.actionsOutputM4.html(Number.parseInt(defaults.actionsValueM4.toLocaleString()));
        uiStorage.actionsOutputM5.html(Number.parseInt(defaults.actionsValueM5.toLocaleString()));
        uiStorage.actionsOutputM6.html(Number.parseInt(defaults.actionsValueM6.toLocaleString()));
        uiStorage.actionsOutputM7.html(Number.parseInt(defaults.actionsValueM7.toLocaleString()));
        uiStorage.actionsOutputM8.html(Number.parseInt(defaults.actionsValueM8.toLocaleString()));
        uiStorage.actionsOutputM9.html(Number.parseInt(defaults.actionsValueM9.toLocaleString()));
        uiStorage.actionsOutputM10.html(Number.parseInt(defaults.actionsValueM10.toLocaleString()));
        uiStorage.actionsOutputM11.html(Number.parseInt(defaults.actionsValueM11.toLocaleString()));
        uiStorage.actionsOutputM12.html(Number.parseInt(defaults.actionsValueM12.toLocaleString()));

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
        $("#tenancy-input-M4").on("input", function(){
            uiStorage.tenancyOutputM4.html(Number.parseInt($(this).val()).toLocaleString());
            calculate();
    	});
        $("#tenancy-input-M5").on("input", function(){
            uiStorage.tenancyOutputM5.html(Number.parseInt($(this).val()).toLocaleString());
            calculate();
    	});
        $("#tenancy-input-M6").on("input", function(){
            uiStorage.tenancyOutputM6.html(Number.parseInt($(this).val()).toLocaleString());
            calculate();
    	});
        $("#tenancy-input-M7").on("input", function(){
            uiStorage.tenancyOutputM7.html(Number.parseInt($(this).val()).toLocaleString());
            calculate();
    	});
        $("#tenancy-input-M8").on("input", function(){
            uiStorage.tenancyOutputM8.html(Number.parseInt($(this).val()).toLocaleString());
            calculate();
    	});
        $("#tenancy-input-M9").on("input", function(){
            uiStorage.tenancyOutputM9.html(Number.parseInt($(this).val()).toLocaleString());
            calculate();
    	});
        $("#tenancy-input-M10").on("input", function(){
            uiStorage.tenancyOutputM10.html(Number.parseInt($(this).val()).toLocaleString());
            calculate();
    	});
        $("#tenancy-input-M11").on("input", function(){
            uiStorage.tenancyOutputM11.html(Number.parseInt($(this).val()).toLocaleString());
            calculate();
    	});
        $("#tenancy-input-M12").on("input", function(){
            uiStorage.tenancyOutputM12.html(Number.parseInt($(this).val()).toLocaleString());
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
        $("#actions-input-M4").on("input", function(){
            uiStorage.actionsOutputM4.html(Number.parseInt($(this).val()).toLocaleString());
            calculate();
    	});
        $("#actions-input-M5").on("input", function(){
            uiStorage.actionsOutputM5.html(Number.parseInt($(this).val()).toLocaleString());
            calculate();
    	});
        $("#actions-input-M6").on("input", function(){
            uiStorage.actionsOutputM6.html(Number.parseInt($(this).val()).toLocaleString());
            calculate();
    	});
        $("#actions-input-M7").on("input", function(){
            uiStorage.actionsOutputM7.html(Number.parseInt($(this).val()).toLocaleString());
            calculate();
    	});
        $("#actions-input-M8").on("input", function(){
            uiStorage.actionsOutputM8.html(Number.parseInt($(this).val()).toLocaleString());
            calculate();
    	});
        $("#actions-input-M9").on("input", function(){
            uiStorage.actionsOutputM9.html(Number.parseInt($(this).val()).toLocaleString());
            calculate();
    	});
        $("#actions-input-M10").on("input", function(){
            uiStorage.actionsOutputM10.html(Number.parseInt($(this).val()).toLocaleString());
            calculate();
    	});
        $("#actions-input-M11").on("input", function(){
            uiStorage.actionsOutputM11.html(Number.parseInt($(this).val()).toLocaleString());
            calculate();
    	});
        $("#actions-input-M12").on("input", function(){
            uiStorage.actionsOutputM12.html(Number.parseInt($(this).val()).toLocaleString());
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