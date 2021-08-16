# Practice2

> 목표기간 : 8월15일까지

> [Ref](https://www.a-mean-blog.com/ko/blog/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%9E%85%EB%AC%B8/_/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C-9-1-%EB%B3%B4%EC%B6%A9%EC%88%98%EC%97%85-%ED%95%A8%EC%88%982-9-2-%EC%9C%A4%EB%85%84%ED%99%95%EC%9D%B8-%ED%95%A8%EC%88%98)

<br />

## 보충수업2

한 학교에서 학생들의 국어, 영어, 수학 점수로 보충수업 대상자를 뽑습니다. 아래 규칙을 만족하는 함수를 만들어 보세요.

- 함수는 국어, 영어, 수학 점수 3가지의 값을 입력받습니다. 점수는 숫자입니다.
- 모든 과목의 점수가 50점 이하라면 "종합반" 이라는 문자열을 return합니다.
- 특별반이 아닌 학생들 중 한과목이라도 50점 이하라면 "단과반"이라는 문자열을 return합니다.
- 나머지 학생들은 "보충 수업 없음"이라는 문자열을 return합니다.

위 조건을 만족하는 함수를 만들고, 테스트를 통해 제대로 작동하는지 확인해 보세요.

<br />
<br />

## 윤년확인

2월은 보통 28일까지 있지만 윤년인 경우 2월을 윤달이라고 하고 29일까지 있습니다. 예로, 2020년은 윤년으로 2020년 2월은 윤달이며, 2020년 2월은 29일까지 있습니다. 보통 윤년이 4년마다 돌아온다고 알고 있지만 이는 정확한 것은 아닙니다.

아래는 [위키](https://ko.wikipedia.org/wiki/윤년)에서 가져온 윤년을 구하는 정확한 규칙입니다.

- 서력 기원 연수가 4로 나누어떨어지는 해는 윤년으로 한다.(1992년, 1996년, 2004년, 2008년, 2012년, 2016년, 2020년 …)
- 이 중에서 100으로 나누어떨어지는 해는 평년으로 한다.(1900년, 2100년, 2200년, 2300년, 2500년 …)
- 그 중에 400으로 나누어떨어지는 해는 윤년으로 둔다.(1600년, 2000년, 2400년 …)

이 규칙을 사용하여 입력된 년도가 윤년인지 아닌지를 구하는 함수를 만들어 보세요.

함수는 하나의 양의 정수를 년도로 받습니다.
윤년 규칙에 따라 윤년이면 true를, 윤년이 아니면 false를 return합니다.
위 조건을 만족하는 함수를 만들고, 2020(윤년), 1992(윤년), 1900(평년), 1600(윤년) 등의 값을 넣어서 제대로 작동하는지 확인해 보세요.