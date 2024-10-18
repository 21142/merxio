"use client";

import { formatPrice } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { Separator } from "./ui/Separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/Sheet";

type Props = {};

const Cart = (props: Props) => {
  const itemCount = 1;
  const transactionFee = 1;
  const total = 222;

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">items placeholder</div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <div>Free</div>
                </div>
                <div className="flex">
                  <span className="flex-1">Trasaction fee</span>
                  <div>{formatPrice(transactionFee)}</div>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <div>{formatPrice(total)}</div>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/cart"
                    className={buttonVariants({
                      className: "w-full",
                    })}
                  >
                    Continue to checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center space-y-1 text-center">
            <div
              className="relative mb-4 h-60 w-full text-muted-foreground"
              aria-hidden
            >
              <Image
                src="/empty-cart.png"
                layout="fill"
                objectFit="contain"
                className="opacity-60"
                alt="Empty cart"
              />
            </div>
            <div className="mr-16 text-xl font-semibold md:mr-20">
              Your cart is empty
            </div>
            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className:
                    "mr-16 text-sm !font-medium !text-muted-foreground md:mr-20",
                })}
              >
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
