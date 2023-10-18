/* Lets assume the below as an image

. is the house in a street, _ is the space or empty land

._...._...._._._.__.

We have to place an antena T in the empty space which has a range 'r' make sure to cove ALL houses unless it is unable to place an antena

Here r is 3, So it can serve 3 houses left and right, we need 4 towers

._...._...._._._.__.

._...._...._._._.__.

[1,0,1,1,1,1,0,1,1,0,0,1]

[1,0,1,1,1,1,0,1,1,0,0,1]

    l:1       l:4   l:1 l:1
    
.T....T...._.T._._T.


Input: string like '.4...._...._._._.__.' it has '.' and '_', range r (number)

Output: (nnumber) no of towers required
*/


function canPlaceTower(index,arr){
    const houseLengt = 0;
    // loop from -3 to +3
    // increment house length
}

function placeTowers(array){

    let towerCount=0;
    array.forEach((item,index)=>{

        if(item===0||towerCount===0){
            // place tower
        }else if(item==0){
            const isTowerCanbePlaced = canPlaceTower(index,array)
        }
        
    })
    
}

const array = [1,0,1,1,1,1,0,1,1,0,0,1];