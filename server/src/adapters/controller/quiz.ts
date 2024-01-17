import { UserRepositoryMongoDB } from '../../frameworks/database/mongodb/repository/userRepoMongo';
import { UserDbInterface} from '../../application/repository/userDbRepository';
import asyncHandler from 'express-async-handler'
import { Response } from 'express';
import { customRequest } from '../../types/expressCustomRequest';
import { QuizInterface } from '../../types/quiz';
import { createQuizUseCase } from '../../application/useCase/user/createQuiz';


const quizController = (
    userDbRepositoryInterface: UserDbInterface,
    userDbRepositoryMongoDB:UserRepositoryMongoDB
) => {
    const dbRepositoryUser = userDbRepositoryInterface(userDbRepositoryMongoDB())

    const createQuiz = asyncHandler(async (req:customRequest,res:Response)=>{
     
        const data:any = {
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

        const userId = req?.payload?.id ?? '';

        const uploadedData = await createQuizUseCase(userId,data,dbRepositoryUser)
      
        res.json({
            message:'create quiz successfully',
            uploadedData
        })

    });

    return {
        createQuiz
    }
}

export default quizController;