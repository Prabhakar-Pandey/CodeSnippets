const response = {"status":{"statusCode":200,"statusType":"SUCCESS","statusMessage":"Jobs retrieved successfully.","totalCount":2},"data":[{"id":16861,"createdBy":"aditya.barik","createdOn":"2023-04-03T17:02:47.000+0000","lastModifiedOn":"2023-04-03T17:02:47.000+0000","status":"IN_PROGRESS","dagRunId":"2","dagId":"1","application":"myntra_genie","qualifier":"7338__1352","responseJsonEntry":{"statusKey":"value","sellerPid":7338,"whId":1352},"requestJsonEntry":{"sellerPid":7338,"whId":1352}},{"id":16862,"createdBy":"aditya.barik","createdOn":"2023-04-03T17:13:41.000+0000","lastModifiedOn":"2023-04-03T17:13:41.000+0000","status":"IN_PROGRESS","dagRunId":"3","dagId":"1","application":"myntra_genie","qualifier":"7338__1352","responseJsonEntry":{"status":"SUCCESS"},"requestJsonEntry":{"sellerPid":7338,"whId":1352}},{"id":16863,"createdBy":"aditya.barik","createdOn":"2023-04-03T17:02:47.000+0000","lastModifiedOn":"2023-04-03T17:02:47.000+0000","status":"IN_PROGRESS","dagRunId":"2","dagId":"1","application":"myntra_genie","qualifier":"7338__1352","responseJsonEntry":{"statusKey":"value","sellerPid":7338,"whId":1352},"requestJsonEntry":{"sellerPid":7338,"whId":1352}},{"id":16864,"createdBy":"aditya.barik","createdOn":"2023-04-03T17:02:47.000+0000","lastModifiedOn":"2023-04-03T17:02:47.000+0000","status":"IN_PROGRESS","dagRunId":"2","dagId":"1","application":"myntra_genie","qualifier":"7338__1352","responseJsonEntry":{"statusKey":"value","sellerPid":7338,"whId":1352},"requestJsonEntry":{"sellerPid":7338,"whId":1352}},{"id":16865,"createdBy":"aditya.barik","createdOn":"2023-04-03T17:02:47.000+0000","lastModifiedOn":"2023-04-03T17:02:47.000+0000","status":"IN_PROGRESS","dagRunId":"2","dagId":"1","application":"myntra_genie","qualifier":"7338__1352","responseJsonEntry":{"statusKey":"value","sellerPid":7338,"whId":1352},"requestJsonEntry":{"sellerPid":7338,"whId":1352}},{"id":16866,"createdBy":"aditya.barik","createdOn":"2023-04-03T17:02:47.000+0000","lastModifiedOn":"2023-04-03T17:02:47.000+0000","status":"IN_PROGRESS","dagRunId":"2","dagId":"1","application":"myntra_genie","qualifier":"7338__1352","responseJsonEntry":{"statusKey":"value","sellerPid":7338,"whId":1352},"requestJsonEntry":{"sellerPid":7338,"whId":1352}},{"id":16867,"createdBy":"aditya.barik","createdOn":"2023-04-03T17:02:47.000+0000","lastModifiedOn":"2023-04-03T17:02:47.000+0000","status":"IN_PROGRESS","dagRunId":"2","dagId":"1","application":"myntra_genie","qualifier":"7338__1352","responseJsonEntry":{"statusKey":"value","sellerPid":7338,"whId":1352},"requestJsonEntry":{"sellerPid":7338,"whId":1352}},{"id":16868,"createdBy":"aditya.barik","createdOn":"2023-04-03T17:02:47.000+0000","lastModifiedOn":"2023-04-03T17:02:47.000+0000","status":"IN_PROGRESS","dagRunId":"2","dagId":"1","application":"myntra_genie","qualifier":"7338__1352","responseJsonEntry":{"statusKey":"value","sellerPid":7338,"whId":1352},"requestJsonEntry":{"sellerPid":7338,"whId":1352}},{"id":16869,"createdBy":"aditya.barik","createdOn":"2023-04-03T17:02:47.000+0000","lastModifiedOn":"2023-04-03T17:02:47.000+0000","status":"IN_PROGRESS","dagRunId":"2","dagId":"1","application":"myntra_genie","qualifier":"7338__1352","responseJsonEntry":{"statusKey":"value","sellerPid":7338,"whId":1352},"requestJsonEntry":{"sellerPid":7338,"whId":1352}},{"id":16870,"createdBy":"aditya.barik","createdOn":"2023-04-03T17:02:47.000+0000","lastModifiedOn":"2023-04-03T17:02:47.000+0000","status":"IN_PROGRESS","dagRunId":"2","dagId":"1","application":"myntra_genie","qualifier":"7338__1352","responseJsonEntry":{"statusKey":"value","sellerPid":7338,"whId":1352},"requestJsonEntry":{"sellerPid":7338,"whId":1352}},{"id":16871,"createdBy":"aditya.barik","createdOn":"2023-04-03T17:02:47.000+0000","lastModifiedOn":"2023-04-03T17:02:47.000+0000","status":"IN_PROGRESS","dagRunId":"2","dagId":"1","application":"myntra_genie","qualifier":"7338__1352","responseJsonEntry":{"statusKey":"value","sellerPid":7338,"whId":1352},"requestJsonEntry":{"sellerPid":7338,"whId":1352}}]}

let dataItems = response.data;
let allIds = new Array( dataItems.length );
let indexKey = 'id';
let byIds = dataItems.reduce( ( prev, data, index ) => {
        allIds[ index ] = data[indexKey];
      let newstate = {};
      newstate[data[indexKey]]=data;
        return Object.assign({},prev,newstate)
      }, {});


console.log(allIds,byIds);