function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

const enablePassItemsButton = (packetInfo = {}) => {

    // Enabled Pass Items button when
    // 1. Should have atleast 1 scanned item which is not qc passed
    // 2. Atleast one item should be in A (ASSIGNED) status
    // 3. If Gtin Scanned Is required then all Items should be in isGtinCodeScanPassed status true
    // 4. And Gtin Scan required + Qc not required item Should be equal to the Scanned a
    let {
        scannedItemsList = [],
        packetItems = {},
        activeItemsList = [],
        isGtinScanOnPacketDeskEnabled = false
    } = packetInfo;
    let newMap = new Map();
      Object.keys(packetItems).forEach((key) => {
      newMap.set(key, packetItems[key]);
    });
    packetItems = newMap;

    if (isGtinScanOnPacketDeskEnabled) {

        const assignedItemsCount = scannedItemsList.filter(item => {
            return packetItems.get(item) && packetItems.get(item).status === packetItemStatusMap.ASSIGNED
        }).length;
        const gtinCodeScanPassed = scannedItemsList.filter(item => {
            return packetItems.get(item) && packetItems.get(item).isGtinCodeScanPassed
        }).length;
        const qcNotRequiredItems = scannedItemsList.filter(item => {
            return get(packetItems.get(item), 'enrichedCheckEntries', []).length === 0
        }).length;

        const sealTagCaptureItems = scannedItemsList.filter(item => {
            return (packetItems.get(item) && packetItems.get(item).sealTagBarcode)
        }).length;

        const serialNumberCaptureItems = scannedItemsList.filter(item => {
            return (packetItems.get(item) && packetItems.get(item).serialNumber)
        }).length;
        // if gtin validation is required
        // else true
        const gtinInputAndNotRequiredItem = qcNotRequiredItems + gtinCodeScanPassed ;

        if (packetItemQCCheckType.CHECK_FOR_SEALTAG_AND_SERIAL_NUMBER) {
            if(scannedItemsList.length === activeItemsList.length && assignedItemsCount){
                if(scannedItemsList.length === gtinInputAndNotRequiredItem){
                    if(scannedItemsList.length === sealTagCaptureItems && serialNumberCaptureItems){
                        return true;
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }else{
                return false;
            }
        } else if((scannedItemsList.length === gtinInputAndNotRequiredItem) && (scannedItemsList.length === activeItemsList.length && assignedItemsCount)){
            return true;
        }
        else {
            return false;
        }
    } else {
        return scannedItemsList.filter(item => {
            return packetItems.get(item) && packetItems.get(item).status === packetItemStatusMap.ASSIGNED
        }).length
    }
}


const packetInfo = {
    "scannedItemsList": [
        "101588483545"
    ],
    "packetItems": {"101588483545":{
        "id": 1603215184,
        "createdBy": "erpMessageQueue",
        "createdOn": "2023-04-20T03:06:50.000+0000",
        "lastModifiedOn": "2023-04-20T03:06:50.000+0000",
        "sellerPacketId": 1196764926,
        "portalOrderReleaseId": 7345424641,
        "itemBarcode": "101588483545",
        "status": "A",
        "skuId": 50028896,
        "styleId": 15457904,
        "size": "30",
        "unitPrice": 1698,
        "sellerPartnerId": 4024,
        "storePartnerId": 2297,
        "shippingMethod": "NORMAL",
        "packagingType": "NORMAL",
        "hazmat": false,
        "jewellery": false,
        "fragile": false,
        "tryAndBuy": false,
        "firstOrderCampaign": false,
        "lakmeSampleCampaign": false,
        "tryAndBuyCampaign": false,
        "brandSpecificCampaign": false,
        "routeId": "BOUNTY",
        "giftWrapApplied": false,
        "sellerId": 21,
        "storeId": 1,
        "clientId": "CoreOrderRelease",
        "refId": "101588483545",
        "entityId": 101588483545,
        "failType": "FIRST",
        "totalRequiredCheckCount": 1,
        "enrichedCheckEntries": [
            {
                "checkId": 21,
                "ruleIds": [
                    "0a9b76a0-27c3-11ed-a7f9-c5b9871d2c80"
                ],
                "checkDetailsEntry": {
                    "defaultDisplayText": "Detailed QC Required",
                    "checkType": "DETAILED_QC"
                },
                "checkActionsEntry": {
                    "actionEntries": [
                        {
                            "expression": {
                                "value": [
                                    "HRVDJENS50028896"
                                ],
                                "operator": "EQUALS"
                            },
                            "actionCodeMetaData": {
                                "actionCode": "CORRECT_PRODUCT",
                                "properties": {
                                    "qcStatus": "QC_PASS"
                                }
                            }
                        }
                    ]
                }
            }
        ],
        "qcConfig": [
            {
                "checkId": 21,
                "checkKey": "FULL_QC",
                "checkType": "message",
                "checkMessage": "Detailed QC Required",
                "isOpen": false,
                "errorMessage": "",
                "showErrorMessage": true,
                "modalTitle": "",
                "modalHeadr": "",
                "modalLabel": "",
                "modalplaceHolder": "",
                "isDataStorageRequired": false
            }
        ]
    }},
    "activeItemsList": [
        "101588483545"
    ],
    "isGtinScanOnPacketDeskEnabled": true
}


console.log(enablePassItemsButton(packetInfo))