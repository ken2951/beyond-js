//## 여러가지 구구단 출력하기
//1. **홀수단**인 구구단만 출력해보자.
for (let i = 1; i < 10; i += 2) {
  for (let j = 1; j < 10; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
}
//2. 구구단을 가로로 출력해보자.
let str;
for (let i = 1; i < 10; i++) {
  str = "";
  for (let j = 1; j < 10; j++) {
    str += i + " * " + j + " = " + i * j + ", ";
  }
  console.log(str);
}

//## 여러가지 별찍기
// 1. [⭐️] 정사각형 만들기

// 2. [⭐️] 삼각형 별찍기1

// 3. [⭐️] 삼각형 별찍기2

// 4. [⭐️⭐️] 삼각형 별찍기3

// 5. [⭐️⭐️] 삼각형 별찍기4

// 6. [⭐️⭐️⭐️] 정삼각형 별찍기

// 7. [⭐️⭐️⭐️] 거꾸로 정삼각형 별찍기

// 8. [⭐️⭐️⭐️⭐️] 다이아몬드 별찍기
