"use client";

import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { urlFor } from "@/sanity/image";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useEffect } from "react";

export default function CheckoutPage() {
  const { t, language } = useLanguage();
  const { cartItems, cartTotal, updateQuantity, removeItem, clearCart } = useCart();

  // Trigger GA4 view_cart event on mount
  useEffect(() => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "view_cart", {
        currency: language === "es" ? "CRC" : "USD",
        value: cartTotal,
        items: cartItems.map((item) => ({
          item_id: item.product._id,
          item_name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
          item_variant: `${item.amount} | ${item.roast} | ${item.grind}`,
        })),
      });
    }
  }, [cartItems, cartTotal, language]);

  const formattedTotal = new Intl.NumberFormat(
    language === "es" ? "es-CR" : "en-US",
    {
      style: "currency",
      currency: language === "es" ? "CRC" : "USD",
    }
  ).format(cartTotal);

  const handleCheckout = () => {
    // Generate WhatsApp Message
    const itemsText = cartItems.map((item) => {
      const template = t.cart.whatsappItemTemplate;
      const formattedPrice = new Intl.NumberFormat(
        language === "es" ? "es-CR" : "en-US",
        { style: "currency", currency: language === "es" ? "CRC" : "USD" }
      ).format(item.product.price * item.quantity);

      return template
        .replace("{quantity}", item.quantity.toString())
        .replace("{name}", item.product.name)
        .replace("{amount}", t.product.values.amount[item.amount as keyof typeof t.product.values.amount])
        .replace("{roast}", t.product.values.roast[item.roast as keyof typeof t.product.values.roast])
        .replace("{grind}", t.product.values.grind[item.grind as keyof typeof t.product.values.grind])
        .replace("{price}", formattedPrice);
    }).join("\n");

    const message = t.cart.whatsappMessageTemplate
      .replace("{items}", itemsText)
      .replace("{total}", formattedTotal);

    // Trigger GA4 begin_checkout event
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "begin_checkout", {
        currency: language === "es" ? "CRC" : "USD",
        value: cartTotal,
        items: cartItems.map((item) => ({
          item_id: item.product._id,
          item_name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
          item_variant: `${item.amount} | ${item.roast} | ${item.grind}`,
        })),
      });
    }

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Clear cart and redirect
    clearCart();
    window.location.href = whatsappUrl;
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#f6e7d2] min-h-screen pt-32 pb-20 font-gotham">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-titan font-bold text-[#b82324] mb-6">
            {t.cart.title}
          </h1>
          <div className="bg-white/50 backdrop-blur rounded-2xl p-12 shadow-sm border border-[#791216]/10">
            <p className="text-xl text-[#791216] mb-8 font-medium">{t.cart.emptyCart}</p>
            <Link
              href={`/${language}`}
              className="inline-block py-3 px-8 rounded-full font-bold text-[#f6e7d2] bg-[#b82324] hover:bg-[#791216] transition-colors shadow-md"
            >
              {t.cart.returnShop}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f6e7d2] min-h-screen pt-32 pb-20 font-gotham">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-titan font-bold text-[#b82324] mb-8">
          {t.cart.title}
        </h1>

        <div className="bg-white/50 backdrop-blur rounded-2xl p-6 md:p-8 shadow-sm border border-[#791216]/10 mb-8">
          <div className="space-y-6">
            {cartItems.map((item) => {
              const formattedItemPrice = new Intl.NumberFormat(
                language === "es" ? "es-CR" : "en-US",
                { style: "currency", currency: language === "es" ? "CRC" : "USD" }
              ).format(item.product.price);

              return (
                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 py-4 border-b border-[#791216]/10 last:border-0">
                  <div className="w-24 h-24 shrink-0 bg-[#f6e7d2]/50 rounded-lg overflow-hidden relative">
                    {item.product.image && (
                      <Image
                        src={urlFor(item.product.image).width(200).height(200).url()}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>

                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-xl font-bold text-[#b82324] mb-1">{item.product.name}</h3>
                    <p className="text-sm text-[#791216]/80 font-medium mb-2">
                      {t.product.values.amount[item.amount as keyof typeof t.product.values.amount]} •{" "}
                      {t.product.values.roast[item.roast as keyof typeof t.product.values.roast]} •{" "}
                      {t.product.values.grind[item.grind as keyof typeof t.product.values.grind]}
                    </p>
                    <p className="text-[#791216] font-semibold">{formattedItemPrice}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-[#f6e7d2] rounded-full border border-[#791216]/20">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-[#791216] hover:text-[#b82324] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-semibold text-[#791216]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-[#791216] hover:text-[#b82324] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-[#791216]/60 hover:text-[#b82324] transition-colors"
                      aria-label={t.cart.remove}
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur rounded-2xl p-6 md:p-8 shadow-sm border border-[#791216]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#791216] text-lg mb-1">{t.cart.subtotal}</p>
            <p className="text-3xl font-bold text-[#b82324]">{formattedTotal}</p>
          </div>
          
          <button
            onClick={handleCheckout}
            className="w-full md:w-auto py-4 px-8 rounded-full font-bold text-lg text-[#f6e7d2] bg-[#b82324] hover:bg-[#791216] transition-colors shadow-md"
          >
            {t.cart.checkoutWhatsApp}
          </button>
        </div>
      </div>
    </div>
  );
}
