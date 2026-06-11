#include<iostream>
using namespace std;
int sum(int n){
    int sum=0;
    while(n!=0){
        sum+=n%10;
        n=n/10;
    }
    return sum;
}
int main(){
    int n;
    cout<<"Enter a number:";
    cin>>n;
    cout<<"Sum of digits: "<<sum(n);
}