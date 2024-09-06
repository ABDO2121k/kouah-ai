"use client";
import React, { useEffect } from "react";

const ChatbotEmbed: React.FC = () => {
  useEffect(() => {
    // Create the iframe element
    const iframe = document.createElement("iframe");

    // Function to add styles to the iframe
    const iframeStyles = (styleString: string) => {
      const style = document.createElement("style");
      style.textContent = styleString;
      document.head.append(style);
    };

    // Add custom styles for the iframe
    iframeStyles(`
      .chat-frame {
        position: fixed;
        bottom: 50px;
        right: 50px;
        border: none;
      }
    `);

    // Set iframe properties
    iframe.src = "https://kouah-ai.vercel.app/chatbot";
    iframe.classList.add("chat-frame");
    document.body.appendChild(iframe);

    // Event listener for handling postMessage communication
    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "https://kouah-ai.vercel.app") return;

      const dimensions = JSON.parse(e.data);
      iframe.width = dimensions.width;
      iframe.height = dimensions.height;

      iframe.contentWindow?.postMessage(
        "e1f1dee8-d122-4fe5-99ad-6ded0fb1f20d",
        "https://kouah-ai.vercel.app/"
      );
    };

    window.addEventListener("message", handleMessage);

    // Cleanup listener and iframe on component unmount
    return () => {
      window.removeEventListener("message", handleMessage);
      document.body.removeChild(iframe);
    };
  }, []);

  return null; // No UI is rendered by this component itself
};

export default ChatbotEmbed;
