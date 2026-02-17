import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

import Bkash from "@/assets/images/Bkash.png";
import Visa from "@/assets/images/Visa.png";
import Mastercard from "@/assets/images/Mastercard.png";
import Nagad from "@/assets/images/Nagad.png";

import { useForm } from "react-hook-form";
import { useCheckout } from "../../../context/CheckoutContext";
import { useTranslation } from "react-i18next";

const PaymentMethods = () => {
  const { t } = useTranslation();
  const { paymentMethod, setPaymentMethod } = useCheckout();

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <Card>
      <CardContent>
        <RadioGroup
          value={paymentMethod}
          onValueChange={setPaymentMethod}
          className="gap-8"
        >
          {/* Cash on Delivery */}
          <div className="flex items-center space-x-4">
            <RadioGroupItem value="cash" id="cash" />
            <Label htmlFor="cash">{t("checkout.Cash on Delivery")}</Label>
          </div>

          {/* Bank Transfer */}
          <div className="flex items-center space-x-4 w-full md:w-106.75">
            <RadioGroupItem value="bank" id="bank" />
            <div className="flex items-center justify-between w-full">
              <Label htmlFor="bank">{t("checkout.Bank")}</Label>
              <div className="flex items-center gap-2">
                <img src={Bkash} alt="" />
                <img src={Visa} alt="" />
                <img src={Mastercard} alt="" />
                <img src={Nagad} alt="" />
              </div>
            </div>
          </div>
        </RadioGroup>

        {/* Bank Fields */}
        {paymentMethod === "bank" && (
          <form className="pt-4 w-106.75 bg-[#f4f4f4] border border-[#dedede] rounded-md p-2.5">
            <div className="space-y-2 w-full">
              <label className="sr-only">{t("checkout.Card number")}</label>
              <input
                className="w-full bg-white h-9 px-3 py-1 rounded-md border border-muted-foreground text-sm"
                type="text"
                placeholder={t("checkout.Card number")}
                {...register("cardNumber", {
                  required: "Enter a valid card number",
                })}
              />
            </div>
            <p className="h-8 text-secondary font-medium p-2 rounded-md">
              {errors.cardNumber?.message}
            </p>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-2 w-full">
                <label className="sr-only">{t("checkout.Security code")}</label>
                <input
                  className="w-full bg-white h-9 px-3 py-1 rounded-md border border-muted-foreground text-sm"
                  type="text"
                  placeholder={t("checkout.Security code")}
                  {...register("securityCode", {
                    required: "Enter the CVV or security code on your card",
                  })}
                />
                <p className="h-8 text-secondary font-medium p-2 rounded-md">
                  {errors.securityCode?.message}
                </p>
              </div>
              <div className="space-y-2 w-full">
                <label className="sr-only">
                  {t("checkout.Expiration date (MM / YY)")}
                </label>
                <input
                  className="w-full bg-white h-9 px-3 py-1 rounded-md border border-muted-foreground text-sm"
                  type="text"
                  placeholder={t("checkout.Expiration date (MM / YY)")}
                  {...register("expirationDate", {
                    required: "Enter a valid expiration date",
                  })}
                />
                <p className="h-8 text-secondary font-medium p-2 rounded-md">
                  {errors.expirationDate?.message}
                </p>
              </div>
            </div>
            <div className="space-y-2 w-full">
              <label className="sr-only">{t("checkout.Name on card")}</label>
              <input
                className="w-full bg-white h-9 px-3 py-1 rounded-md border border-muted-foreground text-sm"
                type="text"
                placeholder={t("checkout.Name on card")}
                {...register("nameOnCard", {
                  required:
                    "Enter your name exactly as it’s written on your card",
                })}
              />
            </div>
            <p className="h-8 text-secondary font-medium p-2 rounded-md">
              {errors.nameOnCard?.message}
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
};
export default PaymentMethods;
