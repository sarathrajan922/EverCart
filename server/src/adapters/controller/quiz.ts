import { UserRepositoryMongoDB } from '../../frameworks/database/mongodb/repository/userRepoMongo';
import { UserDbInterface} from '../../application/repository/userDbRepository';
import asyncHandler from 'express-async-handler'
import { Response } from 'express';
import { customRequest } from '../../types/expressCustomRequest';
import { QuizInterface } from '../../types/quiz';


const quizController = (
    userDbRepositoryInterface: UserDbInterface,
    userDbRepositoryMongoDB:UserRepositoryMongoDB
) => {
    const dbRepositoryUser = userDbRepositoryInterface(userDbRepositoryMongoDB())

    const createQuiz = asyncHandler(async (req:customRequest,res:Response)=>{
        //? collect data from req.body
        console.log('api reached createQuiz function')
        const data:QuizInterface = {
            createdBy: '12345667',
            category: 'Science',
            questions: [
                {
                    text: 'What is the capital of France?',
                    options: [
                        { text: 'Berlin' },
                        { text: 'Paris', isCorrect: true },
                        { text: 'London' },
                        { text: 'Rome' }
                    ],
                    
                },
                
            ]
        };

        const uploadedData = await dbRepositoryUser.createQuiz(data)
        console.log(uploadedData)
        res.send("Done")

    });

    return {
        createQuiz
    }
}

export default quizController;