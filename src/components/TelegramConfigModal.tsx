import React, { useState } from 'react';
import { X, Send, Bot, CheckCircle2, AlertCircle, ExternalLink, RefreshCw, Key, MessageSquare } from 'lucide-react';
import {
  getTelegramConfig,
  saveTelegramConfig,
  clearTelegramConfig,
  sendTelegramTestPing,
  RECIPIENT_PHONE,
  RECIPIENT_USERNAME,
} from '../services/telegram';

interface TelegramConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfigUpdated?: () => void;
}

export const TelegramConfigModal: React.FC<TelegramConfigModalProps> = ({
  isOpen,
  onClose,
  onConfigUpdated,
}) => {
  const currentConfig = getTelegramConfig();
  const [token, setToken] = useState(currentConfig.botToken);
  const [chatId, setChatId] = useState(currentConfig.chatId);
  const [testing, setTesting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveTelegramConfig(token, chatId);
    setStatusMessage({ type: 'success', text: 'Telegram sozlamalari muvaffaqiyatli saqlandi!' });
    if (onConfigUpdated) onConfigUpdated();
  };

  const handleTestPing = async () => {
    if (!token.trim() || !chatId.trim()) {
      setStatusMessage({ type: 'error', text: 'Avval Bot Token va Chat ID ni kiriting.' });
      return;
    }
    setTesting(true);
    setStatusMessage(null);
    const result = await sendTelegramTestPing(token, chatId);
    setTesting(false);

    if (result.ok) {
      setStatusMessage({
        type: 'success',
        text: 'Ajoyib! Telegramingizga test xabar joʻnatildi. Telegramni tekshiring!',
      });
      saveTelegramConfig(token, chatId);
      if (onConfigUpdated) onConfigUpdated();
    } else {
      setStatusMessage({
        type: 'error',
        text: result.description
          ? `Xatolik: ${result.description}. Bot Token va Chat ID toʻgʻriligini, hamda botga avval /start bosganingizni tekshiring.`
          : 'Telegram botga ulanib boʻlmadi.',
      });
    }
  };

  const handleClear = () => {
    clearTelegramConfig();
    setToken('');
    setChatId('');
    setStatusMessage({ type: 'success', text: 'Sozlamalar tozalandi.' });
    if (onConfigUpdated) onConfigUpdated();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131b2e]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-[#c7c4d8] w-full max-w-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#c7c4d8]/60 bg-[#faf8ff] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xs bg-[#3525cd] text-white flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#131b2e]">
                Telegram bildirishnomalari sozlamasi
              </h3>
              <p className="font-mono text-xs text-[#464555]">
                Qabul qiluvchi: {RECIPIENT_PHONE} (@{RECIPIENT_USERNAME})
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#777587] hover:text-[#131b2e] hover:bg-[#eaedff] transition-colors"
            aria-label="Yopish"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Status banner */}
          <div className="p-3.5 bg-[#f2f3ff] border border-[#c7c4d8]/60 text-xs text-[#131b2e] space-y-1">
            <div className="font-semibold flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${currentConfig.isConfigured ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
              <span>
                Holat: {currentConfig.isConfigured ? 'Avtomatik Telegram Bot faol' : 'Bot ulanmagan (toʻgʻridan-toʻgʻri havola rejimida)'}
              </span>
            </div>
            <p className="text-[#464555]">
              Mijoz formani toʻldirganda, barcha maʼlumotlar (Ism, Telefon, Xizmat, Xabar) avtomatik tarzda Telegramingizga joʻnatiladi.
            </p>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block font-mono text-xs text-[#131b2e] uppercase font-semibold">
                  Telegram Bot Token
                </label>
                <a
                  href="https://t.me/BotFather"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-[#3525cd] hover:underline flex items-center gap-1"
                >
                  <span>@BotFather da olish</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Masalan: 7123456789:AAEj..."
                  className="w-full pl-9 pr-3 py-2.5 bg-[#faf8ff] border border-[#c7c4d8]/80 text-xs font-mono text-[#131b2e] focus:border-[#3525cd] focus:bg-white focus:outline-none"
                />
                <Key className="w-4 h-4 text-[#777587] absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block font-mono text-xs text-[#131b2e] uppercase font-semibold">
                  Sizning Chat ID raqamingiz
                </label>
                <a
                  href="https://t.me/userinfobot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-[#3525cd] hover:underline flex items-center gap-1"
                >
                  <span>@userinfobot da bilish</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={chatId}
                  onChange={(e) => setChatId(e.target.value)}
                  placeholder="Masalan: 987654321"
                  className="w-full pl-9 pr-3 py-2.5 bg-[#faf8ff] border border-[#c7c4d8]/80 text-xs font-mono text-[#131b2e] focus:border-[#3525cd] focus:bg-white focus:outline-none"
                />
                <MessageSquare className="w-4 h-4 text-[#777587] absolute left-3 top-3" />
              </div>
            </div>

            {statusMessage && (
              <div
                className={`p-3 text-xs flex items-start gap-2 ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                    : 'bg-rose-50 border border-rose-200 text-rose-800'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#3525cd] hover:bg-[#4f46e5] text-white font-mono text-xs font-semibold cursor-pointer transition-colors shadow-xs"
              >
                Saqlash
              </button>

              <button
                type="button"
                onClick={handleTestPing}
                disabled={testing}
                className="px-4 py-2.5 bg-white border border-[#c7c4d8] hover:border-[#3525cd] text-[#131b2e] font-mono text-xs flex items-center gap-1.5 cursor-pointer transition-colors disabled:opacity-50"
              >
                {testing ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#3525cd]" />
                ) : (
                  <Send className="w-3.5 h-3.5 text-[#3525cd]" />
                )}
                <span>{testing ? 'Yuborilmoqda...' : 'Test xabar yuborish'}</span>
              </button>

              {currentConfig.isConfigured && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-3 py-2.5 text-[#777587] hover:text-rose-600 font-mono text-xs cursor-pointer ml-auto"
                >
                  Tozalash
                </button>
              )}
            </div>
          </form>

          {/* Quick instructions in Uzbek */}
          <div className="pt-4 border-t border-[#c7c4d8]/40 space-y-2.5 font-mono text-xs text-[#464555]">
            <span className="font-semibold text-[#131b2e] block">Tezkor yoʻriqnoma (2 daqiqa):</span>
            <ol className="list-decimal pl-4 space-y-1.5 text-[11px] leading-relaxed">
              <li>
                Telegramda <b>@BotFather</b> ga kiring va <code>/newbot</code> deb yozing. Bot nomini kiriting va berilgan <b>Bot Token</b>ni nusxalang.
              </li>
              <li>
                Yaratgan botingizga kiring va <b>/start</b> tugmasini bosing.
              </li>
              <li>
                Telegramda <b>@userinfobot</b> ga kiring, u sizga shaxsiy <b>Chat ID</b> raqamingizni koʻrsatadi.
              </li>
              <li>
                Token va Chat ID ni yuqoridagi maydonlarga qoʻyib <b>&quot;Test xabar yuborish&quot;</b> tugmasini bosing.
              </li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#c7c4d8]/60 bg-[#faf8ff] flex items-center justify-between text-xs font-mono">
          <span className="text-[#777587]">Telefon: {RECIPIENT_PHONE}</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-white border border-[#c7c4d8] hover:bg-[#f2f3ff] text-[#131b2e] transition-colors"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
};
