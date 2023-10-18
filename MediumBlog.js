const str = "pedwawkew";

let i =0,j=0, currentMax=0,max=0;

let strings = {}
while(i<str.length){
    if(!strings[str[i]]){
        
        strings[str[i]]=i;
        i++;
        currentMax++;
        if(currentMax>max){
            max=currentMax;
        }
        
    }else{
       j=strings[str[i]]; 
       i=j;
       currentMax = 0;
       strings={};
    }

    console.log(max)
}