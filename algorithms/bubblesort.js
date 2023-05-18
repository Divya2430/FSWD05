let input_arr =[90,12,20,34,200,45,70];
//output=[12 20 34 45 70 90 200]
function bubblesort()
{
    let i,j,n;
    n= input_arr.length;
    for(i=0; i<n-1; i++)
    {
        for(j=0; j<n-i-1; j++){
            //swapping elements
            if(input_arr[j]>input_arr[j+1])
            {
                temp= input_arr[j];
                input_arr[j]=input_arr[j+1];
                input_arr[j+1]=temp;
            }
        }
    }
    console.log(input_arr);
}
bubblesort(input_arr);