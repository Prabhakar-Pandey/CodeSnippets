var findMedianSortedArrays = function(nums1, nums2) {
    var i = 0;
    var j = 0;
    var resultArr = [];
    while(i<nums1.length||j<nums2.length){
        if(nums1[i] && nums2[j] && nums1[i]<nums2[j]){
            resultArr.push(nums1[i])
            i++;
            continue;
        }else if(nums1[i] && nums2[j] && nums1[i]>nums2[j]){
            resultArr.push(nums2[j])
            j++;
            continue;
        }else if(nums1[i]){
            resultArr.push(nums1[i]);
            i++;
            continue;
        }else if(nums2[j]){
            resultArr.push(nums2[j]);
            j++;
            continue;
        }
        i++;j++;

    }
    console.log(resultArr)
    var median = 0;
    
    if(resultArr.length % 2 ===0){
        var mid = resultArr.length / 2;
        median = (resultArr[mid] + resultArr[mid+1])/2
    }else{
        var mid = parseInt(resultArr.length / 2);
        median = resultArr[mid]
    }
    return median;
};
findMedianSortedArrays([1,3,5],[2,8,9,10])