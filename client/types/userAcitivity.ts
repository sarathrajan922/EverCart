export interface ActivityInterface {
    _id: Id
    quizId: string
    userId: string
    date: string
    Result: Result[]
    TotalScore: string
    __v: number
  }
  
  export interface Id {
    $oid: string
  }
  
  export interface Result {
    question: string
    correctOption: string
    selectedOption: string
    _id: Id2
  }
  
  export interface Id2 {
    $oid: string
  }