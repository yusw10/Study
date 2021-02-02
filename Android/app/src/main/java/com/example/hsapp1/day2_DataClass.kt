package com.example.hsapp1


//pojo class? 그냥 틀인 클래스
//getter랑 setter만 잇는 그런거
//이런거를 줄일라고 dataclass가 따로잇다.

data class Ticket(val companyName: String ="", val name: String="", var date: String="", var seatNumber: Int=0)


class TicketNormal(val companyName: String, val name: String, var date: String, var seatNumber: Int)
//이게끗...
//클래스프로퍼티처럼가능, constructor도 가능
//toString. HashCode, equals, copy 전부 저안에 들어잇음.
//pojo 뚝딱임.

fun main() {
    val ticketA = Ticket("koreanAir", "hansuk", "2020-02-16", 14)
    val ticketB = TicketNormal("koreanAir", "hansuk", "2020-02-16", 14)
    val ticketC = Ticket()
    println(ticketA)
    println(ticketB)
    println(ticketC)


}