"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "@/interfaces/product";
import { Check, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export interface CartItem {
  id: string; // Composite ID: product._id + amount + roast + grind
  product: Product;
  amount: string;
  roast: string;
  grind: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addItem: (product: Product, amount: string, roast: string, grind: string, quantity: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  
  // Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const storedCart = localStorage.getItem("dos-tazas-cart");
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
      }
    }
  }, []);

  // Save to localStorage whenever cartItems change
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("dos-tazas-cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isMounted]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000); // hide after 3 seconds
  };

  const addItem = (product: Product, amount: string, roast: string, grind: string, quantity: number = 1) => {
    const compositeId = `${product._id}-${amount}-${roast}-${grind}`;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === compositeId);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === compositeId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevItems, { id: compositeId, product, amount, roast, grind, quantity }];
    });

    // Handle GA4 event if gtag is available
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "add_to_cart", {
        currency: "USD", // General fallback, specific logic can be layered if needed
        value: product.price * quantity,
        items: [
          {
            item_id: product._id,
            item_name: product.name,
            price: product.price,
            quantity: quantity,
            item_variant: `${amount} | ${roast} | ${grind}`,
          },
        ],
      });
    }

    showToast("Item added to cart");
  };

  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) return;
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("dos-tazas-cart");
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, updateQuantity, clearCart, cartCount, cartTotal }}
    >
      {children}
      
      {/* Global Shopping Cart Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-[100] bg-[#f6e7d2] border-2 border-[#b82324] text-[#791216] px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 font-gotham"
            role="alert"
            aria-live="polite"
          >
            <div className="bg-[#b82324] text-[#f6e7d2] rounded-full p-1 border border-[#f6e7d2]">
              <Check size={16} strokeWidth={3} />
            </div>
            <span className="font-semibold text-sm">{toastMessage}</span>
            <button
              onClick={() => setToastMessage(null)}
              className="ml-2 text-[#791216]/60 hover:text-[#791216] transition-colors"
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
