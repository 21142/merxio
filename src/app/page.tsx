import { Button, buttonVariants } from "@/components/ui/Button";
import WidthWrapper from "@/components/WidthWrapper";
import { CheckCircle, CreditCard, Plane } from "lucide-react";
import Link from "next/link";

const qualities = [
  {
    name: "Quality",
    Icon: CheckCircle,
    description:
      "We ensure the highest quality standards by verifying each product.",
  },
  {
    name: "Fast shipping",
    Icon: Plane,
    description:
      "Our shipping partners ensure that your order arrives as fast as possible.",
  },
  {
    name: "Secure payments",
    Icon: CreditCard,
    description:
      "We use the latest technology to ensure that your payment is secure.",
  },
];

export default function Home() {
  return (
    <>
      <WidthWrapper>
        <div className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality
            <span className="text-primary"> products</span>.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-muted-foreground">
            Welcome to{" "}
            <span className="border-b-2 border-primary font-light text-foreground">
              merxio
            </span>
            . We provide a platform verified by our team to ensure the highest
            standards.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link href="/products" className={buttonVariants()}>
              Browse trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>
      </WidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <WidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {qualities.map(({ name, Icon, description }) => (
              <div
                key={name}
                className="flex flex-col items-center text-center"
              >
                <Icon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {name}
                </h3>
                <p className="mt-2 text-base text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </WidthWrapper>
      </section>
    </>
  );
}
