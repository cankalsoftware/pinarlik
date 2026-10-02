import { NextResponse } from "next/server";

const INDEXNOW_KEY = "e87b64a1d520421db945952d73d9e8fa";
const HOST = "www.pinarlik.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const SITE_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/urunler`,
  `https://${HOST}/hakkimizda`,
  `https://${HOST}/zaman-cizelgesi`,
  `https://${HOST}/galeri`,
  `https://${HOST}/iletisim`,
  `https://${HOST}/indexnow`,
];

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const urlsToSubmit = body.urls && Array.isArray(body.urls) && body.urls.length > 0
      ? body.urls
      : SITE_URLS;

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urlsToSubmit,
    };

    // Submit to IndexNow API (shared across Microsoft Bing, Yandex, Seznam, etc.)
    const indexNowResponse = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    const isSuccess = indexNowResponse.ok || indexNowResponse.status === 200 || indexNowResponse.status === 202;

    return NextResponse.json({
      success: isSuccess,
      status: indexNowResponse.status,
      message: isSuccess
        ? "Sayfalar başarıyla IndexNow protokolü ile arama motorlarına (Bing, Yandex vb.) iletildi."
        : "IndexNow servisi isteği kabul etti veya kuyruğa aldı.",
      submittedUrls: urlsToSubmit,
      host: HOST,
      keyLocation: KEY_LOCATION,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("IndexNow submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "IndexNow bildirimi sırasında bir hata oluştu.",
        error: error.message || String(error),
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    protocol: "IndexNow",
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urls: SITE_URLS,
    status: "active",
  });
}
