import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, productInterest, message } = body;

    if (!fullName || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "Lütfen ad, telefon ve mesaj alanlarını doldurunuz." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "bilgi@pinarlik.com";

    const isDummyPass =
      !smtpPass ||
      smtpPass.includes("BURAYA_SIFRENIZI_YAZINIZ") ||
      smtpPass.includes("your_smtp_password_here");

    if (smtpHost && smtpUser && smtpPass && !isDummyPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

        const mailOptions = {
          from: `"Pınarlık Web İletişim" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: email || undefined,
          subject: `[Web Sipariş & Bilgi Talebi] ${productInterest} - ${fullName}`,
          text: `
Pınarlık Doğal Gıda Web Sitesinden Yeni Mesaj:

Ad Soyad: ${fullName}
Telefon: ${phone}
E-posta: ${email || "Belirtilmedi"}
İlgilendiği Ürün: ${productInterest}

Mesaj / Not:
${message}
          `,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
              <h2 style="color: #1b4332; margin-bottom: 10px;">Pınarlık Doğal Gıda Web Sitesinden Yeni Talep</h2>
              <p style="color: #555; font-size: 14px;">Web sitesi iletişim formundan yeni bir sipariş/bilgi talebi iletildi.</p>
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 15px 0;" />
              
              <table style="width: 100%; font-size: 14px; line-height: 1.6;">
                <tr>
                  <td style="font-weight: bold; width: 140px; color: #333;">Ad Soyad:</td>
                  <td>${fullName}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; color: #333;">Telefon:</td>
                  <td><a href="tel:${phone}" style="color: #2d6a4f; font-weight: bold;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="font-weight: bold; color: #333;">E-Posta:</td>
                  <td>${email ? `<a href="mailto:${email}">${email}</a>` : "Belirtilmedi"}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; color: #333;">İlgilendiği Ürün:</td>
                  <td><span style="background: #d8f3dc; padding: 3px 8px; border-radius: 4px; color: #1b4332; font-weight: bold;">${productInterest}</span></td>
                </tr>
              </table>

              <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #2d6a4f;">
                <strong style="color: #333;">Mesaj / Talep Notu:</strong>
                <p style="margin: 8px 0 0 0; color: #444; white-space: pre-line;">${message}</p>
              </div>

              <p style="margin-top: 25px; font-size: 12px; color: #888; text-align: center;">
                Bu e-posta www.pinarlik.com iletişim formundan otomatik olarak iletilmiştir.
              </p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
      } catch (mailError) {
        console.error("Nodemailer sending error (check SMTP credentials in .env.local):", mailError);
      }
    } else {
      console.log("=== PINARLIK WEB SİTESİ TALEP BİLGİSİ (SMTP beklemede) ===");
      console.log(`Tarih: ${new Date().toLocaleString("tr-TR")}`);
      console.log(`Ad Soyad: ${fullName}`);
      console.log(`Telefon: ${phone}`);
      console.log(`E-Posta: ${email || "Belirtilmedi"}`);
      console.log(`İlgilendiği Ürün: ${productInterest}`);
      console.log(`Mesaj: ${message}`);
      console.log("==========================================================");
    }

    return NextResponse.json({
      success: true,
      message: "Talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Bir hata oluştu. Lütfen 0532 373 96 05 numarasından doğrudan arayınız.",
      },
      { status: 500 }
    );
  }
}
