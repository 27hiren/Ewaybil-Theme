

var customFooterFormatTotal = '<div style="text-align:right;" class="ui-grid-cell-contents" >{{col.getAggregationValue() | number:2 }}</div>';
var customFooterFormatAverage = '<div class="ui-grid-cell-contents" >{{col.getAggregationValue() | number:2 }}</div>';
var editableCellGSTINText = '<div><input class="form-control" style="padding: 1px;" type="text" ng-class="\'colt\' + col.uid" ui-grid-editor ng-model="MODEL_COL_FIELD"></div>';
var editableDateText = '<div ui-grid-edit-datepicker datepicker-options="datepickerOptions" ng-class="\'colt\' + col.uid"></div>';
var editableCellText = '<div><input class="form-control" maxlength="100" style="padding: 1px;" type="text" ng-class="\'colt\' + col.uid" ui-grid-editor ng-model="MODEL_COL_FIELD"></div>';
var editableCellNumber = '<div><input class="form-control" maxlength="14" min="0" style="padding: 1px;" type="text" ng-class="\'colt\' + col.uid" ui-grid-editor ng-model="MODEL_COL_FIELD"></div>';
var editableCellPercentage = '<div><input class="form-control"  style="padding: 1px;" type="text" ng-class="\'colt\' + col.uid" ui-grid-editor ng-model="MODEL_COL_FIELD"></div>';
var editableCellNumberFor16digit = '<div><input class="form-control" maxlength="16" min="0" style="padding: 1px;" type="text" ng-class="\'colt\' + col.uid" ui-grid-editor ng-model="MODEL_COL_FIELD"></div>';
var editableCellNumberFor14digit = '<div><input class="form-control" maxlength="12" min="0" style="padding: 1px;" type="text" ng-class="\'colt\' + col.uid" ui-grid-editor ng-model="MODEL_COL_FIELD"></div>';
var BillNoCellText = '<div><input class="form-control" maxlength="8" style="padding: 1px;" type="text" ng-class="\'colt\' + col.uid" ui-grid-editor ng-model="MODEL_COL_FIELD"></div>';
var PortNoCellText = '<div><input class="form-control" maxlength="7" style="padding: 1px;" type="text" ng-class="\'colt\' + col.uid" ui-grid-editor ng-model="MODEL_COL_FIELD"></div>';
var HSNDescriptionCellText = '<div><input class="form-control" maxlength="31" style="padding: 1px;" type="text" ng-class="\'colt\' + col.uid" ui-grid-editor ng-model="MODEL_COL_FIELD"></div>';

//var validateGSTIN = "^([a-zA-Z0-9]{15})$";
//var validateGSTIN = "^([0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{3})$";
var validateGSTIN = "^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[Z]{1}[0-9a-zA-Z]{1}$";
var validateInvoiceNo = "^([a-zA-Z0-9-/]{1,16})$";
var validateRevisedOriginalInvoiceNo = "^([a-zA-Z0-9-\/]{1,16})$";
var requiredAlphabetOnly = "^[a-zA-Z][a-zA-Z\\s]+$";
var requiredName = "^[ A-Za-z0-9_@./#&+-]*$";
var requiredAlphabetNumericOnly = "^[a-zA-Z0-9]+$";
var requiredPercentageOnly = "^([0-9]{1,2})(\.[0-9]{1,9})?$";
var requiredNumbersOnly = "^[0-9.]+$";
var requiredNumbersOnlyB2C = "^[0-9.-]+$";
var required = "^[\s\t\r\n]*\S+";
var Discription = "^([a-zA-Z0-9]{1,50})$";
var HSNDescription = "^([a-zA-Z0-9]{1,30})$";
var ShippingBillNo = "^([0-9]{3,7})$";
var HSNValidation = "^([a-zA-Z0-9]{1,10})$";
var ShippingBillPortCode = "^([a-zA-Z0-9]{6})$";
//var DiscriptionHSN = "^([ a-zA-Z0-9_@./#&+-]{1,30})$";
var DiscriptionHSN = "^([ a-zA-Z0-9_@./#%&+-]{1,30})$";
var validateCDNNo = "^([a-zA-Z0-9_@./#%&+-]{1,16})$";
var validMonth = "(0[123456789]|10|11|12)([1-2][0-9][0-9][0-9])";
//var patternFor15digit = "^([0-9]{1,13})(\.[0-9]{1,2})?$"; //"^\d{1,13}(?:\.\d{1,2})?$"; //"^[0-9]{1,13}(?:\.[0-9]{1,2})?$";// "^([0-9]{1,13})(\.[0-9]{1,2})?$";
//var patternFor11digit = "^\d{1,9}(?:\.\d{1,2})?$" //"^([0-9]{1,11})(\.[0-9]{1,2})?$";


