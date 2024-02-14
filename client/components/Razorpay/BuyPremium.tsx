"use client";
import React, { Suspense } from "react";
import Buy from "./Buy";
import { useRouter } from "next/navigation";
import RazorpayApi from "@/features/axios/api/razorpay";
import Loading from "../Loading";
import RazorpayVerifyPaymentApi from "@/features/axios/api/verifyPayment";

const BuyProduct = () => {
  const router = useRouter();

  const makePayment = async ({ productId = null }) => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      const order = await RazorpayApi();

      const obj = {
        key: apiKey,
        name: "quizsphere",
        currency: order.currency,
        amount: order.amount,
        image:
          "https://res.cloudinary.com/dk4darniv/image/upload/v1677605206/samples/people/boy-snow-hoodie.jpg",
        order_id: order.id,
        description: "Understanding RazorPay Integration",
        handler: async (response: any) => {
          const verifyResult = await RazorpayVerifyPaymentApi(response, order);

          if (verifyResult?.result === "success") {
            console.log("Redirecting...");
            router.push('/home')
            // router.push('/paymentsuccess?paymentid=' + response.razorpay_payment_id);
          }
        },
        prefill: {
          name: "Quiz Sphere", //your customer's name
          email: "quizSphere@gmail.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3483eb",
        },
      };
      // @ts-ignore
      const paymentObject = new window.Razorpay(obj);
      paymentObject.open();

      // Open the payment popup
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Buy makePayment={makePayment} />
      </Suspense>
    </>
  );
};

export default BuyProduct;
