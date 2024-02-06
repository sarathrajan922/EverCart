import Razorpay from "razorpay";
import crypto from "crypto";
import configKeys from "../../config";
import { RazorpayPaymentObject } from "../../types/razorpay";

export const razorpayServices = () => {
  const generateRazor = (orderId: any, total: number) => {
    let instance = new Razorpay({
      key_id: configKeys.RAZORPAY_KEY_ID,
      key_secret: configKeys.RAZORPAY_KEY_SECRET,
    });
    return new Promise((resolve, reject) => {
      instance.orders.create(
        {
          amount: total * 100,
          currency: "INR",
          receipt: "" + orderId,
          notes: {
            key1: "value3",
            key2: "value2",
          },
        },
        (err, order) => {
          if (err) {
            console.log(err);
          } else {
            resolve(order);
          }
        }
      );
    });
  };

  const verifyPayment = (obj: any): Promise<string> => {
    const { data } = obj;
    return new Promise((resolve, reject) => {
      let hmac = crypto.createHmac("sha256", configKeys.RAZORPAY_KEY_SECRET);
      hmac.update(data?.razorpay_order_id + "|" + data?.razorpay_payment_id);
      const calculatedSignature = hmac.digest("hex");

      if (calculatedSignature === data?.razorpay_signature) {
        resolve('success');
      } else {
        reject('failed');
      }
    });
  };

  return {
    generateRazor,
    verifyPayment,
  };
};

export type RazorpayServiceType = typeof razorpayServices;
export type RazorpayServicesRetrun = ReturnType<RazorpayServiceType>;