var ratePerc =
    [
        { id: '01', name: '0.00' },
        { id: '02', name: '0.25' },
        { id: '03', name: '3.00' },
        { id: '04', name: '5.00' },
        { id: '05', name: '12.00' },
        { id: '06', name: '18.00' },
        { id: '07', name: '28.00' }
    ]

var reversecharge =
   [
        { id: 'No', name: 'No' },
        { id: 'Yes', name: 'Yes' }
   ]

var invoicetype =
   [
        { id: 'Regular', name: 'Regular' },
        { id: 'SEZ Exports with payment', name: 'SEZ Exports with payment' },
        { id: 'SEZ Exports without payment', name: 'SEZ Exports without payment' },
        { id: 'Deemed Exports', name: 'Deemed Exports' }
   ]


var invoicetypeHash = {
    'Regular': 'Regular',
    'SEZ Exports with payment': 'SEZ Exports with payment',
    'SEZ Exports without payment': 'SEZ Exports without payment',
    'Deemed Exports': 'Deemed Exports'
};


var filingStatus =
   [
        { id: 'Yes', name: 'Yes' },
        { id: 'No', name: 'No' }]


var filingStatusHash = {
    'Yes': 'Yes',
    'No': 'No'
};



var yesnoHash = {
    'No': 'No',
    'Yes': 'Yes'
};


var reasonOfIssue =
    [
        { id: '01', name: 'Sales Return' },
        { id: '02', name: 'Post sale discount' },
        { id: '03', name: 'Deficiency in service' },
        { id: '04', name: 'Correction in invoice' },
        { id: '05', name: 'Change in POS' },
        { id: '06', name: 'Finalization of Provisional assessment' },
        { id: '07', name: 'Others' }
    ]

var stateCode =
    [
        { id: '01', name: 'Jammu And Kashmir' },
        { id: '02', name: 'Himachal Pradesh' },
        { id: '03', name: 'Punjab' },
        { id: '04', name: 'Chandigarh' },
        { id: '05', name: 'Uttarakhand' },
        { id: '06', name: 'Haryana' },
        { id: '07', name: 'Delhi' },
        { id: '08', name: 'Rajasthan' },
        { id: '09', name: 'Uttar Pradesh' },
        { id: '10', name: 'Bihar' },
        { id: '11', name: 'Sikkim' },
        { id: '12', name: 'Arunachal Pradesh' },
        { id: '13', name: 'Nagaland' },
        { id: '14', name: 'Manipur' },
        { id: '15', name: 'Mizoram' },
        { id: '16', name: 'Tripura' },
        { id: '17', name: 'Meghalaya' },
        { id: '18', name: 'Assam' },
        { id: '19', name: 'West Bengal' },
        { id: '20', name: 'Jharkhand' },
        { id: '21', name: 'Odisha' },
        { id: '22', name: 'Chattisgarh' },
        { id: '23', name: 'Madhya Pradesh' },
        { id: '24', name: 'Gujarat' },
        { id: '25', name: 'Daman And Diu' },
        { id: '26', name: 'Dadra And Nagar Haveli' },
        { id: '27', name: 'Maharashtra' },
        //{ id: '28', name: 'Andhra Pradesh(Before Division)' },
        { id: '37', name: 'Andhra Pradesh' },
        { id: '29', name: 'Karnataka' },
        { id: '30', name: 'Goa' },
        { id: '31', name: 'Lakshadweep' },
        { id: '32', name: 'Kerala' },
        { id: '33', name: 'Tamil Nadu' },
        { id: '34', name: 'Puducherry' },
        { id: '35', name: 'Andaman And Nicobar Islands' },
        { id: '36', name: 'Telangana' },
        { id: '37', name: 'Andhra Pradesh' },
        { id: '97', name: 'Other territory' },
    ]

