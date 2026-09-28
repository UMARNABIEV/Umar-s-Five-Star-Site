/**
 * Telegram notification service for form inquiries.
 * Target recipient: Umar Nabiyev (+998935531330 / @Umar_me)
 */

export interface TelegramConfig {
  botToken: string;
  chatId: string;
  recipientPhone: string;
  recipientUsername: string;
  isConfigured: boolean;
}

export interface SendTelegramResult {
  success: boolean;
  usedBot: boolean;
  message?: string;
  error?: string;
  directUrl: string;
}

const STORAGE_KEY_TOKEN = 'umar_portfolio_tg_token';
const STORAGE_KEY_CHAT_ID = 'umar_portfolio_tg_chat_id';

export const RECIPIENT_PHONE = '+998935531330';
export const RECIPIENT_USERNAME = 'Umar_me';

export function getTelegramConfig(): TelegramConfig {
  const envToken = typeof import.meta !== 'undefined' && import.meta.env ? (import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string) : '';
  const envChatId = typeof import.meta !== 'undefined' && import.meta.env ? (import.meta.env.VITE_TELEGRAM_CHAT_ID as string) : '';

  let storedToken = '';
  let storedChatId = '';

  try {
    storedToken = localStorage.getItem(STORAGE_KEY_TOKEN) || '';
    storedChatId = localStorage.getItem(STORAGE_KEY_CHAT_ID) || '';
  } catch {
    // ignore
  }

  const botToken = (storedToken || envToken || '').trim();
  const chatId = (storedChatId || envChatId || '').trim();

  return {
    botToken,
    chatId,
    recipientPhone: RECIPIENT_PHONE,
    recipientUsername: RECIPIENT_USERNAME,
    isConfigured: Boolean(botToken && chatId),
  };
}

export function saveTelegramConfig(botToken: string, chatId: string): void {
  try {
    localStorage.setItem(STORAGE_KEY_TOKEN, botToken.trim());
    localStorage.setItem(STORAGE_KEY_CHAT_ID, chatId.trim());
  } catch (err) {
    console.error('Failed to save Telegram config to localStorage:', err);
  }
}

export function clearTelegramConfig(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_TOKEN);
    localStorage.removeItem(STORAGE_KEY_CHAT_ID);
  } catch (err) {
    console.error('Failed to clear Telegram config:', err);
  }
}

export function formatTelegramMessage(data: {
  name: string;
  contact: string;
  serviceType: string;
  message?: string;
  submittedAt?: string;
}): string {
  const serviceLabels: Record<string, string> = {
    landing: 'Landing Page (Bir sahifali sayt)',
    clinic: 'Tibbiyot klinikasi sayti',
    corporate: 'Korporativ kompaniya sayti',
    law: 'Yuridik firma veb-sayti',
    factory: 'Ishlab chiqarish va katalog',
    figma: 'Figma maketini WordPressga oʻtkazish',
  };

  const serviceName = serviceLabels[data.serviceType] || data.serviceType || 'Veb-sayt xizmati';
  const time = data.submittedAt || new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' });

  return [
    '🔔 <b>YANGI MUROJAAT (umar.dev)</b>',
    '',
    `👤 <b>Mijoz:</b> ${escapeHtml(data.name)}`,
    `📞 <b>Aloqa:</b> ${escapeHtml(data.contact)}`,
    `💼 <b>Xizmat yoʻnalishi:</b> ${escapeHtml(serviceName)}`,
    data.message ? `💬 <b>Loyiha haqida:</b>\n${escapeHtml(data.message)}` : '',
    '',
    `🕒 <b>Qabul qilingan vaqt:</b> ${time}`,
    `📱 <b>Telegram egasi:</b> +998935531330 (@${RECIPIENT_USERNAME})`,
  ]
    .filter(Boolean)
    .join('\n');
}

export function formatPlainTextForUrl(data: {
  name: string;
  contact: string;
  serviceType: string;
  message?: string;
}): string {
  const serviceLabels: Record<string, string> = {
    landing: 'Landing Page (Bir sahifali sayt)',
    clinic: 'Tibbiyot klinikasi sayti',
    corporate: 'Korporativ kompaniya sayti',
    law: 'Yuridik firma veb-sayti',
    factory: 'Ishlab chiqarish va katalog',
    figma: 'Figma maketini WordPressga oʻtkazish',
  };

  const serviceName = serviceLabels[data.serviceType] || data.serviceType;

  return [
    `Assalomu alaykum Umar Nabiyev!`,
    `Saytingiz (umar.dev) orqali yangi soʻrov qoldirildi:`,
    ``,
    `👤 Ism: ${data.name}`,
    `📞 Aloqa: ${data.contact}`,
    `💼 Xizmat: ${serviceName}`,
    data.message ? `💬 Xabar: ${data.message}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

export function getDirectTelegramUrl(data: {
  name: string;
  contact: string;
  serviceType: string;
  message?: string;
}): string {
  const text = formatPlainTextForUrl(data);
  return `https://t.me/${RECIPIENT_USERNAME}?text=${encodeURIComponent(text)}`;
}

export async function sendTelegramNotification(data: {
  name: string;
  contact: string;
  serviceType: string;
  message?: string;
}): Promise<SendTelegramResult> {
  const config = getTelegramConfig();
  const directUrl = getDirectTelegramUrl(data);
  const formattedHtml = formatTelegramMessage(data);

  if (!config.isConfigured) {
    return {
      success: true,
      usedBot: false,
      message: 'Soʻrov qabul qilindi. Bot sozlanmaganligi sababli Telegram orqali toʻgʻridan-toʻgʻri yuborishingiz mumkin.',
      directUrl,
    };
  }

  try {
    const endpoint = `https://api.telegram.org/bot${config.botToken}/sendMessage`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: config.chatId,
        text: formattedHtml,
        parse_mode: 'HTML',
      }),
    });

    const resJson = await response.json();

    if (resJson.ok) {
      return {
        success: true,
        usedBot: true,
        message: 'Bildirishnoma Telegram bot orqali muvaffaqiyatli yetkazildi!',
        directUrl,
      };
    } else {
      console.warn('Telegram API rejected message:', resJson);
      return {
        success: false,
        usedBot: false,
        error: resJson.description || 'Telegramga yuborishda xatolik yuz berdi.',
        directUrl,
      };
    }
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : 'Tarmoq xatosi';
    console.error('Error dispatching telegram notification:', err);
    return {
      success: false,
      usedBot: false,
      error: errMsg,
      directUrl,
    };
  }
}

export async function sendTelegramTestPing(botToken: string, chatId: string): Promise<{ ok: boolean; description?: string }> {
  try {
    const endpoint = `https://api.telegram.org/bot${botToken.trim()}/sendMessage`;
    const text = [
      '🔔 <b>umar.dev — Telegram integratsiyasi muvaffaqiyatli ulandi!</b>',
      '',
      'Ushbu test xabari Umar Nabiyev (+998935531330) uchun yuborildi.',
      'Endi saytdagi har bir murojaat toʻgʻridan-toʻgʻri shu yerga keladi.',
      `🕒 Vaqt: ${new Date().toLocaleTimeString('uz-UZ')}`,
    ].join('\n');

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId.trim(),
        text,
        parse_mode: 'HTML',
      }),
    });

    const data = await res.json();
    return { ok: Boolean(data.ok), description: data.description };
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : 'Tarmoq xatosi';
    return { ok: false, description: errMsg };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
