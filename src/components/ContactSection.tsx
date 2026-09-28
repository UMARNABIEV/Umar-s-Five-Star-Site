import React, { useState, useEffect } from 'react';
import {
  Send,
  Phone,
  Mail,
  CheckCircle2,
  Clock,
  Bot,
  Settings,
  ArrowUpRight,
  Loader2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { ContactSubmission } from '../types';
import {
  sendTelegramNotification,
  getTelegramConfig,
  RECIPIENT_PHONE,
  RECIPIENT_USERNAME,
} from '../services/telegram';
import { TelegramConfigModal } from './TelegramConfigModal';

interface ContactSectionProps {
  prefilledService?: string;
  prefilledNote?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledService,
  prefilledNote,
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [serviceType, setServiceType] = useState('landing');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    usedBot: boolean;
    directUrl: string;
    error?: string;
  } | null>(null);

  const [recentSubmissions, setRecentSubmissions] = useState<ContactSubmission[]>([]);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [telegramConfig, setTelegramConfig] = useState(getTelegramConfig());

  useEffect(() => {
    if (prefilledService) {
      setServiceType(prefilledService);
    }
    if (prefilledNote) {
      setMessage((prev) => (prev ? `${prev}\n${prefilledNote}` : prefilledNote));
    }
  }, [prefilledService, prefilledNote]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('umar_portfolio_inquiries');
      if (saved) {
        setRecentSubmissions(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const refreshConfig = () => {
    setTelegramConfig(getTelegramConfig());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionFeedback(null);

    const submissionTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newSubmission: ContactSubmission = {
      id: Date.now().toString(),
      name: name.trim(),
      contact: contact.trim(),
      serviceType,
      message: message.trim(),
      submittedAt: submissionTime,
    };

    // Attempt Telegram dispatch
    const tgResult = await sendTelegramNotification({
      name: newSubmission.name,
      contact: newSubmission.contact,
      serviceType: newSubmission.serviceType,
      message: newSubmission.message,
    });

    const updated = [newSubmission, ...recentSubmissions].slice(0, 5);
    setRecentSubmissions(updated);
    try {
      localStorage.setItem('umar_portfolio_inquiries', JSON.stringify(updated));
    } catch {
      // ignore
    }

    setSubmissionFeedback({
      usedBot: tgResult.usedBot,
      directUrl: tgResult.directUrl,
      error: tgResult.error,
    });
    setSubmitted(true);
    setIsSubmitting(false);

    // If bot isn't configured, optionally open Telegram directly or let user click
    setName('');
    setContact('');
    setMessage('');
  };

  const serviceOptions = [
    { value: 'landing', label: 'Landing Page (Bir sahifali sayt)' },
    { value: 'clinic', label: 'Tibbiyot klinikasi sayti' },
    { value: 'corporate', label: 'Korporativ kompaniya sayti' },
    { value: 'law', label: 'Yuridik firma veb-sayti' },
    { value: 'factory', label: 'Ishlab chiqarish va katalog' },
    { value: 'figma', label: 'Figma maketini WordPressga oʻtkazish' },
  ];

  return (
    <section id="aloqa" className="py-20 bg-[#f2f3ff]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#c7c4d8]/70 bg-white shadow-xs">
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#c7c4d8]/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#3525cd] font-bold">
                  07 / Aloqa
                </span>
                <div className="h-px w-10 bg-[#3525cd]"></div>
              </div>

              <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold tracking-tight text-[#131b2e] mt-2 mb-4">
                Loyiha boʻyicha gaplashamizmi?
              </h2>

              <p className="text-sm text-[#464555] leading-relaxed mb-8 font-normal">
                Sizning biznesingizga mos veb-sayt parametrlarini tahlil qilib, optimal muddat va
                budjet taklifini tayyorlaymiz.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4">
                <a
                  id="contact-channel-telegram"
                  className="p-3.5 border border-[#c7c4d8]/60 flex items-center gap-4 hover:border-[#3525cd] transition-colors group bg-white"
                  href={`https://t.me/${RECIPIENT_USERNAME}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="w-8 h-8 rounded-xs bg-[#f2f3ff] flex items-center justify-center text-[#3525cd] group-hover:bg-[#eaedff] transition-colors">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[#464555] block">Telegram</span>
                    <span className="text-sm font-semibold text-[#131b2e] group-hover:text-[#3525cd] transition-colors">
                      @{RECIPIENT_USERNAME}
                    </span>
                  </div>
                </a>

                <a
                  id="contact-channel-phone"
                  className="p-3.5 border border-[#c7c4d8]/60 flex items-center gap-4 hover:border-[#3525cd] transition-colors group bg-white"
                  href={`tel:${RECIPIENT_PHONE}`}
                >
                  <div className="w-8 h-8 rounded-xs bg-[#f2f3ff] flex items-center justify-center text-[#3525cd] group-hover:bg-[#eaedff] transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[#464555] block">Telefon</span>
                    <span className="text-sm font-semibold text-[#131b2e] group-hover:text-[#3525cd] transition-colors">
                      +998 (93) 553-13-30
                    </span>
                  </div>
                </a>

                <a
                  id="contact-channel-email"
                  className="p-3.5 border border-[#c7c4d8]/60 flex items-center gap-4 hover:border-[#3525cd] transition-colors group bg-white"
                  href="mailto:nabiyevu110@gmail.com"
                >
                  <div className="w-8 h-8 rounded-xs bg-[#f2f3ff] flex items-center justify-center text-[#3525cd] group-hover:bg-[#eaedff] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[#464555] block">
                      Elektron pochta
                    </span>
                    <span className="text-sm font-semibold text-[#131b2e] group-hover:text-[#3525cd] transition-colors">
                      nabiyevu110@gmail.com
                    </span>
                  </div>
                </a>
              </div>

              {/* Telegram Integration Notice Card */}
              <div className="mt-6 p-3.5 bg-[#faf8ff] border border-[#c7c4d8]/60 text-xs font-mono">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-[#131b2e] flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5 text-[#3525cd]" />
                    <span>Telegram integratsiyasi</span>
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded ${
                      telegramConfig.isConfigured
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        telegramConfig.isConfigured ? 'bg-emerald-500' : 'bg-amber-500'
                      }`}
                    ></span>
                    {telegramConfig.isConfigured ? 'Bot faol' : 'Toʻgʻridan-toʻgʻri'}
                  </span>
                </div>
                <p className="text-[11px] text-[#464555] leading-relaxed mb-2.5">
                  Murojaatlar avtomatik ravishda <b>{RECIPIENT_PHONE}</b> (@{RECIPIENT_USERNAME}) Telegramiga yetkaziladi.
                </p>
                <button
                  type="button"
                  onClick={() => setShowConfigModal(true)}
                  className="inline-flex items-center gap-1 text-[11px] text-[#3525cd] hover:underline font-semibold"
                >
                  <Settings className="w-3 h-3" />
                  <span>Bot sozlamalarini boshqarish</span>
                </button>
              </div>
            </div>

            {/* Social Links Strip */}
            <div className="pt-8 mt-8 border-t border-[#c7c4d8]/40 flex items-center gap-4 font-mono text-xs">
              <span className="text-[#777587]">Tarmoqlar:</span>
              <a
                className="text-[#464555] hover:text-[#3525cd] transition-colors"
                href="https://linkedin.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <span className="text-[#777587]">/</span>
              <a
                className="text-[#464555] hover:text-[#3525cd] transition-colors"
                href="https://instagram.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
              <span className="text-[#777587]">/</span>
              <a
                className="text-emerald-700 font-semibold hover:underline"
                href="https://fiverr.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Fiverr
              </a>
            </div>
          </div>

          {/* Request Form (Right Column) */}
          <div className="lg:col-span-7 p-8 md:p-12 bg-white">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#131b2e]">
                  Buyurtma yoki konsultatsiya soʻrovi
                </h3>
                <p className="text-xs text-[#464555] mt-1 font-normal">
                  Maʼlumotlaringizni qoldiring — soʻrovingiz Telegramga joʻnatiladi va tez fursatda bogʻlanaman.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowConfigModal(true)}
                title="Telegram bildirishnomalari sozlamalari"
                className="p-2 border border-[#c7c4d8]/70 hover:border-[#3525cd] text-[#464555] hover:text-[#3525cd] transition-colors rounded-xs shrink-0 flex items-center gap-1.5 text-xs font-mono"
              >
                <Bot className="w-4 h-4 text-[#3525cd]" />
                <span className="hidden sm:inline">Bot sozlamalari</span>
              </button>
            </div>

            <form id="contactForm" onSubmit={handleSubmit} className="space-y-5 mt-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs text-[#131b2e] mb-2 uppercase tracking-wider"
                >
                  Ismingiz *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masalan: Jamshid Usmonov"
                  className="w-full px-4 py-3 bg-[#faf8ff] border border-[#c7c4d8]/80 text-sm text-[#131b2e] placeholder:text-[#777587] focus:border-[#3525cd] focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact"
                    className="block font-mono text-xs text-[#131b2e] mb-2 uppercase tracking-wider"
                  >
                    Telefon yoki Telegram *
                  </label>
                  <input
                    id="contact"
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="+998 90 123 45 67 yoki @username"
                    className="w-full px-4 py-3 bg-[#faf8ff] border border-[#c7c4d8]/80 text-sm text-[#131b2e] placeholder:text-[#777587] focus:border-[#3525cd] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="serviceType"
                    className="block font-mono text-xs text-[#131b2e] mb-2 uppercase tracking-wider"
                  >
                    Xizmat yoʻnalishi
                  </label>
                  <select
                    id="serviceType"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-4 py-3 bg-[#faf8ff] border border-[#c7c4d8]/80 text-sm text-[#131b2e] focus:border-[#3525cd] focus:bg-white focus:outline-none transition-colors"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs text-[#131b2e] mb-2 uppercase tracking-wider"
                >
                  Loyiha haqida qisqacha
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Sayt qanday boʻlishi kerak, kerakli sahifalar yoki alohida talablar..."
                  className="w-full px-4 py-3 bg-[#faf8ff] border border-[#c7c4d8]/80 text-sm text-[#131b2e] placeholder:text-[#777587] focus:border-[#3525cd] focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <button
                id="submit-contact-form"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#3525cd] hover:bg-[#4f46e5] text-white text-sm font-semibold tracking-tight active:scale-99 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Telegramga yuborilmoqda...</span>
                  </>
                ) : (
                  <>
                    <span>Soʻrovni yuborish</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Rich Success / Notification Feedback */}
              {submitted && submissionFeedback && (
                <div
                  id="formSuccess"
                  className="p-5 bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs font-mono space-y-3 animate-in fade-in duration-200"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-semibold text-emerald-900 text-sm">
                        Rahmat! Soʻrovingiz qabul qilindi.
                      </p>
                      {submissionFeedback.usedBot ? (
                        <p className="text-emerald-800">
                          🔔 Bildirishnoma Telegram boti orqali Umar Nabiyevning (+998935531330) Telegramiga yetkazildi. Tez orada siz bilan bogʻlanaman!
                        </p>
                      ) : (
                        <p className="text-emerald-800">
                          Murojaatingiz saqlandi. Umar Nabiyevga (+998935531330) Telegram orqali toʻgʻridan-toʻgʻri xabar yuborish uchun pastdagi tugmani bosing:
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    <a
                      href={submissionFeedback.directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#3525cd] hover:bg-[#4f46e5] text-white text-xs font-sans font-semibold rounded flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Telegramda ochish (@{RECIPIENT_USERNAME})</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={`tel:${RECIPIENT_PHONE}`}
                      className="px-3.5 py-2 bg-white border border-[#c7c4d8] text-[#131b2e] hover:border-[#3525cd] text-xs font-sans font-medium rounded flex items-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#3525cd]" />
                      <span>{RECIPIENT_PHONE} ga qoʻngʻiroq</span>
                    </a>
                  </div>
                </div>
              )}
            </form>

            {recentSubmissions.length > 0 && (
              <div className="mt-8 pt-6 border-t border-[#c7c4d8]/40">
                <div className="flex items-center justify-between text-xs font-mono text-[#777587] mb-3">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#3525cd]" />
                    <span>Yuborilgan soʻrovlar tarixi ({recentSubmissions.length})</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      localStorage.removeItem('umar_portfolio_inquiries');
                      setRecentSubmissions([]);
                    }}
                    className="hover:text-[#131b2e] underline cursor-pointer"
                  >
                    Tozalash
                  </button>
                </div>

                <div className="space-y-2">
                  {recentSubmissions.map((sub) => (
                    <div
                      key={sub.id}
                      className="p-2.5 bg-[#f2f3ff] border border-[#c7c4d8]/40 text-xs font-mono flex items-center justify-between"
                    >
                      <div>
                        <span className="font-semibold text-[#131b2e]">{sub.name}</span>
                        <span className="text-[#777587] mx-1.5">•</span>
                        <span className="text-[#3525cd]">{sub.contact}</span>
                      </div>
                      <span className="text-[#777587] text-[11px]">{sub.submittedAt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Telegram Configuration Modal */}
      <TelegramConfigModal
        isOpen={showConfigModal}
        onClose={() => setShowConfigModal(false)}
        onConfigUpdated={refreshConfig}
      />
    </section>
  );
};