var stateHash = {
    '01': 'Jammu And Kashmir',
    '02': 'Himachal Pradesh',
    '03': 'Punjab',
    '04': 'Chandigarh',
    '05': 'Uttarakhand',
    '06': 'Haryana',
    '07': 'Delhi',
    '08': 'Rajasthan',
    '09': 'Uttar Pradesh',
    '10': 'Bihar',
    '11': 'Sikkim',
    '12': 'Arunachal Pradesh',
    '13': 'Nagaland',
    '14': 'Manipur',
    '15': 'Mizoram',
    '16': 'Tripura',
    '17': 'Meghalaya',
    '18': 'Assam',
    '19': 'West Bengal',
    '20': 'Jharkhand',
    '21': 'Odisha',
    '22': 'Chattisgarh',
    '23': 'Madhya Pradesh',
    '24': 'Gujarat',
    '25': 'Daman And Diu',
    '26': 'Dadra And Nagar Haveli',
    '27': 'Maharashtra',
    //'28': 'Andhra Pradesh(Before Division)',
    '37': 'Andhra Pradesh',
    '29': 'Karnataka',
    '30': 'Goa',
    '31': 'Lakshadweep',
    '32': 'Kerala',
    '33': 'Tamil Nadu',
    '34': 'Puducherry',
    '35': 'Andaman And Nicobar Islands',
    '36': 'Telangana',
    '97': 'Other territory'
};

var typeOfExportHash = [
    { id: 'Export with payment of GST', name: 'Export with payment of GST' },
    { id: 'Export without payment of GST', name: 'Export without payment of GST' },
    { id: 'SEZ Exports with payment', name: 'SEZ Exports with payment' },
    { id: 'SEZ exports without payment', name: 'SEZ exports without payment' },
    { id: 'Deemed Exports', name: 'Deemed Exports' }
];

var typeOfCreditNote = [
   { id: 'TDS', name: 'TDS' },
   { id: 'TCS', name: 'TCS' }
];

var type = [
   { id: 'Nil Rated', name: 'Nil Rated' },
   { id: 'Exmpted', name: 'Exmpted' },
   { id: 'Non-GST Supply', name: 'Non-GST Supply' }
];

var actionList = [{ id: 'Select', name: 'Select' },
                { id: 'Accept', name: 'Accept' },
                { id: 'Reject', name: 'Reject' },
                { id: 'Pending', name: 'Pending' }];

var actionListHash = {
    'Select': 'Select',
    'Accept': 'Accept',
    'Reject': 'Reject',
    'Pending': 'Pending'
};

var actionListMisMatch = [{ id: 'Select', name: 'Select' },
                { id: 'Accept MyValues', name: 'Accept MyValues' },
                { id: 'Accept SupplierValues', name: 'Accept SupplierValues' },
                { id: 'Pending', name: 'Pending' }];

var actionListMisMatchHash = {
    'Select': 'Select',
    'Accept MyValues': 'Accept MyValues',
    'Accept SupplierValues': 'Accept SupplierValues',
    'Pending': 'Pending'
};

var actionListAlternateReco =
        [
            { id: 'Reject', name: 'Reject' },
                        { id: 'Pending', name: 'Pending' },
                        { id: 'Accept Purchase Value', name: 'Accept Purchase Value' },
                        { id: 'Accept GSTN Value', name: 'Accept GSTN Value' }
        ];

var actionListAlternateRecoHash = {
    'Reject': 'Reject',
    'Pending': 'Pending',
    'Accept Purchase Value': 'Accept Purchase Value',
    'Accept GSTN Value': 'Accept GSTN Value'
};

var actionListAlternateRecoMissingMy = [{ id: 'Reject', name: 'Reject' },
                { id: 'Accept Purchase Value', name: 'Accept Purchase Value' }];

var actionListAlternateRecoMissingMyHash = {
    'Reject': 'Reject',
    'Accept Purchase Value': 'Accept Purchase Value'
};


var actionListAlternateRecoExtraVendor = [{ id: 'Reject', name: 'Reject' },
                { id: 'Pending', name: 'Pending' },
                { id: 'Accept GSTN Value', name: 'Accept GSTN Value' }];

var actionListAlternateRecoExtraVendorHash = {
    'Reject': 'Reject',
    'Pending': 'Pending',
    'Accept GSTN Value': 'Accept GSTN Value'
};

var NatureOfSuppliesList = [{ id: '1', name: 'Supplies made to Unregistered Persons' },
                { id: '2', name: 'Supplies made to Composition Taxable Persons' },
                { id: '3', name: 'Supplies made to UIN holders' }];

