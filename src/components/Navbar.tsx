import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
import NavItems from "./NavItems";
import SeparatorVertical from "./SeparatorVertical";
import WidthWrapper from "./WidthWrapper";
import { buttonVariants } from "./ui/Button";

const Navbar = () => {
  const user = null;

  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 bg-white">
      <header className="relative bg-white">
        <WidthWrapper>
          <div className="flex h-24 items-center">
            {/* mobile nav */}
            <div className="ml-4 flex lg:ml-0">
              <Link href="/" className="text-lg font-bold text-gray-900">
                <Image
                  src="/logo.svg"
                  height={64}
                  width={64}
                  alt="Logo"
                  className="h-32 w-32"
                />
              </Link>
            </div>

            <div className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
              <NavItems />
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {user ? null : (
                  <Link
                    href="/sign-in"
                    className={buttonVariants({
                      variant: "ghost",
                    })}
                  >
                    Sign in
                  </Link>
                )}

                {user ? null : <SeparatorVertical />}

                {user ? (
                  <p></p>
                ) : (
                  <Link
                    href="/sign-up"
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    Create account
                  </Link>
                )}

                {user ? <SeparatorVertical /> : null}

                {user ? null : (
                  <div className="flex lg:ml-6">
                    <SeparatorVertical />
                  </div>
                )}

                <div className="ml-4 flow-root lg:ml-6">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </WidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
