package com.example.hsapp1

fun main() {
    nullCheck()
}

fun funWhen(number: Int): Int {
    when (number) {
        in 0..2 -> return 5
        in 3..6 -> return 7
        else -> return 131313
    }
}

fun add(X: Int, Y: Int): Int {
    return X + Y
}

fun compare1(X: Int, Y: Int): Int = if (X > Y) X else Y
fun multiple(X: Int, Y: Int): Int = X * Y

fun array() {
    val array: Array<Int> = arrayOf(1, 2, 3)
    val list: List<Int> = listOf(1, 2, 3)

    var array2 = arrayOf(1, "asd", 3.4f)
}

//6 for and while

fun forAndWhile() {
    val students = arrayListOf("joyce", "james", "jenny", "Hong")
    for (name in students) {
        println("My name is ${name} !")
    }
    var sum: Int = 0
    for (i in 1..10 step 2) {
        sum += i
    }
    println("sum is " + sum)
    var index: Int = 0
    while (index < 10) {
        println("Current index : ${index}")
        index += 1
    }

    for ((index, name) in students.withIndex()) {
        println("this students(${index + 1}) is ${name}")
    }
}

//7 Nullable  /Non null
fun nullCheck() {
    var name: String = "Hansuk"
    //이렇게 하면 Non null 타입
    //var nullName : String = null
    var nullName: String? = null
    //널 타입이 아니니까 에러뜨는데
    //타입에 물음표 하나 넣으니까 null이 가능해진다.

    //널체크는 어떻게해?
    var nameInUpperCase = name.toUpperCase() // name이 시작부터 Non NUll 타입이기 때문에 uppercase도 당연히 null을 고려하지않아두댄다.
    //var nullNameInUpperCase = nullName.toUpperCase() // 널네임은 널일수도있으니까 체크를 우리에게 맡긴다.
    var nullNameInUpperCase: String? = nullName?.toUpperCase() // 이렇게 물음표 붙이면 nullable 타입으로 알아서 변환, 널이면 널, 아니면 연산값 반환

    //? 연산(엘비스 프리스비 연산? ㅋㅋ)
    val lastName :  String? = "Hone"
    val fullName  = name +" "+ (lastName?:"No LastName")

    println(fullName)

    //!! 느낌표 두개. 내가 이거 Null아닌거 보증해 줄게!

}

fun ignoreNulls(str: String?){
    //val mNotNull : String = str 이렇게하면 에러... 근데
    val mNotNull : String = str!! //이렇게 두개 붙이면... 얘는 Nullable 이지만 프로그래머가 Null이아님을 보증한다는 뜻임
    val upper :String = mNotNull.toUpperCase() // 그래서 nullable이면 에러나는 함수도 붙여버릴 수 있다.

    //근데 진짜 확실하게 NUll이 아닐때만 사용하는게 좋다!

    val email : String? = "yusw10@naver.com"
    // email이 Null이 아니면 이거를 해라!
    // 자신의 리시버 객체를 내부로 옮겨서 실행하는 함수? > 먼말이지
    // null이 아니라면 email을  중괄호 안으로 옮겨준다.!
    email.let {
        println("My email is ${email}")
    }// null체크해서 safe 하게 사용할 수 있다.
}