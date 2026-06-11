#include<iostream>
using namespace std;
void reverse(int n){
   int temp=n;
    int rev=0;
    while(n!=0){
        int digit=n%10;
        rev=rev*10+digit;
        n=n/10;
    }
    if(temp==rev){
        cout<<"Palindrome";
    }
    else{
        cout<<"Not a palindrome";
    }
}
int main(){
    int n;
    cout<<"Enter a number:";
    cin>>n;
    reverse(n);
}