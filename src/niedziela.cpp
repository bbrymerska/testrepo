//============================================================================
// Name        : niedziela.cpp
// Author      : 
// Version     :
// Copyright   : Your copyright notice
// Description : Hello World in C++, Ansi-style - bla bla
//============================================================================

#include <iostream>
using namespace std;

void findmax() {
	int input;
	for (int i = 0; i<20; i++) {
		cout << "podaj licznbe";
		cin >> input;
		if (i) {
			cout << input;
		} else {
			break;
		}
	}
}

int main() {
	findmax();
	return 0;
}
