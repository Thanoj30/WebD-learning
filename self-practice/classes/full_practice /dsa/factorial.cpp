#include<iostream>
using namespace std;
int fact(int n){
    int a=1;
    for(int i=1;i<=n;i++){
        a=a*i;
    }
    return a;
}
int main(){
    int n;
    cout<<"Enter a number:";
    cin>>n;
    cout<<"Factorial:"<<fact(n);
}