var NatureOfSuppliesListHash = {
    '1': 'Supplies made to Unregistered Persons',
    '2': 'Supplies made to Composition Taxable Persons',
    '3': 'Supplies made to UIN holders'
};


var NatureOfDocument = [
				{ id: 'Invoice for outward supply', name: 'Invoice for outward supply' },
                { id: 'Invoice for inward supply from unregistered person', name: 'Invoice for inward supply from unregistered person' },
				{ id: 'Debit Note', name: 'Debit Note' },
				{ id: 'Credit Note', name: 'Credit Note' },
				{ id: 'Receipt voucher', name: 'Receipt voucher' },
                { id: 'Revised Invoice', name: 'Revised Invoice' },
				{ id: 'Payment Voucher', name: 'Payment Voucher' },
				{ id: 'Refund voucher', name: 'Refund voucher' },
				{ id: 'Delivery Challan for job work', name: 'Delivery Challan for job work' },
				{ id: 'Delivery Challan for supply on approval', name: 'Delivery Challan for supply on approval' },
				{ id: 'Delivery Challan in case of liquid gas', name: 'Delivery Challan in case of liquid gas' },
				{ id: 'Delivery Challan in cases other than by way of supply (excluding at S no. 9 to 11)', name: 'Delivery Challan in cases other than by way of supply (excluding at S no. 9 to 11)' }
];


function saveDataToSession(paramName, paramValue) {
    $.post("SaveParameterInSession.html", { "paramName": paramName, "paramValue": paramValue }, function () {
        console.log("Parameter Saved Successfully.");
    });
}

function chkGSTN(gstnNo) {
    //Added by mayur on 10-10-2017
    var patt = new RegExp("^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[Z]{1}[0-9a-zA-Z]{1}$");
    var res = patt.test(gstnNo);
    if (res == false) {
        return false;
    }
        //Added by mayur on 10-10-2017
    else {

        pan = gstnNo;
        gst = pan.slice(0, 14);
        if (pan.length == 15) {
            var factor = 2,
            sum = 0,
            checkCodePoint = 0,

            i, j, digit, mod, codePoint, cpChars, inputChars;

            cpChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            inputChars = gst.trim().toUpperCase();
            mod = cpChars.length;

            for (i = inputChars.length - 1; i >= 0; i = i - 1) {
                codePoint = -1;
                for (j = 0; j < cpChars.length; j = j + 1) {
                    if (cpChars[j] === inputChars[i]) {
                        codePoint = j;
                    }
                }

                digit = factor * codePoint;
                factor = (factor === 2) ? 1 : 2;
                digit = (digit / mod) + (digit % mod);
                sum += Math.floor(digit);
            }

            checkCodePoint = ((mod - (sum % mod)) % mod);

            gst = gst + cpChars[checkCodePoint]
            //if (gst == document.getElementById('pan').value) {
            if (gst == pan) {
                //document.getElementById('gst').innerHTML = "<span style='color:green'>Correct GST Number</span>";
                //return "Correct GST Number";
                return true;
            }
            else {
                // document.getElementById('gst').innerHTML = "<span style='color:red'>Incorrect GST Number</span>";
                //  return "Incorrect GST Number";
                return false;
            }

        }
        else {
            // document.getElementById('gst').innerHTML = "Invalid GST Length, enter 15 Digit GST Number";
            //  return "Invalid GST Length, enter 15 Digit GST Number";
            return false;
        }
    }
}

