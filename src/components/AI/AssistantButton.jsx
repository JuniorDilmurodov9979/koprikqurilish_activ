import { useState, useEffect, useRef } from "react";
import { Button, Input, Spin } from "antd";
import {
  SendOutlined,
  CloseOutlined,
  RobotOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

const API_URL = "http://192.168.200.72:4000/api/assistant";

// Rate limit configuration
const RATE_LIMIT_CONFIG = {
  MAX_REQUESTS: 10,
  WINDOW_HOURS: 12,
  STORAGE_KEY: "kuprik_ai_rate_limit",
};

// Message character limit
const MAX_MESSAGE_LENGTH = 50;

// URL mapping for internal navigation
const urlMapping = {
  "https://kuprikqurilish.uz/": "/",
  "https://kuprikqurilish.uz/management/about-management":
    "/management/about-management",
  "https://kuprikqurilish.uz/management/staute-management":
    "/management/staute-management",
  "https://kuprikqurilish.uz/management/structure-management":
    "/management/structure-management",
  "https://kuprikqurilish.uz/management/leadership-management":
    "/management/leadership-management",
  "https://kuprikqurilish.uz/management/inspection-management":
    "/management/inspection-management",
  "https://kuprikqurilish.uz/management/branch-management":
    "/management/branch-management",
  "https://kuprikqurilish.uz/Normative-documents/laws":
    "/Normative-documents/laws",
  "https://kuprikqurilish.uz/Normative-documents/ministers":
    "/Normative-documents/ministers",
  "https://kuprikqurilish.uz/Normative-documents/decisions":
    "/Normative-documents/decisions",
  "https://kuprikqurilish.uz/press-center/gallery": "/press-center/gallery",
  "https://kuprikqurilish.uz/press-center/vedio": "/press-center/vedio",
  "https://kuprikqurilish.uz/press-center/asked": "/press-center/asked",
  "https://kuprikqurilish.uz/press-center/newspapers":
    "/press-center/newspapers",
  "https://kuprikqurilish.uz/news": "/news",
  "https://kuprikqurilish.uz/contacts": "/contacts",
  "https://kuprikqurilish.uz/corruption": "/corruption",
  "https://kuprikqurilish.uz/corruption/documents": "/corruption/documents",
  "https://kuprikqurilish.uz/corruption/monitoring": "/corruption/monitoring",
  "https://kuprikqurilish.uz/corruption/appeals": "/corruption/appeals",
  "https://kuprikqurilish.uz/corruption/monopoliyaga-qarshi-komplaens":
    "/corruption/monopoliyaga-qarshi-komplaens",
  "https://kuprikqurilish.uz/corporativ": "/corporativ",
  "https://kuprikqurilish.uz/corporativ/docs": "/corporativ/docs",
  "https://kuprikqurilish.uz/corporativ/monitoring": "/corporativ/monitoring",
  "https://kuprikqurilish.uz/corporativ/documents": "/corporativ/documents",
  "https://kuprikqurilish.uz/corporativ/ichkihujjatlari":
    "/corporativ/ichkihujjatlari",
  "https://kuprikqurilish.uz/corporativ/Aksiyadorlarga":
    "/corporativ/Aksiyadorlarga",
};

// Rate limit helper functions
const getRateLimitData = () => {
  try {
    const data = localStorage.getItem(RATE_LIMIT_CONFIG.STORAGE_KEY);
    if (!data) return null;
    return JSON.parse(data);
  } catch {
    return null;
  }
};

const setRateLimitData = (data) => {
  try {
    localStorage.setItem(RATE_LIMIT_CONFIG.STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("LocalStorage error:", error);
  }
};

const checkRateLimit = () => {
  const data = getRateLimitData();
  const now = Date.now();
  const windowMs = RATE_LIMIT_CONFIG.WINDOW_HOURS * 60 * 60 * 1000;

  if (!data || now - data.firstRequest > windowMs) {
    return { allowed: true, remaining: RATE_LIMIT_CONFIG.MAX_REQUESTS };
  }

  if (data.count >= RATE_LIMIT_CONFIG.MAX_REQUESTS) {
    const resetTime = data.firstRequest + windowMs;
    const hoursLeft = Math.ceil((resetTime - now) / (1000 * 60 * 60));
    return {
      allowed: false,
      remaining: 0,
      hoursLeft,
      resetAt: new Date(resetTime),
    };
  }

  return {
    allowed: true,
    remaining: RATE_LIMIT_CONFIG.MAX_REQUESTS - data.count,
  };
};

const incrementRateLimit = () => {
  const data = getRateLimitData();
  const now = Date.now();
  const windowMs = RATE_LIMIT_CONFIG.WINDOW_HOURS * 60 * 60 * 1000;

  if (!data || now - data.firstRequest > windowMs) {
    setRateLimitData({
      count: 1,
      firstRequest: now,
      lastRequest: now,
    });
  } else {
    setRateLimitData({
      ...data,
      count: data.count + 1,
      lastRequest: now,
    });
  }
};

const AssistantButton = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      id: Date.now(),
      text: 'Assalomu alaykum! Men "Ko\'prikqurilish" aksiyadorlik jamiyatining AI yordamchisiman. Sizga qanday yordam bera olaman?',
      sender: "assistant",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendMessageToAPI = async (query) => {
    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      // Handle rate limit from server
      if (response.status === 429) {
        return {
          error: "RATE_LIMIT_EXCEEDED",
          message: data.message || "So'rovlar cheklovi tugadi",
        };
      }

      if (!response.ok) {
        throw new Error(data.message || "Server xatosi");
      }

      return data;
    } catch (error) {
      console.error("API Error:", error);
      return {
        message: "Kechirasiz, xatolik yuz berdi. Qaytadan urinib ko'ring.",
        type: "CHAT",
      };
    }
  };

  const handleSend = async () => {
    if (!message.trim() || loading) return;

    // Check client-side rate limit first
    const limitCheck = checkRateLimit();
    if (!limitCheck.allowed) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: message.trim(),
          sender: "user",
        },
        {
          id: Date.now() + 1,
          text: `⚠️ Sizning kunlik so'rovlar limitingiz tugadi. Iltimos, ${limitCheck.hoursLeft} soat dan keyin qayta urinib ko'ring.`,
          sender: "assistant",
          isError: true,
        },
      ]);

      setMessage("");
      return;
    }

    const userMessage = message.trim();

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: userMessage,
        sender: "user",
      },
    ]);

    setMessage("");
    setLoading(true);

    // Increment rate limit
    incrementRateLimit();

    // Get AI response
    const response = await sendMessageToAPI(userMessage);

    // Handle server-side rate limit
    if (response.error === "RATE_LIMIT_EXCEEDED") {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: `⚠️ ${response.message}`,
          sender: "assistant",
          isError: true,
        },
      ]);
      setLoading(false);
      return;
    }

    // Determine message styling based on type
    const messageType = response.type || "CHAT";
    let messageIcon = "";

    if (messageType === "FAQ") {
      messageIcon = "💡 "; // Light bulb for FAQ
    } else if (messageType === "NAVIGATION") {
      messageIcon = "🧭 "; // Compass for navigation
    }

    // Add AI response
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        text: messageIcon + (response.message || "Javob topilmadi"),
        sender: "assistant",
        type: messageType,
        navigation: response.navigation || null,
        faq: response.faq || null,
      },
    ]);

    setLoading(false);
  };

  const handleNavigate = (fullUrl) => {
    const internalPath = urlMapping[fullUrl] || fullUrl;
    setOpen(false);
    navigate(internalPath);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    if (value.length <= MAX_MESSAGE_LENGTH) {
      setMessage(value);
    }
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-28 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 z-50 overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-t-2xl">
            <h3 className="text-white font-semibold text-lg flex items-center gap-2">
              <RobotOutlined className="text-xl" />
              AI Yordamchi
            </h3>
            <Button
              type="text"
              icon={<CloseOutlined />}
              onClick={() => setOpen(false)}
              className="text-white hover:bg-white/20 border-0"
            />
          </div>

          <div
            className="p-4 overflow-auto bg-gray-50"
            style={{
              height: "320px",
            }}
          >
            <div className="flex flex-col gap-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-sm"
                        : msg.isError
                        ? "bg-red-50 text-red-800 rounded-bl-sm shadow-sm border border-red-200"
                        : msg.type === "FAQ"
                        ? "bg-green-50 text-gray-800 rounded-bl-sm shadow-sm border border-green-200"
                        : "bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>

                    {msg.navigation && (
                      <button
                        onClick={() => handleNavigate(msg.navigation.url)}
                        className="mt-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs transition-all flex items-center gap-1.5 font-medium shadow-sm hover:shadow-md"
                      >
                        <span>📍</span>
                        <span>Sahifaga o'tish</span>
                      </button>
                    )}

                    {msg.faq && (
                      <div className="mt-2 text-xs text-green-700 opacity-70">
                        {msg.faq.category === "contacts" && "📞 Aloqa"}
                        {msg.faq.category === "general" && "ℹ️ Umumiy"}
                        {msg.faq.category === "about" && "🏢 Kompaniya haqida"}
                        {msg.faq.category === "services" && "⚙️ Xizmatlar"}
                        {msg.faq.category === "hr" && "👥 Ishga qabul"}
                        {msg.faq.category === "partnership" && "🤝 Hamkorlik"}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 flex items-center gap-2">
                    <Spin
                      indicator={
                        <LoadingOutlined className="text-blue-600" spin />
                      }
                      size="small"
                    />
                    <span className="text-gray-500 text-sm">Yozmoqda...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <Input
                  placeholder="Xabar yozing..."
                  value={message}
                  onChange={handleMessageChange}
                  onKeyPress={handleKeyPress}
                  size="large"
                  disabled={loading}
                  className="rounded-xl"
                  maxLength={MAX_MESSAGE_LENGTH}
                />

                <Button
                  type="primary"
                  onClick={handleSend}
                  icon={<SendOutlined />}
                  size="large"
                  className="bg-blue-500 hover:bg-blue-600 rounded-xl"
                  disabled={loading || !message.trim()}
                  loading={loading}
                />
              </div>
              <div className="text-xs text-gray-400 text-right">
                {message.length}/{MAX_MESSAGE_LENGTH}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-10 right-6 z-50 group">
        <button
          onClick={() => setOpen(!open)}
          className={`
            w-14 h-14 rounded-full
            flex items-center justify-center
            border transition-all duration-300
            shadow-lg hover:shadow-xl
            ${
              open
                ? "bg-blue-600 border-blue-600 rotate-90"
                : "bg-white border-gray-200 hover:bg-blue-50"
            }
          `}
        >
          {open ? (
            <FaRobot className="text-xl text-white transition-transform" />
          ) : (
            <FaRobot className="text-xl text-blue-600" />
          )}
        </button>

        {!open && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
            AI Yordamchi
            <div className="absolute top-full right-4 -mt-1 w-2 h-2 bg-gray-800 transform rotate-45"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default AssistantButton;
