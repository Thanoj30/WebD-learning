#include<iostream>
using namespace std;
void reverse(int arr[],int str,int end){
    while(str<end){
        swap(arr[str],arr[end]);
        str++;
        end--;
    }
}
void print(int arr[],int n){
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}
int main(){
    int arr[]={1,2,3,4};
    int n=sizeof(arr)/sizeof(arr[0]);
    reverse(arr,0,n-1);
    print(arr,n);
}