var drpUQC =
    [
        { id: 'BAG', name: 'BAG-BAGS' },
        { id: 'BAL', name: 'BAL-BALE' },
        { id: 'BDL', name: 'BDL-BUNDLES' },
        { id: 'BKL', name: 'BKL-BUCKLES' },
        { id: 'BOU', name: 'BOU-BILLION OF UNITS' },
        { id: 'BOX', name: 'BOX-BOX' },
        { id: 'BTL', name: 'BTL-BOTTLES' },
        { id: 'BUN', name: 'BUN-BUNCHES' },
        { id: 'CAN', name: 'CAN-CANS' },
        { id: 'CBM', name: 'CBM-CUBIC METERS' },
        { id: 'CCM', name: 'CCM-CUBIC CENTIMETERS' },
        { id: 'CMS', name: 'CMS-CENTIMETERS' },
        { id: 'CTN', name: 'CTN-CARTONS' },
        { id: 'DOZ', name: 'DOZ-DOZENS' },
        { id: 'DRM', name: 'DRM-DRUMS' },
        { id: 'GGK', name: 'GGK-GREAT GROSS' },
        { id: 'GMS', name: 'GMS-GRAMMES' },
        { id: 'GRS', name: 'GRS-GROSS' },
        { id: 'GYD', name: 'GYD-GROSS YARDS' },
        { id: 'KGS', name: 'KGS-KILOGRAMS' },
        { id: 'KLR', name: 'KLR-KILOLITRE' },
        { id: 'KME', name: 'KME-KILOMETRE' },
        { id: 'MLT', name: 'MLT-MILILITRE' },
        { id: 'MTR', name: 'MTR-METERS' },
        { id: 'MTS', name: 'MTS-METRIC TON' },
        { id: 'NOS', name: 'NOS-NUMBERS' },
        { id: 'PAC', name: 'PAC-PACKS' },
        { id: 'PCS', name: 'PCS-PIECES' },
        { id: 'PRS', name: 'PRS-PAIRS' },
        { id: 'QTL', name: 'QTL-QUINTAL' },
        { id: 'ROL', name: 'ROL-ROLLS' },
        { id: 'SET', name: 'SET-SETS' },
        { id: 'SQF', name: 'SQF-SQUARE FEET' },
        { id: 'SQM', name: 'SQM-SQUARE METERS' },
        { id: 'SQY', name: 'SQY-SQUARE YARDS' },
        { id: 'TBS', name: 'TBS-TABLETS' },
        { id: 'TGM', name: 'TGM-TEN GROSS' },
        { id: 'THD', name: 'THD-THOUSANDS' },
        { id: 'TON', name: 'TON-TONNES' },
        { id: 'TUB', name: 'TUB-TUBES' },
        { id: 'UGS', name: 'UGS-US GALLONS' },
        { id: 'UNT', name: 'UNT-UNITS' },
        { id: 'YDS', name: 'YDS-YARDS' },
        { id: 'OTH', name: 'OTH-OTHERS' },
        { id: 'LTR', name: 'LTR-LITERS' },
    ]

var drpUQCHash = {
    'BAG': 'BAG-BAGS',
    'BAL': 'BAL-BALE',
    'BDL': 'BDL-BUNDLES',
    'BKL': 'BKL-BUCKLES',
    'BOU': 'BOU-BILLION OF UNITS',
    'BOX': 'BOX-BOX',
    'BTL': 'BTL-BOTTLES',
    'BUN': 'BUN-BUNCHES',
    'CAN': 'CAN-CANS',
    'CBM': 'CBM-CUBIC METERS',
    'CCM': 'CCM-CUBIC CENTIMETERS',
    'CMS': 'CMS-CENTIMETERS',
    'CTN': 'CTN-CARTONS',
    'DOZ': 'DOZ-DOZENS',
    'DRM': 'DRM-DRUMS',
    'GGK': 'GGK-GREAT GROSS',
    'GMS': 'GMS-GRAMMES',
    'GRS': 'GRS-GROSS',
    'GYD': 'GYD-GROSS YARDS',
    'KGS': 'KGS-KILOGRAMS',
    'KLR': 'KLR-KILOLITRE',
    'KME': 'KME-KILOMETRE',
    'MLT': 'MLT-MILILITRE',
    'MTR': 'MTR-METERS',
    'MTS': 'MTS-METRIC TON',
    'NOS': 'NOS-NUMBERS',
    'PAC': 'PAC-PACKS',
    'PCS': 'PCS-PIECES',
    'PRS': 'PRS-PAIRS',
    'QTL': 'QTL-QUINTAL',
    'ROL': 'ROL-ROLLS',
    'SET': 'SET-SETS',
    'SQF': 'SQF-SQUARE FEET',
    'SQM': 'SQM-SQUARE METERS',
    'SQY': 'SQY-SQUARE YARDS',
    'TBS': 'TBS-TABLETS',
    'TGM': 'TGM-TEN GROSS',
    'THD': 'THD-THOUSANDS',
    'TON': 'TON-TONNES',
    'TUB': 'TUB-TUBES',
    'UGS': 'UGS-US GALLONS',
    'UNT': 'UNT-UNITS',
    'YDS': 'YDS-YARDS',
    'OTH': 'OTH-OTHERS',
};