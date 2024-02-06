import asyncHandler from "express-async-handler";
import { Response } from "express";
import { customRequest } from "../../types/expressCustomRequest";
import { RazorpayServiceType } from "../../frameworks/services/razorpayServices";
import { RazorpayServicesInterface } from "../../application/services/razorpayServicesInterface";
import { upgradeToPremiumUseCase } from "../../application/useCase/user/upgradeToPremium";
import { UserDbInterface } from "../../application/repository/userDbRepository";
import { UserRepositoryMongoDB } from "../../frameworks/database/mongodb/repository/userRepoMongo";

const paymentController = (
  //payment service
  razorypayServicesInterface: RazorpayServicesInterface,
  razorypayService: RazorpayServiceType,
  userDbRepositoryInterface: UserDbInterface,
  userDbRepositoryMongoDB: UserRepositoryMongoDB
) => {
  const razorpayServices = razorypayServicesInterface(razorypayService());
  const dbRepositoryUser = userDbRepositoryInterface(userDbRepositoryMongoDB());

  const generateRazorypay = asyncHandler(
    async (req: customRequest, res: Response) => {
      const userId = req?.payload?.id ?? "";
      const { total } = req?.body;
      //call razorpay service and pass userId and pass total
      const order = await razorpayServices.generateRazorypay(
        userId,
        parseInt(total)
      );

      res.json({
        message: "generate Razorpay success",
        order,
      });
    }
  );

  const verifyPayment = asyncHandler(
    async (req: customRequest, res: Response) => {
      const userId = req?.payload?.id ?? "";

      const result = await razorpayServices.verifyPayment(req.body);

      //todo if the result is success then change the user premium status
      if (result === "success") {
        const upgradeToPremium = await upgradeToPremiumUseCase(
          userId,
          dbRepositoryUser
        );
      }

      res.json({
        message: "verify payment done",
        result,
      });
    }
  );

  return {
    generateRazorypay,
    verifyPayment,
  };
};

export default paymentController;
