#include<iostream>
using namespace std;
void fib(int n){
    int a=0,b=1;
    for(int i=1;i<=n;i++){
        cout<<a<<" ";
        int next=a+b;
        a=b;
        b=next;
    }
}
int main(){
    int n;
    cout<<"Enter the number of terms:";
    cin>>n;
    fib(n);
}