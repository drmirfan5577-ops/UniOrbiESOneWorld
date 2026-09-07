import React, { useState } from "react";
import { useApp } from "@/contexts/AppContext";
import { Phone, KeyRound, CheckCircle } from "lucide-react";

export default function OTPLogin() {
  const { activeLauncher, setAuthenticated, setCurrentUser } = useApp();
  const [step, setStep] = useState<"phone" | "otp" | "name">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  // Mock OTP = "1234"
  function handleSendOTP() {
    if (phone.length >= 10) {
      setStep("otp");
      setError("");
    } else {
      setError("Please enter a valid phone number");
    }
  }

  function handleVerifyOTP() {
    if (otp === "1234") {
      setStep("name");
      setError("");
    } else {
      setError("Invalid OTP. Use: 1234");
    }
  }

  function handleComplete() {
    setCurrentUser({ name: name || "User", phone });
    setAuthenticated(true);
  }

  return (
    <div
      className="fixed inset-0 z-[400] flex items-center justify-center p-4"
      style={{
        backgroundImage: activeLauncher.bgImage ? `url(${activeLauncher.bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={activeLauncher.bgImage ? "" : activeLauncher.bgClass} style={{ position: "absolute", inset: 0, zIndex: -1 }} />
      <div className="w-full max-w-xs rounded-3xl overflow-hidden shadow-2xl" style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(40px)" }}>
        {/* Header */}
        <div className="p-6 text-center" style={{ background: `linear-gradient(135deg, ${activeLauncher.accentColor}, ${activeLauncher.accentColor}BB)` }}>
          <div className="text-white text-2xl mb-1">🌍</div>
          <div className="text-white font-black text-base">ESOneWorld</div>
          <div className="text-white/80 text-[10px]">Smart World Order · Global Family</div>
        </div>

        <div className="p-6">
          {step === "phone" && (
            <>
              <div className="text-center mb-5">
                <Phone className="w-10 h-10 mx-auto mb-2" style={{ color: activeLauncher.accentColor }} />
                <div className="text-sm font-bold text-gray-800">Register / Sign In</div>
                <div className="text-[11px] text-gray-500 mt-1">Enter your mobile number to receive OTP</div>
              </div>
              <div className="flex items-center gap-2 border-2 border-gray-200 rounded-2xl px-3 py-3 mb-3 focus-within:border-current" style={{ outlineColor: activeLauncher.accentColor }}>
                <span className="text-lg">🇵🇰</span>
                <span className="text-[12px] text-gray-500">+92</span>
                <input
                  type="tel"
                  placeholder="3xx-xxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 text-sm outline-none text-gray-800"
                />
              </div>
              {error && <div className="text-[11px] text-red-500 text-center mb-2">{error}</div>}
              <button
                onClick={handleSendOTP}
                className="w-full py-3 rounded-2xl text-white font-bold text-sm"
                style={{ background: activeLauncher.accentColor }}
              >
                Send OTP
              </button>
            </>
          )}

          {step === "otp" && (
            <>
              <div className="text-center mb-5">
                <KeyRound className="w-10 h-10 mx-auto mb-2" style={{ color: activeLauncher.accentColor }} />
                <div className="text-sm font-bold text-gray-800">Enter OTP</div>
                <div className="text-[11px] text-gray-500 mt-1">Sent to +92 {phone} · (Demo: 1234)</div>
              </div>
              <input
                type="number"
                placeholder="Enter 4-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={4}
                className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 text-center text-xl font-bold outline-none tracking-widest mb-3"
                style={{ borderColor: otp.length === 4 ? activeLauncher.accentColor : undefined }}
              />
              {error && <div className="text-[11px] text-red-500 text-center mb-2">{error}</div>}
              <button
                onClick={handleVerifyOTP}
                className="w-full py-3 rounded-2xl text-white font-bold text-sm mb-2"
                style={{ background: activeLauncher.accentColor }}
              >
                Verify OTP
              </button>
              <button onClick={() => setStep("phone")} className="w-full text-[11px] text-gray-400 text-center">← Change Number</button>
            </>
          )}

          {step === "name" && (
            <>
              <div className="text-center mb-5">
                <CheckCircle className="w-10 h-10 mx-auto mb-2" style={{ color: activeLauncher.accentColor }} />
                <div className="text-sm font-bold text-gray-800">Almost done!</div>
                <div className="text-[11px] text-gray-500 mt-1">Your number has been verified</div>
              </div>
              <input
                type="text"
                placeholder="Your display name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none mb-3"
                style={{ borderColor: name ? activeLauncher.accentColor : undefined }}
              />
              <button
                onClick={handleComplete}
                className="w-full py-3 rounded-2xl text-white font-bold text-sm"
                style={{ background: activeLauncher.accentColor }}
              >
                Enter ESOneWorld 🌍
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
